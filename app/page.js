import Header from "./components/header";
import HeroSection from "./components/hero_section";
import About from "./components/about";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
        <About></About>
        <ProjectSection></ProjectSection>
        <EmailSection></EmailSection>
      <Footer></Footer>
    </>
  );
}
