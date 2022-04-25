import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsBottom from "../components/ButtonsBottom";
// import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import About from "../components/About";

const Contact = () => {
  const variants = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };
  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  return (
    <main>
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        variants={variants}
        transition={transition}
      >
        <Navigation />
        <Logo />
        {/* <ContactForm /> */}
        <About/>
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>Bourgogne Franche Comte</p>
              <p>39140 Arlay</p>
            </div>
          </div>

          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0750375021" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  07 50 37 50 21
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="jasondevweb@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  jasondevweb@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>@JasonDevWeb-2021</p>
          </div>
        </div>
        <ButtonsBottom left={"/project-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
