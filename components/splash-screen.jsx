"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Users, BookOpen, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SplashScreen() {
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleGetStarted = () => {
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div
        className={`w-full max-w-4xl transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="text-center space-y-8">
              {/* Logo and Title */}
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  LUMINA
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-medium">
                  Illuminating Education Through Connection
                </p>
              </div>

              {/* Mission Statement */}
              <div className="max-w-2xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Connecting visually impaired students with dedicated volunteer writers to ensure accessible and
                  inclusive education for all.
                </p>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 my-12">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Connect</h3>
                  <p className="text-gray-600">Match with qualified volunteer writers</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <BookOpen className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Learn</h3>
                  <p className="text-gray-600">Access educational content seamlessly</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <Eye className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Succeed</h3>
                  <p className="text-gray-600">Achieve academic excellence together</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  aria-label="Get started with LUMINA"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Footer */}
              <div className="pt-8 text-center text-gray-500">
                <p>Empowering education through accessibility and community</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
