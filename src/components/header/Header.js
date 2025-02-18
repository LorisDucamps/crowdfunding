"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/" },
    { label: "Discover", href: "/" },
    { label: "Get Started", href: "/" },
  ];

  const renderNavLinks = (isMobile = false) =>
    navLinks.map(({ label, href }) => (
      <li key={label}>
        <Link
          href={href}
          className={twMerge(
            "block",
            isMobile
              ? "text-lg p-6"
              : "text-white text-[13px] font-commissionerMedium hover:underline"
          )}
        >
          {label}
        </Link>
      </li>
    ));

  return (
    <header className="relative flex justify-between items-center max-w-[1440px] mx-auto before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[128px] before:bg-linear-gradient">
      {isOpen && (
        <div className="fixed inset-0 h-full background-linear z-10 sm:hidden"></div>
      )}

      <picture>
        <source
          media="(min-width: 641px)"
          srcSet="/assets/img/hero-desktop.webp 1x, /assets/img/hero-desktop_2x.webp 2x"
          type="image/jpg"
        />
        <source
          media="(max-width: 640px)"
          srcSet="/assets/img/hero-mobile.webp 1x, /assets/img/hero-mobile_2x.webp 2x"
          type="image/jpg"
        />
        <img
          src="/assets/img/hero-desktop.webp"
          alt="Visuel bannière bureau de travail"
        />
      </picture>

      <nav className="absolute top-4 left-0 right-0 max-w-[1110px] mx-auto w-full z-20 sm:top-12">
        <div className="flex justify-between items-center px-6">
          <Link href="/" className="block py-4 sm:p-0">
            <Image
              src="/assets/logos/logo.svg"
              alt="Logo CrowdFund"
              width={128}
              height={20}
              priority
            />
          </Link>

          <ul className="hidden sm:flex sm:gap-8">{renderNavLinks()}</ul>

          <button
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="pt-4 pl-4 pb-4 z-10 cursor-pointer sm:hidden"
          >
            <img
              src={
                isOpen ? "/assets/icons/close.svg" : "/assets/icons/menu.svg"
              }
              alt={isOpen ? "Close menu" : "Open menu"}
            />
          </button>
        </div>
      </nav>

      {isOpen && (
        <nav
          className="absolute top-[88px] right-0 left-0 px-6 z-20 sm:hidden"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <ul className="border border-light-black rounded-lg divide-y divide-medium-dark-charcoal bg-white">
            {renderNavLinks(true)}
          </ul>
        </nav>
      )}
    </header>
  );
}
