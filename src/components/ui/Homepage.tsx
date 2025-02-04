"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Rocket, Briefcase, GraduationCap, Users, Trophy } from "lucide-react";

export function HomePage() {
  const router = useRouter();
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
              <p className="text-xl mb-8">
                <Typewriter
                  words={["India's Emerging Tech Platform for Learn, Compete, Intern & Jobs!"]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={40}
                />
              </p>
              <div className="flex gap-4">
              <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600"
                  onClick={() => router.push("/Hire-from-us")}>
                  Hire From Us
                </Button>
                <Button size="lg"
                variant="outline"
                className="gap-2"
                onClick={() => window.open("https://youtu.be/FdcKgNWclXk?si=QvkLp6tRvaI1Yxqy", "_blank", "noopener,noreferrer")}>
                <Play className="h-4 w-4" /> HR TPO Podcast
                </Button>

        </div>
            </div>

            <motion.div
              className="lg:w-1/2 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                { href: "/events", icon: Rocket, label: "Events", color: "text-red-500", bg: "bg-red-100" },
                { href: "/jobs", icon: Briefcase, label: "Jobs", color: "text-purple-500", bg: "bg-purple-100" },
                { href: "/rewards", icon: Trophy, label: "True Rewards", color: "text-blue-500", bg: "bg-blue-100" },
                { href: "/internships", icon: GraduationCap, label: "Internships", color: "text-emerald-500", bg: "bg-emerald-100" },
              ].map((item, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Link href={item.href} className="block">
                    <Card className="p-6 bg-gradient-to-br from-purple-100 to-blue-100">
                      <div className="flex items-center gap-4">
                        <div className={`${item.bg} p-3 rounded-full`}>
                          <item.icon className={`h-6 w-6 ${item.color}`} />
                        </div>
                        <span className={`${item.color} font-medium`}>{item.label}</span>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white text-gray-800 py-16 -mt-16 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
            {[
              {
                icon: GraduationCap,
                title: "For Colleges",
                description: "Transform your candidates' careers with our comprehensive and industry-focused training programs.",
                gradient: "from-[#00ff75] to-[#3700ff]",
              },
              {
                icon: Briefcase,
                title: "Free Jobs",
                description: "Find the right talent for your business with our tailored and data-driven recruitment solutions.",
                gradient: "from-[#FF0000] to-[#00C6FF]",
              },
              {
                icon: Users,
                title: "Free Internships",
                description: "Kick-start your career with our industry-focused internship programs, designed to give valuable skills.",
                gradient: "from-[#FF8008] to-[#FFC837]",
              },
              {
                icon: Trophy,
                title: "Hackathons & Competitions",
                description: "Join the brightest minds for epic innovations and win amazing prizes",
                gradient: "from-[#4776E6] to-[#8E54E9]",
              },
            ].map((feature, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className={`bg-gradient-to-r ${feature.gradient} p-[2px] rounded-2xl transition-all duration-300 hover:shadow-[0px_0px_30px_1px_rgba(0,255,117,0.30)]`}>
                  <div className="bg-white p-6 rounded-2xl h-full transition-all duration-200 hover:scale-[0.98] flex flex-col justify-between" style={{ minHeight: "350px" }}>
                    <div>
                      <div className={`bg-gradient-to-r ${feature.gradient} rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center`}>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <p className="text-3xl font-bold mb-4 text-gray-900 text-center">Our Partners</p>
      <section className="bg-white-200 py-16">
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-6 gap-4">
            {[
              { name: "Google", logo: "https://logo.clearbit.com/google.com" },
              { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
              { name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
              { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com" },
              { name: "BlackRock", logo: "https://logo.clearbit.com/blackrock.com" },
              { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
            ].map((partner) => (
              <motion.div key={partner.name} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} width={120} height={60} className="h-12 w-auto object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
