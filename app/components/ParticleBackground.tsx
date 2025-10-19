'use client';

import { useEffect, useState } from 'react';

interface ParticleBackgroundProps {
  animationType: 'particles' | 'bubbles';
}

export default function ParticleBackground({ animationType }: ParticleBackgroundProps) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Particles.js Configuration
    const initParticles = () => {
      const containerElement = document.getElementById('particle-canvas');
      if (!containerElement) {
        console.error('❌ [FATAL] Particle container element not found!');
        return;
      }

      console.log('🎨 [CONTAINER] Element found:', containerElement);

      // Initialize particles after a short delay to ensure script loads
      setTimeout(() => {
        if (typeof (window as any).particlesJS !== 'undefined') {
          console.log('✅ [LIBRARY] particlesJS available');

          const particlesConfig = {
            "particles": {
              "number": {
                "value": 300,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#808080"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 2,
                  "color": "#00ffff"
                }
              },
              "opacity": {
                "value": 0.8,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0.3,
                  "sync": false
                }
              },
              "size": {
                "value": 4,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 2,
                  "size_min": 1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00ffff",
                "opacity": 0.4,
                "width": 1.5
              },
              "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "bounce",
                "bounce": true,
                "attract": {
                  "enable": true,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "window",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 200,
                  "line_linked": {
                    "opacity": 0.8
                  }
                },
                "bubble": {
                  "distance": 250,
                  "size": 8,
                  "duration": 2,
                  "opacity": 0.6,
                  "speed": 3
                },
                "repulse": {
                  "distance": 150,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 8
                },
                "remove": {
                  "particles_nb": 2
                },
                "attract": {
                  "enable": true,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "retina_detect": true
          };

          const bubblesConfig = {
            "particles": {
              "number": {
                "value": 80,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3"]
              },
              "shape": {
                "type": "circle"
              },
              "opacity": {
                "value": 0.6,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 20,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 3,
                  "size_min": 5,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false
              },
              "move": {
                "enable": true,
                "speed": 2,
                "direction": "top",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "window",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "bubble"
                },
                "onclick": {
                  "enable": true,
                  "mode": "repulse"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 200,
                  "line_linked": {
                    "opacity": 0.8
                  }
                },
                "bubble": {
                  "distance": 300,
                  "size": 15,
                  "duration": 2,
                  "opacity": 0.8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          };

          const config = animationType === 'particles' ? particlesConfig : bubblesConfig;

          try {
            (window as any).particlesJS('particle-canvas', config);
            console.log(`✅ [SUCCESS] ${animationType} animation initialized!`);
            setIsInitialized(true);
          } catch (error) {
            console.error('❌ [ERROR] particlesJS failed:', error);
            initFallbackParticles();
          }
        } else {
          console.log('⚠️ [LIBRARY] particlesJS not available, using fallback');
          initFallbackParticles();
        }
      }, 500); // Wait for script to load
    };

    // Fallback particle system
    const initFallbackParticles = () => {
      const containerElement = document.getElementById('particle-canvas');
      if (!containerElement) {
        console.error('❌ [CANVAS] Container element not found for fallback');
        return;
      }

      // Clear existing canvas
      containerElement.innerHTML = '';

      // Create canvas for fallback
      const canvasElement = document.createElement('canvas');
      canvasElement.width = window.innerWidth;
      canvasElement.height = window.innerHeight;
      canvasElement.style.position = 'absolute';
      canvasElement.style.top = '0';
      canvasElement.style.left = '0';
      canvasElement.style.width = '100%';
      canvasElement.style.height = '100%';
      containerElement.appendChild(canvasElement);

      const ctx = canvasElement.getContext('2d');
      if (!ctx) {
        console.error('❌ [CANVAS] Could not get 2D context');
        return;
      }

      const particles: Array<{
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
        opacity: number;
        originalVx: number;
        originalVy: number;
        color: string;
      }> = [];

      const particleCount = animationType === 'particles' ? 80 : 40;
      const colors = animationType === 'particles'
        ? ['#808080']
        : ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
      let mouseX = 0;
      let mouseY = 0;

      // Create particles
      for (let i = 0; i < particleCount; i++) {
        const vx = animationType === 'particles'
          ? (Math.random() - 0.5) * 1.5
          : (Math.random() - 0.5) * 0.5;
        const vy = animationType === 'particles'
          ? (Math.random() - 0.5) * 1.5
          : -Math.random() * 2 - 1; // Bubbles float upward
        particles.push({
          x: Math.random() * canvasElement.width,
          y: animationType === 'bubbles' ? canvasElement.height + Math.random() * 100 : Math.random() * canvasElement.height,
          vx: vx,
          vy: vy,
          size: animationType === 'particles' ? Math.random() * 4 + 2 : Math.random() * 15 + 5,
          opacity: animationType === 'particles' ? Math.random() * 0.5 + 0.3 : Math.random() * 0.4 + 0.2,
          originalVx: vx,
          originalVy: vy,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }

      // Mouse tracking
      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Animation loop
      function animate() {
        if (!ctx || !canvasElement) return;

        ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

        particles.forEach(particle => {
          if (animationType === 'particles') {
            // Calculate distance to mouse
            const dx = mouseX - particle.x;
            const dy = mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Mouse interaction - attract particles to mouse
            if (distance < 150) {
              const force = (150 - distance) / 150;
              const attractionStrength = 0.02;
              particle.vx += (dx / distance) * force * attractionStrength;
              particle.vy += (dy / distance) * force * attractionStrength;
            }

            // Gradually return to original velocity
            particle.vx += (particle.originalVx - particle.vx) * 0.01;
            particle.vy += (particle.originalVy - particle.vy) * 0.01;

            // Limit velocity
            const maxSpeed = 2;
            const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
            if (speed > maxSpeed) {
              particle.vx = (particle.vx / speed) * maxSpeed;
              particle.vy = (particle.vy / speed) * maxSpeed;
            }

            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off edges
            if (particle.x < 0 || particle.x > canvasElement.width) {
              particle.vx *= -0.8;
              particle.x = Math.max(0, Math.min(canvasElement.width, particle.x));
            }
            if (particle.y < 0 || particle.y > canvasElement.height) {
              particle.vy *= -0.8;
              particle.y = Math.max(0, Math.min(canvasElement.height, particle.y));
            }
          } else {
            // Bubble animation - simple upward movement
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Reset bubble when it goes off screen
            if (particle.y < -50) {
              particle.y = canvasElement.height + Math.random() * 100;
              particle.x = Math.random() * canvasElement.width;
            }
            if (particle.x < -50 || particle.x > canvasElement.width + 50) {
              particle.x = Math.random() * canvasElement.width;
            }
          }

          // Draw particle
          ctx.save();
          ctx.globalAlpha = particle.opacity;

          if (animationType === 'particles') {
            // Particle style
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.stroke();
          } else {
            // Bubble style with gradient
            const gradient = ctx.createRadialGradient(
              particle.x - particle.size * 0.3,
              particle.y - particle.size * 0.3,
              0,
              particle.x,
              particle.y,
              particle.size
            );
            gradient.addColorStop(0, 'rgba(255,255,255,0.8)');
            gradient.addColorStop(0.7, particle.color);
            gradient.addColorStop(1, particle.color);

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
          }

          ctx.restore();

          // Draw connections only for particles
          if (animationType === 'particles') {
            particles.forEach(otherParticle => {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 150) {
                ctx.save();
                ctx.globalAlpha = (1 - distance / 150) * 0.4;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = particle.color;
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.restore();
              }
            });
          }
        });

        requestAnimationFrame(animate);
      }

      animate();
      console.log(`✅ [FALLBACK] Enhanced custom ${animationType} system running!`);
      setIsInitialized(true);
    };

    // Call the initialization function
    setTimeout(initParticles, 100);
  }, [animationType]);

  return (
    <div
      id="particle-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
}
