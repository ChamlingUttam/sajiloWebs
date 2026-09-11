import { FaInstagram,FaTiktok, FaWhatsapp} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="w-full px-20 py-12 bg-[#3E1647]  text-white">
      <div className="max-w-7xl mx-auto">

        {/* Main Footer */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Left Div */}
          <div className="flex flex-col max-w-md">

            {/* Logo */}
            <div className="flex  gap-4 items-center">
               <img
              src="/aaaa.png"
              alt="Logo"
              className="h-10 w-10 rounded-md mb-4"
              
            />
            <span className="font-bold">Sajilo Webs</span>

            </div>
           

            {/* Description */}
            <p className="text-sm text-gray-200 leading-6">
              We provide simple and powerful solutions to help businesses
              grow, manage their work, and achieve better results.
            </p>

            {/* Heading */}
            <h1 className="text-xl font-semibold mt-6">
              Follow us
            </h1>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="hover:text-gray-300 transition">
                <FaFacebook size={20} />
              </a>

              <a href="#" className="hover:text-gray-300 transition">
                <FaInstagram size={20} />

              </a>

              <a href="#" className="hover:text-gray-300 transition">
                <FaTiktok size={20} />
              </a>

              <a href="#" className="hover:text-gray-300 transition">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Right Div */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16">

            {/* Product */}
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Product
              </h2>

              <ul className="flex flex-col gap-3 text-sm text-gray-200">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
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
              <h2 className="text-lg font-semibold mb-4">
                Support
              </h2>

              <ul className="flex flex-col gap-3 text-sm text-gray-200">
               
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Contact Us
              </h2>

              <ul className="flex flex-col gap-3 text-sm text-gray-200">
                <li>
                  <a href="mailto:hello@example.com" className="hover:text-white">
                    hello@example.com
                  </a>
                </li>
                <li>
                  <a href="tel:+9779800000000" className="hover:text-white">
                    +977 9800000000
                  </a>
                </li>
                <li>
                  Kathmandu, Nepal
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col lg;items-center lg:justify-between text-sm text-gray-300">
        <span> 
          © 2026 Your Company. All rights reserved.
        </span>

        <div className="flex flex-col lg:gap-2 mt-2  gap-4">
          <span>
            Privacy Policy
          </span>
          <span>
            Term Of Service
          </span>
        </div>
        </div>

      </div>
    </footer>
  );
}

