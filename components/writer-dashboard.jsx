"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Clock,
  User,
  BookOpen,
  Bell,
  Settings,
  LogOut,
  CheckCircle,
  Moon,
  Sun,
  Users,
  Star,
} from "lucide-react"
import { useTheme } from "next-themes"

export default function WriterDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  const upcomingSessions = [
    {
      id: 1,
      student: "John Smith",
      subject: "Mathematics",
      date: "2024-01-20",
      time: "10:00 AM",
      duration: "2 hours",
      status: "confirmed",
    },
    {
      id: 2,
      student: "Emily Johnson",
      subject: "History",
      date: "2024-01-22",
      time: "2:00 PM",
      duration: "1.5 hours",
      status: "pending",
    },
  ]

  const completedSessions = [
    {
      id: 1,
      student: "Sarah Davis",
      subject: "English Literature",
      date: "2024-01-15",
      duration: "2 hours",
      status: "completed",
      rating: 5,
    },
    {
      id: 2,
      student: "Michael Brown",
      subject: "Science",
      date: "2024-01-10",
      duration: "1.5 hours",
      status: "completed",
      rating: 4,
    },
  ]

  const handleLogout = () => {
    router.push("/")
  }

  const navigateToProfile = () => {
    router.push("/writer/profile")
  }

  const navigateToAvailability = () => {
    router.push("/writer/availability")
  }

  const navigateToTasks = () => {
    router.push("/writer/tasks")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-green-900">LUMINA</h1>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Writer
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
                <Badge variant="destructive" className="ml-1 h-5 w-5 p-0 text-xs">
                  2
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
              <AvatarImage src="/placeholder-user.jpg" alt="Writer" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Welcome back, Sarah!</h2>
              <p className="text-gray-600">Ready to help students succeed?</p>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button onClick={navigateToAvailability} className="bg-green-600 hover:bg-green-700">
              <Calendar className="h-4 w-4 mr-2" />
              Manage Availability
            </Button>
            <Button
              onClick={navigateToTasks}
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              View Tasks
            </Button>
          </div>
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">47</div>
                  <p className="text-xs text-muted-foreground">+3 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{upcomingSessions.length}</div>
                  <p className="text-xs text-muted-foreground">Next: Tomorrow 10:00 AM</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Students Helped</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-xs text-muted-foreground">Across all subjects</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8</div>
                  <p className="text-xs text-muted-foreground">Based on 35 reviews</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Sessions</CardTitle>
                  <CardDescription>Your scheduled writing sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{session.subject}</h4>
                        <p className="text-sm text-gray-600">
                          {session.date} at {session.time}
                        </p>
                        <p className="text-sm text-gray-500">Student: {session.student}</p>
                        <p className="text-sm text-gray-500">Duration: {session.duration}</p>
                      </div>
                      <Badge variant={session.status === "confirmed" ? "default" : "secondary"}>{session.status}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Sessions</CardTitle>
                  <CardDescription>Your completed writing sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {completedSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{session.subject}</h4>
                        <p className="text-sm text-gray-600">{session.date}</p>
                        <p className="text-sm text-gray-500">Student: {session.student}</p>
                        <p className="text-sm text-gray-500">Duration: {session.duration}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-1">
                          {session.status}
                        </Badge>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm font-medium">{session.rating}</span>
                        </div>
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
                <CardTitle>Upcoming Writing Sessions</CardTitle>
                <CardDescription>Manage your scheduled sessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Calendar className="h-8 w-8 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">{session.subject}</h4>
                        <p className="text-gray-600">
                          <Clock className="inline h-4 w-4 mr-1" />
                          {session.date} at {session.time}
                        </p>
                        <p className="text-gray-500">
                          <User className="inline h-4 w-4 mr-1" />
                          Student: {session.student}
                        </p>
                        <p className="text-gray-500">Duration: {session.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={session.status === "confirmed" ? "default" : "secondary"}>{session.status}</Badge>
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
                <CardTitle>Session History</CardTitle>
                <CardDescription>Your completed writing sessions and ratings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {completedSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">{session.subject}</h4>
                        <p className="text-gray-600">{session.date}</p>
                        <p className="text-gray-500">Student: {session.student}</p>
                        <p className="text-gray-500">Duration: {session.duration}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2">
                        {session.status}
                      </Badge>
                      <div className="flex items-center justify-end">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-lg font-bold">{session.rating}</span>
                      </div>
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
                    <h4 className="font-medium">Availability</h4>
                    <p className="text-sm text-gray-600">Manage your availability schedule</p>
                  </div>
                  <Button variant="outline" onClick={navigateToAvailability}>
                    <Calendar className="h-4 w-4 mr-2" />
                    Manage
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
