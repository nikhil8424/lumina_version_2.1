"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Bell, CheckCircle, AlertCircle, Clock, Trash2, BookMarkedIcon as MarkAsRead } from "lucide-react"

export default function StudentNotifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "exam_reminder",
      title: "Exam Reminder: Mathematics",
      message: "Your mathematics exam is scheduled for tomorrow at 10:00 AM with Sarah Johnson.",
      timestamp: "2024-01-19T14:30:00Z",
      read: false,
      priority: "high",
    },
    {
      id: 2,
      type: "writer_assigned",
      title: "Writer Assigned",
      message: "Michael Brown has been assigned as your writer for the History exam on January 22.",
      timestamp: "2024-01-18T09:15:00Z",
      read: false,
      priority: "medium",
    },
    {
      id: 3,
      type: "exam_completed",
      title: "Exam Results Available",
      message: "Your English Literature exam results are now available. Grade: A-",
      timestamp: "2024-01-16T16:45:00Z",
      read: true,
      priority: "low",
    },
    {
      id: 4,
      type: "system",
      title: "Profile Update Required",
      message: "Please update your accessibility preferences in your profile settings.",
      timestamp: "2024-01-15T11:20:00Z",
      read: true,
      priority: "medium",
    },
    {
      id: 5,
      type: "exam_cancelled",
      title: "Exam Session Cancelled",
      message: "Your Science exam scheduled for January 18 has been cancelled. Please reschedule.",
      timestamp: "2024-01-14T08:30:00Z",
      read: true,
      priority: "high",
    },
  ])

  const router = useRouter()

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })))
  }

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  const goBack = () => {
    router.push("/student/dashboard")
  }

  const getNotificationIcon = (type) => {
    switch (type) {
      case "exam_reminder":
        return <Clock className="h-5 w-5 text-blue-600" />
      case "writer_assigned":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "exam_completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "exam_cancelled":
        return <AlertCircle className="h-5 w-5 text-red-600" />
      case "system":
        return <Bell className="h-5 w-5 text-orange-600" />
      default:
        return <Bell className="h-5 w-5 text-gray-600" />
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "destructive"
      case "medium":
        return "default"
      case "low":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60))

    if (diffInHours < 1) {
      return "Just now"
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`
    } else {
      const diffInDays = Math.floor(diffInHours / 24)
      return `${diffInDays} days ago`
    }
  }

  const filterNotifications = (filter) => {
    switch (filter) {
      case "unread":
        return notifications.filter((n) => !n.read)
      case "read":
        return notifications.filter((n) => n.read)
      case "high":
        return notifications.filter((n) => n.priority === "high")
      default:
        return notifications
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" onClick={goBack} className="text-blue-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>

          {unreadCount > 0 && (
            <Button onClick={markAllAsRead} variant="outline">
              <MarkAsRead className="h-4 w-4 mr-2" />
              Mark All as Read
            </Button>
          )}
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <Bell className="h-6 w-6 mr-2 text-blue-600" />
                  Notifications
                </CardTitle>
                <CardDescription>Stay updated with your exam schedule and important announcements</CardDescription>
              </div>
              {unreadCount > 0 && (
                <Badge variant="destructive" className="text-lg px-3 py-1">
                  {unreadCount} unread
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
                <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
                <TabsTrigger value="read">Read ({notifications.length - unreadCount})</TabsTrigger>
                <TabsTrigger value="high">High Priority</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {filterNotifications("all").map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border rounded-lg transition-colors ${
                      !notification.read ? "bg-blue-50 border-blue-200" : "bg-white"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className={`font-medium ${!notification.read ? "font-semibold" : ""}`}>
                              {notification.title}
                            </h4>
                            <Badge variant={getPriorityColor(notification.priority)} className="text-xs">
                              {notification.priority}
                            </Badge>
                            {!notification.read && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                          </div>
                          <p className="text-gray-600 mb-2">{notification.message}</p>
                          <p className="text-sm text-gray-500">{formatTimestamp(notification.timestamp)}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => markAsRead(notification.id)}
                            className="text-blue-600 hover:text-blue-700"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteNotification(notification.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="unread" className="space-y-4">
                {filterNotifications("unread").map((notification) => (
                  <div key={notification.id} className="p-4 border rounded-lg bg-blue-50 border-blue-200">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold">{notification.title}</h4>
                            <Badge variant={getPriorityColor(notification.priority)} className="text-xs">
                              {notification.priority}
                            </Badge>
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          </div>
                          <p className="text-gray-600 mb-2">{notification.message}</p>
                          <p className="text-sm text-gray-500">{formatTimestamp(notification.timestamp)}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => markAsRead(notification.id)}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteNotification(notification.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                {filterNotifications("unread").length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-600" />
                    <p>All caught up! No unread notifications.</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="read" className="space-y-4">
                {filterNotifications("read").map((notification) => (
                  <div key={notification.id} className="p-4 border rounded-lg bg-white">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-medium">{notification.title}</h4>
                            <Badge variant={getPriorityColor(notification.priority)} className="text-xs">
                              {notification.priority}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-2">{notification.message}</p>
                          <p className="text-sm text-gray-500">{formatTimestamp(notification.timestamp)}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteNotification(notification.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="high" className="space-y-4">
                {filterNotifications("high").map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border rounded-lg transition-colors ${
                      !notification.read ? "bg-red-50 border-red-200" : "bg-white border-red-200"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className={`font-medium ${!notification.read ? "font-semibold" : ""}`}>
                              {notification.title}
                            </h4>
                            <Badge variant="destructive" className="text-xs">
                              HIGH PRIORITY
                            </Badge>
                            {!notification.read && <div className="w-2 h-2 bg-red-600 rounded-full"></div>}
                          </div>
                          <p className="text-gray-600 mb-2">{notification.message}</p>
                          <p className="text-sm text-gray-500">{formatTimestamp(notification.timestamp)}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => markAsRead(notification.id)}
                            className="text-blue-600 hover:text-blue-700"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteNotification(notification.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
