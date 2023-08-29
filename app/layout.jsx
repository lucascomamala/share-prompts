import '@styles/globals.css'

export const metadata = {
  title: 'Promptopia',
  description: 'Discover and share AI-generated prompts for your next creative project.',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
