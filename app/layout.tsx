import './landing.css';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: {
    default: 'DEMLABS',
    template: 'DEMLABS | %s',
  },
  description:'Test'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
