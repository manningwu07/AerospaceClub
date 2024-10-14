import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import CourseSection from "~/components/cards/courseSelectionCard";
import JoinUs from "~/components/sections/landing/JoinUs";
import Testimonals from "~/components/sections/academy/Testimonals";

export default function AerospaceAcademyPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute left-0 top-0 z-10 h-full w-full opacity-50">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
        >
          <source src="/academyBackground.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 text-white">
        <Navbar />
        <header className="relative overflow-hidden py-20">
          <div className="container mx-auto px-4">
            <h1 className="mb-6 text-center text-4xl font-bold md:text-6xl">
              Introducing Aerospace Academy
            </h1>
            <p className="mx-auto max-w-2xl text-center text-xl">
              Embark on a journey to the stars with our cutting-edge aerospace
              courses
            </p>
          </div>
        </header>

        {/* Main content */}
        <main className="container mx-auto px-4 py-12">
          {/* Zigzag layout for course information */}
          <div className="space-y-24">
            <CourseSection
              title="Rocket Engineering 101"
              description="Master the fundamentals of rocket design and propulsion systems in this comprehensive introductory course."
              imageUrl="/rocket-course.jpg"
              isReversed={false}
            />
            <CourseSection
              title="Space Navigation and Orbital Mechanics"
              description="Learn the intricacies of plotting courses through the cosmos and understanding the complex dance of celestial bodies."
              imageUrl="/space-navigation.jpg"
              isReversed={true}
            />
            <CourseSection
              title="Advanced Materials in Aerospace"
              description="Explore cutting-edge materials and their applications in spacecraft and aircraft construction."
              imageUrl="/aerospace-materials.jpg"
              isReversed={false}
            />
          </div>

          <section className="mt-24">
            <Testimonals />
          </section>

          <section className="my-8 md:my-12 lg:my-16">
            <JoinUs />
          </section>
        </main>
        <div className="bg-black">
          <Footer />
        </div>
      </div>
    </div>
  );
}
