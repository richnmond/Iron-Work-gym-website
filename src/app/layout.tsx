import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer' // We'll create this next

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IronWorks Gym - Build Your Best Self',
  description: 'Premium fitness center with state-of-the-art equipment and expert trainers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16"> {/* Offset for fixed navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}