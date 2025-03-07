import NavigationHeader from "../components/NavigationHeader";
import Homebanner from "../components/banner/homebanner"
import Cards from "../components/cards";
import FooterComp from "../components/footercomp";


function Homepage() {
  return (
    <>

      <Homebanner/>
      <Cards />
      <FooterComp />
    </>
  );
}

export default Homepage;
