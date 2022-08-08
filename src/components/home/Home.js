import AboutProductsHome from "../aboutProductsHome/AboutProductsHome";
import SectionContactHome from "../sectionContactHome/SectionContactHome";
import SectionWhoHome from "../sectionWhoHome/SectionWhoHome";

function Home() {
  return (
    <div>
      <SectionWhoHome />
      <AboutProductsHome />
      <SectionContactHome />
    </div>
  )
}

export default Home