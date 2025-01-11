"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-pink-100 dark:border-pink-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QSEN2aEt5k2z0OtMJzrsWZMyXVkIiU.png"
                  alt="Dottie Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-xl font-semibold text-gray-900 dark:text-white">
                  Dottie
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link
                href="/symptom-checker"
                className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Symptom Checker
              </Link>
              <Link
                href="/resources"
                className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Resources
              </Link>
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700 transition-colors"
              >
                Get Started
              </Link>
              <button
                onClick={toggleDarkMode}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode
                  ? <Sun className="h-5 w-5" />
                  : <Moon className="h-5 w-5" />}
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleDarkMode}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors mr-2"
                aria-label="Toggle dark mode"
              >
                {darkMode
                  ? <Sun className="h-5 w-5" />
                  : <Moon className="h-5 w-5" />}
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900 transition-colors"
                aria-label="Open menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu (can be expanded with state management) */}
          <div className="hidden md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/symptom-checker"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900 transition-colors"
              >
                Symptom Checker
              </Link>
              <Link
                href="/resources"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900 transition-colors"
              >
                Resources
              </Link>
              <Link
                href="/get-started"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QSEN2aEt5k2z0OtMJzrsWZMyXVkIiU.png"
              alt="Dottie Mascot"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hello, I&apos;m Dottie
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your friendly adolescent menstrual health assistant
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Section */}
        <section className="py-12 grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Are you worried about your menstrual symptoms? Are you afraid your
              symptoms might be a sign that something bad is happening to your
              body?
            </h2>
          </div>
          <div className="bg-pink-100 dark:bg-pink-900 rounded-lg p-8">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Dottie will help you learn about your menstrual health and allay
              your fears. It will provide you immediate insights and tailored
              advice including possible causes, recommended next steps and when
              to seek medical attention.
            </p>
          </div>
        </section>

        {/* Warning Box */}
        <section className="py-12">
          <div className="border-2 border-pink-300 dark:border-pink-700 rounded-lg p-6 space-y-4">
            <p className="text-gray-700 dark:text-gray-300 text-center">
              This app is not intended to substitute for professional medical
              advice, diagnosis or treatment. Always consult a professional
              before taking any actions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              Do not use it in case of an emergency. Ask for help from your
              family and friends or call your local emergency number right away
              when there&apos;s a health emergency.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              Your data is safe. The information you give won't be shared or
              used to identify you.
            </p>
            <div className="text-center pt-4">
              <button className="bg-pink-400 hover:bg-pink-500 dark:bg-pink-600 dark:hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
                Go to symptom checker
              </button>
            </div>
          </div>
        </section>

        {/* Symptoms Section */}
        <section className="py-12" id="symptoms">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Common symptoms you can check
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Get a better understanding of your symptoms with Dottie's expert
            guidance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="bg-pink-50 dark:bg-pink-900 text-gray-800 dark:text-gray-200 rounded-lg px-4 py-2 inline-block">
                Cramps (dysmenorrhea)
              </div>
              <div className="bg-pink-50 dark:bg-pink-900 text-gray-800 dark:text-gray-200 rounded-lg px-4 py-2 inline-block">
                Heavy bleeding (menorrhagia)
              </div>
              <div className="bg-pink-50 dark:bg-pink-900 text-gray-800 dark:text-gray-200 rounded-lg px-4 py-2 inline-block">
                Headaches
              </div>
              <div className="bg-pink-50 dark:bg-pink-900 text-gray-800 dark:text-gray-200 rounded-lg px-4 py-2 inline-block">
                Nausea and vomiting
              </div>
              <div className="bg-pink-50 dark:bg-pink-900 text-gray-800 dark:text-gray-200 rounded-lg px-4 py-2 inline-block">
                Spotting or irregular periods
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-pink-50 dark:bg-pink-900 text-gray-800 dark:text-gray-200 rounded-lg px-4 py-2 inline-block">
                Mood swings
              </div>
              <div className="bg-pink-50 dark:bg-pink-900 text-gray-800 dark:text-gray-200 rounded-lg px-4 py-2 inline-block">
                Anxiety
              </div>
              <div className="bg-pink-50 dark:bg-pink-900 text-gray-800 dark:text-gray-200 rounded-lg px-4 py-2 inline-block">
                Depression
              </div>
              <div className="bg-pink-50 dark:bg-pink-900 text-gray-800 dark:text-gray-200 rounded-lg px-4 py-2 inline-block">
                Anger outbursts
              </div>
              <div className="bg-pink-50 dark:bg-pink-900 text-gray-800 dark:text-gray-200 rounded-lg px-4 py-2 inline-block">
                Feeling of sadness or hopelessness
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-pink-50 dark:bg-pink-900 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                About Dottie
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your trusted companion for understanding and managing menstrual
                health.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Follow us on social media for updates and health tips.
              </p>
            </div>
          </div>
          <div className="border-t border-pink-100 dark:border-pink-800 mt-8 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Dottie. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
