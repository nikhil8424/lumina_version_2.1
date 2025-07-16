"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = (userType) => {
    // Simple validation
    if (!email || !password) {
      alert("Please fill in all fields")
      return
    }

    // Navigate based on user type
    switch (userType) {
      case "student":
        router.push("/student/dashboard")
        break
      case "writer":
        router.push("/writer/dashboard")
        break
      case "admin":
        router.push("/admin/dashboard")
        break
      default:
        router.push("/student/dashboard")
    }
  }

  const handleRegister = (userType) => {
    if (userType === "student") {
      router.push("/student/register")
    } else if (userType === "writer") {
      router.push("/writer/register")
    }
  }

  const goBack = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button variant="ghost" onClick={goBack} className="mb-4 text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-blue-900">LUMINA</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="writer">Writer</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
              </TabsList>

              <TabsContent value="student" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="student-email">Email</Label>
                  <Input
                    id="student-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-lg p-3"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="student-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="text-lg p-3 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={() => handleLogin("student")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg p-3"
                >
                  Sign In as Student
                </Button>
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Button
                      variant="link"
                      onClick={() => handleRegister("student")}
                      className="text-blue-600 hover:text-blue-700 p-0"
                    >
                      Register as Student
                    </Button>
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="writer" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="writer-email">Email</Label>
                  <Input
                    id="writer-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-lg p-3"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="writer-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="writer-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="text-lg p-3 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={() => handleLogin("writer")}
                  className="w-full bg-green-600 hover:bg-green-700 text-lg p-3"
                >
                  Sign In as Writer
                </Button>
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Button
                      variant="link"
                      onClick={() => handleRegister("writer")}
                      className="text-green-600 hover:text-green-700 p-0"
                    >
                      Register as Writer
                    </Button>
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="admin" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Admin Email</Label>
                  <Input
                    id="admin-email"
                    type="email"
                    placeholder="Enter admin email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-lg p-3"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-password">Admin Password</Label>
                  <div className="relative">
                    <Input
                      id="admin-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter admin password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="text-lg p-3 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={() => handleLogin("admin")}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-lg p-3"
                >
                  Sign In as Admin
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
