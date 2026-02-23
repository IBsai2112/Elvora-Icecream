import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Home from "./sections/Home";

const App = () => {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader First */}
      <AnimatePresence mode="wait">
        {appLoading && <Loader key="loader" />}
      </AnimatePresence>

      {/* After Loader → Show Home */}
      {!appLoading && <Home />}
    </>
  );
};

export default App;