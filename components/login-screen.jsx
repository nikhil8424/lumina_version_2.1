"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false)
  const [studentForm, setStudentForm] = useState({ email: "", password: "" })
  const [writerForm, setWriterForm] = useState({ email: "", password: "" })
  const [adminForm, setAdminForm] = useState({ email: "", password: "" })
  const router = useRouter()

  const handleStudentLogin = (e) => {
    e.preventDefault()
    // Simulate login
    router.push("/student/dashboard")
  }

  const handleWriterLogin = (e) => {
    e.preventDefault()
    // Simulate login
    router.push("/writer/dashboard")
  }

  const handleAdminLogin = (e) => {
    e.preventDefault()
    // Simulate login
    router.push("/admin/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button variant="ghost" onClick={() => router.push("/")} className="mb-6 text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-blue-900">Welcome to LUMINA</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="writer">Writer</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
              </TabsList>

              <TabsContent value="student">
                <form onSubmit={handleStudentLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-email">Email</Label>
                    <Input
                      id="student-email"
                      type="email"
                      placeholder="Enter your email"
                      value={studentForm.email}
                      onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="student-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={studentForm.password}
                        onChange={(e) => setStudentForm({ ...studentForm, password: e.target.value })}
                        required
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
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Sign In as Student
                  </Button>
                  <div className="text-center">
                    <Button
                      type="button"
                      variant="link"
                      onClick={() => router.push("/student/register")}
                      className="text-blue-600"
                    >
                      Don't have an account? Register here
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="writer">
                <form onSubmit={handleWriterLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="writer-email">Email</Label>
                    <Input
                      id="writer-email"
                      type="email"
                      placeholder="Enter your email"
                      value={writerForm.email}
                      onChange={(e) => setWriterForm({ ...writerForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="writer-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="writer-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={writerForm.password}
                        onChange={(e) => setWriterForm({ ...writerForm, password: e.target.value })}
                        required
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
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Sign In as Writer
                  </Button>
                  <div className="text-center">
                    <Button
                      type="button"
                      variant="link"
                      onClick={() => router.push("/writer/register")}
                      className="text-green-600"
                    >
                      Don't have an account? Register here
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="admin">
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Email</Label>
                    <Input
                      id="admin-email"
                      type="email"
                      placeholder="Enter admin email"
                      value={adminForm.email}
                      onChange={(e) => setAdminForm({ ...adminForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="admin-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter admin password"
                        value={adminForm.password}
                        onChange={(e) => setAdminForm({ ...adminForm, password: e.target.value })}
                        required
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
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Sign In as Admin
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
