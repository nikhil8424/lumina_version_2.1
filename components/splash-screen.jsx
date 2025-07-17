"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Users, BookOpen, Heart, ArrowRight, Star, Shield, Clock } from "lucide-react"

export default function SplashScreen() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const router = useRouter()

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      content: "LUMINA has been a game-changer for my studies. The writers are patient and understanding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "History Major",
      content: "Thanks to LUMINA, I can focus on learning instead of worrying about note-taking.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Mathematics Student",
      content: "The accessibility features and dedicated writers make studying so much easier.",
      rating: 5,
    },
  ]

  const features = [
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "Accessibility First",
      description: "Designed specifically for visually impaired students with screen reader compatibility",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Dedicated Writers",
      description: "Connect with trained volunteer writers who understand your academic needs",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-purple-600" />,
      title: "Academic Support",
      description: "Get help with exams, assignments, and note-taking across all subjects",
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Secure Platform",
      description: "Your privacy and academic integrity are our top priorities",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: "24/7 Availability",
      description: "Access support when you need it most, around your schedule",
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-600" />,
      title: "Community Driven",
      description: "Built by and for the visually impaired student community",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const handleGetStarted = () => {
    router.push("/login")
  }

  const handleLearnMore = () => {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
              Empowering Education Through Accessibility
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">LUMINA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connecting visually impaired students with dedicated volunteer writers for accessible education and
              academic success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleGetStarted}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleLearnMore}
                className="px-8 py-4 text-lg bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Students Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Volunteer Writers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10,000+</div>
              <div className="text-gray-600">Sessions Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose LUMINA?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support designed specifically for visually impaired students
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-gray-100 rounded-lg">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Students Say</h2>
            <p className="text-xl text-gray-600">Real experiences from our community</p>
          </div>
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl text-gray-700 mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-lg text-gray-900">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have found academic success through LUMINA's accessible platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Join as Student
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push("/writer/register")}
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
            >
              Become a Writer
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">LUMINA</h3>
              <p className="text-gray-400">Empowering visually impaired students through accessible education.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Students</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => router.push("/student/register")} className="hover:text-white">
                    Register
                  </button>
                </li>
                <li>
                  <button onClick={() => router.push("/login")} className="hover:text-white">
                    Login
                  </button>
                </li>
                <li>
                  <a href="#features" className="hover:text-white">
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Writers</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => router.push("/writer/register")} className="hover:text-white">
                    Join as Writer
                  </button>
                </li>
                <li>
                  <button onClick={() => router.push("/login")} className="hover:text-white">
                    Writer Login
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:support@lumina.edu" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} LUMINA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
