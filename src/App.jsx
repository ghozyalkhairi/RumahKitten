import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Splash from "./pages/Splash"
import Home from "./pages/Home"
import Food from "./pages/Food"
import Cart from "./pages/Cart"
import Info from "./pages/Info"
import Kitten from "./pages/Kitten"
import FoodDetails from "./pages/FoodDetails"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/info" element={<Info />} />
        <Route path="/kitten/:id" element={<Kitten />} />
      </Routes>
    </Router>
  )
}

export default App
