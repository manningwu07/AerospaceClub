"use client";

import Background from "~/components/sections/landingPage/Background";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import FrontPage from "~/components/sections/landingPage/frontPage";
import AboutUs from "~/components/sections/landingPage/aboutUs";
import Projects from "~/components/sections/landingPage/projects";

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans text-white">
      {/* Canvas container for Background */}
      <Background />
      <Navbar />

      <main className="relative z-20">
        <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <FrontPage />
        </section>

        {/* About Us section */}
        <section id="about" className="bg-opacity-80 py-20">
          <AboutUs />
        </section>

        {/* Projects section */}
        <section id="projects" className="py-20">
          <Projects />
        </section>

        {/* Join Us section */}
        <section id="join" className="bg-opacity-80 py-20">
          
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
