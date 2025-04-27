"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bell, ChevronDown, ClipboardList, LogOut, Pen, Search, Shield, User, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar" // This would be the shadcn sidebar component [^1]

// Sample data for writers
const writers = [
  {
    id: "WR12345",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    availability: true,
  },
  {
    id: "WR12346",
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    phone: "+1 (555) 234-5678",
    availability: true,
  },
  {
    id: "WR12347",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "+1 (555) 345-6789",
    availability: false,
  },
  {
    id: "WR12348",
    name: "Sarah Davis",
    email: "sarah.davis@example.com",
    phone: "+1 (555) 456-7890",
    availability: true,
  },
]

// Sample data for students
const students = [
  {
    id: "ST10001",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    course: "Mathematics",
    examDate: "2023-05-15",
    writerId: "WR12345",
  },
  {
    id: "ST10002",
    name: "Sam Williams",
    email: "sam.williams@example.com",
    course: "Physics",
    examDate: "2023-05-18",
    writerId: "WR12346",
  },
  {
    id: "ST10003",
    name: "Taylor Smith",
    email: "taylor.smith@example.com",
    course: "Chemistry",
    examDate: "2023-05-20",
    writerId: "WR12347",
  },
  {
    id: "ST10004",
    name: "Jordan Lee",
    email: "jordan.lee@example.com",
    course: "Biology",
    examDate: "2023-05-22",
    writerId: null,
  },
]

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("writers")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredWriters = writers.filter(
    (writer) =>
      writer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      writer.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      writer.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 p-4">
              <Shield className="h-6 w-6 text-gray-800" />
              <h1 className="text-xl font-bold">LUMINA Admin</h1>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeTab === "writers"} onClick={() => setActiveTab("writers")}>
                  <Pen className="h-5 w-5" />
                  <span>Writers</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeTab === "students"} onClick={() => setActiveTab("students")}>
                  <Users className="h-5 w-5" />
                  <span>Students</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeTab === "assignments"} onClick={() => setActiveTab("assignments")}>
                  <ClipboardList className="h-5 w-5" />
                  <span>Assignments</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeTab === "notifications"}
                  onClick={() => setActiveTab("notifications")}
                >
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/login">
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h2 className="text-xl font-bold">Admin Dashboard</h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-64">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span>Admin</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/login">Logout</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main className="flex-1 p-6">
            {activeTab === "writers" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Writers</h3>
                  <Button>Add New Writer</Button>
                </div>
                <Card>
                  <CardContent className="p-0 sm:p-0">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Availability</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredWriters.map((writer) => (
                            <TableRow key={writer.id}>
                              <TableCell className="font-medium">{writer.id}</TableCell>
                              <TableCell>{writer.name}</TableCell>
                              <TableCell>{writer.email}</TableCell>
                              <TableCell>{writer.phone}</TableCell>
                              <TableCell>
                                <Badge
                                  variant={writer.availability ? "default" : "outline"}
                                  className={
                                    writer.availability ? "bg-green-500 text-white hover:bg-green-600" : "text-gray-500"
                                  }
                                >
                                  {writer.availability ? "Available" : "Unavailable"}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <Button variant="outline" size="sm">
                                  Edit
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "students" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Students</h3>
                  <Button>Add New Student</Button>
                </div>
                <Card>
                  <CardContent className="p-0 sm:p-0">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Course</TableHead>
                            <TableHead>Exam Date</TableHead>
                            <TableHead>Writer Assigned</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredStudents.map((student) => (
                            <TableRow key={student.id}>
                              <TableCell className="font-medium">{student.id}</TableCell>
                              <TableCell>{student.name}</TableCell>
                              <TableCell>{student.course}</TableCell>
                              <TableCell>
                                {new Date(student.examDate).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                })}
                              </TableCell>
                              <TableCell>
                                {student.writerId ? (
                                  <Badge className="bg-blue-500 text-white hover:bg-blue-600">{student.writerId}</Badge>
                                ) : (
                                  <Badge variant="outline" className="text-red-500">
                                    Not Assigned
                                  </Badge>
                                )}
                              </TableCell>
                              <TableCell className="text-right">
                                <Button variant="outline" size="sm">
                                  Edit
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "assignments" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Assignments</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Unassigned Students</CardTitle>
                      <CardDescription>Students who need to be assigned a writer</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {students
                          .filter((student) => !student.writerId)
                          .map((student) => (
                            <div key={student.id} className="flex items-center justify-between rounded-lg border p-4">
                              <div>
                                <p className="font-medium">{student.name}</p>
                                <p className="text-sm text-gray-500">
                                  {student.course} - {student.id}
                                </p>
                              </div>
                              <Button size="sm">Assign Writer</Button>
                            </div>
                          ))}
                        {students.filter((student) => !student.writerId).length === 0 && (
                          <p className="text-center text-gray-500">All students have been assigned a writer</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Available Writers</CardTitle>
                      <CardDescription>Writers who can be assigned to students</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {writers
                          .filter((writer) => writer.availability)
                          .map((writer) => (
                            <div key={writer.id} className="flex items-center justify-between rounded-lg border p-4">
                              <div>
                                <p className="font-medium">{writer.name}</p>
                                <p className="text-sm text-gray-500">{writer.id}</p>
                              </div>
                              <Badge className="bg-green-500 text-white">Available</Badge>
                            </div>
                          ))}
                        {writers.filter((writer) => writer.availability).length === 0 && (
                          <p className="text-center text-gray-500">No writers are currently available</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Notifications</h3>
                <Card>
                  <CardHeader>
                    <CardTitle>Send Notification</CardTitle>
                    <CardDescription>Send notifications to writers or students</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="recipient-type" className="text-sm font-medium">
                          Recipient Type
                        </label>
                        <div className="flex gap-4">
                          <Button variant="outline">All Writers</Button>
                          <Button variant="outline">All Students</Button>
                          <Button variant="outline">Select Recipients</Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Input id="message" placeholder="Enter notification title" className="mb-2" />
                        <textarea
                          id="message-body"
                          placeholder="Enter notification message"
                          className="h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <Button>Send Notification</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            )}
          </main>

          <footer className="border-t bg-white p-4 text-center text-gray-500">
            <p>© {new Date().getFullYear()} LUMINA. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  )
}
