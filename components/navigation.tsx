"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";

export function Navigation() {
  const navItems = [
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Our Work",
      link: "#work",
    },
    {
      name: "Capabilities",
      link: "#capabilities",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <Navbar className={isAtTop ? "w-auto" : "w-96"}>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <NavbarButton
          variant="primary"
          onClick={() => scrollToSection("contact")}
        >
          Let&apos;s Build
        </NavbarButton>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <button
              key={`mobile-link-${idx}`}
              onClick={() => {
                const sectionId = item.link.replace('#', '');
                scrollToSection(sectionId);
              }}
              className="block w-full text-left px-3 py-2 text-white hover:text-white/80 transition-all duration-300 font-medium hover:bg-white/10 rounded-lg"
            >
              {item.name}
            </button>
          ))}
          <div className="flex w-full flex-col gap-4 mt-4">
            <NavbarButton
              onClick={() => {
                scrollToSection("contact");
                setIsMobileMenuOpen(false);
              }}
              variant="primary"
              className="w-full"
            >
              Let&apos;s Build
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
