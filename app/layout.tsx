import './globals.css'
import ReduxProvider from '../components/states/provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* Put redux provider on top for states management */}
        <ReduxProvider>
          <div className='grid'>
            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
