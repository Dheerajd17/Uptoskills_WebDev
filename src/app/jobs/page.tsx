import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/ui/Footer"

export default function JobsPage() {
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
        <h1 className="text-4xl font-bold text-center mb-8">Job Listings</h1>
        <div className="space-y-6">
          {[1, 2, 3, 4, 5].map((job) => (
            <div key={job} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-2">Software Engineer {job}</h2>
              <p className="text-gray-600 mb-4">
                We're looking for a talented software engineer to join our team and help build amazing products.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-emerald-500 font-semibold">$80,000 - $120,000</span>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Apply Now</Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

