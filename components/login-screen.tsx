"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Eye, Pen, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function LoginScreen() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="bg-blue-500 p-6 text-center text-white">
        <h1 className="text-3xl font-bold">LUMINA</h1>
        <p className="text-lg">Choose your account type</p>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center p-6">
        <div className="grid w-full max-w-3xl gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Button
              onClick={() => router.push("/writer/register")}
              variant="outline"
              className="flex h-48 w-full flex-col items-center justify-center gap-4 rounded-xl border-2 border-blue-200 p-6 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
              aria-label="Writer Login or Registration"
            >
              <Pen className="h-12 w-12" />
              <div className="text-center">
                <h2 className="text-xl font-bold">Writer</h2>
                <p className="text-sm text-gray-600">Login or Register</p>
              </div>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              onClick={() => router.push("/student/register")}
              variant="outline"
              className="flex h-48 w-full flex-col items-center justify-center gap-4 rounded-xl border-2 border-green-200 p-6 text-green-700 hover:bg-green-50 hover:text-green-800"
              aria-label="Visually Impaired Student Login or Registration"
            >
              <Eye className="h-12 w-12" />
              <div className="text-center">
                <h2 className="text-xl font-bold">Student</h2>
                <p className="text-sm text-gray-600">Login or Register</p>
              </div>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              onClick={() => router.push("/admin/login")}
              variant="outline"
              className="flex h-48 w-full flex-col items-center justify-center gap-4 rounded-xl border-2 border-gray-200 p-6 text-gray-700 hover:bg-gray-50 hover:text-gray-800"
              aria-label="Admin Login"
            >
              <Shield className="h-12 w-12" />
              <div className="text-center">
                <h2 className="text-xl font-bold">Admin</h2>
                <p className="text-sm text-gray-600">Login</p>
              </div>
            </Button>
          </motion.div>
        </div>
      </main>

      <footer className="p-6 text-center text-gray-500">
        <p>© {new Date().getFullYear()} LUMINA. All rights reserved.</p>
      </footer>
    </div>
  )
}
