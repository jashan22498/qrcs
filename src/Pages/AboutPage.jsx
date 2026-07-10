import Navbar from "../Components/Navbar";
import About from "../Components/About";
function AboutPage({ setPage }) {
  return (
    <>
      <Navbar setPage={setPage} />
      <About />
    </>
  );
}
export default AboutPage;