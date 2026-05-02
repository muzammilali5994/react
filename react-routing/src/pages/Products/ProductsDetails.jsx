import React from 'react'
import ProductsData from './ProductsData'
import { useParams, Link } from 'react-router-dom'

function ProductsDetails() {

  const { id } = useParams();
  const product = ProductsData.find(x => x.id === Number(id));

  if (!product) {
    return (
      <div style={styles.center}>
        <h2>❌ Product Not Found</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      
      <div style={styles.card}>
        
        <h1 style={styles.title}>{product.name}</h1>

        <div style={styles.infoBox}>
          <p><b>Product ID:</b> {product.id}</p>
          <p><b>Name:</b> {product.name}</p>
        </div>

        <Link to="/products" style={styles.button}>
          ← Back to Products
        </Link>

      </div>

    </div>
  )
}

export default ProductsDetails;

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    background: "#f5f7fb"
  },

  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    width: "350px",
    textAlign: "center"
  },

  title: {
    fontSize: "26px",
    marginBottom: "20px",
    color: "#333"
  },

  infoBox: {
    background: "#f0f4ff",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px",
    textAlign: "left"
  },

  button: {
    display: "inline-block",
    padding: "10px 15px",
    background: "#4f46e5",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none"
  },

  center: {
    textAlign: "center",
    marginTop: "100px"
  }
};