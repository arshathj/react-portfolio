const navLinks = [
  { href: "#About", label: "About"},
  { href: "#Projects", label: "Projects"},
  { href: "#Experience", label: "Experience"},
  { href: "#Testimonials", label: "Testimonials"},
  // { href: "#Contact", label: "Contact"},
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a 
        href="#" className="text-2xl font-bold tracking-tight  hover:text-primary"
        >
          Arshath J<span className="text-primary">.</span>
        </a>
        {/* Desktop Navbar */}
        <div>
          <div>
            {navLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
    );
} 