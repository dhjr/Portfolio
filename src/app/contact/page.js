import { Mail, MapPin, ArrowUpRight, Copy, Terminal } from "lucide-react";
import Header from "@/components/sectionHeader"; // Assuming your header path

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-24 px-4 bg-stone-950 overflow-hidden"
    >
      {/* Background Decor: A faint spotlight to highlight the form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Your Custom Header */}
        <div className="mb-16">
          <Header name="Contact" />
        </div>

        {/* MAIN GLASS CARD CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-5 bg-zinc-900/30 backdrop-blur-md border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          {/* --- LEFT COLUMN: INFO & CONTEXT (2/5 width) --- */}
          <div className="lg:col-span-2 p-10 bg-zinc-900/50 border-r border-zinc-800 flex flex-col justify-between relative">
            {/* Decorative Grid Background for left panel */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            ></div>

            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="text-2xl text-white font-bold font-1boldonse tracking-wide mb-2">
                  Let's Collaborate
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  I am currently open for freelance projects and full-time
                  engineering roles. Got an idea? Let's compile it into reality.
                </p>
              </div>

              {/* Quick Info Blocks */}
              <div className="space-y-6">
                {/* Email Block */}
                <div className="group cursor-pointer">
                  <label className="text-xs font-mono text-emerald-500 mb-1 block uppercase tracking-wider">
                    // MAIL_TO
                  </label>
                  <div className="flex items-center gap-3 text-zinc-300 group-hover:text-white transition-colors">
                    <Mail size={18} />
                    <span className="text-lg">hello@dhananjay.dev</span>
                    <Copy
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500"
                    />
                  </div>
                </div>

                {/* Location Block */}
                <div>
                  <label className="text-xs font-mono text-zinc-600 mb-1 block uppercase tracking-wider">
                    // CURRENT_LOCATION
                  </label>
                  <div className="flex items-center gap-3 text-zinc-400">
                    <MapPin size={18} />
                    <span>Kerala, India (IST)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status Indicator */}
            <div className="relative z-10 mt-10 p-4 bg-black/40 rounded-lg border border-zinc-800/50 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-500">
                SYSTEM ONLINE: ACCEPTING REQS
              </span>
            </div>
          </div>

          {/* --- RIGHT COLUMN: THE FORM (3/5 width) --- */}
          <div className="lg:col-span-3 p-10 bg-transparent">
            <form className="space-y-10">
              {/* NAME INPUT */}
              <div className="group relative">
                <label className="text-xs font-mono text-zinc-500 mb-2 block group-focus-within:text-emerald-500 transition-colors">
                  // ENTER_NAME <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-zinc-700"
                />
              </div>

              {/* EMAIL INPUT */}
              <div className="group relative">
                <label className="text-xs font-mono text-zinc-500 mb-2 block group-focus-within:text-emerald-500 transition-colors">
                  // ENTER_EMAIL <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-zinc-700"
                />
              </div>

              {/* MESSAGE INPUT */}
              <div className="group relative">
                <label className="text-xs font-mono text-zinc-500 mb-2 block group-focus-within:text-emerald-500 transition-colors">
                  // EXECUTE_MESSAGE <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-zinc-700 resize-none"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="button" // Change to 'submit' when logic is ready
                className="group relative px-8 py-4 bg-white text-black font-bold font-mono uppercase tracking-wider overflow-hidden rounded-sm hover:bg-emerald-400 transition-colors duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Transmit_Data <ArrowUpRight size={16} />
                </span>
                {/* Hover Effect Layer (Optional) */}
                <div className="absolute inset-0 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-0"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
