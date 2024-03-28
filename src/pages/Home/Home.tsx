import Header from "../../components/Header/Header"
import FirstSection from '../../components/FirstSection/FirstSection'
import About from "../../components/About/About"
import Advantages from "../../components/Advantages/Advantages"
import OurProducts from "../../components/OurProducts/OurProducts"
import AllAbout from "../../components/AllAbout/AllAbout"
import Footer from "../../components/Footer/Footer"


export default function Home(){
    return (
        <>
            <Header />
            <FirstSection />
            <About />
            <Advantages />
            <OurProducts title={true} src="home" />
            <AllAbout />
            <Footer />
        </>
    )
}