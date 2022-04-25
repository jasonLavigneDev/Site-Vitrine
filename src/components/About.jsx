import React from "react";

const About = () => {
  return (
    <div className="about">
      <h2>En savoir plus sur moi</h2>
        <p className="about-content">
          Si vous souhaitez en apprendre d'avantage sur moi, et découvrir les
          services que je vous propose, je vous invite a visiter mon site générique.
        </p>
        <button className="button-about">
          <a href={"https://sharkay-aa.github.io/My-site/"} target="blank" rel="noopener noreferr">
            C'est ici !
          </a>
        </button>
    </div>
  );
};

export default About;
