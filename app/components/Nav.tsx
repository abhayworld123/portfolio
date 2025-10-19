'use client';

import Link from 'next/link';
import { useState } from 'react';
import ResumeDownload from './ResumeDownload';

interface NavProps {
    currentPage?: string;
}

export default function Nav({ currentPage = '' }: NavProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isHome = currentPage === 'home';

    return (
        <nav id="nav">
            <div className="nav-content">
                <div className="logo">
                    <Link href="/">AB</Link>
                </div>
                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <ol>
                        <li><Link href={isHome ? "#about" : "/about"} data-number="01">About</Link></li>
                        <li><Link href={isHome ? "#experience" : "/experience"} data-number="02">Experience</Link></li>
                        <li><Link href={isHome ? "#skills" : "/skills"} data-number="03">Skills</Link></li>
                        <li><Link href={isHome ? "#education" : "/education"} data-number="04">Education</Link></li>
                        <li><Link href={isHome ? "#projects" : "/projects"} data-number="05">Work</Link></li>
                        <li><Link href={isHome ? "#contact" : "/contact"} data-number="06">Contact</Link></li>
                    </ol>
                    <div className="resume-link">
                        <ResumeDownload className="resume-btn">
                            Resume
                        </ResumeDownload>
                    </div>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}