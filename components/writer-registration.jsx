"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function WriterRegistration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    education: "",
    experience: "",
    subjects: "",
    availability: "",
    motivation: "",
    references: "",
    backgroundCheck: false,
    agreeToTerms: false,
  })

  const router = useRouter()

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate registration
    router.push("/writer/dashboard")
  }

  const handleBack = () => {
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Button variant="ghost" onClick={handleBack} className="text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </Button>
        </div>

        <Card className="shadow-2xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800">Writer Registration</CardTitle>
            <CardDescription>Join LUMINA as a volunteer writer to help students succeed</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                      className="text-lg p-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                      className="text-lg p-3"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="text-lg p-3"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password *</Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      required
                      className="text-lg p-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      required
                      className="text-lg p-3"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="text-lg p-3"
                  />
                </div>
              </div>

              {/* Qualifications */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Qualifications</h3>
                <div className="space-y-2">
                  <Label htmlFor="education">Educational Background *</Label>
                  <Textarea
                    id="education"
                    value={formData.education}
                    onChange={(e) => handleInputChange("education", e.target.value)}
                    required
                    className="text-lg p-3"
                    placeholder="Describe your educational qualifications"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Relevant Experience</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    className="text-lg p-3"
                    placeholder="Any experience with accessibility, tutoring, or working with visually impaired individuals"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subjects">Subject Areas of Expertise *</Label>
                  <Textarea
                    id="subjects"
                    value={formData.subjects}
                    onChange={(e) => handleInputChange("subjects", e.target.value)}
                    required
                    className="text-lg p-3"
                    placeholder="List subjects you're comfortable helping with (e.g., Mathematics, Literature, Science)"
                    rows={3}
                  />
                </div>
              </div>

              {/* Availability */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Availability</h3>
                <div className="space-y-2">
                  <Label htmlFor="availability">Available Hours *</Label>
                  <Select onValueChange={(value) => handleInputChange("availability", value)}>
                    <SelectTrigger className="text-lg p-3">
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5 hours per week</SelectItem>
                      <SelectItem value="5-10">5-10 hours per week</SelectItem>
                      <SelectItem value="10-15">10-15 hours per week</SelectItem>
                      <SelectItem value="15+">15+ hours per week</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Motivation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Additional Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to volunteer? *</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    required
                    className="text-lg p-3"
                    placeholder="Tell us about your motivation to help visually impaired students"
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="references">References (Optional)</Label>
                  <Textarea
                    id="references"
                    value={formData.references}
                    onChange={(e) => handleInputChange("references", e.target.value)}
                    className="text-lg p-3"
                    placeholder="Contact information for professional or academic references"
                    rows={3}
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
                    I consent to a background check if required *
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked)}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the Terms of Service and Privacy Policy *
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                disabled={!formData.agreeToTerms || !formData.backgroundCheck}
              >
                Register as Writer
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
