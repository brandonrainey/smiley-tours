import type { Metadata } from 'next'
import './globals.css'

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
      <body className={`font-Varela bg-pink-200`}>{children}</body>
      
    </html>
  )
}
