"use client";

import { useState } from "react";
import { Plane, Rocket, Star, ChevronRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";

export default function AerospaceAcademy() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Submitted email:", email);
    // Reset form
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-5xl font-bold">
            Welcome to Aerospace Academy
          </h1>
          <p className="mb-8 text-xl">
            Elevate your knowledge. Reach for the stars.
          </p>
          <Button className="bg-accentYellow text-gray-900 hover:bg-accentYellow/90">
            Explore Courses
          </Button>
        </div>
      </section>

      {/* Selling Points */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why Choose Aerospace Academy?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Expert Instructors",
                description:
                  "Learn from industry professionals and seasoned aerospace engineers.",
              },
              {
                title: "Cutting-edge Curriculum",
                description:
                  "Stay ahead with our constantly updated course material.",
              },
              {
                title: "Hands-on Projects",
                description:
                  "Apply your knowledge with real-world aerospace projects.",
              },
              {
                title: "Flexible Learning",
                description: "Study at your own pace with our online platform.",
              },
              {
                title: "Industry Connections",
                description:
                  "Network with top aerospace companies and professionals.",
              },
              {
                title: "Certification",
                description:
                  "Earn recognized certifications to boost your career.",
              },
            ].map((point, index) => (
              <Card
                key={index}
                className={
                  index % 2 === 0 ? "bg-accentYellow/10" : "bg-accentRed/10"
                }
              >
                <CardHeader>
                  <CardTitle>{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{point.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="overflow-hidden bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            What Our Students Say
          </h2>
          <div className="relative">
            <div className="animate-marquee flex space-x-8">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Plane className="h-8 w-8 text-accentRed" />
                  <div className="w-64 rounded-lg bg-white p-6 shadow-md">
                    <p className="text-sm">
                      "Aerospace Academy transformed my career. The knowledge I
                      gained here is invaluable."
                    </p>
                    <p className="mt-2 font-bold text-accentYellow">
                      - John Doe, Aerospace Engineer
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Introduction to Aerospace Engineering",
              "Rocket Propulsion Systems",
              "Aircraft Design Fundamentals",
              "Space Mission Planning",
              "Aerodynamics and Flight Mechanics",
              "Satellite Technology",
            ].map((course, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Rocket
                      className={`mr-2 h-6 w-6 ${index % 2 === 0 ? "text-accentYellow" : "text-accentRed"}`}
                    />
                    {course}
                  </CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-accentRed to-accentYellow py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Launch Your Aerospace Career?
          </h2>
          <p className="mb-8 text-xl">
            Join Aerospace Academy today and start your journey to the stars!
          </p>
          <p className="mb-8 text-2xl font-bold">
            And the best part? It's FREE to join!
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-4"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full max-w-md bg-white text-gray-900"
              required
            />
            <Button type="submit" className="bg-gray-900 hover:bg-gray-800">
              Join Now <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}
