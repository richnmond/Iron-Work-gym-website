import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'

export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    excerpt,
    body,
    mainImage,
    publishedAt,
    author->{
      name,
      image,
      bio
    },
    categories[]->{title}
  }`

  const post = await client.fetch(query, { slug: params.slug })

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-8">{post.excerpt}</p>
        
        {post.mainImage && (
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        <div className="prose max-w-none">
          {/* Body content - render as text for now */}
          {post.body && Array.isArray(post.body) && (
            <div>
              {post.body.map((block: any, index: number) => (
                <p key={index} className="mb-4">
                  {block.children?.map((child: any) => child.text).join('')}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}