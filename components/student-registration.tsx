"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, User } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function StudentRegistration() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we would submit the form data to the server
    router.push("/student/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="bg-green-500 p-6 text-center text-white">
        <h1 className="text-3xl font-bold">Student Registration</h1>
        <p className="text-lg">Join LUMINA to get assistance with your exams</p>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Create Your Student Account</CardTitle>
            <CardDescription>Fill in your details to register as a visually impaired student</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg">
                  Full Name
                </Label>
                <div className="flex items-center rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                  <User className="ml-3 h-5 w-5 text-gray-500" />
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    className="border-0 text-lg focus-visible:ring-0"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg">
                  Email
                </Label>
                <div className="flex items-center rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                  <Mail className="ml-3 h-5 w-5 text-gray-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="border-0 text-lg focus-visible:ring-0"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-lg">
                  Phone Number
                </Label>
                <div className="flex items-center rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                  <Phone className="ml-3 h-5 w-5 text-gray-500" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="border-0 text-lg focus-visible:ring-0"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="course" className="text-lg">
                  Course
                </Label>
                <Select>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select your course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="biology">Biology</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="history">History</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="examDetails" className="text-lg">
                  Examination Details
                </Label>
                <Textarea
                  id="examDetails"
                  placeholder="Please provide details about your upcoming exam (date, time, location, etc.)"
                  className="min-h-[100px] text-lg"
                  required
                />
              </div>

              <Button type="submit" className="h-14 w-full text-lg" size="lg">
                Register as Student
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>

      <footer className="p-6 text-center text-gray-500">
        <p>© {new Date().getFullYear()} LUMINA. All rights reserved.</p>
      </footer>
    </div>
  )
}
