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
import { ArrowLeft, Camera, Save } from "lucide-react"

export default function StudentProfile() {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    institution: "University of Technology",
    studentId: "ST123456",
    disability: "blind",
    accommodations: "Need extra time for exams, prefer audio instructions",
    emergencyContact: "Jane Smith",
    emergencyPhone: "+1 (555) 987-6543",
  })

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    reminderTime: "24",
    preferredWriterGender: "no-preference",
    fontSize: "large",
    highContrast: true,
    screenReader: true,
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

  const handleSave = () => {
    // Save profile data
    alert("Profile updated successfully!")
  }

  const goBack = () => {
    router.push("/student/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" onClick={goBack} className="mb-4 text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Picture Section */}
          <Card className="lg:col-span-1">
            <CardHeader className="text-center">
              <CardTitle>Profile Picture</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <Avatar className="h-32 w-32 mx-auto">
                <AvatarImage src="/placeholder-user.jpg" alt="Profile" />
                <AvatarFallback className="text-2xl">JS</AvatarFallback>
              </Avatar>
              <Button variant="outline" className="w-full bg-transparent">
                <Camera className="h-4 w-4 mr-2" />
                Change Photo
              </Button>
              <div className="text-center">
                <h3 className="text-xl font-semibold">
                  {profileData.firstName} {profileData.lastName}
                </h3>
                <p className="text-gray-600">Student</p>
                <p className="text-sm text-gray-500">{profileData.institution}</p>
              </div>
            </CardContent>
          </Card>

          {/* Profile Information */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="personal" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="personal">Personal Info</TabsTrigger>
                  <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution</Label>
                      <Input
                        id="institution"
                        value={profileData.institution}
                        onChange={(e) => handleProfileChange("institution", e.target.value)}
                        className="text-lg p-3"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="studentId">Student ID</Label>
                      <Input
                        id="studentId"
                        value={profileData.studentId}
                        onChange={(e) => handleProfileChange("studentId", e.target.value)}
                        className="text-lg p-3"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyContact">Emergency Contact</Label>
                      <Input
                        id="emergencyContact"
                        value={profileData.emergencyContact}
                        onChange={(e) => handleProfileChange("emergencyContact", e.target.value)}
                        className="text-lg p-3"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergencyPhone">Emergency Phone</Label>
                      <Input
                        id="emergencyPhone"
                        type="tel"
                        value={profileData.emergencyPhone}
                        onChange={(e) => handleProfileChange("emergencyPhone", e.target.value)}
                        className="text-lg p-3"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="accessibility" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="disability">Type of Visual Impairment</Label>
                    <Select
                      value={profileData.disability}
                      onValueChange={(value) => handleProfileChange("disability", value)}
                    >
                      <SelectTrigger className="text-lg p-3">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="blind">Blind</SelectItem>
                        <SelectItem value="low-vision">Low Vision</SelectItem>
                        <SelectItem value="color-blind">Color Blind</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="accommodations">Required Accommodations</Label>
                    <Textarea
                      id="accommodations"
                      value={profileData.accommodations}
                      onChange={(e) => handleProfileChange("accommodations", e.target.value)}
                      className="text-lg p-3 min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="highContrast">High Contrast Mode</Label>
                        <p className="text-sm text-gray-600">Enable high contrast display</p>
                      </div>
                      <Switch
                        id="highContrast"
                        checked={preferences.highContrast}
                        onCheckedChange={(checked) => handlePreferenceChange("highContrast", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="screenReader">Screen Reader Support</Label>
                        <p className="text-sm text-gray-600">Optimize for screen readers</p>
                      </div>
                      <Switch
                        id="screenReader"
                        checked={preferences.screenReader}
                        onCheckedChange={(checked) => handlePreferenceChange("screenReader", checked)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fontSize">Font Size</Label>
                      <Select
                        value={preferences.fontSize}
                        onValueChange={(value) => handlePreferenceChange("fontSize", value)}
                      >
                        <SelectTrigger className="text-lg p-3">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                          <SelectItem value="extra-large">Extra Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="preferences" className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="emailNotifications">Email Notifications</Label>
                        <p className="text-sm text-gray-600">Receive exam reminders via email</p>
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
                        <p className="text-sm text-gray-600">Receive exam reminders via text</p>
                      </div>
                      <Switch
                        id="smsNotifications"
                        checked={preferences.smsNotifications}
                        onCheckedChange={(checked) => handlePreferenceChange("smsNotifications", checked)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reminderTime">Reminder Time</Label>
                      <Select
                        value={preferences.reminderTime}
                        onValueChange={(value) => handlePreferenceChange("reminderTime", value)}
                      >
                        <SelectTrigger className="text-lg p-3">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 hour before</SelectItem>
                          <SelectItem value="6">6 hours before</SelectItem>
                          <SelectItem value="24">24 hours before</SelectItem>
                          <SelectItem value="48">48 hours before</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredWriterGender">Preferred Writer Gender</Label>
                      <Select
                        value={preferences.preferredWriterGender}
                        onValueChange={(value) => handlePreferenceChange("preferredWriterGender", value)}
                      >
                        <SelectTrigger className="text-lg p-3">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no-preference">No Preference</SelectItem>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                <div className="flex justify-end pt-6">
                  <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
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
