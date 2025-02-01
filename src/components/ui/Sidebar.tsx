import { useState } from "react"
import { ChevronLeft, ChevronRight, Home, FileText, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  setActiveSection: (section: string) => void;
}

export function Sidebar({ setActiveSection }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isInternshipExpanded, setIsInternshipExpanded] = useState(false)

  return (
    <div className={`bg-gray-100 h-screen transition-all duration-300 ${isExpanded ? "w-64" : "w-16"} flex flex-col`}>
      <Button variant="ghost" size="icon" className="self-end m-2" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? <ChevronLeft /> : <ChevronRight />}
      </Button>
      <nav className="flex flex-col space-y-2 p-2">
        <Button
          variant="ghost"
          className="justify-start hover:bg-orange-200 transition-colors duration-200"
          onClick={() => setActiveSection("home")}
        >
          <Home className="mr-2" />
          {isExpanded && "Home"}
        </Button>
        <Button
          variant="ghost"
          className="justify-start hover:bg-orange-200 transition-colors duration-200 w-full"
          onClick={() => {
            setIsInternshipExpanded(!isInternshipExpanded)
            setActiveSection("management")
          }}
        >
          <FileText className="mr-2" />
          {isExpanded && (
            <>
              Internship Form
              <ChevronDown
                className={`ml-auto transition-transform duration-200 ${isInternshipExpanded ? "rotate-180" : ""}`}
              />
            </>
          )}
        </Button>
        {isInternshipExpanded && isExpanded && (
          <Button
            variant="ghost"
            className="justify-start hover:bg-orange-200 transition-colors duration-200 pl-8 w-full"
            onClick={() => setActiveSection("internship-status")}
          >
            <Mail className="mr-2" />
            Internship Submissions
          </Button>
        )}
      </nav>
    </div>
  )
}

