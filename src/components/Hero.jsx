import { Rainbow } from "lucide-react";
import styles from "./Hero.module.css";
import { SpinningText } from "./ui/spinning-text";
import { RainbowButton } from "./ui/rainbow-button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/*spin text*/}
      <div className={styles.spinWrapper}>
        <SpinningText className={styles.spinText} duration={6} radius={6}>
          welcome to my portfolio
        </SpinningText>
      </div>

      {/* Center content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          Digital Dream Crafter <br />
          <span className={styles.gradientText}>Through Code</span>
        </h1>
        <RainbowButton asChild>
          <a href="#about" style={{ width: "100px" }}>
            See More
          </a>
        </RainbowButton>
      </div>
      <p className={styles.subtitle}>
        <span className={styles.gradientSubtitle}>Software Developer</span>
        <br />
        <span>
          ICT Student at Metropolia University of Applied Sciences &
          Business College Helsinki
        </span>
        <br />
        <span>
          Building web applications with React, WordPress, PHP, JavaScript, SQL and Python
        </span>
      </p>
    </section>
  );
};

export default Hero;
