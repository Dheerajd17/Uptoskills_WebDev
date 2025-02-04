
import { Footer } from "@/components/ui/Footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const students = [
  { name: "Alice Johnson", skills: "Web Development", performance: "Excellent", image: "/placeholder.svg" },
  { name: "Bob Smith", skills: "Data Science", performance: "Outstanding", image: "/placeholder.svg" },
  { name: "Charlie Brown", skills: "UI/UX Design", performance: "Exceptional", image: "/placeholder.svg" },
  { name: "Diana Miller", skills: "Mobile Development", performance: "Excellent", image: "/placeholder.svg" },
  { name: "Ethan Davis", skills: "Machine Learning", performance: "Outstanding", image: "/placeholder.svg" },
]

export default function HireFromUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Hire Our Top Performers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={student.image || "/placeholder.svg"}
                  alt={student.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-xl font-semibold">{student.name}</h2>
                  <p className="text-gray-600">{student.skills}</p>
                </div>
              </div>
              <p className="mb-4">
                Performance: <span className="font-semibold text-green-600">{student.performance}</span>
              </p>
              <Button className="w-full bg-orange-500 hover:bg-orange-600">View Profile</Button>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

