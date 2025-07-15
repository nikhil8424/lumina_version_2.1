"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Calendar, Clock, Save, Plus, Trash2 } from "lucide-react"

export default function WriterAvailability() {
  const [isAvailable, setIsAvailable] = useState(true)
  const [weeklySchedule, setWeeklySchedule] = useState({
    monday: { enabled: true, start: "09:00", end: "17:00" },
    tuesday: { enabled: true, start: "09:00", end: "17:00" },
    wednesday: { enabled: true, start: "09:00", end: "17:00" },
    thursday: { enabled: true, start: "09:00", end: "17:00" },
    friday: { enabled: true, start: "09:00", end: "17:00" },
    saturday: { enabled: false, start: "10:00", end: "16:00" },
    sunday: { enabled: false, start: "10:00", end: "16:00" },
  })

  const [specialAvailability, setSpecialAvailability] = useState([
    {
      id: 1,
      date: "2024-01-25",
      start: "14:00",
      end: "18:00",
      note: "Extended hours for exam season",
    },
  ])

  const [blockedDates, setBlockedDates] = useState([
    {
      id: 1,
      date: "2024-01-30",
      reason: "Personal appointment",
    },
  ])

  const router = useRouter()

  const daysOfWeek = [
    { key: "monday", label: "Monday" },
    { key: "tuesday", label: "Tuesday" },
    { key: "wednesday", label: "Wednesday" },
    { key: "thursday", label: "Thursday" },
    { key: "friday", label: "Friday" },
    { key: "saturday", label: "Saturday" },
    { key: "sunday", label: "Sunday" },
  ]

  const timeSlots = []
  for (let hour = 6; hour < 24; hour++) {
    const time = hour.toString().padStart(2, "0") + ":00"
    timeSlots.push(time)
    if (hour < 23) {
      const halfHour = hour.toString().padStart(2, "0") + ":30"
      timeSlots.push(halfHour)
    }
  }

  const handleScheduleChange = (day, field, value) => {
    setWeeklySchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }))
  }

  const addSpecialAvailability = () => {
    const newId = Math.max(...specialAvailability.map((s) => s.id), 0) + 1
    setSpecialAvailability((prev) => [
      ...prev,
      {
        id: newId,
        date: "",
        start: "09:00",
        end: "17:00",
        note: "",
      },
    ])
  }

  const removeSpecialAvailability = (id) => {
    setSpecialAvailability((prev) => prev.filter((s) => s.id !== id))
  }

  const addBlockedDate = () => {
    const newId = Math.max(...blockedDates.map((b) => b.id), 0) + 1
    setBlockedDates((prev) => [
      ...prev,
      {
        id: newId,
        date: "",
        reason: "",
      },
    ])
  }

  const removeBlockedDate = (id) => {
    setBlockedDates((prev) => prev.filter((b) => b.id !== id))
  }

  const handleSave = () => {
    alert("Availability updated successfully!")
  }

  const goBack = () => {
    router.push("/writer/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" onClick={goBack} className="mb-4 text-green-600 hover:text-green-700">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="space-y-6">
          {/* Availability Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-green-600" />
                Availability Status
              </CardTitle>
              <CardDescription>Control your overall availability for new bookings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="availability-toggle" className="text-base font-medium">
                    Available for Bookings
                  </Label>
                  <p className="text-sm text-gray-600">Turn off to temporarily stop receiving new booking requests</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="availability-toggle" checked={isAvailable} onCheckedChange={setIsAvailable} />
                  <Badge variant={isAvailable ? "default" : "secondary"}>
                    {isAvailable ? "Available" : "Unavailable"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Schedule */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule</CardTitle>
              <CardDescription>Set your regular weekly availability hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {daysOfWeek.map((day) => (
                <div key={day.key} className="flex items-center space-x-4 p-3 border rounded-lg">
                  <div className="w-24">
                    <Switch
                      checked={weeklySchedule[day.key].enabled}
                      onCheckedChange={(checked) => handleScheduleChange(day.key, "enabled", checked)}
                    />
                  </div>
                  <div className="w-20 font-medium">{day.label}</div>
                  <div className="flex items-center space-x-2 flex-1">
                    <Select
                      value={weeklySchedule[day.key].start}
                      onValueChange={(value) => handleScheduleChange(day.key, "start", value)}
                      disabled={!weeklySchedule[day.key].enabled}
                    >
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <span className="text-gray-500">to</span>
                    <Select
                      value={weeklySchedule[day.key].end}
                      onValueChange={(value) => handleScheduleChange(day.key, "end", value)}
                      disabled={!weeklySchedule[day.key].enabled}
                    >
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Badge variant={weeklySchedule[day.key].enabled ? "default" : "secondary"}>
                    {weeklySchedule[day.key].enabled ? "Active" : "Inactive"}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Special Availability */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Special Availability</CardTitle>
                  <CardDescription>Add specific dates with different availability hours</CardDescription>
                </div>
                <Button onClick={addSpecialAvailability} variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Date
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {specialAvailability.map((special) => (
                <div key={special.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                  <input
                    type="date"
                    value={special.date}
                    onChange={(e) => {
                      setSpecialAvailability((prev) =>
                        prev.map((s) => (s.id === special.id ? { ...s, date: e.target.value } : s)),
                      )
                    }}
                    className="border rounded px-3 py-2"
                  />
                  <Select
                    value={special.start}
                    onValueChange={(value) => {
                      setSpecialAvailability((prev) =>
                        prev.map((s) => (s.id === special.id ? { ...s, start: value } : s)),
                      )
                    }}
                  >
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <span className="text-gray-500">to</span>
                  <Select
                    value={special.end}
                    onValueChange={(value) => {
                      setSpecialAvailability((prev) =>
                        prev.map((s) => (s.id === special.id ? { ...s, end: value } : s)),
                      )
                    }}
                  >
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input
                    type="text"
                    placeholder="Note (optional)"
                    value={special.note}
                    onChange={(e) => {
                      setSpecialAvailability((prev) =>
                        prev.map((s) => (s.id === special.id ? { ...s, note: e.target.value } : s)),
                      )
                    }}
                    className="flex-1 border rounded px-3 py-2"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeSpecialAvailability(special.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              {specialAvailability.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p>No special availability dates set</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Blocked Dates */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Blocked Dates</CardTitle>
                  <CardDescription>Block specific dates when you're unavailable</CardDescription>
                </div>
                <Button onClick={addBlockedDate} variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Block Date
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {blockedDates.map((blocked) => (
                <div key={blocked.id} className="flex items-center space-x-4 p-3 border rounded-lg bg-red-50">
                  <input
                    type="date"
                    value={blocked.date}
                    onChange={(e) => {
                      setBlockedDates((prev) =>
                        prev.map((b) => (b.id === blocked.id ? { ...b, date: e.target.value } : b)),
                      )
                    }}
                    className="border rounded px-3 py-2"
                  />
                  <input
                    type="text"
                    placeholder="Reason for blocking"
                    value={blocked.reason}
                    onChange={(e) => {
                      setBlockedDates((prev) =>
                        prev.map((b) => (b.id === blocked.id ? { ...b, reason: e.target.value } : b)),
                      )
                    }}
                    className="flex-1 border rounded px-3 py-2"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeBlockedDate(blocked.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              {blockedDates.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p>No blocked dates set</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
              <Save className="h-4 w-4 mr-2" />
              Save Availability
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
