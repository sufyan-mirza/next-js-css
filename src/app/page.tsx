import Header from "@/components/header";
import Banner from "@/components/banner";
import About from "@/components/about";
import Service from "@/components/service";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
export default function home(){
  return(
    <div>
    <Header/>
    <Banner/>
    <About/>
    <Service/>
    <Portfolio/>
    <Contact/>
     <Footer/>
    </div>
  )
}