import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/ui/Footer"

export default function EventsPage() {
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
        <h1 className="text-4xl font-bold text-center mb-8">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((event) => (
            <div key={event} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Tech Conference {event}</h2>
              <p className="text-gray-600 mb-4">
                Join us for an exciting tech conference featuring industry experts and cutting-edge technologies.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Learn More</Button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

