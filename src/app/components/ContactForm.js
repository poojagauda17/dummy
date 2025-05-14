"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.css";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!validateEmail(form.email)) newErrors.email = "Valid email is required";
    if (!form.contact || form.contact.length !== 10 || isNaN(Number(form.contact)))
      newErrors.contact = "Valid contact number is required";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validate()) {
      setIsSubmitting(false);
      return;
    }

    emailjs.send(
      "service_dbz1whf", // your Service ID
      "template_qtb8h3v", // your Template ID
      {
        from_name: form.name,
        from_email: form.email,
        contact_number: form.contact,
        subject: form.subject,
        message: form.message,
      },
      "w08QRBOZQ_mzGfpMg" // your Public Key
    ).then(() => {
      toast.success("Thank you! Your message has been sent.");
      setForm({
        name: "",
        email: "",
        contact: "",
        subject: "",
        message: "",
      });
    }).catch(() => {
      toast.error("Something went wrong. Please try again.");
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section className="contact-main">
      <div className="">
        <h2 className="text-black">We’d love to hear from you!</h2>
        <h4 className="text-black">Address:</h4>
        <p>Naydongari  
Nandgaon  
Nashik  
Pin Code: 424109  
Gat No: 932/1B  
</p>

        <h4 className="text-black">Customer Care:</h4>
        <p>Phone: +91-9834351313</p>
        <p>Email: shreeagrochemical1313@gmail.com</p>
        <div className="oneonn-location">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.0373373015537!2d72.97481257509363!3d19.200189347845422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b91f3ed6f739%3A0x3ff13a8a06d9e58a!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1683633192723!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


        </div>
      </div>

      <form className="custom-float-form contact-box" onSubmit={handleSubmit}>
        <h2 className="text-center">Get In Touch</h2>
  <div className="float-form-grid">
    <div className="float-field contact-us-fields">
      <input
        type="text"
        name="name"
        placeholder=" "
        value={form.name}
        onChange={handleChange}
        className={errors.name ? "float-input error" : "float-input"}
      />
      <label>Full Name *</label>
      {errors.name && <p className="float-error">{errors.name}</p>}
    </div>

    <div className="float-field contact-us-fields">
      <input
        type="text"
        name="email"
        placeholder=" "
        value={form.email}
        onChange={handleChange}
        className={errors.email ? "float-input error" : "float-input"}
      />
      <label>Email Address *</label>
      {errors.email && <p className="float-error">{errors.email}</p>}
    </div>

    <div className="float-field contact-us-fields">
      <input
        type="text"
        name="contact"
        placeholder=" "
        value={form.contact}
        onChange={(e) => {
          const value = e.target.value;
          if (/^\d*$/.test(value) && value.length <= 10) {
            setForm((prev) => ({ ...prev, contact: value }));
            if (value.length === 10) {
              setErrors((prev) => ({ ...prev, contact: "" }));
            }
          }
        }}
        className={errors.contact ? "float-input error" : "float-input"}
      />
      <label>Contact Number *</label>
      {errors.contact && <p className="float-error">{errors.contact}</p>}
    </div>

    <div className="float-field contact-us-fields">
      <input
        type="text"
        name="subject"
        placeholder=" "
        value={form.subject}
        onChange={handleChange}
        className={errors.subject ? "float-input error" : "float-input"}
      />
      <label>Subject *</label>
      {errors.subject && <p className="float-error">{errors.subject}</p>}
    </div>
  </div>

  <div className="float-field contact-us-fields full">
    <textarea
      name="message"
      placeholder=" "
      rows="5"
      value={form.message}
      onChange={handleChange}
      style={{ height: "120px" }}
            className={errors.message ? "float-input error" : "float-input"}
    ></textarea>
    <label>Message *</label>
    {errors.message && <p className="float-error">{errors.message}</p>}
  </div>

  <div className="text-center">
    <button className="read-more-button" type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Sending..." : "Send"}
    </button>
  </div>
</form>



      <ToastContainer />
    </section>
  );
}
