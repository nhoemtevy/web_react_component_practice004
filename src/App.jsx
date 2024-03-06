import "./App.css";
import NavBarComponent from "./components/navbar/Navbar";
import ProductComponent from "./components/main/ProductCard";
import FeedBackComponent from "./components/main/FeedbackCard";
import FooterComponent from "./components/footer/Footer";
function App() {
  return (
    <>
      <header class = "bg-blue-50 h-16 m-0">
        <nav>
          <NavBarComponent></NavBarComponent>
        </nav>
      </header>
      <main className="mx-auto w-[90%] ">
        <section className="text-4xl font-bold my-10 text-blue-800">
          <h1>Product</h1>
        </section>
        <section className=" my-10 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <ProductComponent></ProductComponent>
          <ProductComponent></ProductComponent>
          <ProductComponent></ProductComponent>
          <ProductComponent></ProductComponent>
        </section>
        <section className="text-3xl font-bold mt-0 text-blue-800">
          <h2>Give FeedBack To Us</h2>
        </section>
        <section className="mt-0 w-full">
          <FeedBackComponent></FeedBackComponent>
          <FeedBackComponent></FeedBackComponent>
        </section>
      </main>
      <footer>
        <FooterComponent></FooterComponent>
      </footer>
    </>
  );
}

export default App;