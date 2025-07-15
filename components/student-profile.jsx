"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, ArrowLeft, Camera, Save, BookOpen, GraduationCap, Phone, Mail, MapPin, Shield } from "lucide-react"
import { useRouter } from "next/navigation"

export default function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@university.edu",
    phone: "+1 (555) 123-4567",
    institution: "Tech University",
    studentId: "TU2021001",
    yearOfStudy: "3",
    fieldOfStudy: "Computer Science",
    visualImpairment: "legally-blind",
    assistiveTechnology: "JAWS Screen Reader, Braille Display",
    accommodationNeeds: "Extended time for exams, large print materials when possible",
    emergencyContact: "Jane Doe",
    emergencyPhone: "+1 (555) 987-6543",
    bio: "Passionate computer science student interested in accessibility technology and web development.",
  })

  const router = useRouter()

  const handleBack = () => {
    router.push("/student/dashboard")
  }

  const handleInputChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = () => {
    // Simulate save
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              {isEditing ? (
                <>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave}>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
            <TabsTrigger value="emergency">Emergency</TabsTrigger>
          </TabsList>

          {/* Profile Header */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback className="bg-blue-500 text-white text-2xl">
                      {profileData.firstName[0]}
                      {profileData.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                      <Camera className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {profileData.firstName} {profileData.lastName}
                  </h1>
                  <p className="text-gray-600">{profileData.fieldOfStudy} Student</p>
                  <p className="text-gray-500">{profileData.institution}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <Badge className="bg-blue-100 text-blue-800">
                      <Shield className="w-3 h-3 mr-1" />
                      Verified Student
                    </Badge>
                    <Badge variant="outline">Year {profileData.yearOfStudy}</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <TabsContent value="personal" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Personal Information</span>
                </CardTitle>
                <CardDescription>Your basic personal details and contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={profileData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      disabled={!isEditing}
                      className="text-lg p-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={profileData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      disabled={!isEditing}
                      className="text-lg p-3"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Email Address</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    disabled={!isEditing}
                    className="text-lg p-3"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Phone Number</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    disabled={!isEditing}
                    className="text-lg p-3"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={profileData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    disabled={!isEditing}
                    className="text-lg p-3"
                    rows={3}
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="academic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Academic Information</span>
                </CardTitle>
                <CardDescription>Your educational background and academic details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="institution" className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Institution</span>
                  </Label>
                  <Input
                    id="institution"
                    value={profileData.institution}
                    onChange={(e) => handleInputChange("institution", e.target.value)}
                    disabled={!isEditing}
                    className="text-lg p-3"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentId">Student ID</Label>
                    <Input
                      id="studentId"
                      value={profileData.studentId}
                      onChange={(e) => handleInputChange("studentId", e.target.value)}
                      disabled={!isEditing}
                      className="text-lg p-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearOfStudy">Year of Study</Label>
                    {isEditing ? (
                      <Select onValueChange={(value) => handleInputChange("yearOfStudy", value)}>
                        <SelectTrigger className="text-lg p-3">
                          <SelectValue placeholder={`Year ${profileData.yearOfStudy}`} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1st Year</SelectItem>
                          <SelectItem value="2">2nd Year</SelectItem>
                          <SelectItem value="3">3rd Year</SelectItem>
                          <SelectItem value="4">4th Year</SelectItem>
                          <SelectItem value="graduate">Graduate</SelectItem>
                          <SelectItem value="postgraduate">Postgraduate</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input value={`Year ${profileData.yearOfStudy}`} disabled className="text-lg p-3" />
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fieldOfStudy" className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Field of Study</span>
                  </Label>
                  <Input
                    id="fieldOfStudy"
                    value={profileData.fieldOfStudy}
                    onChange={(e) => handleInputChange("fieldOfStudy", e.target.value)}
                    disabled={!isEditing}
                    className="text-lg p-3"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="accessibility" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Accessibility Information</CardTitle>
                <CardDescription>Details about your visual impairment and accommodation needs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="visualImpairment">Type of Visual Impairment</Label>
                  {isEditing ? (
                    <Select onValueChange={(value) => handleInputChange("visualImpairment", value)}>
                      <SelectTrigger className="text-lg p-3">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="blind">Blind</SelectItem>
                        <SelectItem value="low-vision">Low Vision</SelectItem>
                        <SelectItem value="legally-blind">Legally Blind</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      value={profileData.visualImpairment.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                      disabled
                      className="text-lg p-3"
                    />
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="assistiveTechnology">Assistive Technology Used</Label>
                  <Textarea
                    id="assistiveTechnology"
                    value={profileData.assistiveTechnology}
                    onChange={(e) => handleInputChange("assistiveTechnology", e.target.value)}
                    disabled={!isEditing}
                    className="text-lg p-3"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accommodationNeeds">Specific Accommodation Needs</Label>
                  <Textarea
                    id="accommodationNeeds"
                    value={profileData.accommodationNeeds}
                    onChange={(e) => handleInputChange("accommodationNeeds", e.target.value)}
                    disabled={!isEditing}
                    className="text-lg p-3"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="emergency" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Emergency Contact</CardTitle>
                <CardDescription>Emergency contact information for urgent situations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                  <Input
                    id="emergencyContact"
                    value={profileData.emergencyContact}
                    onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                    disabled={!isEditing}
                    className="text-lg p-3"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                  <Input
                    id="emergencyPhone"
                    type="tel"
                    value={profileData.emergencyPhone}
                    onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                    disabled={!isEditing}
                    className="text-lg p-3"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
