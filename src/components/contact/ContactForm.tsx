"use client";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, contactSchema } from "@/src/schema/contact.schema";
;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const handleContactSubmit = (data: ContactFormData) => {
    console.log(data);

    // API call will go here later
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-6">
      <Card className="w-full max-w-2xl rounded-3xl border-none bg-[#491A53] text-white shadow-xl">
        <CardContent className="p-4 lg:p-8">

          <form
            onSubmit={handleSubmit(handleContactSubmit)}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >

            {/* First Name */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="firstName"
                className="text-sm font-medium text-white/70"
              >
                First Name
              </Label>

              <Input
                id="firstName"
                placeholder="John"
                {...register("firstName")}
                className="h-12 rounded-xl text-white placeholder:text-white/50"
              />

              {errors.firstName && (
                <p className="text-sm text-red-300">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="lastName"
                className="text-sm font-medium text-white/70"
              >
                Last Name
              </Label>

              <Input
                id="lastName"
                placeholder="Doe"
                {...register("lastName")}
                className="h-12 rounded-xl bg-white/10 text-white placeholder:text-white/50"
              />

              {errors.lastName && (
                <p className="text-sm text-red-300">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="phone"
                className="text-sm font-medium text-white/70"
              >
                Phone Number
              </Label>

              <Input
                id="phone"
                type="tel"
                placeholder="+977-9286079749"
                {...register("phone")}
                className="h-12 rounded-xl bg-white/10 text-white placeholder:text-white/50"
              />

              {errors.phone && (
                <p className="text-sm text-red-300">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-white/70"
              >
                Email Address
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="johndoe@gmail.com"
                {...register("email")}
                className="h-12 rounded-xl text-white placeholder:text-white/50"
              />

              {errors.email && (
                <p className="text-sm text-red-300">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label
                htmlFor="message"
                className="text-sm font-medium text-white/70"
              >
                Message
              </Label>

              <Textarea
                id="message"
                placeholder="Tell us how can we help you..."
                {...register("message")}
                className="min-h-13 resize-none rounded-xl bg-white/10 text-white placeholder:text-white/50"
              />

              {errors.message && (
                <p className="text-sm text-red-300">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="h-12 rounded-xl bg-orange-500 font-semibold text-white hover:bg-orange-600 sm:col-span-2"
            >
              Send Message
            </Button>

          </form>

        </CardContent>
      </Card>
    </div>
  );
}