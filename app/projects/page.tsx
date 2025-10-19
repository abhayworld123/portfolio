'use client';

import { useEffect } from 'react';
import Nav from '../components/Nav';

export default function Projects() {
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
            <Nav currentPage="projects" />
            <section id="projects">
                <div className="container">
                    <h2>My Projects</h2>
                    <div className="projects-grid">
                        <div className="project">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Task Management App" />
                            <h3>Task Management Web App</h3>
                            <p>A full-stack web application built with Django for managing tasks and projects. Features include user authentication, real-time notifications, and collaborative workspaces.</p>
                            <p><strong>Technologies:</strong> Django, PostgreSQL, Redis, JavaScript</p>
                            <a href="https://github.com/johndoe/taskmanager" target="_blank">View on GitHub</a>
                        </div>
                        <div className="project">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Data Analysis Dashboard" />
                            <h3>Data Analysis Dashboard</h3>
                            <p>An interactive dashboard for visualizing and analyzing large datasets. Built with Flask, Pandas, and Plotly for real-time data processing and visualization.</p>
                            <p><strong>Technologies:</strong> Flask, Pandas, Plotly, MongoDB</p>
                            <a href="https://github.com/johndoe/data-dashboard" target="_blank">View on GitHub</a>
                        </div>
                        <div className="project">
                            <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Automation Scripts" />
                            <h3>Automation Script Suite</h3>
                            <p>A collection of Python scripts for automating repetitive tasks in data processing, file management, and API integrations. Includes CLI tools and scheduled jobs.</p>
                            <p><strong>Technologies:</strong> Python, Click, APScheduler, AWS Lambda</p>
                            <a href="https://github.com/johndoe/automation-scripts" target="_blank">View on GitHub</a>
                        </div>
                        <div className="project">
                            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="ML Model API" />
                            <h3>Machine Learning Model API</h3>
                            <p>A RESTful API serving machine learning models for predictive analytics. Includes model training pipelines and deployment automation.</p>
                            <p><strong>Technologies:</strong> FastAPI, scikit-learn, Docker, Kubernetes</p>
                            <a href="https://github.com/johndoe/ml-api" target="_blank">View on GitHub</a>
                        </div>
                        <div className="project">
                            <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Recommendation Engine" />
                            <h3>E-commerce Recommendation Engine</h3>
                            <p>A recommendation system for an e-commerce platform using collaborative filtering and content-based algorithms. Improved user engagement by 25%.</p>
                            <p><strong>Technologies:</strong> Python, TensorFlow, Redis, PostgreSQL</p>
                            <a href="https://github.com/johndoe/recommendation-engine" target="_blank">View on GitHub</a>
                        </div>
                        <div className="project">
                            <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Blockchain Voting" />
                            <h3>Blockchain Voting System</h3>
                            <p>A secure voting application built on blockchain technology. Ensures transparency and immutability of votes using smart contracts.</p>
                            <p><strong>Technologies:</strong> Python, Solidity, Web3.py, Ethereum</p>
                            <a href="https://github.com/johndoe/blockchain-voting" target="_blank">View on GitHub</a>
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