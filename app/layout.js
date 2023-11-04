import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout_components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <body className={inter.className}>{children}</body>
    </>
  )
}
