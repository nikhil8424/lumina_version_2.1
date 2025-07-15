"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Camera, Save, Star, Award } from "lucide-react"

export default function WriterProfile() {
  const [profileData, setProfileData] = useState({
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 234-5678",
    experience: "experienced",
    qualifications: "Master's in English Literature, Teaching Certificate",
    subjects: ["English", "History", "Psychology"],
    availability: "flexible",
    motivation: "I am passionate about helping students with visual impairments achieve their academic goals.",
    bio: "Experienced writer and educator with 8 years of experience helping students succeed.",
    hourlyRate: "25",
    languages: ["English", "Spanish"],
  })

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: true,
    availableWeekends: true,
    maxSessionsPerDay: "4",
    preferredSessionLength: "2",
    autoAcceptBookings: false,
  })

  const [stats] = useState({
    totalSessions: 47,
    averageRating: 4.8,
    studentsHelped: 23,
    completionRate: 98,
  })

  const router = useRouter()

  const handleProfileChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handlePreferenceChange = (field, value) => {
    setPreferences((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubjectChange = (subject, checked) => {
    setProfileData((prev) => ({
      ...prev,
      subjects: checked ? [...prev.subjects, subject] : prev.subjects.filter((s) => s !== subject),
    }))
  }

  const handleSave = () => {
    // Save profile data
    alert("Profile updated successfully!")
  }

  const goBack = () => {
    router.push("/writer/dashboard")
  }

  const subjects = [
    "Mathematics",
    "Science",
    "English",
    "History",
    "Geography",
    "Computer Science",
    "Psychology",
    "Sociology",
    "Economics",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Button variant="ghost" onClick={goBack} className="mb-4 text-green-600 hover:text-green-700">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Profile Picture and Stats */}
          <Card className="lg:col-span-1">
            <CardHeader className="text-center">
              <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <Avatar className="h-32 w-32 mx-auto">
                <AvatarImage src="/placeholder-user.jpg" alt="Profile" />
                <AvatarFallback className="text-2xl">SJ</AvatarFallback>
              </Avatar>
              <Button variant="outline" className="w-full bg-transparent">
                <Camera className="h-4 w-4 mr-2" />
                Change Photo
              </Button>
              <div className="text-center">
                <h3 className="text-xl font-semibold">
                  {profileData.firstName} {profileData.lastName}
                </h3>
                <p className="text-gray-600">Volunteer Writer</p>
                <div className="flex items-center justify-center mt-2">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="font-medium">{stats.averageRating}</span>
                  <span className="text-gray-500 ml-1">({stats.totalSessions} sessions)</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-3 pt-4 border-t">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Sessions</span>
                  <span className="font-medium">{stats.totalSessions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Students Helped</span>
                  <span className="font-medium">{stats.studentsHelped}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Completion Rate</span>
                  <span className="font-medium">{stats.completionRate}%</span>
                </div>
              </div>

              {/* Badges */}
              <div className="space-y-2 pt-4 border-t">
                <Badge variant="secondary" className="w-full justify-center">
                  <Award className="h-3 w-3 mr-1" />
                  Top Rated Writer
                </Badge>
                <Badge variant="outline" className="w-full justify-center">
                  Verified Volunteer
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Profile Information */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="personal" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="personal">Personal Info</TabsTrigger>
                  <TabsTrigger value="professional">Professional</TabsTrigger>
                  <TabsTrigger value="subjects">Subjects</TabsTrigger>
                  <TabsTrigger value="preferences">Preferences</TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={profileData.firstName}
                        onChange={(e) => handleProfileChange("firstName", e.target.value)}
                        className="text-lg p-3"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={profileData.lastName}
                        onChange={(e) => handleProfileChange("lastName", e.target.value)}
                        className="text-lg p-3"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleProfileChange("email", e.target.value)}
                      className="text-lg p-3"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => handleProfileChange("phone", e.target.value)}
                      className="text-lg p-3"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={profileData.bio}
                      onChange={(e) => handleProfileChange("bio", e.target.value)}
                      placeholder="Tell students about yourself..."
                      className="text-lg p-3 min-h-[100px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hourlyRate">Hourly Rate (Optional)</Label>
                      <Input
                        id="hourlyRate"
                        type="number"
                        value={profileData.hourlyRate}
                        onChange={(e) => handleProfileChange("hourlyRate", e.target.value)}
                        className="text-lg p-3"
                        placeholder="25"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="languages">Languages</Label>
                      <Input
                        id="languages"
                        value={profileData.languages.join(", ")}
                        onChange={(e) => handleProfileChange("languages", e.target.value.split(", "))}
                        className="text-lg p-3"
                        placeholder="English, Spanish"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="professional" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level</Label>
                    <Select
                      value={profileData.experience}
                      onValueChange={(value) => handleProfileChange("experience", value)}
                    >
                      <SelectTrigger className="text-lg p-3">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                        <SelectItem value="experienced">Experienced (5+ years)</SelectItem>
                        <SelectItem value="professional">Professional Writer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="qualifications">Educational Qualifications</Label>
                    <Textarea
                      id="qualifications"
                      value={profileData.qualifications}
                      onChange={(e) => handleProfileChange("qualifications", e.target.value)}
                      placeholder="List your degrees, certifications, and relevant qualifications..."
                      className="text-lg p-3 min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">General Availability</Label>
                    <Select
                      value={profileData.availability}
                      onValueChange={(value) => handleProfileChange("availability", value)}
                    >
                      <SelectTrigger className="text-lg p-3">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekdays">Weekdays only</SelectItem>
                        <SelectItem value="weekends">Weekends only</SelectItem>
                        <SelectItem value="flexible">Flexible schedule</SelectItem>
                        <SelectItem value="limited">Limited availability</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Motivation</Label>
                    <Textarea
                      id="motivation"
                      value={profileData.motivation}
                      onChange={(e) => handleProfileChange("motivation", e.target.value)}
                      placeholder="Why do you want to volunteer as a writer?"
                      className="text-lg p-3 min-h-[120px]"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="subjects" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-medium">Subject Areas</Label>
                      <p className="text-sm text-gray-600 mb-4">Select all subjects you're comfortable helping with</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {subjects.map((subject) => (
                          <div key={subject} className="flex items-center space-x-2">
                            <Checkbox
                              id={subject}
                              checked={profileData.subjects.includes(subject)}
                              onCheckedChange={(checked) => handleSubjectChange(subject, checked)}
                            />
                            <Label htmlFor={subject} className="text-sm font-normal">
                              {subject}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Label className="text-base font-medium">Selected Subjects</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {profileData.subjects.map((subject) => (
                          <Badge key={subject} variant="secondary">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="preferences" className="space-y-4">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-4">Notification Preferences</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="emailNotifications">Email Notifications</Label>
                            <p className="text-sm text-gray-600">Receive booking notifications via email</p>
                          </div>
                          <Switch
                            id="emailNotifications"
                            checked={preferences.emailNotifications}
                            onCheckedChange={(checked) => handlePreferenceChange("emailNotifications", checked)}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="smsNotifications">SMS Notifications</Label>
                            <p className="text-sm text-gray-600">Receive urgent notifications via text</p>
                          </div>
                          <Switch
                            id="smsNotifications"
                            checked={preferences.smsNotifications}
                            onCheckedChange={(checked) => handlePreferenceChange("smsNotifications", checked)}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-4">Booking Preferences</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="availableWeekends">Available on Weekends</Label>
                            <p className="text-sm text-gray-600">Accept bookings on weekends</p>
                          </div>
                          <Switch
                            id="availableWeekends"
                            checked={preferences.availableWeekends}
                            onCheckedChange={(checked) => handlePreferenceChange("availableWeekends", checked)}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="autoAcceptBookings">Auto-accept Bookings</Label>
                            <p className="text-sm text-gray-600">Automatically accept compatible bookings</p>
                          </div>
                          <Switch
                            id="autoAcceptBookings"
                            checked={preferences.autoAcceptBookings}
                            onCheckedChange={(checked) => handlePreferenceChange("autoAcceptBookings", checked)}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="maxSessionsPerDay">Max Sessions Per Day</Label>
                            <Select
                              value={preferences.maxSessionsPerDay}
                              onValueChange={(value) => handlePreferenceChange("maxSessionsPerDay", value)}
                            >
                              <SelectTrigger className="text-lg p-3">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1 session</SelectItem>
                                <SelectItem value="2">2 sessions</SelectItem>
                                <SelectItem value="3">3 sessions</SelectItem>
                                <SelectItem value="4">4 sessions</SelectItem>
                                <SelectItem value="5">5+ sessions</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="preferredSessionLength">Preferred Session Length</Label>
                            <Select
                              value={preferences.preferredSessionLength}
                              onValueChange={(value) => handlePreferenceChange("preferredSessionLength", value)}
                            >
                              <SelectTrigger className="text-lg p-3">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1 hour</SelectItem>
                                <SelectItem value="1.5">1.5 hours</SelectItem>
                                <SelectItem value="2">2 hours</SelectItem>
                                <SelectItem value="3">3 hours</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <div className="flex justify-end pt-6">
                  <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
