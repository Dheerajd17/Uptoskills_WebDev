"use client"

import { useState } from "react"
import Image from "next/image"
import { Share2, Linkedin, Facebook, Twitter, MessageCircle, Send, Instagram } from "lucide-react"

import { Sidebar } from "dash/components/ui/Sidebar";
import { Button } from "dash/components/ui/button";
import { Card } from "dash/components/ui/card";



interface Job {
  id: number
  title: string
  company: string
  isLive: boolean
  location: string
  postedDate: string
  totalApplications: number
  description: string
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Trainee",
    company: "Tata Steel",
    isLive: true,
    location:
      "Work from office Working Area, Office-address: Sanand, Ahmedabad (ITI Female Only) & Jamshedpur (ITI Male Only) & Pantnagar (12th Pass & ITI Male Only) City: Anywhere in India",
    postedDate: "Posted On 26 Nov 2024, 11:23",
    totalApplications: 139,
    description: "Job type: Work from office",
  },
  {
    id: 2,
    title: "Business Development Counsellor",
    company: "Planetspark",
    isLive: true,
    location: "Work from office Working Area, Office-address: Gurgaon City: Anywhere in India",
    postedDate: "Posted On 30 Nov 2024, 15:14",
    totalApplications: 66,
    description: "Job type: Work from office",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Tata Consultancy Services",
    isLive: true,
    location: "Work from office, Mumbai, India",
    postedDate: "Posted On 15 Jan 2025, 11:34",
    totalApplications: 120,
    description: "Job type: Work from office",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Accenture",
    isLive: true,
    location: "Work from office, Bengaluru, India",
    postedDate: "Posted On 18 Jan 2025, 10:45",
    totalApplications: 85,
    description: "Job type: Work from office",
  },
  {
    id: 5,
    title: "Full Stack Developer",
    company: "Infosys",
    isLive: true,
    location: "Work from office, Pune, India",
    postedDate: "Posted On 20 Jan 2025, 09:00",
    totalApplications: 72,
    description: "Job type: Work from office",
  },
  {
    id: 6,
    title: "AI/ML Engineer",
    company: "Wipro",
    isLive: true,
    location: "Work from office, Hyderabad, India",
    postedDate: "Posted On 25 Jan 2025, 14:50",
    totalApplications: 93,
    description: "Job type: Work from office",
  },
  {
    id: 7,
    title: "Product Manager",
    company: "Flipkart",
    isLive: true,
    location: "Work from office, Bengaluru, India",
    postedDate: "Posted On 22 Jan 2025, 16:30",
    totalApplications: 103,
    description: "Job type: Work from office",
  },
  {
    id: 8,
    title: "Business Analyst",
    company: "Cognizant",
    isLive: true,
    location: "Work from office, Chennai, India",
    postedDate: "Posted On 10 Jan 2025, 12:00",
    totalApplications: 56,
    description: "Job type: Work from office",
  },
  {
    id: 9,
    title: "Network Engineer",
    company: "HCL Technologies",
    isLive: true,
    location: "Work from office, Noida, India",
    postedDate: "Posted On 20 Jan 2025, 15:00",
    totalApplications: 64,
    description: "Job type: Work from office",
  },
  {
    id: 10,
    title: "DevOps Engineer",
    company: "Amazon",
    isLive: true,
    location: "Work from office, Hyderabad, India",
    postedDate: "Posted On 18 Jan 2025, 13:25",
    totalApplications: 89,
    description: "Job type: Work from office",
  },
  {
    id: 11,
    title: "Cloud Architect",
    company: "Microsoft",
    isLive: true,
    location: "Work from office, Bengaluru, India",
    postedDate: "Posted On 30 Jan 2025, 09:05",
    totalApplications: 78,
    description: "Job type: Work from office",
  },
  {
    id: 12,
    title: "Marketing Manager",
    company: "Zomato",
    isLive: true,
    location: "Work from office, Delhi, India",
    postedDate: "Posted On 21 Jan 2025, 10:10",
    totalApplications: 62,
    description: "Job type: Work from office",
  },
  {
    id: 13,
    title: "Cybersecurity Specialist",
    company: "Deloitte",
    isLive: true,
    location: "Work from office, Bengaluru, India",
    postedDate: "Posted On 14 Jan 2025, 11:22",
    totalApplications: 98,
    description: "Job type: Work from office",
  },
  {
    id: 14,
    title: "Frontend Developer",
    company: "Tata Elxsi",
    isLive: true,
    location: "Work from office, Chennai, India",
    postedDate: "Posted On 12 Jan 2025, 08:35",
    totalApplications: 111,
    description: "Job type: Work from office",
  },
  {
    id: 15,
    title: "Software Architect",
    company: "SAP",
    isLive: true,
    location: "Work from office, Pune, India",
    postedDate: "Posted On 17 Jan 2025, 14:10",
    totalApplications: 76,
    description: "Job type: Work from office",
  },
  {
    id: 16,
    title: "Data Engineer",
    company: "LinkedIn",
    isLive: true,
    location: "Work from office, Bengaluru, India",
    postedDate: "Posted On 25 Jan 2025, 16:05",
    totalApplications: 99,
    description: "Job type: Work from office",
  },
  {
    id: 17,
    title: "Human Resources Manager",
    company: "Byju's",
    isLive: true,
    location: "Work from office, Mumbai, India",
    postedDate: "Posted On 19 Jan 2025, 12:30",
    totalApplications: 84,
    description: "Job type: Work from office",
  },
  {
    id: 18,
    title: "Operations Manager",
    company: "Swiggy",
    isLive: true,
    location: "Work from office, Bengaluru, India",
    postedDate: "Posted On 23 Jan 2025, 11:50",
    totalApplications: 110,
    description: "Job type: Work from office",
  },
  {
    id: 19,
    title: "Quality Assurance Engineer",
    company: "Capgemini",
    isLive: true,
    location: "Work from office, Pune, India",
    postedDate: "Posted On 30 Jan 2025, 10:15",
    totalApplications: 120,
    description: "Job type: Work from office",
  },
  {
    id: 20,
    title: "Database Administrator",
    company: "Oracle",
    isLive: true,
    location: "Work from office, Bengaluru, India",
    postedDate: "Posted On 28 Jan 2025, 09:45",
    totalApplications: 103,
    description: "Job type: Work from office",
  },
  {
    id: 21,
    title: "Sales Executive",
    company: "Samsung",
    isLive: true,
    location: "Work from office, Delhi, India",
    postedDate: "Posted On 24 Jan 2025, 15:00",
    totalApplications: 80,
    description: "Job type: Work from office",
  },
  {
    id: 22,
    title: "UX/UI Designer",
    company: "Adobe",
    isLive: true,
    location: "Work from office, Hyderabad, India",
    postedDate: "Posted On 26 Jan 2025, 13:30",
    totalApplications: 75,
    description: "Job type: Work from office",
  },
]

