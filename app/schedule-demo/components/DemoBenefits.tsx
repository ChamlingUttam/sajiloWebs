
import { Users2, Clock, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";

const benefits = [
  { icon: Users2, title: "30-Minute Demo", desc: "Quick, focused session showing exactly what you need." },
  { icon: Clock, title: "Flexible Timing", desc: "Schedule at your convenience, including weekends." },
  { icon: CheckCircle2, title: "No Commitment", desc: "Free demo with no obligation to purchase." },
  { icon: Users2, title: "Team Onboarding", desc: "Bring your team members to the demo." },
];

export default function DemoBenefits() {
  return (
    <div className="flex flex-col gap-6">
      {/* Demo Benefits card */}
      <div className="bg-white rounded-2xl p-5 sm:p-6">
        <h3 className="font-semibold text-[#1A1A1A] text-base mb-5">Demo Benefits</h3>
        <div className="flex flex-col gap-5">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B1547] flex items-center justify-center shrink-0">
                <Icon size={14} className="text-white" />
              </span>
              <div>
                <p className="text-sm font-medium text-[#1A1A1A]">{title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Need Help card */}
      <div className="bg-white rounded-2xl p-5 sm:p-6">
        <h3 className="font-semibold text-[#491A53] text-base mb-4">Need Help?</h3>
        <ul className="flex flex-col gap-3 text-sm text-gray-600">
          <li className="flex items-center gap-2 text-[#491A53]">
            <Mail size={14} className="text-[#491A53] shrink-0" />
            <a href="mailto:hello@sajilows.com">hello@sajilows.com</a>
          </li>
          <li className="flex items-center gap-2 text-[#491A53]">
            <Phone size={14} className="text-[#491A53] shrink-0" />
            <a href="tel:+9749746888890" >974-6888890</a>
          </li>
          <li className="flex items-center gap-2 text-[#491A53]">
            <MapPin size={14} className=" shrink-0" />
            Pragati Chowk, Itahari
          </li>
        </ul>
      </div>
    </div>
  );
}