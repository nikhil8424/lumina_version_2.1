"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, User, Mail, Phone, GraduationCap, Eye, EyeOff, X } from "lucide-react"

export default function WriterRegistration() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [selectedSubjects, setSelectedSubjects] = useState([])
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    education: "",
    institution: "",
    graduationYear: "",
    experience: "",
    motivation: "",
    availability: "",
    languages: "",
    references: "",
    backgroundCheck: false,
    agreeToTerms: false,
  })

  const router = useRouter()

  const subjects = [
    "Mathematics",
    "English Literature",
    "History",
    "Science",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "Psychology",
    "Sociology",
    "Philosophy",
    "Economics",
    "Political Science",
    "Art History",
    "Foreign Languages",
    "Business",
    "Engineering",
    "Medicine",
    "Law",
    "Other",
  ]

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubjectToggle = (subject) => {
    setSelectedSubjects((prev) => (prev.includes(subject) ? prev.filter((s) => s !== subject) : [...prev, subject]))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      alert("Please fill in all required fields")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }

    if (selectedSubjects.length === 0) {
      alert("Please select at least one subject you can help with")
      return
    }

    if (!formData.backgroundCheck) {
      alert("Background check consent is required")
      return
    }

    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions")
      return
    }

    // In a real app, we would send this data to a server
    alert("Registration submitted! We'll review your application and get back to you within 2-3 business days.")
    router.push("/login")
  }

  const goBack = () => {
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Button variant="ghost" onClick={goBack} className="mb-4 text-green-600 hover:text-green-700">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Login
        </Button>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-green-900">Writer Registration</CardTitle>
            <CardDescription>
              Join our community of volunteer writers and help make education accessible for visually impaired students
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="flex items-center rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                    <Mail className="ml-3 h-5 w-5 text-gray-500" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="border-0 focus-visible:ring-0"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <div className="flex items-center rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                    <Phone className="ml-3 h-5 w-5 text-gray-500" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="border-0 focus-visible:ring-0"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Account Security */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Account Security</h3>
                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="pr-10"
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
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      className="pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Educational Background */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  Educational Background
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="education">Highest Level of Education *</Label>
                  <Select value={formData.education} onValueChange={(value) => handleInputChange("education", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                      <SelectItem value="masters">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="professional">Professional Degree</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution</Label>
                    <Input
                      id="institution"
                      type="text"
                      placeholder="Enter your institution"
                      value={formData.institution}
                      onChange={(e) => handleInputChange("institution", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="graduationYear">Graduation Year</Label>
                    <Input
                      id="graduationYear"
                      type="number"
                      placeholder="e.g., 2020"
                      value={formData.graduationYear}
                      onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Subject Expertise */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Subject Expertise</h3>
                <Label>Select subjects you can help with *</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto border rounded-lg p-4">
                  {subjects.map((subject) => (
                    <div key={subject} className="flex items-center space-x-2">
                      <Checkbox
                        id={subject}
                        checked={selectedSubjects.includes(subject)}
                        onCheckedChange={() => handleSubjectToggle(subject)}
                      />
                      <Label htmlFor={subject} className="text-sm">
                        {subject}
                      </Label>
                    </div>
                  ))}
                </div>
                {selectedSubjects.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedSubjects.map((subject) => (
                      <Badge key={subject} variant="secondary" className="flex items-center gap-1">
                        {subject}
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-4 w-4 p-0 hover:bg-transparent"
                          onClick={() => handleSubjectToggle(subject)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Experience and Motivation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Experience & Motivation</h3>
                <div className="space-y-2">
                  <Label htmlFor="experience">Relevant Experience</Label>
                  <Textarea
                    id="experience"
                    placeholder="Describe any relevant tutoring, teaching, or volunteer experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to be a writer? *</Label>
                  <Textarea
                    id="motivation"
                    placeholder="Tell us about your motivation to help visually impaired students"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    rows={3}
                    required
                  />
                </div>
              </div>

              {/* Availability and Languages */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Textarea
                    id="availability"
                    placeholder="Describe your general availability (days, times, time zone)"
                    value={formData.availability}
                    onChange={(e) => handleInputChange("availability", e.target.value)}
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="languages">Languages Spoken</Label>
                  <Input
                    id="languages"
                    type="text"
                    placeholder="e.g., English, Spanish, French"
                    value={formData.languages}
                    onChange={(e) => handleInputChange("languages", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="references">References (Optional)</Label>
                  <Textarea
                    id="references"
                    placeholder="Provide contact information for professional or academic references"
                    value={formData.references}
                    onChange={(e) => handleInputChange("references", e.target.value)}
                    rows={2}
                  />
                </div>
              </div>

              {/* Agreements */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="backgroundCheck"
                    checked={formData.backgroundCheck}
                    onCheckedChange={(checked) => handleInputChange("backgroundCheck", checked)}
                  />
                  <Label htmlFor="backgroundCheck" className="text-sm">
                    I consent to a background check as part of the application process *
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked)}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <a href="#" className="text-green-600 hover:underline">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-green-600 hover:underline">
                      Privacy Policy
                    </a>{" "}
                    *
                  </Label>
                </div>
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                Submit Application
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Button
                  variant="link"
                  onClick={() => router.push("/login")}
                  className="text-green-600 hover:text-green-700 p-0"
                >
                  Sign in here
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
