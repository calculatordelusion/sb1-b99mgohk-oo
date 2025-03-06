import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './pages/Game';
import About from './pages/About';
import Privacy from './pages/Privacy';
import DMCA from './pages/DMCA';
import Contact from './pages/Contact';
import Terms from './pages/Terms';

function App() {
  const location = useLocation();

  useEffect(() => {
    const updateMetaTags = () => {
      // Default metadata for home page
      let title = "Cookie Clicker Unblocked - Best Free Cookie Game 2025";
      let description = "Play Cookie Clicker Unblocked - The most addictive idle cookie clicking game! Click cookies, buy upgrades, and become a cookie tycoon. Free to play, no download required.";
      let keywords = "cookie clicker unblocked, cookie clicker, idle game, clicking game, free online game, unblocked games";
      let schema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Cookie Clicker Unblocked",
        "url": "https://cookieclickerunblocked.app",
        "description": "Play Cookie Clicker Unblocked - The most addictive idle cookie clicking game! Click cookies, buy upgrades, and become a cookie tycoon.",
        "applicationCategory": "Game",
        "genre": "Idle Game",
        "browserRequirements": "Requires JavaScript",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "1250"
        }
      };

      // Update metadata based on current route
      switch (location.pathname) {
        case '/about':
          title = "About Cookie Clicker Unblocked - Our Story and Game Guide";
          description = "Learn about Cookie Clicker Unblocked, the most addictive idle game. Discover our story, game mechanics, and how to become a cookie clicking master.";
          keywords = "about cookie clicker, cookie clicker guide, cookie clicker story, cookie game guide, cookie clicker help";
          schema = {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Cookie Clicker Unblocked",
            "description": "Learn about Cookie Clicker Unblocked, our story, and how to play the game.",
            "url": "https://cookieclickerunblocked.app/about",
            "mainEntity": {
              "@type": "Game",
              "name": "Cookie Clicker Unblocked",
              "genre": "Idle Game",
              "gamePlatform": "Web Browser"
            }
          };
          break;
        case '/contact':
          title = "Contact Cookie Clicker Unblocked - Get in Touch With Us";
          description = "Have questions or feedback about Cookie Clicker Unblocked? Contact our team for support, suggestions, or business inquiries.";
          keywords = "contact cookie clicker, cookie clicker support, cookie game help, cookie clicker feedback";
          schema = {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Cookie Clicker Unblocked",
            "description": "Contact us for support or feedback about Cookie Clicker Unblocked.",
            "url": "https://cookieclickerunblocked.app/contact",
            "mainEntity": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "email": "support@cookieclickerunblocked.app"
            }
          };
          break;
        case '/privacy':
          title = "Privacy Policy - Cookie Clicker Unblocked";
          description = "Read our privacy policy to understand how Cookie Clicker Unblocked handles your data and protects your privacy while playing our game.";
          keywords = "cookie clicker privacy, cookie game privacy policy, online game privacy, data protection";
          schema = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "description": "Privacy policy for Cookie Clicker Unblocked game.",
            "url": "https://cookieclickerunblocked.app/privacy",
            "mainEntity": {
              "@type": "WebContent",
              "about": {
                "@type": "Thing",
                "name": "Privacy Policy"
              }
            }
          };
          break;
        case '/terms':
          title = "Terms of Service - Cookie Clicker Unblocked";
          description = "Review our terms of service for Cookie Clicker Unblocked. Understand the rules, guidelines, and conditions for playing our game.";
          keywords = "cookie clicker terms, cookie game rules, terms of service, game guidelines";
          schema = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service",
            "description": "Terms of service for Cookie Clicker Unblocked game.",
            "url": "https://cookieclickerunblocked.app/terms",
            "mainEntity": {
              "@type": "WebContent",
              "about": {
                "@type": "Thing",
                "name": "Terms of Service"
              }
            }
          };
          break;
        case '/dmca':
          title = "DMCA Policy - Cookie Clicker Unblocked";
          description = "View our DMCA policy and copyright information for Cookie Clicker Unblocked. Learn about our content protection and reporting procedures.";
          keywords = "cookie clicker dmca, copyright policy, content protection, dmca notice";
          schema = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "DMCA Policy",
            "description": "DMCA policy and copyright information for Cookie Clicker Unblocked.",
            "url": "https://cookieclickerunblocked.app/dmca",
            "mainEntity": {
              "@type": "WebContent",
              "about": {
                "@type": "Thing",
                "name": "DMCA Policy"
              }
            }
          };
          break;
      }

      // Update meta tags
      document.title = title;
      document.querySelector('meta[name="title"]')?.setAttribute('content', title);
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
      document.querySelector('meta[name="keywords"]')?.setAttribute('content', keywords);
      
      // Update Open Graph tags
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
      document.querySelector('meta[property="og:url"]')?.setAttribute('content', `https://cookieclickerunblocked.app${location.pathname}`);
      
      // Update Twitter Card tags
      document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', title);
      document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', description);
      document.querySelector('meta[property="twitter:url"]')?.setAttribute('content', `https://cookieclickerunblocked.app${location.pathname}`);
      
      // Update canonical URL
      document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://cookieclickerunblocked.app${location.pathname}`);
      
      // Update Schema.org JSON-LD
      const schemaScript = document.getElementById('pageSchema');
      if (schemaScript) {
        schemaScript.textContent = JSON.stringify(schema);
      }
    };

    updateMetaTags();
  }, [location]);

  // Scroll to the top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Game />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/dmca" element={<DMCA />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;