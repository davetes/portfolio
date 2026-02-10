import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
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
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
