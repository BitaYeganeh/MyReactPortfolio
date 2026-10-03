// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Contact.module.css";

const EMAIL = "bita.yeganeh@metropolia.fi";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  // { type: "success" | "error", text } shown under the form
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);

    // Honeypot: real visitors never see this field, bots tend to fill it in
    if (formRef.current.company.value) {
      formRef.current.reset();
      setStatus({ type: "success", text: "Thanks! Your message has been sent." });
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          formRef.current.reset();
          setStatus({ type: "success", text: "Thanks! Your message has been sent. I'll get back to you soon." });
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus({ type: "error", text: "Sorry, the message couldn't be sent. Please try again, or reach me on LinkedIn." });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className={styles.contactSection}>

      <div className={styles.container}>
        {/* Header - matching other sections */}
        <div className={styles.header}>
          <h2 className={styles.title}>CONTACT</h2>
        </div>

        <div className={styles.content}>
          <p className={styles.subtitle}>
            Have a question or want to work together? Feel free to reach out!
          </p>

          <ul className={styles.directLinks}>
            <li>
              <a href={`mailto:${EMAIL}`}>
                <FaEnvelope aria-hidden="true" /> {EMAIL}
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bita-yeganeh-503144237/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/BitaYeganeh" target="_blank" rel="noopener noreferrer">
                <FaGithub aria-hidden="true" /> GitHub
              </a>
            </li>
          </ul>

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

            {/* Honeypot - hidden from people, left empty by real visitors */}
            <div className={styles.honeypot} aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input type="text" name="company" id="company" tabIndex={-1} autoComplete="off" />
            </div>

            <button type="submit" disabled={loading} className={styles.submitButton}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            <p
              role="status"
              aria-live="polite"
              className={`${styles.status} ${status ? styles[status.type] : ""}`}
            >
              {status?.text}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;