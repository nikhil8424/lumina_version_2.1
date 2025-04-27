"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Phone, User } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function WriterRegistration() {
  const router = useRouter()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [writerId, setWriterId] = useState("WR12345")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we would submit the form data to the server
    // and get the writer ID from the response
    setIsDialogOpen(true)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="bg-blue-500 p-6 text-center text-white">
        <h1 className="text-3xl font-bold">Writer Registration</h1>
        <p className="text-lg">Join LUMINA as a volunteer writer</p>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Create Your Writer Account</CardTitle>
            <CardDescription>Fill in your details to register as a volunteer writer for exams</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg">
                  Full Name
                </Label>
                <div className="flex items-center rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                  <User className="ml-3 h-5 w-5 text-gray-500" />
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    className="border-0 text-lg focus-visible:ring-0"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg">
                  Email
                </Label>
                <div className="flex items-center rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                  <Mail className="ml-3 h-5 w-5 text-gray-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="border-0 text-lg focus-visible:ring-0"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-lg">
                  Phone Number
                </Label>
                <div className="flex items-center rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                  <Phone className="ml-3 h-5 w-5 text-gray-500" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="border-0 text-lg focus-visible:ring-0"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="h-14 w-full text-lg" size="lg">
                Register as Writer
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Congratulations!</DialogTitle>
            <DialogDescription className="text-center text-lg">Your registration was successful</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-6">
            <p className="mb-2 text-lg text-gray-600">Your Writer ID is:</p>
            <p className="text-3xl font-bold text-blue-600">{writerId}</p>
            <p className="mt-4 text-sm text-gray-500">Please save this ID for future reference</p>
          </div>
          <DialogFooter>
            <Button onClick={() => router.push("/writer/dashboard")} className="h-12 w-full text-lg" size="lg">
              Go to Dashboard
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <footer className="p-6 text-center text-gray-500">
        <p>© {new Date().getFullYear()} LUMINA. All rights reserved.</p>
      </footer>
    </div>
  )
}
