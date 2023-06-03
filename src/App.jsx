import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import Products from "./components/Products"
import ProductDetails from "./components/ProductDetails"
import OurStory from "./components/OurStory"

function App() {
  return (
    <div className="App">
      <div style={{
        background: "rgb(100, 255, 210)",
        padding: ".6em 4rem",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        fontWeight: 700,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: ".4em"
      }}>
        EGGCELENT SALE 🥚🔥 <span style={{
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden"
        }}>15% off EVERYTHING in the store. Enjoy!</span>
      </div>

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/products"
          element={<Products />}
        />
        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/about"
          element={<OurStory />}
        />
        <Route
          path="/cart"
          element="Coming Soon"
        />
      </Routes>
    </div>
  )
}

export default App
