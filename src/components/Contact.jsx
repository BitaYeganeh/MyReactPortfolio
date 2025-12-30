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
      <h2>Contact Me</h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={styles.contactForm}
      >
        <label htmlFor="from_name">Name:</label>
        <input
          type="text"
          name="from_name"
          id="from_name"
          placeholder="Your Name"
          required
        />

        <label htmlFor="from_email">Email:</label>
        <input
          type="email"
          name="from_email"
          id="from_email"
          placeholder="Your Email"
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Your Phone (optional)"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder="Your Message"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
