"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Edit, Save, X, Camera, Mail, Phone, GraduationCap, Star } from "lucide-react"
import StarRating from "@/components/star-rating"

export default function WriterProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 234-5678",
    education: "Master's in Mathematics Education, Bachelor's in Mathematics",
    experience: "5 years of tutoring experience, 2 years with visually impaired students",
    subjects: ["Mathematics", "Statistics", "Calculus", "Algebra"],
    availability: "Weekdays 9 AM - 5 PM, Weekends by appointment",
    motivation:
      "I'm passionate about making mathematics accessible to all students, especially those with visual impairments. My goal is to help students build confidence in their mathematical abilities.",
    specializations: ["Advanced Mathematics", "Statistics", "Test Preparation"],
    languages: ["English", "Spanish"],
  })

  const router = useRouter()

  const handleBack = () => {
    router.push("/writer/dashboard")
  }

  const handleSave = () => {
    setIsEditing(false)
    // Add save logic here
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset form data if needed
  }

  const handleInputChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubjectToggle = (subject) => {
    setProfileData((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject],
    }))
  }

  const allSubjects = [
    "Mathematics",
    "Statistics",
    "Calculus",
    "Algebra",
    "Geometry",
    "Science",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "Literature",
    "History",
    "Computer Science",
    "Psychology",
    "Other",
  ]

  const reviews = [
    {
      id: 1,
      student: "Alex Smith",
      rating: 5,
      comment:
        "Sarah was incredibly patient and helpful during my calculus exam. She explained complex concepts clearly.",
      date: "2 weeks ago",
    },
    {
      id: 2,
      student: "Emma Johnson",
      rating: 5,
      comment: "Excellent support with statistics. Made the subject much more understandable.",
      date: "1 month ago",
    },
    {
      id: 3,
      student: "Michael Chen",
      rating: 4,
      comment: "Very knowledgeable and professional. Great experience overall.",
      date: "1 month ago",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Button variant="ghost" onClick={handleBack} className="mr-4 p-2" aria-label="Go back to dashboard">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Writer Profile</h1>
                <p className="text-gray-600">Manage your writer information</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {isEditing ? (
                <>
                  <Button onClick={handleSave} size="sm" className="bg-green-600 hover:bg-green-700">
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button onClick={handleCancel} variant="outline" size="sm">
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)} size="sm" className="bg-green-600 hover:bg-green-700">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="relative inline-block mb-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback className="text-2xl">SJ</AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                      <Camera className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                  {profileData.firstName} {profileData.lastName}
                </h2>
                <p className="text-gray-600 mb-2">Mathematics Specialist</p>
                <div className="flex items-center justify-center gap-1 mb-4">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.9</span>
                  <span className="text-gray-500 text-sm">(24 reviews)</span>
                </div>

                <div className="space-y-2 mb-4">
                  {profileData.subjects.slice(0, 3).map((subject) => (
                    <Badge key={subject} variant="secondary" className="bg-green-100 text-green-800">
                      {subject}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 space-y-3 text-left">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{profileData.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{profileData.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <GraduationCap className="w-4 h-4" />
                    <span>{profileData.education}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Writer Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Students Helped</span>
                    <span className="font-semibold">28</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Sessions Completed</span>
                    <span className="font-semibold">45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Average Rating</span>
                    <span className="font-semibold">4.9/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Response Time</span>
                    <span className="font-semibold">&lt; 2 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="personal" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="subjects">Subjects</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              {/* Personal Information */}
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={profileData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profileData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <Label htmlFor="availability">Availability</Label>
                      <Textarea
                        id="availability"
                        value={profileData.availability}
                        onChange={(e) => handleInputChange("availability", e.target.value)}
                        disabled={!isEditing}
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="motivation">Motivation & Goals</Label>
                      <Textarea
                        id="motivation"
                        value={profileData.motivation}
                        onChange={(e) => handleInputChange("motivation", e.target.value)}
                        disabled={!isEditing}
                        rows={4}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Qualifications */}
              <TabsContent value="qualifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Qualifications & Experience</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="education">Educational Background</Label>
                      <Textarea
                        id="education"
                        value={profileData.education}
                        onChange={(e) => handleInputChange("education", e.target.value)}
                        disabled={!isEditing}
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience">Teaching & Tutoring Experience</Label>
                      <Textarea
                        id="experience"
                        value={profileData.experience}
                        onChange={(e) => handleInputChange("experience", e.target.value)}
                        disabled={!isEditing}
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label>Specializations</Label>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {profileData.specializations.map((spec) => (
                          <Badge key={spec} variant="outline">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label>Languages</Label>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {profileData.languages.map((lang) => (
                          <Badge key={lang} variant="outline">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Subjects */}
              <TabsContent value="subjects">
                <Card>
                  <CardHeader>
                    <CardTitle>Subject Areas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {allSubjects.map((subject) => (
                        <div key={subject} className="flex items-center space-x-2">
                          <Checkbox
                            id={subject}
                            checked={profileData.subjects.includes(subject)}
                            onCheckedChange={() => handleSubjectToggle(subject)}
                            disabled={!isEditing}
                          />
                          <Label htmlFor={subject} className="text-sm">
                            {subject}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Reviews */}
              <TabsContent value="reviews">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b pb-4 last:border-b-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-800">{review.student}</h4>
                              <StarRating rating={review.rating} readonly />
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
