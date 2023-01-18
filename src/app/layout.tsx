import {Inter as FontSans} from '@next/font/google'
import RootStyleRegistry from './emotion'
import Script from 'next/script'
import clsx from 'clsx'
import '../styles/globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={clsx(
        'bg-white font-sans text-slate-900 antialiased',
        fontSans.variable,
      )}
    >
      <head />
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  )
}
