import './globals.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Custom Service Automation IA Chat',
  description: 'IA Custom Chat to a Full-Stack Software Developer role',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
