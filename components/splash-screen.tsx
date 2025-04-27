"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function SplashScreen() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center space-y-8 text-center"
      >
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tighter text-blue-600 sm:text-6xl md:text-7xl">LUMINA</h1>
          <p className="text-xl text-gray-600 md:text-2xl">Bringing Light to Learning</p>
        </div>

        <Button
          onClick={() => router.push("/login")}
          size="lg"
          className="h-16 w-64 rounded-xl text-xl shadow-lg"
          aria-label="Continue to login page"
        >
          Continue
        </Button>
      </motion.div>
    </div>
  )
}
