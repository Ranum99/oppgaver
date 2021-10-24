import Navigation from './navigation'

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main className="layoutChild">{children}</main>
    </div>
  )
}

export default Layout