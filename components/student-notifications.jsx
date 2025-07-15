"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Bell, CheckCircle, AlertCircle, Calendar, MessageSquare, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function StudentNotifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "session",
      title: "Session Confirmed",
      message: "Your mathematics exam session with Sarah Johnson has been confirmed for tomorrow at 2:00 PM.",
      time: "2 hours ago",
      read: false,
      priority: "high",
    },
    {
      id: 2,
      type: "message",
      title: "New Message",
      message: "Michael Chen sent you a message about your history assignment.",
      time: "4 hours ago",
      read: false,
      priority: "medium",
    },
    {
      id: 3,
      type: "reminder",
      title: "Session Reminder",
      message: "Don't forget about your upcoming session tomorrow at 2:00 PM.",
      time: "1 day ago",
      read: true,
      priority: "medium",
    },
    {
      id: 4,
      type: "system",
      title: "Profile Updated",
      message: "Your profile information has been successfully updated.",
      time: "2 days ago",
      read: true,
      priority: "low",
    },
    {
      id: 5,
      type: "session",
      title: "Session Completed",
      message: "Your science exam session has been completed. Please rate your experience.",
      time: "3 days ago",
      read: true,
      priority: "medium",
    },
  ])

  const router = useRouter()

  const handleBack = () => {
    router.push("/student/dashboard")
  }

  const markAsRead = (id) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })))
  }

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id))
  }

  const getIcon = (type) => {
    switch (type) {
      case "session":
        return <Calendar className="w-5 h-5 text-blue-500" />
      case "message":
        return <MessageSquare className="w-5 h-5 text-green-500" />
      case "reminder":
        return <Bell className="w-5 h-5 text-yellow-500" />
      case "system":
        return <CheckCircle className="w-5 h-5 text-gray-500" />
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const unreadCount = notifications.filter((n) => !n.read).length
  const unreadNotifications = notifications.filter((n) => !n.read)
  const readNotifications = notifications.filter((n) => n.read)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Button variant="ghost" onClick={handleBack} className="mr-4 p-2" aria-label="Go back to dashboard">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
                <p className="text-gray-600">
                  {unreadCount > 0 ? `${unreadCount} unread notifications` : "All caught up!"}
                </p>
              </div>
            </div>
            {unreadCount > 0 && (
              <Button onClick={markAllAsRead} variant="outline" size="sm">
                Mark All as Read
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
            <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
            <TabsTrigger value="read">Read ({readNotifications.length})</TabsTrigger>
          </TabsList>

          {/* All Notifications */}
          <TabsContent value="all">
            <div className="space-y-4">
              {notifications.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">No notifications</h3>
                    <p className="text-gray-500">You're all caught up! New notifications will appear here.</p>
                  </CardContent>
                </Card>
              ) : (
                notifications.map((notification) => (
                  <Card
                    key={notification.id}
                    className={`transition-all hover:shadow-md ${
                      !notification.read ? "border-l-4 border-l-blue-500 bg-blue-50/30" : ""
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          {getIcon(notification.type)}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className={`font-semibold ${!notification.read ? "text-gray-900" : "text-gray-700"}`}>
                                {notification.title}
                              </h4>
                              <Badge variant="secondary" className={getPriorityColor(notification.priority)}>
                                {notification.priority}
                              </Badge>
                              {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                            </div>
                            <p className={`text-sm ${!notification.read ? "text-gray-700" : "text-gray-600"} mb-2`}>
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-500">{notification.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          {!notification.read && (
                            <Button onClick={() => markAsRead(notification.id)} variant="ghost" size="sm">
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                          )}
                          <Button
                            onClick={() => deleteNotification(notification.id)}
                            variant="ghost"
                            size="sm"
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* Unread Notifications */}
          <TabsContent value="unread">
            <div className="space-y-4">
              {unreadNotifications.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">All caught up!</h3>
                    <p className="text-gray-500">You have no unread notifications.</p>
                  </CardContent>
                </Card>
              ) : (
                unreadNotifications.map((notification) => (
                  <Card
                    key={notification.id}
                    className="border-l-4 border-l-blue-500 bg-blue-50/30 transition-all hover:shadow-md"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          {getIcon(notification.type)}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-gray-900">{notification.title}</h4>
                              <Badge variant="secondary" className={getPriorityColor(notification.priority)}>
                                {notification.priority}
                              </Badge>
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                            <p className="text-sm text-gray-700 mb-2">{notification.message}</p>
                            <p className="text-xs text-gray-500">{notification.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <Button onClick={() => markAsRead(notification.id)} variant="ghost" size="sm">
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                          <Button
                            onClick={() => deleteNotification(notification.id)}
                            variant="ghost"
                            size="sm"
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* Read Notifications */}
          <TabsContent value="read">
            <div className="space-y-4">
              {readNotifications.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">No read notifications</h3>
                    <p className="text-gray-500">Read notifications will appear here.</p>
                  </CardContent>
                </Card>
              ) : (
                readNotifications.map((notification) => (
                  <Card key={notification.id} className="transition-all hover:shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          {getIcon(notification.type)}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-gray-700">{notification.title}</h4>
                              <Badge variant="secondary" className={getPriorityColor(notification.priority)}>
                                {notification.priority}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                            <p className="text-xs text-gray-500">{notification.time}</p>
                          </div>
                        </div>
                        <Button
                          onClick={() => deleteNotification(notification.id)}
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-700 ml-4"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
