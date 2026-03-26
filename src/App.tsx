import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Star, Facebook, Linkedin, ChevronDown, X } from "lucide-react";
import { ParticleBackground } from "./components/ParticleBackground";

export default function App() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white selection:bg-[#a60724]/30">
      <ParticleBackground />

      {/* Global Grid Lines */}
      <div className="absolute inset-x-0 top-0 h-full pointer-events-none z-0 overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full stroke-white/5 [mask-image:radial-gradient(100%_70%_at_top_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="80"
              height="80"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4 md:py-6 mx-auto max-w-7xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#a60724] flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border-2 border-white" />
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:inline">Takeover Marketing</span>
          <span className="text-xl font-bold tracking-tight sm:hidden">Takeover</span>
        </div>
        
        <div className="flex items-center gap-4 md:gap-8 font-medium text-zinc-400">
          <a href="#features" className="text-xs md:text-sm hover:text-white transition-colors">Features</a>
          <a href="#testimonials" className="hidden md:block text-sm hover:text-white transition-colors">Testimonials</a>
          <a href="/blog" className="hidden md:block text-sm hover:text-white transition-colors">Blog</a>
          <button className="group relative px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-sm rounded-full bg-zinc-900 border border-white/10 shadow-[0_2px_8px_-2px_rgba(166,7,36,0.3)] hover:border-[#a60724]/40 hover:shadow-[0_-4px_12px_-4px_rgba(166,7,36,0.4),0_4px_12px_-4px_rgba(166,7,36,0.4)] transition-all text-white">
            <span className="relative z-10">Book a Call</span>
            <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#a60724] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
            <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#a60724] to-transparent transition-opacity duration-300 group-hover:opacity-0 z-20" />
          </button>
        </div>
      </nav>

      {/* Hero Section - Replicating "Unleash the power of intuitive finance" */}
      <section className="relative z-10 pt-10 md:pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-h1 mb-8 bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent"
          >
            Unleash the power of intuitive marketing
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-body text-zinc-400 mb-12 max-w-2xl mx-auto"
          >
            Say goodbye to outdated growth tools. Every business owner, regardless of their background, can now scale their brand like a pro. Simple. Intuitive. And never boring.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-6"
          >
            <button className="group relative px-8 py-4 rounded-full bg-zinc-950 border border-white/10 shadow-[0_4px_12px_-4px_rgba(166,7,36,0.3)] transition-all hover:border-[#a60724]/40 hover:shadow-[0_-8px_20px_-6px_rgba(166,7,36,0.3),0_8px_20px_-6px_rgba(166,7,36,0.3)]">
              <span className="relative z-10 font-medium">Book a Call</span>
              <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#a60724] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#a60724] to-transparent transition-opacity duration-300 group-hover:opacity-0 z-20" />
            </button>
            <a href="#features" className="flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors group text-sm">
              Learn more
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Dashboard Preview Replicated */}
        <motion.div 
          initial={{ opacity: 0, y: 40, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="mt-24 max-w-6xl mx-auto rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl shadow-2xl overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-zinc-800/50 border border-white/5">
                <p className="text-sm text-zinc-500 mb-1">Leads today</p>
                <p className="text-2xl font-bold">1,036</p>
                <div className="mt-2 text-xs text-emerald-500">+21% from yesterday</div>
              </div>
              <div className="p-6 rounded-xl bg-zinc-800/50 border border-white/5">
                <p className="text-sm text-zinc-500 mb-1">Conversion Rate</p>
                <p className="text-2xl font-bold">4.82%</p>
                <div className="mt-2 text-xs text-zinc-500">Real-time tracking</div>
              </div>
              <div className="p-6 rounded-xl bg-zinc-800/50 border border-white/5">
                <p className="text-sm text-zinc-500 mb-1">Ad Spend</p>
                <p className="text-2xl font-bold">$12,490</p>
                <div className="mt-2 text-xs text-rose-500">8% over budget</div>
              </div>
            </div>
            <div className="mt-8 h-64 rounded-xl bg-zinc-800/30 border border-white/5 flex items-end p-6 gap-2">
              {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85, 60, 100].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-[#a60724]/20 border-t-2 border-[#a60724] rounded-t-sm" 
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Value Propositions */}
      <section id="features" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-h2 mb-4 bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">Everything you need. Nothing you don't.</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Our platform is built to scale with your business, providing the tools you need at every stage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl border border-white/5 bg-zinc-900/30"
            >
              <div className="w-12 h-12 rounded-xl bg-[#a60724]/20 flex items-center justify-center mb-6">
                <CheckCircle2 className="text-[#a60724]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Campaigns</h3>
              <p className="text-zinc-400">Automate your ad spend and campaign tracking with AI-powered optimization that learns from your audience behavior.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl border border-white/5 bg-zinc-900/30"
            >
              <div className="w-12 h-12 rounded-xl bg-[#a60724]/20 flex items-center justify-center mb-6">
                <Star className="text-[#a60724]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Growth Insights</h3>
              <p className="text-zinc-400">Get instant clarity on your ROI with beautiful visualizations and predictive analytics that help you scale faster.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl border border-white/5 bg-zinc-900/30"
            >
              <div className="w-12 h-12 rounded-xl bg-[#a60724]/20 flex items-center justify-center mb-6">
                <ArrowRight className="text-[#a60724]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
              <p className="text-zinc-400">Connect with over 5,000+ apps and banks. Your data flows securely and automatically, keeping your books up to date.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proof & Testimonials */}
      <section id="testimonials" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 mb-8 bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">Trusted by the next generation of founders</h2>
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10">
                  <p className="text-lg italic text-zinc-300 mb-4">"Takeover Marketing has completely transformed how we handle our growth. It's the first time I've actually enjoyed looking at our conversion metrics."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800" />
                    <div>
                      <p className="font-semibold">Sarah Jenkins</p>
                      <p className="text-sm text-zinc-500">Founder @ TechFlow</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10">
                  <p className="text-lg italic text-zinc-300 mb-4">"The AI insights are a game changer. It caught a subscription leak that saved us $2k a month."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800" />
                    <div>
                      <p className="font-semibold">Marcus Chen</p>
                      <p className="text-sm text-zinc-500">CEO @ CreativePulse</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#a60724]/20 blur-3xl rounded-full" />
              <img 
                src="https://picsum.photos/seed/finance-red/800/600" 
                alt="Testimonial Proof" 
                className="relative rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-48 px-6 overflow-hidden">
        {/* Local Grid for this section */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 h-full w-full stroke-white/5 [mask-image:radial-gradient(50%_50%_at_center,white,transparent)]" aria-hidden="true">
            <defs>
              <pattern id="cta-grid" width="80" height="80" x="50%" y="50%" patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#cta-grid)" />
          </svg>
          <div className="absolute inset-x-0 bottom-0 h-96 bg-[#a60724]/5 blur-[120px] rounded-full translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
            See where marketing automation can <br /> take your business.
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            The first marketing tool you'll love. And the last one you'll ever need.
          </p>
          <button className="group relative px-8 py-3 rounded-full bg-zinc-950 border border-white/20 shadow-[0_4px_12px_-4px_rgba(166,7,36,0.3)] hover:border-[#a60724]/40 hover:shadow-[0_-8px_20px_-6px_rgba(166,7_36,0.3),0_8px_20px_-6px_rgba(166,7,36,0.3)] transition-all text-sm font-medium">
            <span className="relative z-10">Book a Call</span>
            <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#a60724] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
            <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#a60724] to-transparent transition-opacity duration-300 group-hover:opacity-0 z-20" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-500">
              <span>© 2026 Takeover Marketing Inc.</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><X className="w-4 h-4" /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>
          <div className="text-[10px] leading-relaxed text-zinc-600 max-w-4xl">
            Takeover Marketing is a trademark or registered trademark of Takeover Marketing Technologies Inc. Any other trademarks are the property of their respective owners. Unless otherwise noted, use of third party logos does not imply endorsement of, sponsorship of, or affiliation with Takeover Marketing.
            <br /><br />
            Takeover Marketing is a marketing technology company, not an agency. Marketing services are provided by our automated platform and verified partners.
          </div>
        </div>
      </footer>
    </div>
  );
}
