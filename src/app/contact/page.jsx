"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  ArrowUpRight,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Header from "@/components/sectionHeader";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // DIRECT SEND VIA EMAILJS
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setStatus("success");
          e.target.reset(); // Clear the form

          // Reset status after 5 seconds
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.log("Error:", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-24 px-4 bg-stone-950 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16">
          <Header name="Contact" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 bg-zinc-900/30 backdrop-blur-md border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          {/* --- LEFT PANEL --- */}
          <div className="lg:col-span-2 p-10 bg-zinc-900/50 border-r border-zinc-800 flex flex-col justify-between relative">
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
                  Got an idea? Let's compile it into reality.
                </p>
              </div>

              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <label className="text-xs font-mono text-emerald-500 mb-1 block uppercase tracking-wider">
                    // MAIL_TO
                  </label>
                  <div className="flex items-center gap-3 text-zinc-300 group-hover:text-white transition-colors">
                    <Mail size={18} />
                    <span className="text-lg">dhjr.dev@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-10 p-4 bg-black/40 rounded-lg border border-zinc-800/50 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-500">
                SYSTEM ONLINE
              </span>
            </div>
          </div>

          {/* --- RIGHT PANEL (FORM) --- */}
          <div className="lg:col-span-3 p-10 bg-transparent">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-10">
              {/* NAME INPUT */}
              <div className="group relative">
                <label className="text-xs font-mono text-zinc-500 mb-2 block group-focus-within:text-emerald-500 transition-colors">
                  // ENTER_NAME <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="name" // Matches {{name}} in EmailJS
                  required
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-zinc-700/50"
                />
              </div>

              {/* EMAIL INPUT */}
              <div className="group relative">
                <label className="text-xs font-mono text-zinc-500 mb-2 block group-focus-within:text-emerald-500 transition-colors">
                  // ENTER_EMAIL <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  name="email" // Matches {{email}} in EmailJS
                  required
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-zinc-700/50"
                />
              </div>

              {/* MESSAGE INPUT */}
              <div className="group relative">
                <label className="text-xs font-mono text-zinc-500 mb-2 block group-focus-within:text-emerald-500 transition-colors">
                  // EXECUTE_MESSAGE <span className="text-rose-500">*</span>
                </label>
                <textarea
                  name="message" // Matches {{message}} in EmailJS
                  required
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-zinc-700/50 resize-none"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`
                        group relative px-8 py-4 font-bold font-mono uppercase tracking-wider overflow-hidden rounded-sm transition-all duration-300 w-full md:w-auto
                        ${
                          status === "success"
                            ? "bg-emerald-500 text-black cursor-default"
                            : "bg-white text-black hover:bg-emerald-400"
                        }
                        ${
                          status === "error"
                            ? "bg-rose-500 hover:bg-rose-400"
                            : ""
                        }
                    `}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status === "idle" && (
                    <>
                      Transmit_Data <ArrowUpRight size={16} />
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      Transmitting{" "}
                      <Loader2 size={16} className="animate-spin" />
                    </>
                  )}
                  {status === "success" && (
                    <>
                      Data_Received <CheckCircle size={16} />
                    </>
                  )}
                  {status === "error" && (
                    <>
                      Transmission_Failed <AlertCircle size={16} />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
