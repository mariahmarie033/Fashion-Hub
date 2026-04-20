import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter mb-6">VEIL</h2>
          <p className="text-muted-foreground font-mono max-w-sm text-sm leading-relaxed">
            Raw but refined. Edge without aggression. Built for people who dress with intention. East LA warehouse meets Tokyo minimalism.
          </p>
        </div>
        
        <div>
          <h3 className="font-mono text-sm uppercase tracking-widest mb-6">Explore</h3>
          <ul className="space-y-4 font-mono text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-foreground transition-colors">New Arrivals</Link></li>
            <li><Link href="/" className="hover:text-foreground transition-colors">Outerwear</Link></li>
            <li><Link href="/" className="hover:text-foreground transition-colors">Tops</Link></li>
            <li><Link href="/" className="hover:text-foreground transition-colors">Bottoms</Link></li>
            <li><Link href="/" className="hover:text-foreground transition-colors">Accessories</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-sm uppercase tracking-widest mb-6">Connect</h3>
          <ul className="space-y-4 font-mono text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">TikTok</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Newsletter</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} VEIL. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/" className="hover:text-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
