"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { getContactInfo, ContactInfo } from "@/Services/api/contact-info";

export default function Footer() {
  const [contact, setContact] = useState<ContactInfo | null>(null);

  useEffect(() => {
    getContactInfo()
      .then((data) => setContact(data[0] ?? null))
      .catch(() => setContact(null));
  }, []);

  return (
    <footer className="w-full bg-[#3E1647] text-white px-4 py-10 sm:px-6 md:px-20 ">
      <div className="">

        <div className="flex flex-col md:flex-row px-20 justify-between gap-20">

          {/* Left */}
          <div className="flex flex-col max-w-md">
            <div className="flex gap-3 items-center">
              <img src="/aaaa.png" alt="Logo" className="h-9 w-9 sm:h-10 sm:w-10 rounded-md" />
              <span className="font-bold text-lg">Sajilo Webs</span>
            </div>

            <p className="text-sm text-gray-200 leading-6 mt-4">
              We provide simple and powerful solutions to help businesses
              grow, manage their work, and achieve better results.
            </p>

            <h3 className="text-lg font-semibold mt-6">Follow us</h3>
            <div className="flex items-center gap-4 mt-3">
              <a href="#" aria-label="Facebook" className="hover:text-gray-300 transition"><FaFacebook size={20} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-300 transition"><FaInstagram size={20} /></a>
              <a href="#" aria-label="TikTok" className="hover:text-gray-300 transition"><FaTiktok size={20} /></a>
              <a href="#" aria-label="WhatsApp" className="hover:text-gray-300 transition"><FaWhatsapp size={20} /></a>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:gap-4  ">

            <div>
              <h3 className="text-base font-semibold mb-4">Product</h3>
              <ul className="flex flex-col gap-3 text-sm text-gray-200">
                <li><Link href="/#features" className="hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><a href="#" className="hover:text-white">Templates</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-4">Support</h3>
              <ul className="flex flex-col gap-3 text-sm text-gray-200">
                <li><Link href="/faqs" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/our-blog" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 ">
              <h3 className="text-base font-semibold mb-4">Contact Us</h3>
              <ul className="flex flex-col gap-3 text-sm text-gray-200">
                <li>
                  <a href={`mailto:${contact?.email ?? "hello@example.com"}`} className="hover:text-white whitespace-nowrap">
                    {contact?.email ?? "hello@example.com"}
                  </a>
                </li>
                <li>
                  <a href={`tel:${contact?.phone ?? "+9779800000000"}`} className="hover:text-white whitespace-nowrap">
                    {contact?.phone ?? "+977 9800000000"}
                  </a>
                </li>
                <li>{contact?.address ?? "Kathmandu, Nepal"}</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-300 px-20">
          <span>© {new Date().getFullYear()} Your Company. All rights reserved.</span>
          <div className="flex gap-4 flex-col md:flex-row">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href={"/Terms-condition"} className="cursor-pointer hover:text-white">Term of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}















