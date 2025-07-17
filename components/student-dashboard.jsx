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
  Plus,
  Star,
  TrendingUp,
  Bell,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const router = useRouter()

  // Mock data
  const studentData = {
    name: "John Smith",
    email: "john.smith@university.edu",
    university: "University of Technology",
    major: "Computer Science",
    year: "Junior",
    avatar: "/placeholder-user.jpg",
  }

  const upcomingSessions = [
    {
      id: 1,
      subject: "Mathematics",
      type: "Exam",
      date: "2024-01-20",
      time: "10:00 AM",
      writer: "Sarah Johnson",
      status: "confirmed",
    },
    {
      id: 2,
      subject: "History",
      type: "Assignment",
      date: "2024-01-22",
      time: "2:00 PM",
      writer: "Michael Brown",
      status: "pending",
    },
  ]

  const recentSessions = [
    {
      id: 1,
      subject: "English Literature",
      type: "Exam",
      date: "2024-01-15",
      writer: "Lisa Chen",
      rating: 5,
      status: "completed",
    },
    {
      id: 2,
      subject: "Science",
      type: "Lab Report",
      date: "2024-01-10",
      writer: "David Wilson",
      rating: 4,
      status: "completed",
    },
  ]

  const stats = {
    totalSessions: 24,
    completedSessions: 22,
    averageRating: 4.8,
    hoursOfSupport: 48,
  }

  const handleLogout = () => {
    router.push("/")
  }

  const handleBookSession = () => {
    alert("Book new session functionality would be implemented here")
  }

  const handleViewProfile = () => {
    router.push("/student/profile")
  }

  const handleViewNotifications = () => {
    router.push("/student/notifications")
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-blue-900">LUMINA</h1>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Student
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={handleViewNotifications}>
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
              <AvatarImage src={studentData.avatar || "/placeholder.svg"} alt={studentData.name} />
              <AvatarFallback>
                {studentData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Welcome back, {studentData.name}!</h2>
              <p className="text-gray-600">
                {studentData.year} • {studentData.major} • {studentData.university}
              </p>
            </div>
          </div>

          <Button onClick={handleBookSession} className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Book New Session
          </Button>
        </div>

        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
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
                  <p className="text-xs text-muted-foreground">+3 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.completedSessions}</div>
                  <p className="text-xs text-muted-foreground">92% completion rate</p>
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
                  <CardTitle className="text-sm font-medium">Support Hours</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.hoursOfSupport}h</div>
                  <p className="text-xs text-muted-foreground">This semester</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks and shortcuts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button onClick={handleBookSession} className="w-full justify-start bg-transparent" variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Book New Writing Session
                  </Button>
                  <Button
                    onClick={handleViewNotifications}
                    className="w-full justify-start bg-transparent"
                    variant="outline"
                  >
                    <Bell className="h-4 w-4 mr-2" />
                    View Notifications
                  </Button>
                  <Button onClick={handleViewProfile} className="w-full justify-start bg-transparent" variant="outline">
                    <User className="h-4 w-4 mr-2" />
                    Update Profile
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
                          {session.type} with {session.writer}
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
                  <Card key={session.id} className="border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="flex-shrink-0">
                            <BookOpen className="h-8 w-8 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">
                              {session.subject} - {session.type}
                            </h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {session.date}
                              </span>
                              <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {session.time}
                              </span>
                              <span className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                {session.writer}
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
                            Contact Writer
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
                    <p>Book a new session to get started</p>
                    <Button onClick={handleBookSession} className="mt-4 bg-blue-600 hover:bg-blue-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Book Session
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
                  <Card key={session.id} className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">
                              {session.subject} - {session.type}
                            </h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {session.date}
                              </span>
                              <span className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                {session.writer}
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
                          <Button size="sm" variant="outline">
                            Rate Session
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Progress</CardTitle>
                  <CardDescription>Track your improvement over time</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Session Completion Rate</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Average Session Rating</span>
                      <span>4.8/5</span>
                    </div>
                    <Progress value={96} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Monthly Goal Progress</span>
                      <span>8/10 sessions</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subject Breakdown</CardTitle>
                  <CardDescription>Sessions by subject area</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Mathematics</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={40} className="w-20 h-2" />
                        <span className="text-sm text-gray-500">8 sessions</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">English Literature</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={30} className="w-20 h-2" />
                        <span className="text-sm text-gray-500">6 sessions</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">History</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={20} className="w-20 h-2" />
                        <span className="text-sm text-gray-500">4 sessions</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Science</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={30} className="w-20 h-2" />
                        <span className="text-sm text-gray-500">6 sessions</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Your milestones and accomplishments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold">First Session</h4>
                    <p className="text-sm text-gray-600">Completed your first writing session</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <h4 className="font-semibold">High Achiever</h4>
                    <p className="text-sm text-gray-600">Maintained 4+ star average</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold">Dedicated Learner</h4>
                    <p className="text-sm text-gray-600">Completed 20+ sessions</p>
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