const managementJobs: Job[] = [
  {
    id: 101,
    title: "Senior Project Manager",
    company: "Tech Innovations Inc.",
    isLive: true,
    location: "Remote",
    postedDate: "Posted On 1 Feb 2025, 09:00",
    totalApplications: 45,
    description: "Experienced project manager needed for leading tech projects.",
  },
  {
    id: 102,
    title: "HR Director",
    company: "Global Solutions Ltd.",
    isLive: true,
    location: "New York, USA",
    postedDate: "Posted On 2 Feb 2025, 10:30",
    totalApplications: 38,
    description: "Seeking an HR professional to lead our global human resources team.",
  },
  {
    id: 103,
    title: "Chief Financial Officer",
    company: "Finance Experts Co.",
    isLive: true,
    location: "London, UK",
    postedDate: "Posted On 3 Feb 2025, 11:45",
    totalApplications: 52,
    description: "Experienced CFO needed to oversee financial operations.",
  },
  {
    id: 104,
    title: "Operations Manager",
    company: "Logistics Pro",
    isLive: true,
    location: "Singapore",
    postedDate: "Posted On 4 Feb 2025, 14:00",
    totalApplications: 41,
    description: "Seeking an operations expert to streamline our processes.",
  },
  {
    id: 105,
    title: "Marketing Director",
    company: "Brand Builders Inc.",
    isLive: true,
    location: "Los Angeles, USA",
    postedDate: "Posted On 5 Feb 2025, 16:15",
    totalApplications: 49,
    description: "Creative marketing leader needed to drive our brand strategy.",
  },
]

