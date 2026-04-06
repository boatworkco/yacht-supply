"use client";

import { useState, FormEvent } from "react";

function WavePattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg
        className="absolute bottom-0 w-full h-64"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#1a6b8a"
          d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <svg
        className="absolute bottom-0 w-full h-48"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#1a6b8a"
          fillOpacity="0.5"
          d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,218.7C672,224,768,192,864,176C960,160,1056,160,1152,176C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
}

function AnchorIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="5" r="3" />
      <line x1="12" y1="8" x2="12" y2="21" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </svg>
  );
}

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!firstName.trim() || !email.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/jruytenbeek@gmail.com", {
        method: "POST",
        body: JSON.stringify({ firstName, email }),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="relative flex flex-1 flex-col">
      <WavePattern />

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        {/* Logo / Wordmark */}
        <div className="mb-8 flex items-center gap-3">
          <AnchorIcon className="h-10 w-10 text-ocean" />
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Yacht Supply
          </h1>
        </div>

        {/* Tagline */}
        <p className="mb-6 text-lg font-medium text-ocean sm:text-xl">
          The right parts. The right pros.
        </p>

        {/* Description */}
        <p className="mb-10 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
          Curated marine supplies and hardware for boat owners who care about
          quality. Coming soon.
        </p>

        {/* Email Capture Form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm space-y-4"
          >
            <p className="mb-4 text-sm font-medium text-white/90">
              Get notified when we launch
            </p>

            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/50 transition focus:border-ocean focus:outline-none focus:ring-1 focus:ring-ocean"
              required
            />

            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/50 transition focus:border-ocean focus:outline-none focus:ring-1 focus:ring-ocean"
              required
            />

            {error && (
              <p className="text-sm text-red-400">{error}</p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-ocean px-6 py-3 font-medium text-white transition hover:bg-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2 focus:ring-offset-navy"
            >
              Notify Me
            </button>
          </form>
        ) : (
          <div className="w-full max-w-sm rounded-lg border border-ocean/30 bg-ocean/10 p-6">
            <p className="font-medium text-ocean">
              Thanks, {firstName}!
            </p>
            <p className="mt-2 text-sm text-white/70">
              We&apos;ll let you know when Yacht Supply launches.
            </p>
          </div>
        )}

        {/* Boatwork Link */}
        <p className="mt-10 text-sm text-white/70">
          Need a marine contractor now?{" "}
          <a
            href="https://boatwork.co"
            className="font-medium text-ocean underline-offset-2 hover:underline"
          >
            Find trusted pros at Boatwork
          </a>
        </p>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-6 text-center text-sm text-white/50">
        <p>&copy; 2025 Yacht Supply.</p>
      </footer>
    </div>
  );
}
