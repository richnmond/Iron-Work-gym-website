// src/app/blog/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  body: any[]
  mainImage: any
  publishedAt: string
  author: {
    name: string
    image: any
  }
  categories: any[]
  readTime?: number
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchPosts() {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          excerpt,
          mainImage,
          publishedAt,
          author->{
            name,
            image
          },
          categories[]->{title}
        }`

        const posts = await client.fetch(query)
        setPosts(posts)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching posts:', err)
        setError('Failed to load blog posts')
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg">Loading blog posts...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg">{error}</p>
        </div>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12 text-center">Blog</h1>
          <div className="text-center text-gray-600">
            <p>No blog posts available yet. Check back soon!</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Latest fitness tips, workout guides, and health insights from IronWorks Gym
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`}>
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col cursor-pointer">
                {/* Featured Image */}
                {post.mainImage && (
                  <div className="relative w-full h-48 overflow-hidden bg-gray-200">
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Categories */}
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map((cat: any, idx: number) => (
                        <span 
                          key={idx}
                          className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          {cat.title || 'Fitness'}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-red-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      {post.author?.name && (
                        <span>{post.author.name}</span>
                      )}
                    </div>
                    <time dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}