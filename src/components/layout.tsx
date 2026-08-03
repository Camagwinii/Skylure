import type { PropsWithChildren } from "react";
import { Header } from "./header";
import { FaWhatsapp } from "react-icons/fa";
import {
  Github,
  Linkedin,
  Instagram
} from "lucide-react";
export function Layout({ children }: PropsWithChildren) {
  return (
    <div className=" bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground text-center"> © {new Date().getFullYear()} Camagwiniii. All rights reserved. </p>
             <div className="flex items-center gap-5">
              <a href="https://github.com/Camagwinii" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition-all duration-200 hover:text-purple-900 hover:scale-110" > <Github size={19} /> </a>
              <a href="https://www.linkedin.com/in/asithandile-fini-799b37360/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-all duration-200 hover:text-[#0A66C2] hover:scale-110" > <Linkedin size={19} /> </a>
              <a href="https://instagram.com/camagwiniii/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground transition-all duration-200 hover:text-[#E4405F] hover:scale-110" > <Instagram size={19} /> </a>
              <a href="https://wa.me/27697847058" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-muted-foreground transition-all duration-200 hover:text-[#25D366] hover:scale-110"><FaWhatsapp size={19} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
