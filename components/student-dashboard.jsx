"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Clock,
  User,
  BookOpen,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  Plus,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

export default function StudentDashboard() {
  const [activeRequests, setActiveRequests] = useState([
    {
      id: 1,
      subject: "Mathematics",
      type: "Exam Support",
      writer: "Sarah Johnson",
      date: "2024-01-15",
      time: "2:00 PM",
      status: "confirmed",
    },
    {
      id: 2,
      subject: "History",
      type: "Assignment Help",
      writer: "Michael Chen",
      date: "2024-01-16",
      time: "10:00 AM",
      status: "pending",
    },
  ])

  const [recentSessions, setRecentSessions] = useState([
    {
      id: 1,
      subject: "Computer Science",
      writer: "Emily Rodriguez",
      date: "2024-01-10",
      duration: "2 hours",
      rating: 5,
    },
    {
      id: 2,
      subject: "English Literature",
      writer: "David Wilson",
      date: "2024-01-08",
      duration: "1.5 hours",
      rating: 4,
    },
  ])

  const router = useRouter()

  const handleLogout = () => {
    router.push("/")
  }

  const handleNewRequest = () => {
    // This would open a modal or navigate to a new request form
    alert("New request form would open here")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-blue-900">LUMINA</h1>
              <Badge variant="secondary">Student Dashboard</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => router.push("/student/profile")}>
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h2>
          <p className="text-gray-600">Here's what's happening with your writing support today.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Upcoming Sessions</p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Hours</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <User className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Writers</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="requests" className="space-y-6">
          <TabsList>
            <TabsTrigger value="requests">Active Requests</TabsTrigger>
            <TabsTrigger value="history">Session History</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="requests" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">Active Requests</h3>
              <Button onClick={handleNewRequest} className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                New Request
              </Button>
            </div>

            <div className="grid gap-4">
              {activeRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{request.subject}</h4>
                          <Badge variant="outline">{request.type}</Badge>
                          <Badge
                            variant={request.status === "confirmed" ? "default" : "secondary"}
                            className={
                              request.status === "confirmed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {request.status === "confirmed" ? (
                              <CheckCircle className="h-3 w-3 mr-1" />
                            ) : (
                              <AlertCircle className="h-3 w-3 mr-1" />
                            )}
                            {request.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {request.writer}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {request.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {request.time}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Recent Sessions</h3>
            <div className="grid gap-4">
              {recentSessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{session.subject}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {session.writer}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {session.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {session.duration}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-sm ${i < session.rating ? "text-yellow-400" : "text-gray-300"}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Messages</h3>
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-8">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No messages yet. Start a conversation with your writers!</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
