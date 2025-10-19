'use client';

import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
export default function About() {
    const [aboutContent, setAboutContent] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        // Fetch about content from the HTML file
        const fetchAboutContent = async () => {
            try {
                console.log('Fetching about content...');
                const response = await fetch('/about-content.html');
                console.log('Response status:', response.status);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const html = await response.text();
                console.log('Content length:', html.length);
                setAboutContent(html);
                setIsLoading(false);
                console.log('Content set successfully');
            } catch (error) {
                console.error('Error loading about content:', error);
                setIsLoading(false);
                // Set fallback content if fetch fails
                setAboutContent(`
                    <section id="about">
                        <div class="container">
                            <h2>About Me</h2>
                            <div class="about-content">
                                <div class="about-text">
                                    <p>Hello! I'm Jon Doe, a dedicated Python software developer with over 5 years of experience in creating efficient and scalable applications.</p>
                                    <p>I specialize in web development using frameworks like Django and Flask, data analysis with Pandas and NumPy, and automation scripts that streamline workflows.</p>
                                    <p>When I'm not coding, you can find me contributing to open-source projects, reading tech blogs, or exploring the outdoors.</p>
                                </div>
                                <div class="about-image">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="John Doe" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="experience">
                        <div class="container">
                            <h2>Experience</h2>
                            <div class="timeline">
                                <div class="timeline-item">
                                    <h3>Senior Python Developer</h3>
                                    <p>Tech Company Inc. | 2020 - Present</p>
                                    <p>Developed and maintained multiple Python-based applications, improved system performance by 40%, led a team of 3 developers.</p>
                                </div>
                                <div class="timeline-item">
                                    <h3>Python Developer</h3>
                                    <p>Startup XYZ | 2018 - 2020</p>
                                    <p>Built RESTful APIs, implemented data processing pipelines, collaborated with cross-functional teams.</p>
                                </div>
                                <div class="timeline-item">
                                    <h3>Junior Developer</h3>
                                    <p>Software Solutions Ltd. | 2017 - 2018</p>
                                    <p>Assisted in developing web applications, learned best practices in software development.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                `);
            }
        };

        fetchAboutContent();
        // Back to top button
        const backToTopBtn = document.getElementById('back-to-top');
        const toggleBackToTop = () => {
            if (backToTopBtn) {
                if (window.scrollY > 300) {
                    backToTopBtn.classList.add('show');
                } else {
                    backToTopBtn.classList.remove('show');
                }
            }
        };

        window.addEventListener('scroll', toggleBackToTop);

        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Particles.js (simplified)
        const canvas = document.getElementById('particle-canvas');
        if (canvas && (window as any).particlesJS) {
            (window as any).particlesJS('particle-canvas', {
                "particles": {
                    "number": { "value": 100 },
                    "color": { "value": "#000000" },
                    "shape": { "type": "circle" },
                    "opacity": { "value": 1 },
                    "size": { "value": 3 },
                    "move": { "enable": true, "speed": 1 }
                }
            });
        }
    }, []);

    return (
        <>
            <div id="loader">
                <div className="spinner"></div>
            </div>
            <canvas id="particle-canvas"></canvas>
            <Nav currentPage="about" />
            {isLoading ? (
                <section id="about">
                    <div className="container">
                        <h2>Loading...</h2>
                        <p>Loading content from file...</p>
                    </div>
                </section>
            ) : (
                <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
            )}

            <footer>
                <div className="container">
                    <p>&copy; 2023 John Doe. All rights reserved.</p>
                </div>
            </footer>

            <button id="back-to-top" title="Back to Top">↑</button>
        </>
    );
}