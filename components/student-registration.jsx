"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"

export default function StudentRegistration() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    studentId: "",
    university: "",
    program: "",
    year: "",
    disability: "",
    accommodations: "",
    emergencyContact: "",
    emergencyPhone: "",
    agreeTerms: false,
  })
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }
    if (!formData.agreeTerms) {
      alert("Please agree to the terms and conditions")
      return
    }
    // Simulate registration
    router.push("/student/dashboard")
  }

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => router.push("/login")}
          className="mb-6 text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Login
        </Button>

        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-blue-900">Student Registration</CardTitle>
            <CardDescription>Join LUMINA as a student and get connected with volunteer writers</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
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
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="studentId">Student ID</Label>
                  <Input
                    id="studentId"
                    value={formData.studentId}
                    onChange={(e) => handleInputChange("studentId", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="university">University/Institution</Label>
                  <Input
                    id="university"
                    value={formData.university}
                    onChange={(e) => handleInputChange("university", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="program">Program of Study</Label>
                  <Input
                    id="program"
                    value={formData.program}
                    onChange={(e) => handleInputChange("program", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Year of Study</Label>
                  <Select onValueChange={(value) => handleInputChange("year", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1st Year</SelectItem>
                      <SelectItem value="2">2nd Year</SelectItem>
                      <SelectItem value="3">3rd Year</SelectItem>
                      <SelectItem value="4">4th Year</SelectItem>
                      <SelectItem value="graduate">Graduate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="disability">Type of Visual Impairment</Label>
                <Select onValueChange={(value) => handleInputChange("disability", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blind">Blind</SelectItem>
                    <SelectItem value="low-vision">Low Vision</SelectItem>
                    <SelectItem value="cortical">Cortical Visual Impairment</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accommodations">Required Accommodations</Label>
                <Textarea
                  id="accommodations"
                  placeholder="Describe any specific accommodations you need..."
                  value={formData.accommodations}
                  onChange={(e) => handleInputChange("accommodations", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                  <Input
                    id="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                  <Input
                    id="emergencyPhone"
                    type="tel"
                    value={formData.emergencyPhone}
                    onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeTerms", checked)}
                />
                <Label htmlFor="agreeTerms" className="text-sm">
                  I agree to the Terms of Service and Privacy Policy
                </Label>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                Register as Student
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
