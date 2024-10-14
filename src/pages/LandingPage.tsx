"use client";

import Background from "~/components/sections/landingPage/Background";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import AboutUs from "~/components/sections/landingPage/AboutUs";
import Projects from "~/components/sections/landingPage/EventsPreview";
import { useEffect, useState } from "react";
import JoinUs from "~/components/sections/landingPage/JoinUs";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  return (
    <div className="min-h-screen font-sans text-white">
      {loading ? (
        <div></div>
      ) : (
        <div>
          <Background />
          <Navbar />
          <main className="relative z-20">
            <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
              {/* <FrontPage />*/}
              <h1 className="mb-4 text-5xl font-bold">DHS Aerospace Club</h1>
              <p className="text-2xl text-blue-500">
                Explore Beyond the Horizon
              </p>
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
              <JoinUs />
            </section>

            {/* Footer */}
            <Footer />
          </main>
        </div>
      )}
    </div>
  );
}
