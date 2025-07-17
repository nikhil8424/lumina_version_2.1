"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, User, MessageSquare, CheckCircle, AlertCircle, FileText, Star } from "lucide-react"

export default function WriterTasks() {
  const [availableTasks, setAvailableTasks] = useState([
    {
      id: 1,
      student: "John Smith",
      subject: "Mathematics",
      type: "Exam Support",
      date: "2024-01-15",
      time: "2:00 PM",
      duration: "2 hours",
      description: "Need help with calculus exam preparation",
      urgency: "high",
    },
    {
      id: 2,
      student: "Emily Johnson",
      subject: "History",
      type: "Assignment Help",
      date: "2024-01-16",
      time: "10:00 AM",
      duration: "1.5 hours",
      description: "Research paper on World War II",
      urgency: "medium",
    },
    {
      id: 3,
      student: "Michael Brown",
      subject: "Computer Science",
      type: "Note Taking",
      date: "2024-01-17",
      time: "3:00 PM",
      duration: "1 hour",
      description: "Programming lecture notes",
      urgency: "low",
    },
  ])

  const [acceptedTasks, setAcceptedTasks] = useState([
    {
      id: 4,
      student: "Sarah Davis",
      subject: "English Literature",
      type: "Essay Writing",
      date: "2024-01-14",
      time: "1:00 PM",
      duration: "2 hours",
      status: "in-progress",
      description: "Analysis of Shakespeare's Hamlet",
    },
  ])

  const [completedTasks, setCompletedTasks] = useState([
    {
      id: 5,
      student: "David Wilson",
      subject: "Psychology",
      type: "Exam Support",
      date: "2024-01-12",
      time: "11:00 AM",
      duration: "1.5 hours",
      rating: 5,
      feedback: "Excellent support, very patient and helpful!",
      description: "Cognitive psychology exam preparation",
    },
    {
      id: 6,
      student: "Lisa Anderson",
      subject: "Biology",
      type: "Lab Report",
      date: "2024-01-10",
      time: "9:00 AM",
      duration: "2 hours",
      rating: 4,
      feedback: "Great help with formatting and structure.",
      description: "Cell biology lab report assistance",
    },
  ])

  const router = useRouter()

  const handleAcceptTask = (taskId) => {
    const task = availableTasks.find((t) => t.id === taskId)
    if (task) {
      setAcceptedTasks([...acceptedTasks, { ...task, status: "accepted" }])
      setAvailableTasks(availableTasks.filter((t) => t.id !== taskId))
    }
  }

  const handleCompleteTask = (taskId) => {
    const task = acceptedTasks.find((t) => t.id === taskId)
    if (task) {
      setCompletedTasks([...completedTasks, { ...task, status: "completed", rating: 5 }])
      setAcceptedTasks(acceptedTasks.filter((t) => t.id !== taskId))
    }
  }

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "accepted":
        return "bg-blue-100 text-blue-800"
      case "in-progress":
        return "bg-purple-100 text-purple-800"
      case "completed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-green-900">Writer Tasks</h1>
              <Badge variant="secondary">Task Management</Badge>
            </div>
            <Button variant="outline" onClick={() => router.push("/writer/dashboard")}>
              Back to Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <AlertCircle className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Available Tasks</p>
                  <p className="text-2xl font-bold text-gray-900">{availableTasks.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">In Progress</p>
                  <p className="text-2xl font-bold text-gray-900">{acceptedTasks.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">{completedTasks.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Star className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                  <p className="text-2xl font-bold text-gray-900">4.8</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="available" className="space-y-6">
          <TabsList>
            <TabsTrigger value="available">Available Tasks</TabsTrigger>
            <TabsTrigger value="accepted">My Tasks</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="available" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">Available Tasks</h3>
              <p className="text-sm text-gray-600">{availableTasks.length} tasks available</p>
            </div>

            <div className="grid gap-4">
              {availableTasks.map((task) => (
                <Card key={task.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{task.subject}</h4>
                          <Badge variant="outline">{task.type}</Badge>
                          <Badge className={getUrgencyColor(task.urgency)}>{task.urgency} priority</Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{task.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {task.student}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {task.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {task.time} ({task.duration})
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Contact
                        </Button>
                        <Button
                          onClick={() => handleAcceptTask(task.id)}
                          className="bg-green-600 hover:bg-green-700"
                          size="sm"
                        >
                          Accept Task
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="accepted" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">My Active Tasks</h3>
              <p className="text-sm text-gray-600">{acceptedTasks.length} active tasks</p>
            </div>

            <div className="grid gap-4">
              {acceptedTasks.map((task) => (
                <Card key={task.id} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{task.subject}</h4>
                          <Badge variant="outline">{task.type}</Badge>
                          <Badge className={getStatusColor(task.status)}>{task.status}</Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{task.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {task.student}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {task.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {task.time} ({task.duration})
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" />
                          Notes
                        </Button>
                        <Button
                          onClick={() => handleCompleteTask(task.id)}
                          className="bg-green-600 hover:bg-green-700"
                          size="sm"
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Complete
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">Completed Tasks</h3>
              <p className="text-sm text-gray-600">{completedTasks.length} completed tasks</p>
            </div>

            <div className="grid gap-4">
              {completedTasks.map((task) => (
                <Card key={task.id} className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{task.subject}</h4>
                          <Badge variant="outline">{task.type}</Badge>
                          <Badge className="bg-green-100 text-green-800">Completed</Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{task.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {task.student}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {task.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {task.time} ({task.duration})
                          </div>
                        </div>
                        {task.rating && (
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < task.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">({task.rating}/5)</span>
                          </div>
                        )}
                        {task.feedback && <p className="text-sm text-gray-600 mt-2 italic">"{task.feedback}"</p>}
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
