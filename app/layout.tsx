import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Smiley Tours',
  description: 'Asakusa Tokyo Tour Guide by a former japanese idol.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" href="/smiley-banner-transparent.webp" />
      </Head>
      <body className={`font-Varela bg-pink-200`}>{children}</body>
      
    </html>
  )
}
