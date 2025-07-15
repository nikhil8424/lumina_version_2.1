"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Calendar, Clock, Save, Plus, X } from "lucide-react"

export default function WriterAvailability() {
  const [availability, setAvailability] = useState({
    monday: { enabled: true, start: "09:00", end: "17:00" },
    tuesday: { enabled: true, start: "09:00", end: "17:00" },
    wednesday: { enabled: true, start: "09:00", end: "17:00" },
    thursday: { enabled: true, start: "09:00", end: "17:00" },
    friday: { enabled: true, start: "09:00", end: "17:00" },
    saturday: { enabled: false, start: "10:00", end: "14:00" },
    sunday: { enabled: false, start: "10:00", end: "14:00" },
  })

  const [blockedDates, setBlockedDates] = useState([
    { id: 1, date: "2024-01-20", reason: "Personal appointment" },
    { id: 2, date: "2024-01-25", reason: "Conference" },
  ])

  const [newBlockedDate, setNewBlockedDate] = useState({ date: "", reason: "" })

  const router = useRouter()

  const handleBack = () => {
    router.push("/writer/dashboard")
  }

  const handleAvailabilityChange = (day, field, value) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }))
  }

  const handleSave = () => {
    // Save availability changes
    console.log("Saving availability:", availability)
    // Add save logic here
  }

  const addBlockedDate = () => {
    if (newBlockedDate.date && newBlockedDate.reason) {
      setBlockedDates((prev) => [
        ...prev,
        {
          id: Date.now(),
          date: newBlockedDate.date,
          reason: newBlockedDate.reason,
        },
      ])
      setNewBlockedDate({ date: "", reason: "" })
    }
  }

  const removeBlockedDate = (id) => {
    setBlockedDates((prev) => prev.filter((date) => date.id !== id))
  }

  const days = [
    { key: "monday", label: "Monday" },
    { key: "tuesday", label: "Tuesday" },
    { key: "wednesday", label: "Wednesday" },
    { key: "thursday", label: "Thursday" },
    { key: "friday", label: "Friday" },
    { key: "saturday", label: "Saturday" },
    { key: "sunday", label: "Sunday" },
  ]

  const timeSlots = []
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
      timeSlots.push(time)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Button variant="ghost" onClick={handleBack} className="mr-4 p-2" aria-label="Go back to dashboard">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Availability Settings</h1>
                <p className="text-gray-600">Manage your schedule and availability</p>
              </div>
            </div>
            <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Weekly Schedule */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-500" />
                  Weekly Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {days.map((day) => (
                    <div key={day.key} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Switch
                          checked={availability[day.key].enabled}
                          onCheckedChange={(checked) => handleAvailabilityChange(day.key, "enabled", checked)}
                        />
                        <Label className="font-medium w-20">{day.label}</Label>
                      </div>

                      {availability[day.key].enabled && (
                        <div className="flex items-center space-x-2">
                          <Select
                            value={availability[day.key].start}
                            onValueChange={(value) => handleAvailabilityChange(day.key, "start", value)}
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
                            value={availability[day.key].end}
                            onValueChange={(value) => handleAvailabilityChange(day.key, "end", value)}
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
                      )}

                      {!availability[day.key].enabled && <Badge variant="secondary">Unavailable</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Blocked Dates */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <X className="w-5 h-5 text-red-500" />
                  Blocked Dates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Add New Blocked Date */}
                  <div className="flex gap-2 p-4 border rounded-lg bg-gray-50">
                    <input
                      type="date"
                      value={newBlockedDate.date}
                      onChange={(e) => setNewBlockedDate((prev) => ({ ...prev, date: e.target.value }))}
                      className="px-3 py-2 border rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Reason (optional)"
                      value={newBlockedDate.reason}
                      onChange={(e) => setNewBlockedDate((prev) => ({ ...prev, reason: e.target.value }))}
                      className="flex-1 px-3 py-2 border rounded-md"
                    />
                    <Button onClick={addBlockedDate} size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Existing Blocked Dates */}
                  {blockedDates.map((blockedDate) => (
                    <div key={blockedDate.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{new Date(blockedDate.date).toLocaleDateString()}</p>
                        {blockedDate.reason && <p className="text-sm text-gray-600">{blockedDate.reason}</p>}
                      </div>
                      <Button
                        onClick={() => removeBlockedDate(blockedDate.id)}
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}

                  {blockedDates.length === 0 && <p className="text-gray-500 text-center py-4">No blocked dates</p>}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Current Status */}
            <Card>
              <CardHeader>
                <CardTitle>Current Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Status</span>
                    <Badge className="bg-green-100 text-green-800">Available</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Next Available</span>
                    <span className="text-sm font-medium">Today, 2:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Weekly Hours</span>
                    <span className="text-sm font-medium">40 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Clock className="w-4 h-4 mr-2" />
                  Set Break Time
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Calendar className="w-4 h-4 mr-2" />
                  Copy Last Week
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <X className="w-4 h-4 mr-2" />
                  Mark Unavailable
                </Button>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>• Keep your availability updated to receive more session requests</p>
                  <p>• Block dates in advance for planned absences</p>
                  <p>• Consider offering weekend hours for better matching</p>
                  <p>• Regular availability helps build student relationships</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
