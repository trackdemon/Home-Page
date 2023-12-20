import { Inter } from 'next/font/google'
import './styles/globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: ,
  applicationName: ,
  description: 
  url: '',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Link manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Link favicon */}
        </head>

      <body className={`overflow-hidden ${inter.className}`}>
       
      </body>
    </html>
  )}