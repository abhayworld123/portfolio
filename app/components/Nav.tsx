'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ResumeDownload from './ResumeDownload';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav id="nav" className={scrolled ? 'scrolled' : ''}>
            <div className="nav-content">
                <div className="logo">
                    <Link href="/" onClick={closeMenu}>
                        <span className="logo-bracket">{'<'}</span>
                        <span className="logo-text">AC</span>
                        <span className="logo-bracket">{'/>'}</span>
                    </Link>
                </div>
                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <ol>
                        <li><Link href="#about" onClick={closeMenu}><span className="nav-number">01.</span>About</Link></li>
                        <li><Link href="#experience" onClick={closeMenu}><span className="nav-number">02.</span>Experience</Link></li>
                        <li><Link href="#skills" onClick={closeMenu}><span className="nav-number">03.</span>Skills</Link></li>
                        <li><Link href="#projects" onClick={closeMenu}><span className="nav-number">04.</span>Work</Link></li>
                        <li><Link href="#contact" onClick={closeMenu}><span className="nav-number">05.</span>Contact</Link></li>
                    </ol>
                    <div className="resume-link">
                        <ResumeDownload className="nav-resume-btn">
                            Resume
                        </ResumeDownload>
                    </div>
                </div>
                <button 
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}