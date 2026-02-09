import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Home from '../sections/Home';
import About from '../sections/About';
import Platform from '../sections/Platform';
import EventDetails from '../sections/EventDetails';
import Schedule from '../sections/Schedule';
import Rules from '../sections/Rules';
import Contact from '../sections/Contact';
import FAQ from '../sections/FAQ';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import LegalContent from '../components/LegalContent';

const LandingPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [legalType, setLegalType] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="app">
            <Navbar isScrolled={isScrolled} />
            <main>
                <Home />
                <About />
                <Platform />
                <EventDetails />
                <Schedule />
                <Rules />
                <FAQ />
                <Contact />
            </main>
            <Footer onLegalClick={(type) => setLegalType(type)} />
            <ScrollToTop />

            <LegalContent
                type={legalType}
                isOpen={!!legalType}
                onClose={() => setLegalType(null)}
            />
        </div>
    );
};

export default LandingPage;
