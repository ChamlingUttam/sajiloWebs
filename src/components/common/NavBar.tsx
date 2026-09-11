
import { Button } from "@/src/components/ui/button";

export default function Navbar() {
  const navItems = ["Home", "Features", "Price", "Blog", "Contact"];

  return (
    <nav className="w-full px-4 md:px-10 mt-5 text-white bg-[#3E1647]">
      <div className="flex items-center justify-between max-w-7xl mx-auto py-4">

        {/* Logo */}
        <div className="flex -px-2 items-center">
          <img
            src="/aaaa.png"
            alt="Logo"
            className="h-9 w-9 rounded-md cursor-pointer"
          />
        </div>

        {/* Nav links */}
        <div>
          <ul className="flex items-center gap-2.5 md:gap-4 lg:gap-8 cursor-pointer text-sm font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <a className="hover:text-gray-400 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons - hidden on mobile */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="secondary" className="cursor-pointer">
            Login
          </Button>

          <Button className="bg-[#FF751F] hover:bg-[#e15e0d] cursor-pointer">
            Get Started
          </Button>
        </div>

      </div>
    </nav>
  );
}
