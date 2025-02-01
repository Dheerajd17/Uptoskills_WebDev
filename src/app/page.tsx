"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/ui/Sidebar"
import {HomePage} from "@/components/ui/Homepage";
import { InternshipForm } from "@/components/ui/InternshipForm"
import InternshipStatus from "@/components/ui/InternshipStatus";
import { Footer } from "@/components/ui/Footer"

export default function JobBoard() {
  const [activeSection, setActiveSection] = useState("home")

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

        <main className="flex-1">
          {activeSection === "home" ? (
            <HomePage />
          ) : activeSection === "management" ? (
            <InternshipForm />
          ) : activeSection === "internship-status" ? (
            <InternshipStatus />
          ) : null}
        </main>

        <Footer />
      </div>
    </div>
  )
}

