
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import {
  getContactInfo,
  ContactInfo,
} from "@/Services/api/contact-info";
import Image from "next/image";

export default function Footer() {
  const [contact, setContact] = useState<ContactInfo | null>(null);

  useEffect(() => {
    getContactInfo()
      .then((data) => setContact(data[0] ?? null))
      .catch(() => setContact(null));
  }, []);

  return (
    <footer className="w-full bg-[#3B1547] text-white">
      {/* Same container as Navbar */}
      <div className="container py-5">
        {/* Main Footer */}
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-8">
          
          {/* Left */}
          <div className="w-full max-w-md">
            <div className="flex items-center gap-3">
              <Image
                src="/aaaa.png"
                alt="Logo"
                className="h-7 w-7 rounded-md sm:h-10 sm:w-10"
                width={10}
                height={10}
              />

              <span className="text-lg font-bold">
                Sajilo Webs
              </span>
            </div>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-200">
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
          <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 lg:w-auto lg:gap-8">
            
            {/* Product */}
            <div>
              <h3 className="mb-4 text-base font-semibold">
                Product
              </h3>

              <ul className="flex flex-col gap-3 text-sm text-gray-200">
                <li>
                  <Link
                    href="/#features"
                    className="transition hover:text-white"
                  >
                    Features
                  </Link>
                </li>

                <li>
                  <Link
                    href="/pricing"
                    className="transition hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>

                <li>
                  <Link
                    href="/templates"
                    className="transition hover:text-white"
                  >
                    Templates
                  </Link>
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
                    className="transition hover:text-white"
                  >
                    FAQ
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="transition hover:text-white"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    href="/our-blog"
                    className="transition hover:text-white"
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
                    className="break-all transition hover:text-white"
                  >
                    {contact?.email ?? "hello@example.com"}
                  </a>
                </li>

                <li>
                  <a
                    href={`tel:${
                      contact?.phone ?? "+9779800000000"
                    }`}
                    className="transition hover:text-white"
                  >
                    {contact?.phone ?? "+977 9800000000"}
                  </a>
                </li>

                <li className="break-words">
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

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/Terms-condition"
              className="transition hover:text-white"
            >
              Term of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
