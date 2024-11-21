"use client";

import Background from "~/components/sections/landing/Background";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import AboutUs from "~/components/sections/landing/AboutUs";
import { useEffect, useState } from "react";
import JoinUs from "~/components/sections/landing/JoinUs";
import FrontPage from "~/components/sections/landing/FrontPage";
import EventsPreview from "~/components/sections/landing/EventsPreview";
import { type PageProps, usePullContent } from "~/utils/pageUtils";

export default function LandingPage({ adminContent, adminError }: PageProps) {
  const pullContent = usePullContent(); // Unconditionally call the hook

  const content = adminContent ?? pullContent.content;
  const error = adminError ?? pullContent.error;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);


  if (error) {
    // Display a fallback error message if Firestore fetch fails
    return (
      <div className="error-container">
        <h1>Service Unavailable</h1>
        <p>
          We&apos;re experiencing issues retrieving content. Please try again
          later.
        </p>
      </div>
    );
  }

  return (
    <div>
      {loading || !content  ? (
        <div className="flex h-screen items-center justify-center text-3xl">Loading</div>
      ) : (
        <div className="font-sans text-white">
          <Background />
          <Navbar />
          <main className="relative z-20">
            <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
              <FrontPage {...content.landing.frontPage} />
            </section>

            {/* About Us section */}
            <section id="about" className="bg-opacity-80 py-20">
              <AboutUs {...content.global.aboutUs} />
            </section>

            {/* EventsPreview section */}
            <section id="EventsPreview" className="py-20">
              <EventsPreview events = {content.global.events} />
            </section>

            {/* Join Us section */}
            <section id="join" className="bg-opacity-80 py-20">
              <JoinUs {...content.global.joinUs} />
            </section>

            {/* Footer */}
            <Footer />
          </main>
        </div>
      )}
    </div>
  );
}
