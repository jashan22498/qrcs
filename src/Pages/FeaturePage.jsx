import Navbar from "../Components/Navbar";
import Features from "../Components/Features";
function FeaturesPage({ setPage }) {
  return (
    <>
      <Navbar setPage={setPage} />
      <Features />
    </>
  );
}
export default FeaturesPage;