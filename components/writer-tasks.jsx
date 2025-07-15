"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowLeft,
  Search,
  Filter,
  Calendar,
  Clock,
  User,
  BookOpen,
  CheckCircle,
  AlertCircle,
  Star,
} from "lucide-react"

export default function WriterTasks() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterSubject, setFilterSubject] = useState("all")

  const [tasks] = useState([
    {
      id: 1,
      student: "John Smith",
      subject: "Mathematics",
      type: "Exam",
      date: "2024-01-20",
      time: "10:00 AM",
      duration: "2 hours",
      status: "upcoming",
      priority: "high",
      description: "Calculus final exam - requires assistance with complex equations and graphing",
      accommodations: "Extra time needed, prefer verbal explanations",
      studentAvatar: "/placeholder-user.jpg",
    },
    {
      id: 2,
      student: "Emily Johnson",
      subject: "History",
      type: "Assignment",
      date: "2024-01-22",
      time: "2:00 PM",
      duration: "1.5 hours",
      status: "pending",
      priority: "medium",
      description: "Essay on World War II - needs help with research and structure",
      accommodations: "Screen reader compatible format required",
      studentAvatar: "/placeholder-user.jpg",
    },
    {
      id: 3,
      student: "Sarah Davis",
      subject: "English Literature",
      type: "Exam",
      date: "2024-01-15",
      time: "1:00 PM",
      duration: "2 hours",
      status: "completed",
      priority: "high",
      description: "Shakespeare analysis exam - completed successfully",
      accommodations: "Large print materials provided",
      studentAvatar: "/placeholder-user.jpg",
      rating: 5,
      feedback: "Excellent support during the exam. Very patient and helpful.",
    },
    {
      id: 4,
      student: "Michael Brown",
      subject: "Science",
      type: "Lab Report",
      date: "2024-01-10",
      time: "11:00 AM",
      duration: "1.5 hours",
      status: "completed",
      priority: "medium",
      description: "Chemistry lab report writing assistance",
      accommodations: "Audio descriptions for diagrams needed",
      studentAvatar: "/placeholder-user.jpg",
      rating: 4,
      feedback: "Good assistance with technical writing.",
    },
  ])

  const router = useRouter()

  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming":
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

  const getStatusIcon = (status) => {
    switch (status) {
      case "upcoming":
        return <Calendar className="h-4 w-4" />
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

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || task.status === filterStatus
    const matchesSubject = filterSubject === "all" || task.subject === filterSubject

    return matchesSearch && matchesStatus && matchesSubject
  })

  const getTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status)
  }

  const goBack = () => {
    router.push("/writer/dashboard")
  }

  const handleAcceptTask = (taskId) => {
    alert(`Task ${taskId} accepted!`)
  }

  const handleDeclineTask = (taskId) => {
    alert(`Task ${taskId} declined!`)
  }

  const subjects = [...new Set(tasks.map((task) => task.subject))]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Button variant="ghost" onClick={goBack} className="mb-4 text-green-600 hover:text-green-700">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-6 w-6 mr-2 text-green-600" />
                  Writing Tasks
                </CardTitle>
                <CardDescription>Manage your writing assignments and exam sessions</CardDescription>
              </div>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                {tasks.length} total tasks
              </Badge>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search tasks, students, or subjects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full sm:w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterSubject} onValueChange={setFilterSubject}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All ({tasks.length})</TabsTrigger>
                <TabsTrigger value="pending">Pending ({getTasksByStatus("pending").length})</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming ({getTasksByStatus("upcoming").length})</TabsTrigger>
                <TabsTrigger value="completed">Completed ({getTasksByStatus("completed").length})</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {filteredTasks.map((task) => (
                  <Card key={task.id} className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={task.studentAvatar || "/placeholder.svg"} alt={task.student} />
                            <AvatarFallback>
                              {task.student
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-semibold text-lg">
                                {task.subject} - {task.type}
                              </h4>
                              <Badge variant={getStatusColor(task.status)}>
                                {getStatusIcon(task.status)}
                                <span className="ml-1">{task.status}</span>
                              </Badge>
                              <Badge variant={getPriorityColor(task.priority)}>{task.priority} priority</Badge>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                              <span className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                {task.student}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {task.date}
                              </span>
                              <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {task.time} ({task.duration})
                              </span>
                            </div>
                            <p className="text-gray-700 mb-2">{task.description}</p>
                            <div className="bg-blue-50 p-3 rounded-lg mb-3">
                              <p className="text-sm text-blue-800">
                                <strong>Accommodations:</strong> {task.accommodations}
                              </p>
                            </div>
                            {task.status === "completed" && task.rating && (
                              <div className="bg-green-50 p-3 rounded-lg">
                                <div className="flex items-center mb-1">
                                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                  <span className="font-medium">{task.rating}/5</span>
                                </div>
                                <p className="text-sm text-green-800">{task.feedback}</p>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2 ml-4">
                          {task.status === "pending" && (
                            <>
                              <Button
                                size="sm"
                                onClick={() => handleAcceptTask(task.id)}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                Accept
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => handleDeclineTask(task.id)}>
                                Decline
                              </Button>
                            </>
                          )}
                          {task.status === "upcoming" && (
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                          )}
                          {task.status === "completed" && (
                            <Button size="sm" variant="outline">
                              View Report
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {filteredTasks.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    <BookOpen className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg">No tasks found</p>
                    <p>Try adjusting your search or filters</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="pending" className="space-y-4">
                {getTasksByStatus("pending").map((task) => (
                  <Card key={task.id} className="border-l-4 border-l-yellow-500">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={task.studentAvatar || "/placeholder.svg"} alt={task.student} />
                            <AvatarFallback>
                              {task.student
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-semibold text-lg">
                                {task.subject} - {task.type}
                              </h4>
                              <Badge variant="secondary">
                                <Clock className="h-4 w-4 mr-1" />
                                Pending Response
                              </Badge>
                              <Badge variant={getPriorityColor(task.priority)}>{task.priority} priority</Badge>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                              <span className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                {task.student}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {task.date}
                              </span>
                              <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {task.time} ({task.duration})
                              </span>
                            </div>
                            <p className="text-gray-700 mb-2">{task.description}</p>
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p className="text-sm text-blue-800">
                                <strong>Accommodations:</strong> {task.accommodations}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2 ml-4">
                          <Button
                            size="sm"
                            onClick={() => handleAcceptTask(task.id)}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Accept Task
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleDeclineTask(task.id)}>
                            Decline
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="upcoming" className="space-y-4">
                {getTasksByStatus("upcoming").map((task) => (
                  <Card key={task.id} className="border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={task.studentAvatar || "/placeholder.svg"} alt={task.student} />
                            <AvatarFallback>
                              {task.student
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-semibold text-lg">
                                {task.subject} - {task.type}
                              </h4>
                              <Badge variant="default">
                                <Calendar className="h-4 w-4 mr-1" />
                                Confirmed
                              </Badge>
                              <Badge variant={getPriorityColor(task.priority)}>{task.priority} priority</Badge>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                              <span className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                {task.student}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {task.date}
                              </span>
                              <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {task.time} ({task.duration})
                              </span>
                            </div>
                            <p className="text-gray-700 mb-2">{task.description}</p>
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p className="text-sm text-blue-800">
                                <strong>Accommodations:</strong> {task.accommodations}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2 ml-4">
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
              </TabsContent>

              <TabsContent value="completed" className="space-y-4">
                {getTasksByStatus("completed").map((task) => (
                  <Card key={task.id} className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={task.studentAvatar || "/placeholder.svg"} alt={task.student} />
                            <AvatarFallback>
                              {task.student
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-semibold text-lg">
                                {task.subject} - {task.type}
                              </h4>
                              <Badge variant="outline">
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Completed
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                              <span className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                {task.student}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {task.date}
                              </span>
                              <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {task.duration}
                              </span>
                            </div>
                            <p className="text-gray-700 mb-2">{task.description}</p>
                            {task.rating && (
                              <div className="bg-green-50 p-3 rounded-lg">
                                <div className="flex items-center mb-1">
                                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                  <span className="font-medium">{task.rating}/5 Rating</span>
                                </div>
                                <p className="text-sm text-green-800">{task.feedback}</p>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2 ml-4">
                          <Button size="sm" variant="outline">
                            View Report
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
