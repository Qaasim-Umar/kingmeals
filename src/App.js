import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home.jsx'
import About from './pages/About'
import Product from './pages/Product/[product]'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'
import AddToCart from './pages/AddToCart/AddToCart.jsx'
import CheckOut from './pages/CheckOut/CheckOut.jsx'
import  Payment from './pages/Payment/Payment.jsx'
import './App.css'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="*" element={<NotFound />} />
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="product" element={<Product />} />
					<Route path="contact" element={<Contact />} />
					<Route path="product/:id" element={<ProductDetails/>} />
					<Route path="Cart" element={<AddToCart/>} />
					<Route path="CheckOut" element={<CheckOut/>} />
					<Route path="Payment" element={<Payment/>} />

				</Route>
			</Routes>
		</Router>
	)
}

export default App
