import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Container = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ebd398;
`;

const Text = styled(motion.span)`
  font-size: clamp(40px, 8vw, 100px);
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
  margin-top: 10px;
`;

const Loader = () => {
  return (
    <Container
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}   // slide down animation
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <DotLottieReact 
        src="https://lottie.host/4dba947b-a215-4d33-8078-3cb7dfb3e3d4/bKWyAArnhP.lottie"
        loop
        autoplay
        style={{ width: "260px", height: "260px" }}
      />

      <Text
        style={{ fontSize: "3.5vh" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        ELVORA
      </Text>
    </Container>
  );
};

export default Loader;

