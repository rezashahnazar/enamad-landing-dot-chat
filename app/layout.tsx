import './globals.css'
import { Vazirmatn } from 'next/font/google'
import { Metadata } from 'next'

const vazirmatn = Vazirmatn({ subsets: ['arabic'] })

export const metadata: Metadata = {
  title: 'Landing.Chat | به زودی',
  description: 'صفحات فرود خود را با هوش مصنوعی بسازید',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" className="dark">
      <body className={`${vazirmatn.className} bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900`}>
        {children}
      </body>
    </html>
  )
}

