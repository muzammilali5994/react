import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={styles.nav}>

      <h2 style={styles.logo}>MyApp</h2>

      <div style={styles.links}>

        <NavLink to="/" style={styles.link}>Home</NavLink>
        <NavLink to="/about" style={styles.link}>About</NavLink>
        <NavLink to="/contact" style={styles.link}>Contact</NavLink>
        <NavLink to="/dashboard" style={styles.link}>Dashboard</NavLink>
        <NavLink to="/products" style={styles.link}>Products</NavLink>

      </div>

    </nav>
  )
}

export default Navbar

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#111827",
    color: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  },

  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#fff"
  },

  links: {
    display: "flex",
    gap: "20px"
  },

  link: {
    textDecoration: "none",
    color: "#ccc",
    fontSize: "16px",
    transition: "0.3s"
  }
};