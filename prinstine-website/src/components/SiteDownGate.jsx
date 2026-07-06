import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/** Site stays in loading state for more than 10 minutes, then shows 404. */
const LOADING_MS = 10 * 60 * 1000 + 30 * 1000; // 10 minutes 30 seconds

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-blue-800 to-secondary flex flex-col items-center justify-center text-white px-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full mb-8"
      />
      <motion.p
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-lg md:text-xl font-medium text-white/90"
      >
        Loading…
      </motion.p>
      <p className="mt-4 text-sm text-white/50 max-w-md text-center">
        Please wait while the page loads.
      </p>
    </div>
  );
}

function NotFoundScreen() {
  return (
    <div className="min-h-screen bg-neutral dark:bg-gray-900 flex flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl md:text-9xl font-heading font-bold text-primary dark:text-accent mb-4">
        404
      </p>
      <h1 className="text-2xl md:text-3xl font-heading font-bold text-text dark:text-white mb-3">
        Page Not Found
      </h1>
      <p className="text-gray-600 dark:text-gray-400 max-w-md">
        The page you are looking for could not be found or is temporarily unavailable.
      </p>
    </div>
  );
}

export default function SiteDownGate({ children }) {
  const siteDown = import.meta.env.VITE_SITE_DOWN !== 'false';
  const [phase, setPhase] = useState(siteDown ? 'loading' : 'live');

  useEffect(() => {
    if (!siteDown) return;

    document.title = 'Loading… — Prinstine Group';

    const timer = setTimeout(() => {
      setPhase('404');
      document.title = '404 — Page Not Found';
    }, LOADING_MS);

    return () => clearTimeout(timer);
  }, [siteDown]);

  if (!siteDown) {
    return children;
  }

  if (phase === 'loading') {
    return <LoadingScreen />;
  }

  return <NotFoundScreen />;
}
