'use client';

interface ResumeDownloadProps {
  className?: string;
  children: React.ReactNode;
}

export default function ResumeDownload({ className = '', children }: ResumeDownloadProps) {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    
    // Set the href to the resume HTML file in the public folder
    link.href = '/Abhishek_Chaturvedi_Resume.html';
    
    // Set the download attribute to force download
    link.download = 'Abhishek_Chaturvedi_Resume.html';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Track download event
    console.log('Resume HTML download initiated - can be converted to PDF using browser print function');
  };

  return (
    <button 
      onClick={handleDownload}
      className={`resume-download-btn ${className}`}
      type="button"
    >
      {children}
    </button>
  );
}
