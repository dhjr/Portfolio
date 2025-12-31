"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  ArrowUpRight,
  Loader2,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Header from "@/components/customComponents/SectionHeader";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'

  const socialLinks = [
    { icon: Github, href: "https://github.com/dhjr", label: "Github" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/dhananjayr",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/dhananjayr_", label: "Twitter" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/dhananjayr_/",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@letthedevscook",
      label: "YouTube",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatus("success");
          e.target.reset();
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full min-h-dvh py-24 px-4 relative bg-transparent transition-colors duration-300 overflow-hidden"
    >

      <div className="max-w-5xl mx-auto relative z-10">
        {/* <div className="mb-10">
          <Header name="Contact" />
        </div> */}

        {/* MAIN CARD CONTAINER */}
<div className="
  grid grid-cols-1 lg:grid-cols-5 rounded-3xl overflow-hidden 
  border border-zinc-200 dark:border-zinc-800
  shadow-2xl shadow-black/5
  dark:shadow-[10px_10px_30px_#050505,-5px_-5px_30px_#1a1a1a] bg-zinc-50/95 dark:bg-zinc-900/50
">
          {/* --- LEFT PANEL --- */}
          <div
            className="
            lg:col-span-2 p-10 flex flex-col justify-between relative border-r
            
            /* Light Mode */
            bg-white/95 border-zinc-200
            
            /* Dark Mode */
            dark:bg-zinc-900/60 dark:border-zinc-800/50 
          "
          >

            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-1boldonse tracking-wide mb-2 text-zinc-900 dark:text-white transition-colors">
                  Let's Connect
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 font-1spaceGrotesk">
                  Got an idea? Let's compile it into reality.
                </p>
              </div>

              <div className="space-y-8">
                {/* MAIL SECTION */}
                <div className="group cursor-pointer">
                  <label className="text-xs font-mono text-emerald-600 dark:text-emerald-500 mb-2 block uppercase tracking-wider">
                     MAIL_TO
                  </label>
                  <a
                    href="mailto:dhjr.dev@gmail.com"
                    className="flex items-center gap-3 transition-colors text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                  >
                    <Mail size={18} />
                    <span className="font-1spaceGrotesk text-lg">dhjr.dev@gmail.com</span>
                  </a>
                </div>

                {/* SOCIALS SECTION */}
                <div>
                  <label className="text-xs font-mono text-emerald-600 dark:text-emerald-500 mb-3 block uppercase tracking-wider">
                     SOCIAL_NETWORKS
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        className="
                          p-3 rounded-lg border transition-all duration-300 group
                          
                          /* Light Mode */
                          bg-white border-zinc-200 text-zinc-600 hover:text-emerald-600 hover:border-emerald-500 hover:shadow-md
                          
                          /* Dark Mode */
                          dark:bg-zinc-800/50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:text-white dark:hover:border-emerald-500/50 dark:hover:bg-zinc-800
                        "
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="
              relative z-10 mt-10 p-4 rounded-lg border flex items-center gap-3
              bg-white/50 border-zinc-200
              dark:bg-black/40 dark:border-zinc-800/50
            "
            >
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-500">
                SYSTEM ONLINE
              </span>
            </div>
          </div>

          {/* --- RIGHT PANEL (FORM) --- */}
          <div className="lg:col-span-3 px-10 pb-10 md:py-10 bg-transparent">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-10">
              {/* NAME INPUT */}
              <div className="group relative">
                <label className="text-xs font-mono mb-2 block transition-colors text-zinc-500 group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-500">
                   ENTER_NAME <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="
                    w-full bg-transparent border-b py-3 transition-all focus:outline-none 
                    border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500
                    dark:border-zinc-800 dark:text-white dark:placeholder:text-zinc-700/50 dark:focus:border-emerald-500
                  "
                />
              </div>

              {/* EMAIL INPUT */}
              <div className="group relative">
                <label className="text-xs font-mono mb-2 block transition-colors text-zinc-500 group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-500">
                   ENTER_EMAIL <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="
                    w-full bg-transparent border-b py-3 transition-all focus:outline-none 
                    border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500
                    dark:border-zinc-800 dark:text-white dark:placeholder:text-zinc-700/50 dark:focus:border-emerald-500
                  "
                />
              </div>

              {/* MESSAGE INPUT */}
              <div className="group relative">
                <label className="text-xs font-mono mb-2 block transition-colors text-zinc-500 group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-500">
                   EXECUTE_MESSAGE <span className="text-rose-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="
                    w-full bg-transparent border-b py-3 transition-all focus:outline-none resize-none
                    border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500
                    dark:border-zinc-800 dark:text-white dark:placeholder:text-zinc-700/50 dark:focus:border-emerald-500
                  "
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
                            : "bg-zinc-900 text-white hover:bg-emerald-500 hover:text-white dark:bg-white dark:text-black dark:hover:bg-emerald-400"
                        }
                        ${
                          status === "error"
                            ? "bg-rose-500 hover:bg-rose-400 text-white"
                            : ""
                        }
                    `}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status === "idle" && (
                    <>
                      Send mail <ArrowUpRight size={16} />
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
