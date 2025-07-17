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

export default function WriterRegistration() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    experience: "",
    subjects: [],
    availability: "",
    motivation: "",
    references: "",
    agreeTerms: false,
    backgroundCheck: false,
  })
  const router = useRouter()

  const subjectOptions = [
    "Mathematics",
    "Science",
    "English",
    "History",
    "Computer Science",
    "Psychology",
    "Business",
    "Art",
    "Music",
    "Other",
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }
    if (!formData.agreeTerms || !formData.backgroundCheck) {
      alert("Please agree to all terms and conditions")
      return
    }
    // Simulate registration
    router.push("/writer/dashboard")
  }

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubjectToggle = (subject) => {
    const updatedSubjects = formData.subjects.includes(subject)
      ? formData.subjects.filter((s) => s !== subject)
      : [...formData.subjects, subject]
    handleInputChange("subjects", updatedSubjects)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => router.push("/login")}
          className="mb-6 text-green-600 hover:text-green-700"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Login
        </Button>

        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-green-900">Writer Registration</CardTitle>
            <CardDescription>Join LUMINA as a volunteer writer and help students succeed</CardDescription>
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

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
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

              <div className="space-y-2">
                <Label htmlFor="experience">Writing/Teaching Experience</Label>
                <Select onValueChange={(value) => handleInputChange("experience", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No formal experience</SelectItem>
                    <SelectItem value="some">Some experience (1-2 years)</SelectItem>
                    <SelectItem value="moderate">Moderate experience (3-5 years)</SelectItem>
                    <SelectItem value="extensive">Extensive experience (5+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Subject Areas (Select all that apply)</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {subjectOptions.map((subject) => (
                    <div key={subject} className="flex items-center space-x-2">
                      <Checkbox
                        id={subject}
                        checked={formData.subjects.includes(subject)}
                        onCheckedChange={() => handleSubjectToggle(subject)}
                      />
                      <Label htmlFor={subject} className="text-sm">
                        {subject}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability">Availability</Label>
                <Select onValueChange={(value) => handleInputChange("availability", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekdays">Weekdays only</SelectItem>
                    <SelectItem value="weekends">Weekends only</SelectItem>
                    <SelectItem value="flexible">Flexible schedule</SelectItem>
                    <SelectItem value="evenings">Evenings only</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation">Why do you want to volunteer?</Label>
                <Textarea
                  id="motivation"
                  placeholder="Tell us about your motivation to help visually impaired students..."
                  value={formData.motivation}
                  onChange={(e) => handleInputChange("motivation", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="references">References (Optional)</Label>
                <Textarea
                  id="references"
                  placeholder="Provide contact information for references..."
                  value={formData.references}
                  onChange={(e) => handleInputChange("references", e.target.value)}
                />
              </div>

              <div className="space-y-4">
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
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="backgroundCheck"
                    checked={formData.backgroundCheck}
                    onCheckedChange={(checked) => handleInputChange("backgroundCheck", checked)}
                  />
                  <Label htmlFor="backgroundCheck" className="text-sm">
                    I consent to a background check as required for volunteer work
                  </Label>
                </div>
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                Register as Writer
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
