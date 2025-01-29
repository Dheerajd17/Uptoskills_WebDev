import { useState } from "react"
import { Button } from "dash/components/ui/button"
import { ChevronLeft, ChevronRight, Briefcase, Users } from "lucide-react"

export function Sidebar({ setActiveSection }) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className={`bg-gray-100 h-screen transition-all duration-300 ${isExpanded ? "w-64" : "w-16"} flex flex-col`}>
      <Button variant="ghost" size="icon" className="self-end m-2" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? <ChevronLeft /> : <ChevronRight />}
      </Button>
      <nav className="flex flex-col space-y-2 p-2">
        <Button
          variant="ghost"
          className="justify-start hover:bg-orange-200 transition-colors duration-200"
          onClick={() => setActiveSection("jobs")}
        >
          <Briefcase className="mr-2" />
          {isExpanded && "Jobs and Internships"}
        </Button>
        <Button
          variant="ghost"
          className="justify-start hover:bg-orange-200 transition-colors duration-200"
          onClick={() => setActiveSection("management")}
        >
          <Users className="mr-2" />
          {isExpanded && "Management Hiring"}
        </Button>
      </nav>
    </div>
  )
}