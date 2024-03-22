import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container=({children})=> {
    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    );
}

export default Container;