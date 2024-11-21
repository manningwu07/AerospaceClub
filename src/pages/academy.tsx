import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import CourseSection from "~/components/cards/courseSelectionCard";
import JoinUs from "~/components/sections/landing/JoinUs";
import Testimonals from "~/components/sections/academy/Testimonals";
import { type PageProps, usePullContent } from "~/utils/pageUtils";

export default function AerospaceAcademyPage({ adminContent, adminError }: PageProps) {
  const pullContent = usePullContent(); // Unconditionally call the hook

  const content = adminContent ?? pullContent.content;
  const error = adminError ?? pullContent.error;

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

  if(!content) { 
    return (
      <div className="flex h-screen items-center justify-center text-3xl">Loading</div>
    )
  };

  const courseSections = content.academy.courseSections;

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

        <main className="container mx-auto px-4 py-12">
          <div className="space-y-24">
            {courseSections.map((course, index) => (
              <CourseSection
                key={index}
                title={course.title}
                description={course.description}
                imageSrc={course.imageSrc}
                isReversed={course.isReversed}
              />
            ))}
          </div>

          <section className="mt-24">
            <Testimonals testimonials={content.academy.testimonials} />
          </section>

          <section className="my-8 md:my-12 lg:my-16">
            <JoinUs {...content.global.joinUs} />
          </section>
        </main>
        <div className="bg-black">
          <Footer />
        </div>
      </div>
    </div>
  );
}
