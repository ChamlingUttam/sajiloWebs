// "use client";

// import { useState } from "react";
// import { isAxiosError } from "axios";
// import { Button } from "../ui/button";
// import { Card, CardContent } from "../ui/card";
// import { Input } from "../ui/input";
// import { Label } from "../ui/label";
// import { Textarea } from "../ui/textarea";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { ContactFormData, contactSchema } from "@/src/schema/contact.schema";
// import { submitContactUs } from "@/Services/api/contact";

// export default function ContactForm() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<ContactFormData>({
//     resolver: zodResolver(contactSchema),
//   });

//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [submitError, setSubmitError] = useState<string | null>(null);
//  const handleContactSubmit = async (data: ContactFormData) => {
//     console.log("form data:", data);
//     setLoading(true);
//     setSubmitted(false);
//     setSubmitError(null);
  
//     try {
//       await submitContactUs(data);
//       setSubmitted(true);
//       reset();
//     } catch (err: unknown) {
//       const message = isAxiosError<{ message?: string }>(err)
//         ? err.response?.data?.message
//         : undefined;
//       setSubmitError(message || "Something went wrong. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-white p-6">
//       <Card className="w-full max-w-2xl rounded-3xl border-none bg-[#491A53] text-white shadow-xl">
//         <CardContent className="p-4 lg:p-8">

//           <form
//             onSubmit={handleSubmit(handleContactSubmit)}
//             className="grid grid-cols-1 gap-5 sm:grid-cols-2"
//           >

//             {/* First Name */}
//             <div className="flex flex-col gap-2">
//               <Label htmlFor="firstName" className="text-sm font-medium text-white/70">
//                 First Name
//               </Label>
//               <Input
//                 id="firstName"
//                 placeholder="John"
//                 {...register("firstName")}
//                 className="h-12 rounded-xl text-white placeholder:text-white/50"
//               />
//               {errors.firstName && (
//                 <p className="text-sm text-red-300">{errors.firstName.message}</p>
//               )}
//             </div>

//             {/* Last Name */}
//             <div className="flex flex-col gap-2">
//               <Label htmlFor="lastName" className="text-sm font-medium text-white/70">
//                 Last Name
//               </Label>
//               <Input
//                 id="lastName"
//                 placeholder="Doe"
//                 {...register("lastName")}
//                 className="h-12 rounded-xl bg-white/10 text-white placeholder:text-white/50"
//               />
//               {errors.lastName && (
//                 <p className="text-sm text-red-300">{errors.lastName.message}</p>
//               )}
//             </div>

//             {/* Phone */}
//             <div className="flex flex-col gap-2">
//               <Label htmlFor="phone" className="text-sm font-medium text-white/70">
//                 Phone Number
//               </Label>
//             <Input
//   id="phone"
//   type="tel"
//   placeholder="98XXXXXXXX"
//   {...register("phone")}
//   className="h-12 rounded-xl bg-white/10 text-white placeholder:text-white/50"
// />
//               {errors.phone && (
//                 <p className="text-sm text-red-300">{errors.phone.message}</p>
//               )}
//             </div>

//             {/* Email */}
//             <div className="flex flex-col gap-2">
//               <Label htmlFor="email" className="text-sm font-medium text-white/70">
//                 Email Address
//               </Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="johndoe@gmail.com"
//                 {...register("email")}
//                 className="h-12 rounded-xl text-white placeholder:text-white/50"
//               />
//               {errors.email && (
//                 <p className="text-sm text-red-300">{errors.email.message}</p>
//               )}
//             </div>

//             {/* Message */}
//             <div className="flex flex-col gap-2 sm:col-span-2">
//               <Label htmlFor="message" className="text-sm font-medium text-white/70">
//                 Message
//               </Label>
//               <Textarea
//                 id="message"
//                 placeholder="Tell us how can we help you..."
//                 {...register("message")}
//                 className="min-h-13 resize-none rounded-xl bg-white/10 text-white placeholder:text-white/50"
//               />
//               {errors.message && (
//                 <p className="text-sm text-red-300">{errors.message.message}</p>
//               )}
//             </div>

//             {submitted && (
//               <p className="sm:col-span-2 text-sm text-green-300 bg-green-400/10 border border-green-400/30 rounded-lg px-3 py-2">
//                 Thank you! We&apos;ll get back to you shortly.
//               </p>
//             )}

//             {submitError && (
//               <p className="sm:col-span-2 text-sm text-red-300 bg-red-400/10 border border-red-400/30 rounded-lg px-3 py-2">
//                 {submitError}
//               </p>
//             )}

//             {/* Submit */}
//             <Button
//               type="submit"
//               disabled={loading}
//               className="h-12 rounded-xl bg-orange-500 font-semibold text-white hover:bg-orange-600 disabled:opacity-60 sm:col-span-2"
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </Button>

