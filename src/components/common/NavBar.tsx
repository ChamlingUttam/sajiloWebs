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
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#3E1647] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 md:px-10">

        <Link href="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/aaaa.png" alt="Sajilo Webs" className="h-8 w-8 rounded-md sm:h-9 sm:w-9" />
          <span className="hidden text-base font-semibold tracking-tight sm:block">Sajilo Webs</span>
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-medium md:flex lg:gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login">
            <Button variant="secondary" size="sm" className="transition-transform hover:scale-[1.03]">
              Login
            </Button>
          </Link>
          <Link href="/get-started">
            <Button size="sm" className="bg-[#FF751F] transition-transform hover:scale-[1.03] hover:bg-[#e15e0d]">
              Get Started
            </Button>
          </Link>
        </div>

        <button
          className="rounded-md p-2 transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-1 px-4 pt-4 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mx-4 my-4 border-t border-white/10" />

          <div className="flex flex-col gap-2.5 px-4 pb-5">
            <Link href="/login" onClick={() => setOpen(false)}>
              <Button variant="secondary" className="w-full">Login</Button>
            </Link>
            <Link href="/get-started" onClick={() => setOpen(false)}>
              <Button className="w-full bg-[#FF751F] hover:bg-[#e15e0d]">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}