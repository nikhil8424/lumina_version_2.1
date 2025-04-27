"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, Home, LogOut, Moon, Sun, UserCircle, VolumeIcon as VolumeUp } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { StarRating } from "@/components/star-rating"

// Sample notifications
const notifications = [
  {
    id: 1,
    message: "Writer WR12345 has been assigned to your Mathematics exam on May 15, 2023.",
    date: "2023-05-01",
    isNew: true,
  },
  {
    id: 2,
    message: "Your exam location has been updated to Room 102, Building A.",
    date: "2023-04-28",
    isNew: false,
  },
  {
    id: 3,
    message: "Please confirm your attendance for the Physics exam on May 18, 2023.",
    date: "2023-04-25",
    isNew: false,
  },
]

export function StudentDashboard() {
  const { setTheme, theme } = useTheme()
  const [rating, setRating] = useState(0)

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const readScreen = () => {
    // In a real app, this would use the Web Speech API
    const message = "Student Dashboard. Your assigned writer ID is WR12345. You have 3 notifications."
    const speech = new SpeechSynthesisUtterance(message)
    window.speechSynthesis.speak(speech)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-10 bg-white shadow-sm dark:bg-gray-800">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-green-600 dark:text-green-400">LUMINA</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/student/dashboard"
                  className="flex items-center gap-2 font-medium text-green-600 dark:text-green-400"
                >
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/student/profile"
                  className="flex items-center gap-2 font-medium text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                >
                  <UserCircle className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/student/notifications"
                  className="flex items-center gap-2 font-medium text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                >
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                </Link>
              </li>
            </ul>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Logout"
            className="text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
            asChild
          >
            <Link href="/login">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Logout</span>
            </Link>
          </Button>
        </div>
        <nav className="block border-t md:hidden dark:border-gray-700">
          <ul className="flex justify-between p-2">
            <li>
              <Link
                href="/student/dashboard"
                className="flex flex-col items-center p-2 text-green-600 dark:text-green-400"
              >
                <Home className="h-6 w-6" />
                <span className="text-xs">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/student/profile" className="flex flex-col items-center p-2 text-gray-600 dark:text-gray-300">
                <UserCircle className="h-6 w-6" />
                <span className="text-xs">Profile</span>
              </Link>
            </li>
            <li>
              <Link
                href="/student/notifications"
                className="flex flex-col items-center p-2 text-gray-600 dark:text-gray-300"
              >
                <Bell className="h-6 w-6" />
                <span className="text-xs">Notifications</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-1 p-4 md:p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Student Dashboard</h2>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 text-lg"
              onClick={readScreen}
              aria-label="Read screen content aloud"
            >
              <VolumeUp className="h-5 w-5" />
              <span className="hidden sm:inline">Read Screen</span>
            </Button>
            <div className="flex items-center gap-2">
              <Sun className="h-5 w-5 dark:text-gray-400" />
              <Switch
                id="theme-toggle"
                checked={theme === "dark"}
                onCheckedChange={toggleTheme}
                aria-label="Toggle dark mode"
              />
              <Moon className="h-5 w-5 text-gray-400 dark:text-gray-300" />
            </div>
          </div>
        </div>

        <Card className="mb-8 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">Your Assigned Writer</CardTitle>
            <CardDescription>The writer who will assist you during exams</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-4 text-center">
              <p className="mb-2 text-lg text-gray-600 dark:text-gray-300">Your Writer ID is:</p>
              <p className="text-4xl font-bold text-green-600 dark:text-green-400">WR12345</p>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                This writer will assist you during your upcoming exams
              </p>
            </div>
          </CardContent>
        </Card>

        <h3 className="mb-4 text-xl font-bold md:text-2xl dark:text-white">Notifications</h3>
        <Card className="mb-8 shadow-md">
          <CardContent className="p-4">
            <ul className="divide-y dark:divide-gray-700">
              {notifications.map((notification) => (
                <li key={notification.id} className="py-4">
                  <div className="flex items-start gap-2">
                    {notification.isNew && <Badge className="mt-1 bg-green-500 text-white">New</Badge>}
                    <div>
                      <p className="text-lg dark:text-gray-200">{notification.message}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(notification.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <h3 className="mb-4 text-xl font-bold md:text-2xl dark:text-white">Feedback Form</h3>
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle>Rate Your Experience</CardTitle>
            <CardDescription>Please provide feedback about your experience with the assigned writer</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="rating" className="text-lg">
                Rating
              </Label>
              <StarRating value={rating} onChange={setRating} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="feedback" className="text-lg">
                Comments
              </Label>
              <Textarea
                id="feedback"
                placeholder="Please share your experience with the writer"
                className="min-h-[100px] text-lg"
              />
            </div>
            <Button className="h-12 w-full text-lg">Submit Feedback</Button>
          </CardContent>
        </Card>
      </main>

      <footer className="border-t bg-white p-6 text-center text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
        <p>© {new Date().getFullYear()} LUMINA. All rights reserved.</p>
      </footer>
    </div>
  )
}
