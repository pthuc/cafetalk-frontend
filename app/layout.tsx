import Menu from '../components/home/Generic/Menu'
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
        <Menu />
        <div className='grid'>
          {children}
          
        
        </div>
      </body>
    </html>
  )
}
