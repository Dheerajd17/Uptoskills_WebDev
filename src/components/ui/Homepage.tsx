"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Rocket, Briefcase, GraduationCap, Users, Trophy } from "lucide-react"

export function HomePage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white to-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-emerald-500 font-bold mb-4">SKILLS FOR LIFETIME!</h2>
              <h1 className="text-6xl font-bold mb-6">
                <span className="text-orange-500">Unleash </span>
                <span className="text-emerald-500">Your Career</span>
              </h1>
              <p className="text-xl mb-8">India's No. 1 Tech Platform for Learn, Compete, Intern & Jobs!</p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Hire From us
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Play className="h-4 w-4" /> HR TPO Podcast
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <Card className="p-6 bg-gradient-to-br from-purple-100 to-blue-100">
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Rocket className="h-6 w-6 text-red-500" />
                  </div>
                  <span className="text-orange-500 font-medium">Events</span>
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-purple-100 to-blue-100">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-purple-500" />
                  </div>
                  <span className="text-purple-500 font-medium">Jobs</span>
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-blue-100 to-cyan-100">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Trophy className="h-6 w-6 text-blue-500" />
                  </div>
                  <span className="text-blue-500 font-medium">True Rewards</span>
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-blue-100 to-cyan-100">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-emerald-500" />
                  </div>
                  <span className="text-emerald-500 font-medium">Internships</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "For Colleges",
                description:
                  "Transform your candidates career with our comprehensive and industry-focused training programs.",
                gradient: "from-[#00ff75] to-[#3700ff]",
              },
              {
                icon: Briefcase,
                title: "Free Jobs",
                description:
                  "Find the right talent for your business with our tailored and data-driven recruitment solutions.",
                gradient: "from-[#FF0000] to-[#00C6FF]",
              },
              {
                icon: Users,
                title: "Free Internships",
                description:
                  "Kick-start your career with our industry-focused internship programs, designed to give valuable skills.",
                gradient: "from-[#FF8008] to-[#FFC837]",
              },
              {
                icon: Trophy,
                title: "Hackathons & Competitions",
                description: "Join the brightest minds for epic innovations and win amazing prizes",
                gradient: "from-[#4776E6] to-[#8E54E9]",
              },
            ].map((feature, index) => (
              <div key={index} className="transition-all duration-300 hover:scale-105">
                <div
                  className={`bg-gradient-to-r ${feature.gradient} p-[2px] rounded-2xl transition-all duration-300 hover:shadow-[0px_0px_30px_1px_rgba(0,255,117,0.30)]`}
                >
                  <div
                    className="bg-white p-6 rounded-2xl h-full transition-all duration-200 hover:scale-[0.98] flex flex-col justify-between"
                    style={{ minHeight: "350px" }}
                  >
                    <div>
                      <div
                        className={`bg-gradient-to-r ${feature.gradient} rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center`}
                      >
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
                      <p className="mb-4 text-center">{feature.description}</p>
                    </div>
                    <Button variant="link" className="text-blue-500 hover:text-blue-700 mx-auto">
                      View More +
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-orange-500 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "Google", logo: "https://logo.clearbit.com/google.com" },
              { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
              { name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
              { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com" },
              { name: "BlackRock", logo: "https://logo.clearbit.com/blackrock.com" },
              { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
            ].map((partner) => (
              <div key={partner.name} className="bg-white/90 p-4 rounded-lg flex items-center justify-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

