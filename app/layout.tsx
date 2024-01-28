import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Smiley Tours - Asakusa Tokyo Tour Guide',
  description:
    'Asakusa Tokyo Tour Guide by a former Japanese Idol! Learn about the history of Asakusa and experience activities famous and unique to Japan.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/smiley-banner-transparent.webp" as="image" />
        <link rel="preload" href="/asakusa-2.webp" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="robots" content="index, follow" />
        <meta
          name="og:title"
          content="Smiley Tours - Asakusa Tokyo Tour Guide"
        />
        <meta
          name="og:description"
          content="Asakusa Tokyo Tour Guide by a former Japanese Idol! Learn about the history of Asakusa and experience activities famous and unique to Japan."
        />
        <meta property="og:image" content="https://www.smileytour.guide/miley2.webp" />

        <meta property="og:url" content="https://www.smileytour.guide" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mairie0828" />
        <meta name="twitter:title" content="Tokyo Tour Guide" />
        <meta
          name="twitter:description"
          content="Asakusa Tokyo Tour Guide by a former Japanese Idol! Learn about the history of Asakusa and experience activities famous and unique to Japan."
        />
        <meta name="twitter:image" content="URL to an image" />
        <meta name="author" content="Brandon Rainey" />

        <meta
          name="google-site-verification"
          content="fi5b-1hLu-5vtrSRc4guyfwYlJmu9TH5CtgFXxYz1PQ"
        />
        <link rel="canonical" href="https://www.smileytour.guide" />
      </head>

      <body className={`font-Varela bg-pink-200 bgImage`}>{children}</body>
    </html>
  )
}
