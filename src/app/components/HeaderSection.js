// ✅ Step 3: HeaderSection.jsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "./HeaderSection.css";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";



export default function HeaderSection({onSupplierSubmit }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imgSrc, setImgSrc] = useState("/stocker-black.png");
  const productList = [
    { id: 1, name: "Pudina", image: "/Flovors/1.jpg" },
    { id: 2, name: "Orange", image: "/Flovors/2.jpg" },
    { id: 3, name: "Lemon", image: "/Flovors/3.jpg" },
    { id: 4, name: "Litchi", image: "/Flovors/4.jpg" },
    { id: 5, name: "Mango", image: "/Flovors/5.jpg" },
    { id: 6, name: "Cula", image: "/Flovors/6.jpg" },

  ];

  const handleMouseEnter = () => {
    setImgSrc("/stocker-black.png"); // optional, reset if needed
    setTimeout(() => {
      setImgSrc("/stocker-white.png");
    }, 200); // delay 200ms before switching
  };

  const handleMouseLeave = () => {
    setImgSrc("/stocker-black.png");
  };

  const [form, setForm] = useState({
    name: "",
    business_name: "",
    state: "",
    city: "",
    email_id: "",
    mobile_no: "",
    existing_distribution_experience: "",
    want_to_join: "",
  });

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("stockist-modal-overlay")) {
      setOpen(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!emailRegex.test(form.email_id.trim()))
      newErrors.email_id = "Valid email required";
    if (!/^\d{10}$/.test(form.mobile_no))
      newErrors.mobile_no = "Valid 10-digit phone required";
    if (!form.state.trim()) newErrors.state = "State is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.existing_distribution_experience)
      newErrors.existing_distribution_experience = "This field is required";
    if (!form.want_to_join.trim())
      newErrors.want_to_join = "Tell us why you want to join";
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }
  
    try {
      await emailjs.send(
        "service_1mwf0nm",     // ✅ NEW service ID
        "template_kt4qzwj",    // ✅ NEW template ID
        {
          from_name: form.name,
          business_name: form.business_name,
          state: form.state,
          city: form.city,
          from_email: form.email_id,
          contact_number: form.mobile_no,
          experience: form.existing_distribution_experience,
          join_reason: form.want_to_join,
        },
        "hU7SVlI5b8_yVp5Ae"    // ✅ NEW public key
      );
  
      toast.success("Thank you! Your application has been submitted.");
      setForm({
        name: "",
        business_name: "",
        state: "",
        city: "",
        email_id: "",
        mobile_no: "",
        existing_distribution_experience: "",
        want_to_join: "",
      });
      setErrors({});
      setOpen(false);
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".nav-links") && !e.target.closest(".hamburger")) {
        setMenuOpen(false);
        setDropdownOpen(false);
        setProductOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <section className="hero-container">
      <header className="navbar">
        <div className="header-container">
          <div className="logo">
             <Link href="/">
              <img src="/images/Shree-agro.png" alt="logo" className="header-logo" />
            </Link> 

          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <Link
              href="/"
              className={isActive("/") ? "nav-link active" : "nav-link"}
            >
              Home
            </Link>
               <Link
              href="/about"
              className={isActive("/about") ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
               <Link
              href="/crops"
              className={isActive("/crops") ? "nav-link active" : "nav-link"}
            >
              Crops
            </Link>
          




            <Link
              href="/blog"
              className={isActive("/blog") ? "nav-link active" : "nav-link"}
            >
              Benefits
            </Link>
            <Link
              href="/contact"
              className={isActive("/contact") ? "nav-link active" : "nav-link"}
            >
              Contact Us
            </Link>

          </nav>
        </div>

      </header>
    </section>
  );
}