//           </form>

//         </CardContent>
//       </Card>
//     </div>
//   );
// }


















"use client";

import { useState } from "react";
import { isAxiosError } from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

import {
  ContactFormData,
  contactSchema,
} from "@/src/schema/contact.schema";

import { submitContactUs } from "@/Services/api/contact";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleContactSubmit = async (data: ContactFormData) => {
    setLoading(true);
    setSubmitted(false);
    setSubmitError(null);

    try {
      await submitContactUs(data);

      setSubmitted(true);
      reset();
    } catch (err: unknown) {
      const message = isAxiosError<{ message?: string }>(err)
        ? err.response?.data?.message
        : undefined;

      setSubmitError(
        message || "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#FCFAFC] py-8 sm:py-10 lg:py-14">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:px-10 md:grid-cols-2 lg:gap-8">
        {/* Contact Form */}
        <Card className="h-full w-full min-w-0 rounded-3xl border-none bg-[#491A53] text-white shadow-xl">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <form
              onSubmit={handleSubmit(handleContactSubmit)}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            >
              {/* First Name */}
              <div className="flex min-w-0 flex-col gap-2">
                <Label
                  htmlFor="firstName"
                  className="text-sm font-medium text-white"
                >
                  First Name
                </Label>

                <Input
                  id="firstName"
                  placeholder="John"
                  {...register("firstName")}
                  className="h-12 rounded-xl text-white placeholder:text-white/60"
                />

                {errors.firstName && (
                  <p className="text-sm text-red-300">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div className="flex min-w-0 flex-col gap-2">
                <Label
                  htmlFor="lastName"
                  className="text-sm font-medium text-white"
                >
                  Last Name
                </Label>

                <Input
                  id="lastName"
                  placeholder="Doe"
                  {...register("lastName")}
                  className="h-12 rounded-xl text-white placeholder:text-white/60"
                />

                {errors.lastName && (
                  <p className="text-sm text-red-300">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="flex min-w-0 flex-col gap-2">
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium text-white"
                >
                  Phone Number
                </Label>

                <Input
                  id="phone"
                  type="tel"
                  placeholder="98XXXXXXXX"
                  {...register("phone")}
                  className="h-12 rounded-xl text-white placeholder:text-white/60"
                />

                {errors.phone && (
                  <p className="text-sm text-red-300">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex min-w-0 flex-col gap-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-white"
                >
                  Email Address
                </Label>

                <Input
                  id="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  {...register("email")}
                  className="h-12 rounded-xl text-white placeholder:text-white/60"
                />

                {errors.email && (
                  <p className="text-sm text-red-300">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="flex min-w-0 flex-col gap-2 sm:col-span-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-white"
                >
                  Message
                </Label>

                <Textarea
                  id="message"
                  placeholder="Tell us how can we help you..."
                  {...register("message")}
                  className="min-h-32 resize-none rounded-xl text-white placeholder:text-white/60"
                />

                {errors.message && (
                  <p className="text-sm text-red-300">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Success */}
              {submitted && (
                <p className="rounded-lg border border-green-400/30 bg-green-400/10 px-3 py-2 text-sm text-green-300 sm:col-span-2">
                  Thank you! We&apos;ll get back to you shortly.
                </p>
              )}

              {/* Error */}
              {submitError && (
                <p className="rounded-lg border border-red-400/30 bg-red-400/10 px-3 py-2 text-sm text-red-300 sm:col-span-2">
                  {submitError}
                </p>
              )}

              {/* Submit */}
              <Button
                type="submit"
                disabled={loading}
                className="h-12 rounded-xl bg-orange-500 font-semibold text-white hover:bg-orange-600 disabled:opacity-60 sm:col-span-2"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Need Help */}
        <div className="flex h-full min-w-0 flex-col justify-center rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
          <h3 className="mb-6 text-lg font-semibold text-[#491A53]">
            Need Help?
          </h3>

          <ul className="flex flex-col gap-5 text-sm">
            {/* Email */}
            <li className="flex min-w-0 items-center gap-3 text-[#491A53]">
              <Mail
                size={18}
                className="shrink-0 text-[#491A53]"
              />

              <a
                href="mailto:hello@sajilows.com"
                className="break-all hover:underline"
              >
                hello@sajilows.com
              </a>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-3 text-[#491A53]">
              <Phone
                size={18}
                className="shrink-0 text-[#491A53]"
              />

              <a
                href="tel:+9749746888890"
                className="hover:underline"
              >
                974-6888890
              </a>
            </li>

            {/* Location */}
            <li className="flex items-center gap-3 text-[#491A53]">
              <MapPin
                size={18}
                className="shrink-0 text-[#491A53]"
              />

              <span>Pragati Chowk, Itahari</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
