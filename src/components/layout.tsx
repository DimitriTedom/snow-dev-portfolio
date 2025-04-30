
import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

const fadeInAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <motion.main 
        className="flex-grow"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeInAnimation}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
