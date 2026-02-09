import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Coordinators from '../sections/Coordinators';
import ScrollToTop from '../components/ScrollToTop';

const CoordinatorsPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
            <main style={{ paddingTop: '80px' }}>
                <Coordinators />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default CoordinatorsPage;
