"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, User, BookOpen, Bell, Settings, LogOut, Plus, CheckCircle, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  const upcomingExams = [
    {
      id: 1,
      subject: "Mathematics",
      date: "2024-01-20",
      time: "10:00 AM",
      writer: "Sarah Johnson",
      status: "confirmed",
    },
    {
      id: 2,
      subject: "History",
      date: "2024-01-22",
      time: "2:00 PM",
      writer: "Michael Brown",
      status: "pending",
    },
  ]

  const recentExams = [
    {
      id: 1,
      subject: "English Literature",
      date: "2024-01-15",
      writer: "Emily Davis",
      status: "completed",
      grade: "A-",
    },
    {
      id: 2,
      subject: "Science",
      date: "2024-01-10",
      writer: "John Smith",
      status: "completed",
      grade: "B+",
    },
  ]

  const handleLogout = () => {
    router.push("/")
  }

  const navigateToProfile = () => {
    router.push("/student/profile")
  }

  const navigateToNotifications = () => {
    router.push("/student/notifications")
  }

  const requestExam = () => {
    // This would typically open a modal or navigate to a request form
    alert("Exam request functionality would be implemented here")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-blue-900">LUMINA</h1>
              <Badge variant="secondary">Student</Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button variant="ghost" size="sm" onClick={navigateToNotifications}>
                <Bell className="h-4 w-4" />
                <Badge variant="destructive" className="ml-1 h-5 w-5 p-0 text-xs">
                  3
                </Badge>
              </Button>

              <Button variant="ghost" size="sm" onClick={navigateToProfile}>
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>

              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder-user.jpg" alt="Student" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Welcome back, John!</h2>
              <p className="text-gray-600">Ready for your next exam session?</p>
            </div>
          </div>

          <Button onClick={requestExam} className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Request New Exam Session
          </Button>
        </div>

        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Exams</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{upcomingExams.length}</div>
                  <p className="text-xs text-muted-foreground">Next: Tomorrow 10:00 AM</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">B+</div>
                  <p className="text-xs text-muted-foreground">Improved from B</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Exams</CardTitle>
                  <CardDescription>Your scheduled exam sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingExams.map((exam) => (
                    <div key={exam.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{exam.subject}</h4>
                        <p className="text-sm text-gray-600">
                          {exam.date} at {exam.time}
                        </p>
                        <p className="text-sm text-gray-500">Writer: {exam.writer}</p>
                      </div>
                      <Badge variant={exam.status === "confirmed" ? "default" : "secondary"}>{exam.status}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Exams</CardTitle>
                  <CardDescription>Your completed exam sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentExams.map((exam) => (
                    <div key={exam.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{exam.subject}</h4>
                        <p className="text-sm text-gray-600">{exam.date}</p>
                        <p className="text-sm text-gray-500">Writer: {exam.writer}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-1">
                          {exam.status}
                        </Badge>
                        <p className="text-sm font-medium text-green-600">{exam.grade}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Exam Sessions</CardTitle>
                <CardDescription>Manage your scheduled exams</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingExams.map((exam) => (
                  <div key={exam.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Calendar className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">{exam.subject}</h4>
                        <p className="text-gray-600">
                          <Clock className="inline h-4 w-4 mr-1" />
                          {exam.date} at {exam.time}
                        </p>
                        <p className="text-gray-500">
                          <User className="inline h-4 w-4 mr-1" />
                          Writer: {exam.writer}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={exam.status === "confirmed" ? "default" : "secondary"}>{exam.status}</Badge>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Exam History</CardTitle>
                <CardDescription>Your completed exam sessions and results</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentExams.map((exam) => (
                  <div key={exam.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">{exam.subject}</h4>
                        <p className="text-gray-600">{exam.date}</p>
                        <p className="text-gray-500">Writer: {exam.writer}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2">
                        {exam.status}
                      </Badge>
                      <p className="text-lg font-bold text-green-600">{exam.grade}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard Settings</CardTitle>
                <CardDescription>Customize your dashboard experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Dark Mode</h4>
                    <p className="text-sm text-gray-600">Toggle dark mode theme</p>
                  </div>
                  <Button variant="outline" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Notifications</h4>
                    <p className="text-sm text-gray-600">Manage notification preferences</p>
                  </div>
                  <Button variant="outline" onClick={navigateToNotifications}>
                    <Bell className="h-4 w-4 mr-2" />
                    Configure
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Profile Settings</h4>
                    <p className="text-sm text-gray-600">Update your profile information</p>
                  </div>
                  <Button variant="outline" onClick={navigateToProfile}>
                    <Settings className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
