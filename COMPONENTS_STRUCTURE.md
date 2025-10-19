# Portfolio Components Structure

This document outlines the refactored component structure of the portfolio website.

## 📁 File Structure

```
app/
├── components/
│   ├── index.ts                 # Barrel exports for all components
│   ├── Nav.tsx                  # Navigation component
│   ├── Hero.tsx                 # Hero section with typing animation
│   ├── About.tsx                # About section
│   ├── Experience.tsx           # Experience section with tabs
│   ├── Skills.tsx               # Skills section with tabbed interface
│   ├── Projects.tsx             # Projects showcase
│   ├── Contact.tsx              # Contact form and details
│   ├── ParticleBackground.tsx   # Animated background component
│   ├── WhatsAppButton.tsx       # Floating WhatsApp button
│   └── AnimationToggle.tsx      # Animation toggle button
├── hooks/
│   └── useScrollAnimations.ts   # Custom hook for scroll animations
└── page.tsx                     # Main page component (refactored)
```

## 🧩 Components Overview

### **Core Components**

#### `Hero.tsx`

- **Purpose**: Landing section with typing animation
- **Features**:
  - Typing animation for "I build things for the web"
  - Call-to-action buttons
  - Scroll indicator
- **Dependencies**: `useEffect` for typing animation

#### `About.tsx`

- **Purpose**: Personal introduction and tech stack
- **Features**:
  - Personal description
  - Technology list
  - Profile image with overlay
- **Dependencies**: None (pure component)

#### `Experience.tsx`

- **Purpose**: Work experience with tabbed interface
- **Features**:
  - Tabbed navigation between companies
  - Detailed job descriptions
  - Interactive tab switching
- **Dependencies**: `useEffect` for tab functionality

#### `Skills.tsx`

- **Purpose**: Skills showcase with categorized tabs
- **Features**:
  - Four categories: Frontend, Backend, Tools, Design
  - Animated skill items
  - Tab switching functionality
- **Dependencies**: `useEffect` for tab functionality

#### `Projects.tsx`

- **Purpose**: Project portfolio showcase
- **Features**:
  - Featured project highlighting
  - Project cards with tech stacks
  - External links (GitHub, Live Demo)
- **Dependencies**: None (pure component)

#### `Contact.tsx`

- **Purpose**: Contact form and information
- **Features**:
  - EmailJS integration
  - Form validation and sanitization
  - Rate limiting and spam detection
  - WhatsApp integration
  - Social media links
- **Dependencies**: `emailjs`, `useEffect`, `useState`

### **UI Components**

#### `ParticleBackground.tsx`

- **Purpose**: Animated background system
- **Features**:
  - Particles.js integration
  - Fallback canvas animation
  - Two animation modes: particles and bubbles
  - Mouse interaction
- **Dependencies**: `useEffect`, `useState`

#### `WhatsAppButton.tsx`

- **Purpose**: Floating WhatsApp contact button
- **Features**:
  - Fixed positioning
  - Pre-filled message
  - Responsive design
- **Dependencies**: None (pure component)

#### `AnimationToggle.tsx`

- **Purpose**: Toggle between animation modes
- **Features**:
  - Switch between particles and bubbles
  - Hover effects
  - Fixed positioning
- **Dependencies**: Props for state management

#### `Nav.tsx`

- **Purpose**: Main navigation component
- **Features**:
  - Smooth scroll navigation
  - Mobile hamburger menu
  - Active page highlighting
- **Dependencies**: None (pure component)

## 🎣 Custom Hooks

#### `useScrollAnimations.ts`

- **Purpose**: Centralized scroll and animation logic
- **Features**:
  - Smooth scroll navigation
  - Mobile menu functionality
  - Scroll indicator animation
  - Intersection Observer for section animations
- **Dependencies**: `useEffect`

## 🔄 State Management

### **Main Page State**

```typescript
const [animationType, setAnimationType] = useState<"particles" | "bubbles">(
  "particles"
);
```

### **Contact Form State**

```typescript
const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);
```

## 📦 Import Strategy

### **Barrel Exports**

All components are exported through `components/index.ts` for cleaner imports:

```typescript
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
  AnimationToggle,
} from "./components";
```

## 🎨 Styling

All components use the existing CSS classes from `globals.css`. No component-specific styling files are needed as the design system is centralized.

## 🚀 Benefits of This Structure

1. **Modularity**: Each component has a single responsibility
2. **Reusability**: Components can be easily reused or modified
3. **Maintainability**: Easier to debug and update individual features
4. **Performance**: Better code splitting and lazy loading potential
5. **Testing**: Individual components can be tested in isolation
6. **Developer Experience**: Cleaner imports and better organization

## 🔧 Development Guidelines

1. **Component Creation**: Each major section should be its own component
2. **Hook Usage**: Use custom hooks for shared functionality
3. **Props Interface**: Define clear TypeScript interfaces for props
4. **Effect Cleanup**: Always clean up event listeners in useEffect
5. **Error Handling**: Include proper error boundaries and fallbacks

## 📱 Responsive Design

All components are built with mobile-first responsive design using the existing CSS media queries in `globals.css`.

## 🔒 Security Features

The Contact component includes:

- Input sanitization
- XSS prevention
- Rate limiting
- Spam detection
- EmailJS integration with environment variables
