import Showcase from "../components/showcase/showcase.component";
import About from "../components/about/about.component";
import Skills from "../components/skills/skills.component";
import Contact from "../components/contact/contact.component";
import Footer from "../components/footer/footer.component";

export default function Home() {
    return(
        <div className="extended-mVgFrc">
            <Showcase/>
            <About/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    )
}