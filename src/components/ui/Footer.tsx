import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-[#1a1f2b] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uptoskills-fIXHHWysFO5ZYbMiJF2LKycQisMuox.png"
              alt="UptoSkills Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
            <div className="space-y-2">
              <p>
                <span className="text-orange-500">Address:</span> Palam, New Delhi,
                <br />
                Delhi 110077
              </p>
              <p>
                <span className="text-orange-500">Email:</span> info@uptoskills.com
              </p>
              <p>
                <span className="text-orange-500">Phone:</span> +91-9319772294
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Jobs & Internships
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Become a Trainer
                </a>
              </li>
            </ul>
          </div>

          {/* Short Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Short Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Refund & Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Login to Download Certificate
                </a>
              </li>
            </ul>
          </div>

          {/* Find Us Here */}
          <div>
            <h3 className="text-xl font-bold mb-4">Find Us Here</h3>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" className="hover:text-orange-500">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-orange-500">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-orange-500">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-orange-500">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-orange-500">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-orange-500">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">Copyright © 2023 UptoSkills. All Rights Reserved</p>
          <Button variant="outline" className="mt-4 bg-emerald-500 text-white border-white hover:bg-emerald-600">
            Online
          </Button>
        </div>
      </div>
    </footer>
  )
}

