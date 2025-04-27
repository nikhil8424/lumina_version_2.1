"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Calendar, Home, LogOut, PenSquare, Settings, User, UserCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample data for assigned tasks
const assignedTasks = [
  {
    id: 1,
    studentName: "Alex Johnson",
    examDate: "2023-05-15",
    subject: "Mathematics",
  },
  {
    id: 2,
    studentName: "Sam Williams",
    examDate: "2023-05-18",
    subject: "Physics",
  },
  {
    id: 3,
    studentName: "Taylor Smith",
    examDate: "2023-05-20",
    subject: "Chemistry",
  },
]

export function WriterDashboard() {
  const [isAvailable, setIsAvailable] = useState(true)

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-blue-600">LUMINA</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="/writer/dashboard" className="flex items-center gap-2 font-medium text-blue-600">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/writer/profile"
                  className="flex items-center gap-2 font-medium text-gray-600 hover:text-blue-600"
                >
                  <UserCircle className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/writer/availability"
                  className="flex items-center gap-2 font-medium text-gray-600 hover:text-blue-600"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Availability</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/writer/tasks"
                  className="flex items-center gap-2 font-medium text-gray-600 hover:text-blue-600"
                >
                  <PenSquare className="h-5 w-5" />
                  <span>Assigned Tasks</span>
                </Link>
              </li>
            </ul>
          </nav>
          <Button variant="ghost" size="icon" aria-label="Logout" className="text-gray-600 hover:text-blue-600" asChild>
            <Link href="/login">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Logout</span>
            </Link>
          </Button>
        </div>
        <nav className="block border-t md:hidden">
          <ul className="flex justify-between p-2">
            <li>
              <Link href="/writer/dashboard" className="flex flex-col items-center p-2 text-blue-600">
                <Home className="h-6 w-6" />
                <span className="text-xs">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/writer/profile" className="flex flex-col items-center p-2 text-gray-600">
                <UserCircle className="h-6 w-6" />
                <span className="text-xs">Profile</span>
              </Link>
            </li>
            <li>
              <Link href="/writer/availability" className="flex flex-col items-center p-2 text-gray-600">
                <Calendar className="h-6 w-6" />
                <span className="text-xs">Availability</span>
              </Link>
            </li>
            <li>
              <Link href="/writer/tasks" className="flex flex-col items-center p-2 text-gray-600">
                <PenSquare className="h-6 w-6" />
                <span className="text-xs">Tasks</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-1 p-4 md:p-6">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">Writer Dashboard</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle>Writer ID</CardTitle>
              <CardDescription>Your unique identifier</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600">WR12345</p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle>Availability</CardTitle>
              <CardDescription>Set your current status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Switch id="availability" checked={isAvailable} onCheckedChange={setIsAvailable} />
                <Label htmlFor="availability" className="text-lg font-medium">
                  {isAvailable ? "Available" : "Not Available"}
                </Label>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle>Profile</CardTitle>
              <CardDescription>Manage your information</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/writer/profile">
                  <User className="mr-2 h-4 w-4" />
                  Edit Profile
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle>Settings</CardTitle>
              <CardDescription>Customize your experience</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/writer/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Manage Settings
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <h3 className="mb-4 mt-8 text-xl font-bold md:text-2xl">Assigned Tasks</h3>
        <Card className="shadow-md">
          <CardContent className="p-0 sm:p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Student</TableHead>
                    <TableHead>Exam Date</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assignedTasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell className="font-medium">{task.studentName}</TableCell>
                      <TableCell>
                        {new Date(task.examDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </TableCell>
                      <TableCell>{task.subject}</TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="border-t bg-white p-6 text-center text-gray-500">
        <p>© {new Date().getFullYear()} LUMINA. All rights reserved.</p>
      </footer>
    </div>
  )
}
