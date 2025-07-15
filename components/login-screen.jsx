"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, ArrowLeft, User, PenTool, Shield } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LoginScreen() {
  const [activeTab, setActiveTab] = useState("student")
  const router = useRouter()

  const handleBack = () => {
    router.push("/")
  }

  const handleLogin = (userType) => {
    if (userType === "student") {
      router.push("/student/dashboard")
    } else if (userType === "writer") {
      router.push("/writer/dashboard")
    } else if (userType === "admin") {
      router.push("/admin/dashboard")
    }
  }

  const handleRegister = (userType) => {
    if (userType === "student") {
      router.push("/student/register")
    } else if (userType === "writer") {
      router.push("/writer/register")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="absolute top-4 left-4 p-2"
            aria-label="Go back to home"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>

          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <Eye className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome to LUMINA</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {/* Login Tabs */}
        <Card className="shadow-lg">
          <CardHeader className="pb-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="student" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Student
                </TabsTrigger>
                <TabsTrigger value="writer" className="flex items-center gap-2">
                  <PenTool className="w-4 h-4" />
                  Writer
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Admin
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>

          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              {/* Student Login */}
              <TabsContent value="student" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="student-email">Email</Label>
                    <Input id="student-email" type="email" placeholder="student@example.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="student-password">Password</Label>
                    <Input id="student-password" type="password" placeholder="Enter your password" className="mt-1" />
                  </div>
                  <Button onClick={() => handleLogin("student")} className="w-full bg-blue-600 hover:bg-blue-700">
                    Sign In as Student
                  </Button>
                  <div className="text-center">
                    <Button variant="link" onClick={() => handleRegister("student")} className="text-blue-600">
                      Don't have an account? Register here
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Writer Login */}
              <TabsContent value="writer" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="writer-email">Email</Label>
                    <Input id="writer-email" type="email" placeholder="writer@example.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="writer-password">Password</Label>
                    <Input id="writer-password" type="password" placeholder="Enter your password" className="mt-1" />
                  </div>
                  <Button onClick={() => handleLogin("writer")} className="w-full bg-green-600 hover:bg-green-700">
                    Sign In as Writer
                  </Button>
                  <div className="text-center">
                    <Button variant="link" onClick={() => handleRegister("writer")} className="text-green-600">
                      Don't have an account? Register here
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Admin Login */}
              <TabsContent value="admin" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="admin-email">Admin Email</Label>
                    <Input id="admin-email" type="email" placeholder="admin@lumina.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="admin-password">Admin Password</Label>
                    <Input id="admin-password" type="password" placeholder="Enter admin password" className="mt-1" />
                  </div>
                  <Button onClick={() => handleLogin("admin")} className="w-full bg-purple-600 hover:bg-purple-700">
                    Sign In as Admin
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>By signing in, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}
