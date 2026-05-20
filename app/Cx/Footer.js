import Image from "next/image";
import {
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Voting system", href: "#voting-system" },
  { label: "Hi-tech products", href: "#hi-tech" },
  { label: "Currency & economy", href: "#currency-economy" },
];

const RESOURCES = [
  { label: "About us", href: "#about" },
  { label: "How it works", href: "#voting-system" },
  { label: "FAQs", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

const LEGAL = [
  { label: "Privacy policy", href: "#" },
  { label: "Terms of use", href: "#" },
  { label: "Disclaimer", href: "#" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full scroll-mt-24 border-t border-neutral-100 bg-white text-neutral-900"
    >
      

      <div className="border-t border-neutral-100 bg-white px-4 py-4 text-center">
        <p className="text-[0.7rem] font-normal tracking-wide text-neutral-500 sm:text-xs">
          © {new Date().getFullYear()} ONE MD Crypto Coin · M.D. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
