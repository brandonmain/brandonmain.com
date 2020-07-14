import styles from './../styles/layout.module.css'
import Navbar from './navbar'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
  
export default Layout