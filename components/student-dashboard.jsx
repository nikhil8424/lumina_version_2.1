"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Calendar,
  User,
  Bell,
  Settings,
  LogOut,
  CheckCircle,
  AlertCircle,
  Users,
  FileText,
  Star,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const router = useRouter()

  const handleLogout = () => {
    router.push("/")
  }

  const handleProfile = () => {
    router.push("/student/profile")
  }

  const handleNotifications = () => {
    router.push("/student/notifications")
  }

  // Mock data
  const upcomingExams = [
    {
      id: 1,
      subject: "Advanced Mathematics",
      date: "2024-01-20",
      time: "10:00 AM",
      writer: "Sarah Johnson",
      status: "confirmed",
    },
    {
      id: 2,
      subject: "Literature Analysis",
      date: "2024-01-22",
      time: "2:00 PM",
      writer: "Michael Chen",
      status: "pending",
    },
  ]

  const recentSessions = [
    {
      id: 1,
      subject: "Physics",
      date: "2024-01-15",
      writer: "Emily Davis",
      rating: 5,
      status: "completed",
    },
    {
      id: 2,
      subject: "History",
      date: "2024-01-12",
      writer: "David Wilson",
      rating: 4,
      status: "completed",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">LUMINA</h1>
                <p className="text-sm text-gray-600">Student Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={handleNotifications}>
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleProfile}>
                <User className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback className="bg-blue-500 text-white text-lg">JD</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Welcome back, John!</h2>
                <p className="text-gray-600">Computer Science Student at Tech University</p>
                <div className="flex items-center space-x-4 mt-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified Student
                  </Badge>
                  <Badge variant="outline">3rd Year</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="exams">Upcoming Exams</TabsTrigger>
            <TabsTrigger value="history">Session History</TabsTrigger>
            <TabsTrigger value="writers">My Writers</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">2</p>
                      <p className="text-sm text-gray-600">Upcoming Exams</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">15</p>
                      <p className="text-sm text-gray-600">Completed Sessions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Users className="w-8 h-8 text-purple-600" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">5</p>
                      <p className="text-sm text-gray-600">Active Writers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Star className="w-8 h-8 text-yellow-600" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">4.8</p>
                      <p className="text-sm text-gray-600">Average Rating</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Next Exam */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                  <span>Next Exam</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Advanced Mathematics</h3>
                    <p className="text-gray-600">January 20, 2024 at 10:00 AM</p>
                    <p className="text-sm text-gray-500">Writer: Sarah Johnson</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-100 text-green-800">Confirmed</Badge>
                    <p className="text-sm text-gray-500 mt-1">Room 204, Main Building</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 h-16">
                    <div className="text-center">
                      <Calendar className="w-6 h-6 mx-auto mb-1" />
                      <span>Schedule Exam</span>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-16 bg-transparent">
                    <div className="text-center">
                      <Users className="w-6 h-6 mx-auto mb-1" />
                      <span>Find Writers</span>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-16 bg-transparent">
                    <div className="text-center">
                      <FileText className="w-6 h-6 mx-auto mb-1" />
                      <span>Upload Materials</span>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="exams" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Exams</CardTitle>
                <CardDescription>Your scheduled exam sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingExams.map((exam) => (
                    <div key={exam.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <BookOpen className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{exam.subject}</h3>
                          <p className="text-sm text-gray-600">
                            {exam.date} at {exam.time}
                          </p>
                          <p className="text-sm text-gray-500">Writer: {exam.writer}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          className={
                            exam.status === "confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {exam.status}
                        </Badge>
                        <div className="mt-2">
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Session History</CardTitle>
                <CardDescription>Your completed exam sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{session.subject}</h3>
                          <p className="text-sm text-gray-600">{session.date}</p>
                          <p className="text-sm text-gray-500">Writer: {session.writer}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < session.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <Badge className="bg-green-100 text-green-800 mt-1">Completed</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="writers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Writers</CardTitle>
                <CardDescription>Writers you've worked with</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Sarah Johnson", subjects: ["Mathematics", "Physics"], rating: 5, sessions: 8 },
                    { name: "Michael Chen", subjects: ["Literature", "History"], rating: 4, sessions: 5 },
                    { name: "Emily Davis", subjects: ["Chemistry", "Biology"], rating: 5, sessions: 3 },
                    { name: "David Wilson", subjects: ["Computer Science"], rating: 4, sessions: 2 },
                  ].map((writer, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <Avatar>
                          <AvatarFallback className="bg-blue-500 text-white">
                            {writer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{writer.name}</h3>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${i < writer.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-1">
                          {writer.subjects.map((subject, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600">{writer.sessions} sessions completed</p>
                        <Button size="sm" className="w-full">
                          Contact Writer
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
