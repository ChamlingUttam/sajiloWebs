

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import {
  getContactInfo,
  ContactInfo,
} from "@/Services/api/contact-info";

export default function Footer() {
  const [contact, setContact] = useState<ContactInfo | null>(null);

  useEffect(() => {
    getContactInfo()
      .then((data) => setContact(data[0] ?? null))
      .catch(() => setContact(null));
  }, []);

  return (
    <footer className="w-full bg-[#3E1647] text-white">
      {/* Same container as Navbar */}
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          {/* Left */}
          <div className="flex max-w-md flex-col">
            <div className="flex items-center gap-3">
              <img
                src="/aaaa.png"
                alt="Logo"
                className="h-9 w-9 rounded-md sm:h-10 sm:w-10"
              />

              <span className="text-lg font-bold">
                Sajilo Webs
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-200">
              We provide simple and powerful solutions to help
              businesses grow, manage their work, and achieve better
              results.
            </p>

            <h3 className="mt-6 text-lg font-semibold">
              Follow us
            </h3>

            <div className="mt-3 flex items-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="transition hover:text-gray-300"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="transition hover:text-gray-300"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                aria-label="TikTok"
                className="transition hover:text-gray-300"
              >
                <FaTiktok size={20} />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="transition hover:text-gray-300"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 md:gap-16">
            {/* Product */}
            <div>
              <h3 className="mb-4 text-base font-semibold">
                Product
              </h3>

              <ul className="flex flex-col gap-3 text-sm text-gray-200">
                <li>
                  <Link
                    href="/#features"
                    className="hover:text-white"
                  >
                    Features
                  </Link>
                </li>

                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>

                <li>
                  <a href="#" className="hover:text-white">
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="mb-4 text-base font-semibold">
                Support
              </h3>

              <ul className="flex flex-col gap-3 text-sm text-gray-200">
                <li>
                  <Link
                    href="/faqs"
                    className="hover:text-white"
                  >
                    FAQ
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    href="/our-blog"
                    className="hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="mb-4 text-base font-semibold">
                Contact Us
              </h3>

              <ul className="flex flex-col gap-3 text-sm text-gray-200">
                <li>
                  <a
                    href={`mailto:${
                      contact?.email ?? "hello@example.com"
                    }`}
                    className="break-all hover:text-white"
                  >
                    {contact?.email ?? "hello@example.com"}
                  </a>
                </li>

                <li>
                  <a
                    href={`tel:${
                      contact?.phone ?? "+9779800000000"
                    }`}
                    className="hover:text-white"
                  >
                    {contact?.phone ?? "+977 9800000000"}
                  </a>
                </li>

                <li>
                  {contact?.address ?? "Kathmandu, Nepal"}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/20 pt-6 text-sm text-gray-300 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()}. All rights reserved.
          </span>

          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/Terms-condition"
              className="hover:text-white"
            >
              Term of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
