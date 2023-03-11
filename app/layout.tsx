import './globals.css'

import localFont from '@next/font/local'

const helvetica = localFont({ src: [
  {
    path: "../public/fonts/TTF/Hubot-Sans-Black.ttf",
    // weight: "100"
  },
  {
    path: "../public/fonts/TTF/Hubot-Sans-Black.ttf",
    // weight: "400"
  },
],
variable: '--font-helvetica',
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
    <html className={`${helvetica.variable} font-sans`} lang="en">
      <body>{children}</body>
    </html>
  )
}
