import './globals.css'

import localFont from '@next/font/local'

const fonts = localFont({ src: [
  {
    path: "../public/fonts/Roboto-Medium.ttf",
    // weight: "100"
  },
  // {
    // path: "../public/fonts/Mona-Sans.woff2",
    // weight: "400"
  // },
],
variable: '--font-roboto',
})

export const metadata = {
  title: 'Hamza Ali',
  description: 'Personal website:1.0.0 of Hamza Ali',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${fonts.variable} font-sans`} lang="en">
      <body>{children}</body>
    </html>
  )
}
