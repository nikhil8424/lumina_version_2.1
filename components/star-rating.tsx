"use client"

import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  value: number
  onChange: (value: number) => void
  max?: number
}

export function StarRating({ value, onChange, max = 5 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, index) => {
        const starValue = index + 1
        return (
          <button
            key={index}
            type="button"
            onClick={() => onChange(starValue)}
            className="rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label={`Rate ${starValue} out of ${max} stars`}
          >
            <Star
              className={cn(
                "h-8 w-8 transition-colors",
                starValue <= value
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-transparent text-gray-300 dark:text-gray-600",
              )}
            />
          </button>
        )
      })}
      <span className="ml-2 text-lg font-medium">{value > 0 ? `${value} out of ${max}` : "No rating"}</span>
    </div>
  )
}
