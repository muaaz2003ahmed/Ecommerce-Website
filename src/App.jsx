
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Categories />
        <Products />
        <Footer />

      <h1>E-Commerce Website</h1>
    </div>
  );
}

export default App;