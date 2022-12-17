import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className='grid'>
          {children}
        </div>
      </body>
    </html>
  )
}
