"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { LuAlignJustify } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavItem = ({ href, label }: { href: string; label: string }) => (
    <li>
      <Link href={href} className="text-black hover:text-golden hover:underline">
        {label}
      </Link>
    </li>
  );

  return (
    <nav className="sticky top-0 z-50 h-[100px] w-full bg-white border-b border-gray-200 flex items-center justify-center">
      <div className="h-[41px] w-[90%] md:w-[1280px] flex items-center justify-between">
        {/* Logo */}
        <Image src="/images/logo.png" alt="logo" width={185} height={41} priority />

{/* Desktop Navigation */}
<div className="hidden md:flex h-[24px]">
  <ul className="flex items-center justify-between w-[430px] gap-4">
    {[
      { href: "/", label: "Home" },
      { href: "/shop", label: "Shop" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ].map((item, index) => (
      <li key={index}>
        <NavItem href={item.href} label={item.label} />
      </li>
    ))}
  </ul>
</div>


        {/* Desktop Icons */}
        <div className="hidden md:flex h-[24px] w-[290px] justify-between">
          <span className="hover:bg-gray-200 rounded-md">
            <Image src="/images/profile.png" alt="profile" width={28} height={28} />
          </span>
          <span className="hover:bg-gray-200 rounded-md">
            <Image src="/images/search.png" alt="search" width={28} height={28} />
          </span>
          <span className="hover:bg-gray-200 rounded-md">
            <Image src="/images/heart.png" alt="wishlist" width={28} height={28} />
          </span>
          <Link href="/cart">
            <span className="hover:bg-gray-200 rounded-md">
              <Image src="/images/shopping-cart.png" alt="cart" width={28} height={28} />
            </span>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex text-black">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <RxCross1 size={24} /> : <LuAlignJustify size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="absolute top-28 z-10 w-[95%] pb-10 border-t-2 border-b border-gray-200 bg-white"
        >
          <ul className="flex flex-col gap-2 px-4 py-2">
            <NavItem href="/" label="Home" />
            <NavItem href="/shop" label="Shop" />
            <NavItem href="/blog" label="Blog" />
            <NavItem href="/contact" label="Contact" />
          </ul>
          <div className="flex mx-2 justify-between">
            <span className="hover:bg-gray-200 rounded-md">
              <Image src="/images/profile.png" alt="profile" width={28} height={28} />
            </span>
            <span className="hover:bg-gray-200 rounded-md">
              <Image src="/images/search.png" alt="search" width={28} height={28} />
            </span>
            <span className="hover:bg-gray-200 rounded-md">
              <Image src="/images/heart.png" alt="wishlist" width={28} height={28} />
            </span>
            <span className="hover:bg-gray-200 rounded-md">
              <Image src="/images/shopping-cart.png" alt="cart" width={28} height={28} />
            </span>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
