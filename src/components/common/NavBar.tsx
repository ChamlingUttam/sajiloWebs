"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "Price", href: "/pricing" },
    { name: "Blog", href: "/our-blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full  bg-[#3E1647] text-white">
      <div className="mx-auto w-full flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 md:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <img
            src="/aaaa.png"
            alt="Sajilo Webs"
            className="h-8 w-8 rounded-md sm:h-9 sm:w-9"
          />
          <span className="hidden text-base font-semibold tracking-tight lg:block">
            Sajilo Webs
          </span>
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-medium md:flex lg:gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 transition-colors text-md lg:text-xl hover:text-white"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href={`${process.env.NEXT_PUBLIC_APP_URL}`}>
            <Button
              variant="secondary"
              size="sm"
              className="px-5 transition-transform hover:scale-[1.03]"
            >
              Login
            </Button>
          </a>
          <a href={`${process.env.NEXT_PUBLIC_APP_URL}/login?email=hotel@gmail.com&password=12345678`}
>
            <Button
              size="sm"
              className="bg-[#FF751F] text-[#EDE8EE] transition-transform px-4 hover:scale-[1.03] hover:bg-[#e15e0d]"
            >
              Demo
            </Button>
          </a>
        </div>

        <button
          className="rounded-md p-2 transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Dim backdrop */}
      <div
        className={`fixed inset-0 z-70 bg-black/40 transition-opacity duration-300 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Right-side drawer */}
      <div
  className={`fixed inset-y-0 right-0 z-80 flex h-full w-[80%] flex-col bg-white text-[#3E1647] shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
>
{/* Drawer header */}
<div className="flex items-center justify-between px-5 py-4">
  <div className="flex items-center gap-2.5">
    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#3E1647] shrink-0">
      <img src="/aaaa.png" alt="Sajilo Webs" width={20} height={20} className="h-5 w-5 object-contain" />
    </div>
    <span className="text-base font-semibold tracking-tight text-[#3E1647]">Sajilo Webs</span>
  </div>
  <button
    className="rounded-md p-1.5 text-gray-500 transition-colors hover:bg-gray-100"
    onClick={() => setOpen(false)}
    aria-label="Close menu"
  >
    <X size={22} />
  </button>
</div>

        {/* Links */}
        <ul className="flex flex-col gap-1 px-5 pt-2 text-base font-medium">
          {navItems.map((item, i) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-2 py-3 transition-colors hover:bg-gray-50 ${
                  i === 0 ? "text-[#3E1647] font-semibold" : "text-gray-800"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex-1" />

        <div className="border-t border-gray-100 p-5 flex flex-col gap-2.5">
          <a href={`${process.env.NEXT_PUBLIC_APP_URL}`} onClick={() => setOpen(false)}>
            <Button
              variant="outline"
              className="w-full border-[#3E1647]/20 py-4 text-base text-[#3E1647] hover:bg-gray-50"
            >
              Login
            </Button>
          </a>
          <a href={`${process.env.NEXT_PUBLIC_APP_URL}?email=hotel@gmail.com&password=12345678`} onClick={() => setOpen(false)}>
            <Button className="w-full bg-[#3E1647] text-[#EDE8EE] py-4 text-base hover:bg-[#4d1c59]">
              Get Started 
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
