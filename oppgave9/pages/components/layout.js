import Navigation from './navigation'

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className="layout">{children}</main>
    </>
  )
}

export default Layout