"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Linkedin, Twitter, MessageCircle, Send } from "lucide-react"

export function InternshipForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    universityType: "",
    location: "",
    branch: "",
    mobileNumber: "",
    qualification: "",
    startDate: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Accelerate your career with Uptoskills internships</h1>
        <div className="bg-orange-100 text-orange-800 p-4 rounded-md mb-6">
          If anyone asks you to pay any kind of fee for this internship, inform us immediately. Don't pay anything to
          anyone, especially doesn't charge any fee for this internship.
        </div>
      </div>

      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Intern with UptoSkills</h2>
        <p className="text-gray-600 mb-6">
          UptoSkills makes it possible to unleash your fullest potential. We nurture our talent and enjoy them to
          contribute to the creation of a better future. With exciting opportunities across a wealth of domains and
          industries, we're committed to helping you build a fulfilling career with us.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Select onValueChange={(value) => setFormData({ ...formData, universityType: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select University Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Public University</SelectItem>
                <SelectItem value="private">Private University</SelectItem>
                <SelectItem value="deemed">Deemed University</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => setFormData({ ...formData, location: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="hyderabad">Hyderabad</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Branch *"
              value={formData.branch}
              onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
              required
            />
            <Input
              placeholder="Mobile Number *"
              type="tel"
              value={formData.mobileNumber}
              onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
              required
            />
            <Select onValueChange={(value) => setFormData({ ...formData, qualification: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select Qualification" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                <SelectItem value="masters">Master's Degree</SelectItem>
                <SelectItem value="phd">PhD</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">When you will start Internship?*</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  required
                />
              </div>
            </div>

            <Textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="min-h-[100px]"
            />

            <Button type="submit" className="w-full md:w-auto bg-orange-500 hover:bg-orange-600">
              Submit
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <p className="text-sm font-medium mb-2">Share this Work From home Internship Opportunity:</p>
          <div className="flex gap-2">
            <Button size="icon" variant="outline" className="rounded-full">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline" className="rounded-full">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline" className="rounded-full">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline" className="rounded-full">
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline" className="rounded-full">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

