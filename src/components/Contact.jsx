// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_9iu8scr", // Service ID
        "template_bamnlis", // Template ID
        formRef.current,
        "a9rlAFGgd551RQg_L" // Public Key
      )
      .then(
        (result) => {
          console.log("EmailJS success:", result);
          alert("Message sent successfully! Thank you for reaching out.");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message, please check console for details.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className={styles.contactSection}>
      {/* CTA Section - "Got a hard problem? Let's build it." */}
      <div className={styles.ctaSection}>
        <p className={styles.ctaText}>
          Got a hard problem? <span className={styles.ctaHighlight}>Let's build it.</span>
        </p>
        <a href="mailto:red@nskr.dev" className={styles.emailLink}>
          red@nskr.dev →
        </a>
      </div>

      <div className={styles.container}>
        {/* Header - matching other sections */}
        <div className={styles.header}>
          <h2 className={styles.title}>CONTACT</h2>
          <span className={styles.label}>08-CONTACT</span>
        </div>

        <div className={styles.content}>
          <p className={styles.subtitle}>
            Have a question or want to work together? Feel free to reach out!
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={styles.contactForm}
          >
            {/* Name - with placeholder instead of label above */}
            <div className={styles.formGroup}>
              <input
                type="text"
                name="from_name"
                id="from_name"
                placeholder="Your Name"
                className={styles.formInput}
                required
              />
            </div>

            {/* Email - with placeholder instead of label above */}
            <div className={styles.formGroup}>
              <input
                type="email"
                name="from_email"
                id="from_email"
                placeholder="Your Email"
                className={styles.formInput}
                required
              />
            </div>

            {/* Message - with placeholder instead of label above */}
            <div className={styles.formGroup}>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Your Message"
                className={styles.formTextarea}
                required
              />
            </div>

            <button type="submit" disabled={loading} className={styles.submitButton}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;