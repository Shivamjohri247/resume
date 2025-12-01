import React from 'react';

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');
    
    :root {
      --bg-color: #F9F8F4;
      --text-main: #111111;
      --text-muted: #555555;
      --accent: #E4C441;
    }

    body {
      background-color: var(--bg-color);
      color: var(--text-main);
      overflow-x: hidden;
      width: 100%;
      -webkit-font-smoothing: antialiased;
      margin: 0;
    }

    /* Hide scrollbar for cleaner look */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: var(--bg-color);
    }
    ::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 4px;
    }

    .font-serif { font-family: 'Playfair Display', serif; }
    .font-sans { font-family: 'Inter', sans-serif; }
    
    .overflow-hidden-y { overflow-y: hidden; }
    
    /* Preloader Styles */
    .preloader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: #111;
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    /* Image Reveal Mask */
    .image-reveal-container {
      position: relative;
      overflow: hidden;
    }
    .image-reveal-img {
      transform: scale(1.2); /* Start zoomed in */
    }
  `}</style>
);

export default GlobalStyles;
