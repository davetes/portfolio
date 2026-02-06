import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <Projects />
                <Skills />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
