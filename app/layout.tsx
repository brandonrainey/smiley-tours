import type { Metadata } from 'next'
import './globals.css'
import { Varela_Round, Carter_One } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Smiley Tour - Asakusa Tokyo Tour Guide',
  description:
    'Asakusa Tokyo Tour Guide by a former Japanese Idol! Learn about the history of Asakusa and experience activities famous and unique to Japan.',
}

const varelaRound = Varela_Round({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-varelaround',
  weight: '400',
  preload: true,
})

const carterOne = Carter_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-carterone',
  weight: '400',
  preload: true,  
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/smiley-banner-transparent.webp" as="image" />
        <meta name="robots" content="index, follow" />
        <meta
          name="og:title"
          content="Smiley Tours - Asakusa Tokyo Tour Guide"
        />
        <meta
          name="og:description"
          content="Asakusa Tokyo Tour Guide by a former Japanese Idol! Learn about the history of Asakusa and experience activities famous and unique to Japan."
        />
        <meta
          property="og:image"
          content="https://smileytour.guide/miley2.webp"
        />

        <meta property="og:url" content="https://www.smileytour.guide" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@mairie0828" />
        <meta name="twitter:site" content="@mairie0828" />
        <meta name="twitter:title" content="Tokyo Tour Guide" />
        <meta
          name="twitter:description"
          content="Asakusa Tokyo Tour Guide by a former Japanese Idol! Learn about the history of Asakusa and experience activities famous and unique to Japan."
        />
        <meta name="twitter:image" content="URL to an image" />
        <meta name="author" content="Brandon Rainey" />
        <meta name="theme-color" content="#fbcfe8" />
        <meta
          name="google-site-verification"
          content="fi5b-1hLu-5vtrSRc4guyfwYlJmu9TH5CtgFXxYz1PQ"
        />
        <link rel="canonical" href="https://www.smileytour.guide" />
      </head>

      <body className={`font-varela ${varelaRound.variable} ${carterOne.variable} bg-pink-200 bgImage`}>{children}</body>
    </html>
  )
}
