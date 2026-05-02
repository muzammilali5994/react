import React from 'react'
import ProductsData from './ProductsData'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div style={styles.page}>

      <h1 style={styles.heading}>🛒 Products</h1>

      <div style={styles.grid}>

        {ProductsData.map((x) => (
          <Link to={`/products/${x.id}`} key={x.id} style={styles.card}>

            <h2 style={styles.title}>{x.name}</h2>

            <p style={styles.text}>Click to view details →</p>

          </Link>
        ))}

      </div>

    </div>
  )
}

export default Products
const styles = {
  page: {
    padding: "30px",
    background: "#f5f7fb",
    minHeight: "100vh"
  },

  heading: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "32px",
    color: "#333"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px"
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    textDecoration: "none",
    color: "#333",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    transition: "0.3s",
    display: "block"
  },

  title: {
    fontSize: "20px",
    marginBottom: "10px"
  },

  text: {
    fontSize: "14px",
    color: "#777"
  }
};