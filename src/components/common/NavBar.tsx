import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Price", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="mt-5 w-full px-4 text-white md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/aaaa.png"
              alt="Logo"
              className="h-9 w-9 cursor-pointer rounded-md"
            />
          </Link>
        </div>

        {/* Nav links */}
        <div>
          <ul className="flex cursor-pointer items-center gap-2.5 text-sm font-medium md:gap-4 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-gray-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons - hidden on mobile */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login">
            <Button variant="secondary" className="cursor-pointer">
              Login
            </Button>
          </Link>

          <Link href="/get-started">
            <Button className="cursor-pointer bg-[#FF751F] hover:bg-[#e15e0d]">
              Get Started
            </Button>
          </Link>
        </div>

      </div>
    </nav>
  );
}