"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  BookOpen,
  TrendingUp,
  Search,
  Filter,
  Settings,
  LogOut,
  UserCheck,
  UserX,
  AlertTriangle,
  CheckCircle,
  Clock,
  Star,
  BarChart3,
} from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const router = useRouter()

  // Mock data
  const stats = {
    totalStudents: 156,
    totalWriters: 89,
    activeSessions: 23,
    completedSessions: 1247,
    averageRating: 4.7,
    pendingApprovals: 12,
  }

  const recentSessions = [
    {
      id: 1,
      student: "John Smith",
      writer: "Sarah Johnson",
      subject: "Mathematics",
      date: "2024-01-20",
      status: "completed",
      rating: 5,
    },
    {
      id: 2,
      student: "Emily Davis",
      writer: "Michael Brown",
      subject: "History",
      date: "2024-01-20",
      status: "active",
      rating: null,
    },
    {
      id: 3,
      student: "Alex Wilson",
      writer: "Lisa Chen",
      subject: "Science",
      date: "2024-01-19",
      status: "completed",
      rating: 4,
    },
  ]

  const pendingWriters = [
    {
      id: 1,
      name: "David Thompson",
      email: "david.thompson@email.com",
      subjects: ["Mathematics", "Physics"],
      experience: "experienced",
      appliedDate: "2024-01-18",
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.garcia@email.com",
      subjects: ["English", "History"],
      experience: "intermediate",
      appliedDate: "2024-01-17",
    },
  ]

  const systemAlerts = [
    {
      id: 1,
      type: "warning",
      message: "High demand for Mathematics writers this week",
      timestamp: "2024-01-20T10:30:00Z",
    },
    {
      id: 2,
      type: "info",
      message: "New accessibility features deployed successfully",
      timestamp: "2024-01-19T15:45:00Z",
    },
    {
      id: 3,
      type: "error",
      message: "Payment processing delay reported",
      timestamp: "2024-01-19T09:20:00Z",
    },
  ]

  const handleLogout = () => {
    router.push("/")
  }

  const handleApproveWriter = (writerId) => {
    alert(`Writer ${writerId} approved!`)
  }

  const handleRejectWriter = (writerId) => {
    alert(`Writer ${writerId} rejected!`)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "default"
      case "completed":
        return "outline"
      case "cancelled":
        return "destructive"
      default:
        return "secondary"
    }
  }

  const getAlertIcon = (type) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "error":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      case "info":
        return <CheckCircle className="h-4 w-4 text-blue-500" />
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-purple-900">LUMINA</h1>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                Admin
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h2>
          <p className="text-gray-600">Monitor and manage the LUMINA platform</p>
        </div>

        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="approvals">Approvals</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalStudents}</div>
                  <p className="text-xs text-muted-foreground">+12 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Writers</CardTitle>
                  <UserCheck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalWriters}</div>
                  <p className="text-xs text-muted-foreground">+5 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.activeSessions}</div>
                  <p className="text-xs text-muted-foreground">Currently ongoing</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.averageRating}</div>
                  <p className="text-xs text-muted-foreground">Based on {stats.completedSessions} sessions</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Sessions</CardTitle>
                  <CardDescription>Latest writing sessions on the platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{session.subject}</h4>
                        <p className="text-sm text-gray-600">
                          {session.student} → {session.writer}
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

              <Card>
                <CardHeader>
                  <CardTitle>System Alerts</CardTitle>
                  <CardDescription>Important system notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {systemAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                      <div className="flex-shrink-0 mt-0.5">{getAlertIcon(alert.type)}</div>
                      <div className="flex-1">
                        <p className="text-sm">{alert.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{new Date(alert.timestamp).toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage students and writers on the platform</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-32">
                        <Filter className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="Filter" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Users</SelectItem>
                        <SelectItem value="students">Students</SelectItem>
                        <SelectItem value="writers">Writers</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Students ({stats.totalStudents})</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-2 border rounded">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>JS</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">John Smith</p>
                              <p className="text-xs text-gray-500">University of Tech</p>
                            </div>
                          </div>
                          <Badge variant="outline">Active</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>ED</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">Emily Davis</p>
                              <p className="text-xs text-gray-500">State College</p>
                            </div>
                          </div>
                          <Badge variant="outline">Active</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Writers ({stats.totalWriters})</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-2 border rounded">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>SJ</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">Sarah Johnson</p>
                              <p className="text-xs text-gray-500">Math, Science</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-500" />
                            <span className="text-xs">4.9</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>MB</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">Michael Brown</p>
                              <p className="text-xs text-gray-500">History, English</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-500" />
                            <span className="text-xs">4.7</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Session Management</CardTitle>
                <CardDescription>Monitor all writing sessions on the platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <BookOpen className="h-8 w-8 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">{session.subject}</h4>
                        <p className="text-gray-600">
                          Student: {session.student} | Writer: {session.writer}
                        </p>
                        <p className="text-gray-500 text-sm">{session.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={getStatusColor(session.status)} className="mb-2">
                        {session.status}
                      </Badge>
                      {session.rating && (
                        <div className="flex items-center justify-end">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm font-medium">{session.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="approvals" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Writer Approvals</CardTitle>
                    <CardDescription>Review and approve new writer applications</CardDescription>
                  </div>
                  <Badge variant="destructive" className="text-lg px-3 py-1">
                    {stats.pendingApprovals} pending
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {pendingWriters.map((writer) => (
                  <Card key={writer.id} className="border-l-4 border-l-yellow-500">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>
                              {writer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-lg">{writer.name}</h4>
                            <p className="text-gray-600">{writer.email}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge variant="outline">{writer.experience}</Badge>
                              {writer.subjects.map((subject) => (
                                <Badge key={subject} variant="secondary">
                                  {subject}
                                </Badge>
                              ))}
                            </div>
                            <p className="text-sm text-gray-500 mt-2">Applied: {writer.appliedDate}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            onClick={() => handleApproveWriter(writer.id)}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <UserCheck className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleRejectWriter(writer.id)}
                            className="text-red-600 border-red-600 hover:bg-red-50"
                          >
                            <UserX className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.completedSessions}</div>
                  <p className="text-xs text-muted-foreground">+180 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">94.2%</div>
                  <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Session Time</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1.8h</div>
                  <p className="text-xs text-muted-foreground">-0.2h from last month</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Platform Analytics</CardTitle>
                <CardDescription>Detailed insights into platform usage and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Most Popular Subjects</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Mathematics</span>
                          <span className="font-medium">32%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>English</span>
                          <span className="font-medium">28%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Science</span>
                          <span className="font-medium">22%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>History</span>
                          <span className="font-medium">18%</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Peak Usage Hours</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>10:00 AM - 12:00 PM</span>
                          <span className="font-medium">High</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2:00 PM - 4:00 PM</span>
                          <span className="font-medium">High</span>
                        </div>
                        <div className="flex justify-between">
                          <span>6:00 PM - 8:00 PM</span>
                          <span className="font-medium">Medium</span>
                        </div>
                        <div className="flex justify-between">
                          <span>8:00 PM - 10:00 PM</span>
                          <span className="font-medium">Low</span>
                        </div>
                      </div>
                    </div>
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
