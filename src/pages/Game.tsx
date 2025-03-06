import React from 'react';
import { motion } from 'framer-motion';
import CookieClicker from '../components/CookieClicker';

const Game: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
              Cookie Clicker Unblocked
            </h1>
            <p className="text-amber-700 text-lg max-w-2xl mx-auto">
              Click the cookie, earn upgrades, and become the ultimate cookie
              tycoon in this addictive idle game!
            </p>
          </div>

          <CookieClicker />
        </div>
      </div>
    </motion.div>
  );
};

export default Game;
