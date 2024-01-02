import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ゆいまーる出退勤記録webアプリ',
  description: '自分のスマホを使いNFCタグから出退勤時刻を記録することができます',
}

export default function RootLayout({ children }) {
  return (
      <html lang="ja">
        <body className={inter.className}>{children}</body>
      </html>
  )
}