export default function JobBoard() {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeSection, setActiveSection] = useState("jobs")
  const jobsPerPage = 5

  const currentJobs = activeSection === "jobs" ? jobs : managementJobs
  const totalPages = Math.ceil(currentJobs.length / jobsPerPage)

  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const displayedJobs = currentJobs.slice(indexOfFirstJob, indexOfLastJob)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-10 bg-white border-b">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uptoskills-fIXHHWysFO5ZYbMiJF2LKycQisMuox.png"
                alt="UptoSkills Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="hover:bg-orange-500 hover:text-white transition-colors">
                Support
              </Button>
              <Button variant="outline" className="hover:bg-orange-500 hover:text-white transition-colors">
                My Profile
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 flex-1">
          <div className="mb-8 flex flex-col items-center gap-4">
            <h1 className="text-3xl font-semibold text-center">
              {activeSection === "jobs" ? "Jobs & Internships" : "Management Hiring"}
            </h1>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Post Your Requirements
            </Button>
          </div>

          <div className="space-y-4">
            {displayedJobs.map((job) => (
              <Card key={job.id} className="p-6 transition-all duration-200 hover:shadow-lg hover:shadow-orange-200">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={`https://logo.clearbit.com/${encodeURIComponent(job.company.toLowerCase().replace(/\s+/g, ""))}.com`}
                        alt={`${job.company} logo`}
                        width={40}
                        height={40}
                        className="rounded-full"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=40&width=40"
                        }}
                      />
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h2 className="text-xl font-semibold">{job.title}</h2>
                          {job.isLive && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-700 rounded">
                              Live
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                    </div>
                    <Button variant="destructive" size="sm">
                      Delete Job
                    </Button>
                  </div>

                  <p className="text-sm">{job.description}</p>
                  <p className="text-sm">{job.location}</p>
                  <p className="text-sm text-muted-foreground">{job.postedDate}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share this job
                      </Button>
                      <div className="flex items-center gap-1">
                        {["linkedin", "facebook", "twitter", "whatsapp", "telegram", "instagram"].map((platform) => {
                          let Icon
                          switch (platform) {
                            case "linkedin":
                              Icon = Linkedin
                              break
                            case "facebook":
                              Icon = Facebook
                              break
                            case "twitter":
                              Icon = Twitter
                              break
                            case "whatsapp":
                              Icon = MessageCircle
                              break
                            case "telegram":
                              Icon = Send
                              break
                            case "instagram":
                              Icon = Instagram
                              break
                            default:
                              Icon = Share2
                          }
                          return (
                            <Button key={platform} size="icon" variant="outline" className="h-8 w-8">
                              <Icon className="h-4 w-4" />
                            </Button>
                          )
                        })}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Total: {job.totalApplications}</span>
                      <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                        All Candidates
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {pageNumbers.map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                className={`h-10 w-10 p-0 text-lg ${
                  currentPage === page
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-500"
                    : "border-emerald-500 text-emerald-500 hover:bg-emerald-50"
                }`}
                onClick={() => paginate(page)}
              >
                {page}
              </Button>
            ))}
          </div>
        </main>

        <footer className="bg-black text-white py-4 w-full">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-2">
            <p className="text-sm text-center">Copyright © 2023 UptoSkills. All Rights Reserved</p>
            <Button variant="outline" className="bg-emerald-500 text-white border-white hover:bg-emerald-600">
              Online
            </Button>
          </div>
        </footer>
      </div>
    </div>
  )
}

