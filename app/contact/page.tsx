'use client';

import { useEffect } from 'react';
import Nav from '../components/Nav';

export default function Contact() {
    useEffect(() => {
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

        // Particles.js
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
            <Nav currentPage="contact" />
            <section id="contact">
                <div className="container">
                    <h2>Get In Touch</h2>
                    <div className="contact-content">
                        <div className="contact-info">
                            <h3>Contact Information</h3>
                            <p><strong>Email:</strong> john.doe@example.com</p>
                            <p><strong>Phone:</strong> (555) 123-4567</p>
                            <p><strong>Location:</strong> San Francisco, CA</p>
                            <div className="social-links">
                                <a href="https://linkedin.com/in/johndoe" target="_blank">LinkedIn</a>
                                <a href="https://github.com/johndoe" target="_blank">GitHub</a>
                                <a href="https://twitter.com/johndoe" target="_blank">Twitter</a>
                            </div>
                        </div>
                        <div className="contact-form">
                            <h3>Send a Message</h3>
                            <form action="#" method="post">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows={5} required></textarea>
                                </div>
                                <button type="submit" className="btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <p>&copy; 2023 John Doe. All rights reserved.</p>
                </div>
            </footer>

            <button id="back-to-top" title="Back to Top">↑</button>
        </>
    );
}