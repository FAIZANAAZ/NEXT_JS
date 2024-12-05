import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full pt-[80px] pb-[] bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive Section */}
          <div className="space-y-6 ">
            <h2 className="text-[24px] leading-[24px] tracking-tight">Exclusive</h2>
            <h3 className="text-xl ">Subscribe</h3>
            <p className="text-base">Get 10% off your first order</p>
            <div className="flex items-center border rounded-md">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button size="icon" variant="ghost">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium">Support</h3>
            <div className="space-y-4 text-base">
              <p>111 Bijoy sarani, Dhaka,</p>
              <p>DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>

          {/* Account Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium">Account</h3>
            <ul className="space-y-4 text-base">
              <li><Link href="#">My Account</Link></li>
              <li><Link href="#">Login / Register</Link></li>
              <li><Link href="#">Cart</Link></li>
              <li><Link href="#">Wishlist</Link></li>
              <li><Link href="#">Shop</Link></li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium">Quick Link</h3>
            <ul className="space-y-4 text-base">
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms Of Use</Link></li>
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium">Download App</h3>
            <p className="text-sm opacity-70">Save $3 with App New User Only</p>
            <div className="flex gap-4">
              <div className="border-2 border-white p-1 rounded">
                <Image
                  src="/scan.png"
                  alt="QR Code"
                  width={76}
                  height={76}
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Image
                  src="/google.png"
                  alt="Google Play"
                  width={110}
                  height={40}
                  className="rounded border border-white"
                />
                <Image
                  src="/apple.png"
                  alt="App Store"
                  width={110}
                  height={40}
                  className="rounded border border-white"
                />
              </div>
            </div>
            <div className="flex gap-6 pt-4">
              <Link href="#" className="hover:opacity-80">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/40">
          <p className="text-center text-white/60">
            © Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

