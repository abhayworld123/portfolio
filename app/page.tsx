'use client';

import { useState } from 'react';
import {
  Nav,
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  Contact,
  ParticleBackground,
  WhatsAppButton,
  AnimationToggle
} from './components';
import { useScrollAnimations } from './hooks/useScrollAnimations';

export default function Home() {
  const [animationType, setAnimationType] = useState<'particles' | 'bubbles'>('particles');

  // Use the custom hook for scroll animations
  useScrollAnimations();

  const toggleAnimation = () => {
    setAnimationType(prev => prev === 'particles' ? 'bubbles' : 'particles');
  };

  return (
    <>
      <ParticleBackground animationType={animationType} />
      
      <AnimationToggle 
        animationType={animationType} 
        onToggle={toggleAnimation} 
      />

      <Nav currentPage="home" />
      
      <WhatsAppButton />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}