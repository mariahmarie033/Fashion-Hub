import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.9)"]
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(8px)"]
  );

  return (
    <>
      <motion.nav
        style={{ backgroundColor, backdropFilter }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif tracking-widest font-bold z-50">
            VEIL
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12 text-sm font-mono tracking-widest uppercase">
            <Link href="/" className="hover:text-muted-foreground transition-colors">Collection</Link>
            <Link href="/" className="hover:text-muted-foreground transition-colors">Editorial</Link>
            <Link href="/" className="hover:text-muted-foreground transition-colors">Concept</Link>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-mono tracking-widest uppercase">
            <button className="hover:text-muted-foreground transition-colors">Search</button>
            <button className="hover:text-muted-foreground transition-colors">Cart (0)</button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={isOpen ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
        className="fixed inset-0 z-40 bg-background flex items-center justify-center"
      >
        <div className="flex flex-col items-center gap-8 text-2xl font-serif tracking-widest">
          <Link href="/" onClick={() => setIsOpen(false)}>Collection</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>Editorial</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>Concept</Link>
          <div className="h-px w-12 bg-border my-4" />
          <button className="text-lg font-mono">Search</button>
          <button className="text-lg font-mono">Cart (0)</button>
        </div>
      </motion.div>
    </>
  );
}
