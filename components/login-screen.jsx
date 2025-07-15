"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Users, Shield, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LoginScreen() {
  const [activeTab, setActiveTab] = useState("student")
  const router = useRouter()

  const handleLogin = (userType) => {
    // Simulate login logic
    router.push(`/${userType}/dashboard`)
  }

  const handleRegister = (userType) => {
    router.push(`/${userType}/register`)
  }

  const handleBack = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="text-gray-600 hover:text-gray-800"
            aria-label="Go back to home page"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <Card className="shadow-2xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800">Welcome to LUMINA</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="student" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Student
                </TabsTrigger>
                <TabsTrigger value="writer" className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Writer
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Admin
                </TabsTrigger>
              </TabsList>

              <TabsContent value="student" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="student-email">Email</Label>
                  <Input id="student-email" type="email" placeholder="student@example.com" className="text-lg p-3" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-password">Password</Label>
                  <Input id="student-password" type="password" className="text-lg p-3" />
                </div>
                <Button
                  onClick={() => handleLogin("student")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                >
                  Sign In as Student
                </Button>
                <div className="text-center">
                  <Button variant="link" onClick={() => handleRegister("student")} className="text-blue-600">
                    Don't have an account? Register here
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="writer" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="writer-email">Email</Label>
                  <Input id="writer-email" type="email" placeholder="writer@example.com" className="text-lg p-3" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="writer-password">Password</Label>
                  <Input id="writer-password" type="password" className="text-lg p-3" />
                </div>
                <Button
                  onClick={() => handleLogin("writer")}
                  className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                >
                  Sign In as Writer
                </Button>
                <div className="text-center">
                  <Button variant="link" onClick={() => handleRegister("writer")} className="text-green-600">
                    Don't have an account? Register here
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="admin" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Admin Email</Label>
                  <Input id="admin-email" type="email" placeholder="admin@lumina.com" className="text-lg p-3" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-password">Admin Password</Label>
                  <Input id="admin-password" type="password" className="text-lg p-3" />
                </div>
                <Button
                  onClick={() => handleLogin("admin")}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3"
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
