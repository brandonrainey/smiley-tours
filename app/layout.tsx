import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Smiley Tours - Asakusa Tokyo Tour Guide',
  description: 'Asakusa Tokyo Tour Guide by a former Japanese Idol! Learn about the history of Asakusa and experience activities famous and unique to Japan.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="robots" content="index, follow" />
        <meta name="og:title" content='Smiley Tours - Asakusa Tokyo Tour Guide' />
        <meta name="og:description" content='Asakusa Tokyo Tour Guide by a former Japanese Idol! Learn about the history of Asakusa and experience activities famous and unique to Japan.' />
      </Head>
      <body className={`font-Varela bg-pink-200 bgImage`}>{children}</body>
    </html>
  )
}
