"use client"
import { useState } from "react"
import { Clock, CheckCircle, AlertCircle, XCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function WriterTasks() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterSubject, setFilterSubject] = useState("all")

  const [tasks, setTasks] = useState([
    {
      id: 1,
      student: "Alex Smith",
      subject: "Mathematics",
      type: "Exam Assistance",
      date: "2024-01-15",
      time: "2:00 PM",
      duration: "2 hours",
      status: "confirmed",
      description: "Calculus final exam - derivatives and integrals",
      priority: "high"
    },
    {
      id: 2,
      student: "Emma Johnson",
      subject: "History",
      type: "Assignment Help",
      date: "2024-01-18",
      time: "10:00 AM",
      duration: "1.5 hours",
      status: "pending",
      description: "Essay on World War II causes and effects",
      priority: "medium"
    },
    {
      id: 3,
      student: "Michael Chen",
      subject: "Statistics",
      type: "Tutoring Session",
      date: "2024-01-12",
      time: "3:00 PM",
      duration: "1 hour",
      status: "completed",
      description: "Probability distributions and hypothesis testing",
      priority: "low"
    },
    {
      id: 4,
      student: "Sarah Wilson",
      subject: "Mathematics",
      type: "Exam Assistance",
      date: "2024-01-10",
      time: "1:00 PM",
      duration: "2.5 hours",
      status: "completed",
      description: "Linear algebra midterm exam",
      priority: "high"
    },
    {
      id: 5,
      student: "David Brown",
      subject: "Statistics",
      type: "Assignment Help",
      date: "2024-01-08",
      time: "11:00 AM",
      duration: "1 hour",
      status: "cancelled",
      description: "Data analysis project using R",
      priority: "medium"
    }
  ])

  const router = useRouter()

  const handleBack = () => {
    router.push("/writer/dashboard")
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />
      case "completed":
        return <CheckCircle className="w-4 h-4 text-blue-500" />
      case "cancelled":
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
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

  const filteredTasks = tasks.filter(task => {
