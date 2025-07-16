"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Users, BookOpen, Accessibility } from "lucide-react"

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleGetStarted = () => {
    router.push("/login")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h1 className="text-4xl font-bold text-blue-900 mb-2">LUMINA</h1>
          <p className="text-blue-700">Connecting minds, empowering education</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-blue-900 mb-4">LUMINA</h1>
          <p className="text-xl text-blue-700 mb-8">
            Connecting visually impaired students with volunteer writers for accessible education
          </p>
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
          >
            Get Started
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Accessibility First</h3>
              <p className="text-gray-600">Designed with visually impaired students in mind</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Volunteer Network</h3>
              <p className="text-gray-600">Connect with dedicated volunteer writers</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Exam Support</h3>
              <p className="text-gray-600">Get help with exams and assignments</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Accessibility className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Inclusive Design</h3>
              <p className="text-gray-600">Built for everyone, accessible to all</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">Already have an account?</p>
          <Button
            variant="outline"
            onClick={handleGetStarted}
            className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  )
}
