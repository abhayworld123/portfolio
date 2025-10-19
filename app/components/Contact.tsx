'use client';

import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);

  useEffect(() => {
    // Contact form functionality
    const contactForm = document.getElementById('contactForm') as HTMLFormElement;
    
    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
          name: formData.get('name') as string,
          email: formData.get('email') as string,
          subject: formData.get('subject') as string,
          message: formData.get('message') as string
        };

        // Clear previous errors
        clearErrors();

        // Rate limiting - prevent spam (max 1 submission per 30 seconds)
        const currentTime = Date.now();
        const timeSinceLastSubmission = currentTime - lastSubmissionTime;
        const minInterval = 30000; // 30 seconds

        if (timeSinceLastSubmission < minInterval) {
          const remainingTime = Math.ceil((minInterval - timeSinceLastSubmission) / 1000);
          showStatus('error', `Please wait ${remainingTime} seconds before submitting again.`);
          return;
        }

        // Validate form
        if (!validateForm(data)) {
          return;
        }

        // Sanitize data before submission
        const sanitizedData = {
          name: sanitizeInput(data.name),
          email: sanitizeInput(data.email),
          subject: sanitizeInput(data.subject),
          message: sanitizeInput(data.message)
        };

        // Show loading state
        setLoadingState(true);

        try {
          // Submit form using EmailJS
          await submitForm(sanitizedData);
          
          // Record submission time for rate limiting
          setLastSubmissionTime(currentTime);
          
          showStatus('success', 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!');
          contactForm.reset();
        } catch (error) {
          showStatus('error', 'Sorry, there was an error sending your message. Please try again or contact me directly.');
        } finally {
          setLoadingState(false);
        }
      });
    }

    // WhatsApp link functionality
    const whatsappLink = document.getElementById('whatsappLink');
    if (whatsappLink) {
      whatsappLink.addEventListener('click', () => {
        // Track WhatsApp click (you can add analytics here)
        console.log('WhatsApp contact clicked');
        
        // Optional: Add a small delay for better UX
        setTimeout(() => {
          // The link will open WhatsApp automatically
        }, 100);
      });
    }

    // Form validation function with enhanced security
    function validateForm(data: any): boolean {
      let isValid = true;

      // Sanitize input data
      const sanitizedData = {
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email),
        subject: sanitizeInput(data.subject),
        message: sanitizeInput(data.message)
      };

      // Name validation
      if (!sanitizedData.name || sanitizedData.name.length < 2) {
        showError('nameError', 'Please enter a valid name (at least 2 characters)');
        isValid = false;
      } else if (sanitizedData.name.length > 100) {
        showError('nameError', 'Name must be less than 100 characters');
        isValid = false;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!sanitizedData.email || !emailRegex.test(sanitizedData.email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
      } else if (sanitizedData.email.length > 254) {
        showError('emailError', 'Email address is too long');
        isValid = false;
      }

      // Subject validation
      if (!sanitizedData.subject || sanitizedData.subject.length < 3) {
        showError('subjectError', 'Please enter a subject (at least 3 characters)');
        isValid = false;
      } else if (sanitizedData.subject.length > 200) {
        showError('subjectError', 'Subject must be less than 200 characters');
        isValid = false;
      }

      // Message validation
      if (!sanitizedData.message || sanitizedData.message.length < 10) {
        showError('messageError', 'Please enter a message (at least 10 characters)');
        isValid = false;
      } else if (sanitizedData.message.length > 2000) {
        showError('messageError', 'Message must be less than 2000 characters');
        isValid = false;
      }

      // Check for potential spam patterns
      if (containsSpamPatterns(sanitizedData)) {
        showError('messageError', 'Message contains inappropriate content');
        isValid = false;
      }

      return isValid;
    }

    // Sanitize input to prevent XSS and other attacks
    function sanitizeInput(input: string): string {
      if (!input) return '';
      
      return input
        .trim()
        .replace(/[<>]/g, '') // Remove potential HTML tags
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+=/gi, '') // Remove event handlers
        .substring(0, 2000); // Limit length
    }

    // Basic spam detection
    function containsSpamPatterns(data: any): boolean {
      const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'congratulations', 'click here', 'free money'];
      const text = `${data.name} ${data.subject} ${data.message}`.toLowerCase();
      
      return spamKeywords.some(keyword => text.includes(keyword));
    }

    // Show error message
    function showError(elementId: string, message: string) {
      const errorElement = document.getElementById(elementId);
      if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
      }
    }

    // Clear all errors
    function clearErrors() {
      const errorElements = document.querySelectorAll('.error-message');
      errorElements.forEach(element => {
        element.classList.remove('show');
        element.textContent = '';
      });
    }

    // Set loading state
    function setLoadingState(loading: boolean) {
      const submitBtn = document.querySelector('.submit-btn') as HTMLButtonElement;
      const btnText = document.querySelector('.btn-text') as HTMLElement;
      const btnLoading = document.querySelector('.btn-loading') as HTMLElement;

      if (submitBtn && btnText && btnLoading) {
        submitBtn.disabled = loading;
        if (loading) {
          btnText.style.display = 'none';
          btnLoading.style.display = 'flex';
        } else {
          btnText.style.display = 'block';
          btnLoading.style.display = 'none';
        }
      }
    }

    // Show status message
    function showStatus(type: 'success' | 'error', message: string) {
      const statusElement = document.getElementById('formStatus');
      if (statusElement) {
        statusElement.textContent = message;
        statusElement.className = `form-status ${type} show`;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
          statusElement.classList.remove('show');
        }, 5000);
      }
    }

    // EmailJS form submission
    async function submitForm(data: any): Promise<void> {
      // Get EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Validate environment variables
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      // Initialize EmailJS with public key
      emailjs.init(publicKey);

      // Prepare template parameters
      const templateParams = {
        user_name: data.name,
        user_email: data.email,
        user_subject: data.subject,
        user_message: data.message,
        to_email: 'abhayworld123@zohomail.in', // Your email address
        from_name: data.name,
        reply_to: data.email
      };

      // Send email using EmailJS
      try {
        const response = await emailjs.send(serviceId, templateId, templateParams);
        console.log('Email sent successfully:', response);
        return Promise.resolve();
      } catch (error) {
        console.error('EmailJS error:', error);
        throw new Error('Failed to send email. Please try again later.');
      }
    }
  }, [lastSubmissionTime]);

  return (
    <section id="contact">
      <div className="section-number">06.</div>
      <div className="section-content">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <p className="contact-text">
              I'm currently looking for new opportunities! Whether you have a question or just want to say hi,
              I'll do my best to get back to you!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>abhay.chaturvedius@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+1 (555) 123-4567</span>
              </div>
              {/* <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Charlotte, NC</span>
              </div> */}
            </div>
            <div className="contact-actions">
              <a 
                href="https://wa.me/15551234567?text=Hi%20Abhishek,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project." 
                className="whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                id="whatsappLink"
              >
                <i className="fab fa-whatsapp"></i>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-github"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" id="contactForm">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Your Name"
                />
                <span className="error-message" id="nameError"></span>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="your.email@example.com"
                />
                <span className="error-message" id="emailError"></span>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  placeholder="What's this about?"
                />
                <span className="error-message" id="subjectError"></span>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={6}
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
                <span className="error-message" id="messageError"></span>
              </div>
              
              <button type="submit" className="submit-btn">
                <span className="btn-text">Send Message</span>
                <span className="btn-loading" style={{display: 'none'}}>
                  <i className="fas fa-spinner fa-spin"></i> Sending...
                </span>
              </button>
              
              <div className="form-status" id="formStatus"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
