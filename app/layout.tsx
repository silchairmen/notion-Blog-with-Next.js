import Footer from "../components/footer"
import Header from "../components/Header"
import "../styles/globals.css"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-800">
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  )
}
