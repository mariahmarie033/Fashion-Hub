import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedText } from "@/components/ui/AnimatedText";

import heroImg from "@/assets/images/hero.png";
import collection1Img from "@/assets/images/collection-1.png";
import collection2Img from "@/assets/images/collection-2.png";
import collection3Img from "@/assets/images/collection-3.png";
import editorial1Img from "@/assets/images/editorial-1.png";
import editorial2Img from "@/assets/images/editorial-2.png";
import editorial3Img from "@/assets/images/editorial-3.png";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2], ["0%", "-50%"]);

  return (
    <div className="bg-background text-foreground overflow-hidden" ref={containerRef}>
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="relative h-[100dvh] w-full overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img 
            src={heroImg} 
            alt="VEIL Lookbook Hero" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <motion.div style={{ y: textY }} className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-9xl lg:text-[12rem] font-serif font-extrabold tracking-tighter uppercase leading-none"
            >
              VEIL
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-6 font-mono text-sm md:text-base tracking-[0.3em] uppercase text-gray-300"
            >
              Collection 01 / Deliberate Void
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-xs tracking-widest uppercase flex flex-col items-center gap-2"
        >
          <span>Scroll</span>
          <div className="w-px h-12 bg-white/50 overflow-hidden relative">
            <motion.div 
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-0 bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: MARQUEE / MANIFESTO */}
      <section className="py-32 overflow-hidden bg-background border-y border-border">
        <div className="flex whitespace-nowrap opacity-80">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex text-5xl md:text-8xl font-serif font-bold tracking-tighter text-stroke-transparent"
          >
            <span className="px-8">RAW BUT REFINED.</span>
            <span className="px-8">EDGE WITHOUT AGGRESSION.</span>
            <span className="px-8">DRESS WITH INTENTION.</span>
            <span className="px-8">RAW BUT REFINED.</span>
            <span className="px-8">EDGE WITHOUT AGGRESSION.</span>
            <span className="px-8">DRESS WITH INTENTION.</span>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: FEATURED COLLECTION */}
      <section className="py-32 px-6 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <AnimatedText 
            text="Selected Works" 
            className="text-4xl md:text-6xl font-serif font-bold tracking-tighter" 
          />
          <Link href="/" className="font-mono text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors border-b border-border pb-1">
            View All [12]
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { img: collection1Img, name: "Oversized Void Trench", price: "$420", desc: "Heavyweight technical cotton" },
            { img: collection2Img, name: "Structure Crop & Wide Leg", price: "$280", desc: "Textured linen blend" },
            { img: collection3Img, name: "Macro Utility Hoodie", price: "$195", desc: "450gsm brushed terry" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-card">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  src={item.img} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-mono text-sm tracking-widest bg-white text-black px-6 py-3 uppercase">Quick View</span>
                </div>
              </div>
              <div className="flex justify-between items-start font-mono text-sm mt-auto">
                <div>
                  <h3 className="uppercase tracking-wider mb-1 group-hover:text-muted-foreground transition-colors">{item.name}</h3>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </div>
                <span className="tracking-wider">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: EDITORIAL SCROLL */}
      <section className="py-32 px-6 bg-card border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <img src={editorial1Img} alt="Editorial 1" className="w-full aspect-[4/5] object-cover" />
            </motion.div>
            
            <div className="space-y-12">
              <AnimatedText 
                text="Form Meets Function in the Concrete Void"
                className="text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-[1.1]"
              />
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-muted-foreground font-mono leading-relaxed max-w-md text-sm md:text-base"
              >
                We strip away the non-essential to reveal the architecture of the garment. Every seam, every drop shoulder, every raw hem is placed with intent. This is not about standing out through noise, but through presence.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Link href="/" className="inline-flex items-center gap-4 font-mono text-sm tracking-widest uppercase border-b border-white pb-2 hover:text-muted-foreground hover:border-muted-foreground transition-all">
                  Read the Manifesto
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2 }}
                className="pt-16 lg:pt-32 ml-auto w-3/4"
              >
                <img src={editorial2Img} alt="Editorial 2" className="w-full aspect-square object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PHILOSOPHY GRID */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <div className="space-y-16">
            <AnimatedText 
              text="The Space Between"
              className="text-4xl md:text-5xl font-serif font-bold tracking-tighter"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-muted-foreground font-mono text-sm leading-relaxed"
            >
              <p>
                VEIL exists in the liminal spaces. Between structure and fluidity. Between East LA industrialism and Tokyo minimalism. We design for the silhouette, not the gender.
              </p>
              <p>
                Clothing should not dictate who you are; it should amplify it. Our pieces act as a canvas—a deliberate choice in an era of fast, disposable culture.
              </p>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex items-end justify-end h-full"
          >
            <div className="font-serif text-2xl md:text-4xl tracking-tighter leading-tight max-w-md border-l-2 border-border pl-8 py-4">
              "To dress with intention is an act of rebellion."
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: FULL WIDTH MACRO / CONCEPT */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={editorial3Img} alt="Concept flat lay" className="w-full h-full object-cover opacity-50" />
        </motion.div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <AnimatedText 
            text="CLOTHING AS ARCHITECTURE."
            className="text-4xl md:text-7xl font-serif font-bold tracking-tighter mb-8 justify-center"
          />
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5, duration: 1 }}
          >
            <Link href="/" className="px-8 py-4 bg-white text-black font-mono text-sm tracking-widest uppercase hover:bg-white/90 transition-colors inline-block">
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: NEWSLETTER */}
      <section className="py-32 px-6 bg-card border-y border-border">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <AnimatedText 
            text="Join the Void"
            className="text-4xl md:text-6xl font-serif font-bold tracking-tighter justify-center"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-muted-foreground font-mono text-sm uppercase tracking-widest"
          >
            Subscribe for early access to Collection 02 and exclusive editorial content.
          </motion.p>
          
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="flex-1 bg-transparent border-b border-border px-4 py-3 font-mono text-sm uppercase tracking-widest focus:outline-none focus:border-white transition-colors"
              required
            />
            <button 
              type="submit"
              className="bg-white text-black px-8 py-3 font-mono text-sm uppercase tracking-widest hover:bg-white/90 transition-colors"
            >
              Subscribe
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
