import React from 'react';
import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Cookie Clicker Unblocked - Our Story and Game Guide</title>
        <meta
          name="description"
          content="Learn about Cookie Clicker Unblocked, the most addictive idle game. Discover our story, game mechanics, and how to become a cookie clicking master."
        />
        <meta
          name="keywords"
          content="about cookie clicker, cookie clicker guide, cookie clicker story, cookie game guide, cookie clicker help"
        />
        <script type="application/ld+json">
          {`{
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
          }`}
        </script>
        <meta property="og:title" content="About Cookie Clicker Unblocked - Our Story and Game Guide" />
        <meta property="og:description" content="Learn about Cookie Clicker Unblocked, the most addictive idle game. Discover our story, game mechanics, and how to become a cookie clicking master." />
        <meta property="og:url" content="https://cookieclickerunblocked.app/about" />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content="About Cookie Clicker Unblocked - Our Story and Game Guide" />
        <meta property="twitter:description" content="Learn about Cookie Clicker Unblocked, the most addictive idle game. Discover our story, game mechanics, and how to become a cookie clicking master." />
        <meta property="twitter:url" content="https://cookieclickerunblocked.app/about" />
        <link rel="canonical" href="https://cookieclickerunblocked.app/about" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="py-12"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-amber-800 p-6 text-center">
              <Cookie size={64} className="text-amber-200 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-white">
                About Cookie Clicker Unblocked
              </h1>
            </div>

            <div className="p-8">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">
                  Our Story
                </h2>
                <p className="text-gray-700 mb-4">
                  Cookie Clicker Unblocked was created in 2025 by a team of
                  passionate game developers who wanted to bring joy to players
                  around the world. What started as a simple clicking game has
                  evolved into one of the most addictive idle games on the
                  internet.
                </p>
                <p className="text-gray-700">
                  Our mission is to provide a fun, engaging, and accessible
                  gaming experience that anyone can enjoy, anywhere, anytime. We
                  believe in creating games that are not only entertaining but
                  also bring people together through shared experiences.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">
                  How to Play
                </h2>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>
                      <span className="font-medium text-amber-800">
                        Click the Cookie:
                      </span>{' '}
                      Each click earns you cookies!
                    </li>
                    <li>
                      <span className="font-medium text-amber-800">
                        Buy Upgrades:
                      </span>{' '}
                      Use your cookies to purchase upgrades that automatically
                      generate more cookies over time.
                    </li>
                    <li>
                      <span className="font-medium text-amber-800">
                        Strategize:
                      </span>{' '}
                      Decide which upgrades to prioritize to maximize your
                      cookie production.
                    </li>
                    <li>
                      <span className="font-medium text-amber-800">
                        Achieve Milestones:
                      </span>{' '}
                      Unlock special achievements as you reach cookie milestones.
                    </li>
                    <li>
                      <span className="font-medium text-amber-800">
                        Have Fun:
                      </span>{' '}
                      The most important rule of all!
                    </li>
                  </ol>
                </div>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
