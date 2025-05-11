// ✅ Step 2: app/page.jsx or app/HeroSection.jsx
"use client";

import React, { useEffect, useState } from "react";
import HeaderSection from "./components/HeaderSection";
import FooterSection from "./components/FooterSection";
import HeroCarousel from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CustomerReview from "./components/CustomerReview"
import ContactForm from "./components/ContactForm"
import WhyChooseSection from "./components/WhyChooseSection"
import BenefitSection from "./components/BenefitSection"
import HowtoDoSection from "./components/HowtoDoSection"

import ProductSection from "./components/ProductsSection"


import {
  getAllHomeScreenList,
  getAllBlogList,
  getAllProductList,
  addSuperStockerForm,
} from "./utils/employee";

export default function HeroSectionPage() {
  const [bannerList, setBannerList] = useState([]);
  const [blogList, setBlogList] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const banners = await getAllHomeScreenList();
        const blogs = await getAllBlogList();
        const products = await getAllProductList();

        setBannerList(banners?.payload || []);
        setBlogList(blogs?.payload || []);
        setProductList(products?.payload || []);
      } catch (error) {
        console.error("API fetch error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <HeaderSection productList={productList} onSupplierSubmit={addSuperStockerForm} />
      <HeroCarousel bannerList={bannerList} />
      <AboutSection />
      <ProductSection />
      <BenefitSection />
      <HowtoDoSection />

      <WhyChooseSection />
      <CustomerReview />
      <ContactForm />
      <FooterSection />
    </div>
  );
}
