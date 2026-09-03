import AboutLayout from "@/myComponents/AboutLayout";
import BannerLayout from "@/myComponents/BannerLayout";
import ContactLayout from "@/myComponents/ContactLayout";
import FooterLayout from "@/myComponents/FooterLayout";
import NavbarLayout from "@/myComponents/NavbarLayout";
import ProductsLayout from "@/myComponents/ProductsLayout";
import ReviewsLayout from "@/myComponents/ReviewsLayout";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavbarLayout />
      <BannerLayout />
      <AboutLayout />
      <ProductsLayout />
      <ReviewsLayout />
      <ContactLayout />
      <FooterLayout />
    </div>
  );
}
