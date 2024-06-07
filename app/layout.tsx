import type { Metadata } from 'next'
import './globals.css'
import { Varela_Round, Hammersmith_One } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Smiley Tour - Asakusa Tokyo Tour Guide',
  description:
    'Smiley Tour! Asakusa Tokyo English-speaking Tour Guide by a former Japanese Idol! Learn about the history of Asakusa, Ueno, Akihabara and experience activities famous and unique to Japan.',
}

const varelaRound = Varela_Round({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-varelaround',
  weight: '400',
  preload: true,
})

const hammersmithOne = Hammersmith_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hammersmithone',
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
        <link rel="preload" href="/smiley-title.webp" as="image" />
        <link rel="preload" href="/miley.webp" as="image" />
        <link rel="preload" href="/bulma.webp" as="image" />
        <link rel="preload" href="/ganko.webp" as="image" />
        <meta name="thumbnail" content="/miley-main.webp" />
        <meta name="robots" content="index, follow" />
        <meta
          name="og:title"
          content="Smiley Tours - Asakusa Tokyo Tour Guide"
        />
        <meta
          name="og:description"
          content="Explore Tokyo with an English-speaking Tour Guide, led by a former Japanese Idol! Discover the history and unique experiences awaiting in iconic districts such as Asakusa, Ueno, and Akihabara, renowned destinations in Japan."
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
          content="Explore Tokyo with an English-speaking Tour Guide, led by a former Japanese Idol! Discover the history and unique experiences awaiting in iconic districts such as Asakusa, Ueno, and Akihabara, renowned destinations in Japan."
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
      <body
        className={`font-varela ${varelaRound.variable} ${hammersmithOne.variable} bg-pink-200 bgImage`}
      >
        {children}
      </body>
    </html>
  )
}
