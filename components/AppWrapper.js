import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AnimatePresence } from "framer-motion";
import AppNav from "./layouts/nav"
import ContactModal from "./layouts/contact-modal"

function AppWrapper({ children }) {
  const [showContact, setShowContact] = useState(false);
  const open = () => setShowContact(true);
  const close = () => setShowContact(false);
  return (
    <AnimatePresence>
      <AppNav open={open} />
      {children}
      {showContact && <ContactModal handleClose={close} />}
    </AnimatePresence>
  );
}

export default AppWrapper;
