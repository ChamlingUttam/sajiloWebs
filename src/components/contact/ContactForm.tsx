"use client"

import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"


export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // handle submit logic here
  }

  return (
    <div className="flex min-h-screen items-center bg-white justify-center p-6">
      <Card className="w-full max-w-2xl bg-[#491A53] text-white border-none rounded-3xl shadow-xl">
        <CardContent className="lg:p-8 p-4">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="firstName" className="text-white/70 text-sm font-medium">
                First Name
              </Label>
              <Input
                id="firstName"
                placeholder="John"
                className=" text-white placeholder:text-white/50  rounded-xl h-12"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="lastName" className="text-white/70 text-sm font-medium">
                Last Name
              </Label>
              <Input
                id="lastName"
                placeholder="Doe"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl h-12"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="phone" className="text-white/70 text-sm font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+977-9286079749"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl h-12"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-white/70 text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@gmail.com"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50  rounded-xl h-12"
              />
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label htmlFor="message" className="text-white/70 text-sm font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us how can we help you..."
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50  rounded-xl min-h-13 resize-none"
              />
            </div>

            <Button
              type="submit"
              className="sm:col-span-2 h-12 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}