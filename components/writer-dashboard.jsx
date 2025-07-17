"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  Settings,
  LogOut,
  Star,
  TrendingUp,
  Bell,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Users,
} from "lucide-react"

export default function WriterDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const router = useRouter()

  // Mock data
  const writerData = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    subjects: ["Mathematics", "Physics", "Chemistry"],
    rating: 4.9,
    avatar: "/placeholder-user.jpg",
  }

  const upcomingSessions = [
    {
      id: 1,
      student: "John Smith",
      subject: "Mathematics",
      type: "Exam",
      date: "2024-01-20",
      time: "10:00 AM",
      duration: "2 hours",
      status: "confirmed",
    },
    {
      id: 2,
      student: "Emily Davis",
      subject: "Physics",
      type: "Assignment",
      date: "2024-01-22",
      time: "2:00 PM",
      duration: "1.5 hours",
      status: "pending",
    },
  ]

  const recentSessions = [
    {
      id: 1,
      student: "Alex Wilson",
      subject: "Chemistry",
      type: "Lab Report",
      date: "2024-01-15",
      rating: 5,
      status: "completed",
    },
    {
      id: 2,
      student: "Maria Garcia",
      subject: "Mathematics",
      type: "Exam",
      date: "2024-01-12",
      rating: 4,
      status: "completed",
    },
  ]

  const stats = {
    totalSessions: 156,
    completedSessions: 148,
    averageRating: 4.9,
    hoursVolunteered: 312,
  }

  const handleLogout = () => {
    router.push("/")
  }

  const handleViewTasks = () => {
    router.push("/writer/tasks")
  }

  const handleViewProfile = () => {
    router.push("/writer/profile")
  }

  const handleViewAvailability = () => {
    router.push("/writer/availability")
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "default"
      case "pending":
        return "secondary"
      case "completed":
        return "outline"
      case "cancelled":
        return "destructive"
      default:
        return "secondary"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="h-4 w-4" />
      case "pending":
        return <Clock className="h-4 w-4" />
      case "completed":
        return <CheckCircle className="h-4 w-4" />
      case "cancelled":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
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
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>

              <Button variant="ghost" size="sm" onClick={handleViewProfile}>
                <Settings className="h-4 w-4 mr-2" />
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
              <AvatarImage src={writerData.avatar || "/placeholder.svg"} alt={writerData.name} />
              <AvatarFallback>
                {writerData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Welcome back, {writerData.name}!</h2>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span>{writerData.rating} rating</span>
                </div>
                <span>•</span>
                <span>{writerData.subjects.join(", ")}</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button onClick={handleViewTasks} className="bg-green-600 hover:bg-green-700">
              <BookOpen className="h-4 w-4 mr-2" />
              View Tasks
            </Button>
            <Button onClick={handleViewAvailability} variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Manage Availability
            </Button>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalSessions}</div>
                  <p className="text-xs text-muted-foreground">+12 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.completedSessions}</div>
                  <p className="text-xs text-muted-foreground">95% completion rate</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.averageRating}</div>
                  <p className="text-xs text-muted-foreground">Excellent feedback</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Hours Volunteered</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.hoursVolunteered}h</div>
                  <p className="text-xs text-muted-foreground">This year</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions and Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks and shortcuts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button onClick={handleViewTasks} className="w-full justify-start bg-transparent" variant="outline">
                    <BookOpen className="h-4 w-4 mr-2" />
                    View All Tasks
                  </Button>
                  <Button
                    onClick={handleViewAvailability}
                    className="w-full justify-start bg-transparent"
                    variant="outline"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Update Availability
                  </Button>
                  <Button onClick={handleViewProfile} className="w-full justify-start bg-transparent" variant="outline">
                    <User className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest sessions and updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentSessions.slice(0, 3).map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{session.subject}</h4>
                        <p className="text-sm text-gray-600">
                          {session.type} with {session.student}
                        </p>
                        <p className="text-sm text-gray-500">{session.date}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={getStatusColor(session.status)}>{session.status}</Badge>
                        {session.rating && (
                          <div className="flex items-center mt-1">
                            <Star className="h-3 w-3 text-yellow-500 mr-1" />
                            <span className="text-xs">{session.rating}</span>
                          </div>
                        )}
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
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>Your scheduled writing sessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingSessions.map((session) => (
                  <Card key={session.id} className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="flex-shrink-0">
                            <BookOpen className="h-8 w-8 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">
                              {session.subject} - {session.type}
                            </h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                              <span className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                {session.student}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {session.date}
                              </span>
                              <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {session.time} ({session.duration})
                              </span>
                            </div>
                            <Badge variant={getStatusColor(session.status)}>
                              {getStatusIcon(session.status)}
                              <span className="ml-1">{session.status}</span>
                            </Badge>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                          <Button size="sm" variant="outline">
                            Contact Student
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {upcomingSessions.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    <Calendar className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg">No upcoming sessions</p>
                    <p>Check your tasks for new requests</p>
                    <Button onClick={handleViewTasks} className="mt-4 bg-green-600 hover:bg-green-700">
                      <BookOpen className="h-4 w-4 mr-2" />
                      View Tasks
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Session History</CardTitle>
                <CardDescription>Your completed writing sessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentSessions.map((session) => (
                  <Card key={session.id} className="border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-8 w-8 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">
                              {session.subject} - {session.type}
                            </h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                              <span className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                {session.student}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {session.date}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline">Completed</Badge>
                              {session.rating && (
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                  <span className="font-medium">{session.rating}/5</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button size="sm" variant="outline">
                            View Report
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Track your volunteer impact</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Session Completion Rate</span>
                      <span>95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Average Rating</span>
                      <span>4.9/5</span>
                    </div>
                    <Progress value={98} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Response Time</span>
                      <span>Excellent</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subject Distribution</CardTitle>
                  <CardDescription>Sessions by subject area</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Mathematics</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={45} className="w-20 h-2" />
                        <span className="text-sm text-gray-500">70 sessions</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Physics</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={35} className="w-20 h-2" />
                        <span className="text-sm text-gray-500">55 sessions</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Chemistry</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={20} className="w-20 h-2" />
                        <span className="text-sm text-gray-500">31 sessions</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Your volunteer milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold">Dedicated Volunteer</h4>
                    <p className="text-sm text-gray-600">Completed 100+ sessions</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <h4 className="font-semibold">Top Rated</h4>
                    <p className="text-sm text-gray-600">Maintained 4.5+ star average</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold">Impact Maker</h4>
                    <p className="text-sm text-gray-600">300+ hours volunteered</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
