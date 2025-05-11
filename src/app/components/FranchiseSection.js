"use client";

import React, { useState } from "react";
import "./FranchiseSection.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser"; // EmailJS integration

export default function FranchiseForm() {
  const [form, setForm] = useState({
    name: "",
    business_name: "",
    email_id: "",
    mobile_no: "",
    city: "",
    type_of_enquiry: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.name) newErrors.name = "Full name is required";
    if (!form.email_id || !/\S+@\S+\.\S+/.test(form.email_id))
      newErrors.email_id = "Valid email is required";
    if (!form.mobile_no || form.mobile_no.length !== 10)
      newErrors.mobile_no = "Valid 10-digit Number is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.type_of_enquiry) newErrors.type_of_enquiry = "Select enquiry type";
    if (!form.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    const updatedErrors = { ...errors };

    if (name === "name" && value.trim() !== "") delete updatedErrors.name;
    if (name === "email_id" && /\S+@\S+\.\S+/.test(value)) delete updatedErrors.email_id;
    if (name === "mobile_no" && value.length === 10) delete updatedErrors.mobile_no;
    if (name === "city" && value.trim() !== "") delete updatedErrors.city;
    if (name === "type_of_enquiry" && value.trim() !== "") delete updatedErrors.type_of_enquiry;
    if (name === "message" && value.trim() !== "") delete updatedErrors.message;

    setErrors(updatedErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validate()) {
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        "service_uk6jmm8", // ✅ Your correct Service ID
        "template_rtzw27v", // ✅ Your correct new Franchise Template ID
        {
          from_name: form.name,
          business_name: form.business_name,
          from_email: form.email_id,
          mobile_no: form.mobile_no,
          city: form.city,
          type_of_enquiry: form.type_of_enquiry,
          message: form.message,
        },
        "R1y_qs1FM8iTocmAC" // ✅ Your correct Public Key
      );

      toast.success("Thank you! Your form has been submitted successfully.");
      setForm({
        name: "",
        business_name: "",
        email_id: "",
        mobile_no: "",
        city: "",
        type_of_enquiry: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Same full design */}
      {/* Distributions Top Section */}
      <section className="join-distribution-section">
        <div className="join-intro">
          <h2 className="highlight-heading text-center">
            Join our partnership, where your ideas
            <br />
            meet our expertise
          </h2>
          <p className="sub-text">
            Starting a franchise can be a significant business opportunity, but it’s crucial to conduct thorough research, understand the terms of the franchise agreement, and assess whether it aligns with your goals and resources before entering into a franchise arrangement.
          </p>
        </div>

        <h3 className="distribution-title">
          <h2>Our Distributions</h2>
        </h3>

        <div className="distribution-card-wrapper">
          <div className="distribution-card">
            <span className="location-icon pink">
              <FaMapMarkerAlt />
            </span>
            <h4>INDIA</h4>
            <p>Oneonn Beverages, Kharadi, Pune, Maharashtra, India</p>
          </div>

          <div className="distribution-card active">
            <span className="location-icon white">
              <FaMapMarkerAlt />
            </span>
            <h4>SAUDI ARABIA</h4>
            <p>Riyadh, Dammam, Jeddah</p>
          </div>

          <div className="distribution-card">
            <span className="location-icon pink">
              <FaMapMarkerAlt />
            </span>
            <h4>DUBAI</h4>
            <p>Sharjah, Abu Dhabi</p>
          </div>
        </div>
      </section>

      {/* Franchise Form Section */}
      <section className="franchise-hero">
        <section className="franchise-form-wrapper">
          <div className="form-container">
            <h2 className="form-heading">Join our partnership</h2>

            <form className="custom-float-form" onSubmit={handleSubmit}>
              {/* All input fields */}
              {/* Exactly same design and validation */}

              {/* Full Name */}
              <div className="float-field">
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

              {/* Business Name */}
              <div className="float-field">
                <input
                  type="text"
                  name="business_name"
                  placeholder=" "
                  value={form.business_name}
                  onChange={handleChange}
                  className="float-input"
                />
                <label>Business Name (if any)</label>
              </div>

              {/* Email ID */}
              <div className="float-field">
                <input
                  type="text"
                  name="email_id"
                  placeholder=" "
                  value={form.email_id}
                  onChange={handleChange}
                  className={errors.email_id ? "float-input error" : "float-input"}
                />
                <label>Email Address *</label>
                {errors.email_id && <p className="float-error">{errors.email_id}</p>}
              </div>

              {/* Mobile Number */}
              <div className="float-field">
                <input
                  type="text"
                  name="mobile_no"
                  placeholder=" "
                  value={form.mobile_no}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,10}$/.test(value)) {
                      setForm((prev) => ({ ...prev, mobile_no: value }));
                      if (value.length === 10) {
                        setErrors((prev) => ({ ...prev, mobile_no: "" }));
                      }
                    }
                  }}
                  onBlur={() => {
                    if (form.mobile_no.length !== 10) {
                      setErrors((prev) => ({
                        ...prev,
                        mobile_no: "Valid 10-digit Number is required",
                      }));
                    }
                  }}
                  className={errors.mobile_no ? "float-input error" : "float-input"}
                />
                <label>Contact Number *</label>
                {errors.mobile_no && <p className="float-error">{errors.mobile_no}</p>}
              </div>

              {/* City */}
              <div className="float-field">
                <input
                  type="text"
                  name="city"
                  placeholder=" "
                  value={form.city}
                  onChange={handleChange}
                  className={errors.city ? "float-input error" : "float-input"}
                />
                <label>City / Location *</label>
                {errors.city && <p className="float-error">{errors.city}</p>}
              </div>

              {/* Type of Enquiry */}
              <div className="float-field">
                <select
                  name="type_of_enquiry"
                  value={form.type_of_enquiry}
                  onChange={handleChange}
                  className={errors.type_of_enquiry ? "float-input error" : "float-input"}
                >
                  <option value="">Type of Enquiry *</option>
                  <option value="general">General</option>
                  <option value="distribution">Distribution</option>
                  <option value="collaboration">Collaboration</option>
                </select>
                {errors.type_of_enquiry && <p className="float-error">{errors.type_of_enquiry}</p>}
              </div>

              {/* Message */}
              <div className="float-field">
                <textarea
                  name="message"
                  placeholder=" "
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className={errors.message ? "float-input error" : "float-input"}
                />
                <label>Message *</label>
                {errors.message && <p className="float-error">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button className="read-more-button" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>

      <ToastContainer />
    </div>
  );
}
