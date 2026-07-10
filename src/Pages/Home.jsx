import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Features from "../Components/Features";
import Footer from "../Components/Footer";

function Home({ setPage, navbarOnly = false }) {
  return (
    <>
      <Navbar setPage={setPage} />
      {!navbarOnly && (
        <>
          <Hero />
          <About />
          <Features />
          <Footer />
        </>
      )}
    </>
  );
}
export default Home;