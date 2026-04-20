import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Background noise/texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-[8rem] md:text-[16rem] font-serif font-bold tracking-tighter leading-none text-stroke-transparent select-none">
            404
          </h1>
          
          <div className="max-w-md mx-auto -mt-8 md:-mt-16 bg-background/80 backdrop-blur-sm p-6 relative z-20">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 uppercase tracking-tighter">Void Reached.</h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-8 uppercase tracking-widest">
              The page you are looking for has been removed, relocated, or never existed in this dimension.
            </p>
            
            <Link 
              href="/" 
              className="inline-block px-8 py-4 border border-border font-mono text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
            >
              Return to Surface
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
