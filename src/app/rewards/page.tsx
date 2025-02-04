import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/ui/Footer"

export default function RewardsPage() {
  return (
    <div className="min-h-screen flex flex-col">
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

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">True Rewards Program</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Bronze", points: 1000, color: "bg-amber-600" },
            { name: "Silver", points: 5000, color: "bg-gray-400" },
            { name: "Gold", points: 10000, color: "bg-yellow-400" },
            { name: "Platinum", points: 25000, color: "bg-gray-600" },
            { name: "Diamond", points: 50000, color: "bg-blue-500" },
            { name: "Elite", points: 100000, color: "bg-purple-600" },
          ].map((tier) => (
            <div key={tier.name} className={`${tier.color} text-white rounded-lg shadow-md p-6`}>
              <h2 className="text-2xl font-semibold mb-4">{tier.name} Tier</h2>
              <p className="mb-4">Earn {tier.points} points to reach this tier</p>
              <Button className="bg-white text-gray-800 hover:bg-gray-200">View Benefits</Button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

