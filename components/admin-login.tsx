"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Mail } from "lucide-react"

export function AdminLogin() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we would validate the credentials
    router.push("/admin/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="bg-gray-800 p-6 text-center text-white">
        <h1 className="text-3xl font-bold">Admin Login</h1>
        <p className="text-lg">Access the LUMINA administration panel</p>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Admin Access</CardTitle>
            <CardDescription>Enter your credentials to access the administration panel</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <Label htmlFor="password" className="text-lg">
                  Password
                </Label>
                <div className="flex items-center rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                  <Lock className="ml-3 h-5 w-5 text-gray-500" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="border-0 text-lg focus-visible:ring-0"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="h-14 w-full text-lg" size="lg">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>

      <footer className="p-6 text-center text-gray-500">
        <p>© {new Date().getFullYear()} LUMINA. All rights reserved.</p>
      </footer>
    </div>
  )
}
