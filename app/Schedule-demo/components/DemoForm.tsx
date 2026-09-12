import { User } from "lucide-react";

export default function DemoForm() {
  return (
    <div className="bg-[#4A1D57] rounded-2xl p-5 sm:p-7 text-white">
      <h3 className="font-semibold text-lg sm:text-xl mb-1">Tell us about your organization</h3>
      <p className="text-purple-200/60 text-xs sm:text-sm mb-6">
        Fill in the details below and our experts will prepare a custom demo for you.
      </p>

      <form className="flex flex-col gap-6">
        {/* Personal Information */}
        <fieldset>
          <legend className="flex items-center gap-2 text-sm font-medium mb-4">
            <User size={14} /> Personal Information
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="First Name" placeholder="John" />
            <Field label="Last Name" placeholder="Doe" />
            <Field label="Phone Number" placeholder="+977 XXXXXXXXX" />
            <Field label="Email Address" placeholder="john@example.com" type="email" />
          </div>
        </fieldset>

        {/* Organization Details */}
        <fieldset>
          <legend className="text-sm font-medium mb-4">Organization Details</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Hotel/Organization Name" placeholder="Grand Plaza Hotel" />
            <SelectField label="Business Type" placeholder="Select Type" />
            <SelectField label="Room Capacity" placeholder="10" />
          </div>
        </fieldset>

        {/* Schedule Details */}
        <fieldset>
          <legend className="text-sm font-medium mb-4">Schedule Details</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Preferred Date" placeholder="dd/mm/yyyy" type="date" />
            <Field label="Preferred Time" placeholder="Select" type="time" />
          </div>
          <div className="mt-4">
            <label className="text-xs text-purple-200/70 mb-1.5 block">Additional Notes</label>
            <textarea
              rows={3}
              placeholder="Any specific modules you are interested in?"
              className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2.5 text-sm placeholder:text-purple-200/40 focus:outline-none focus:ring-1 focus:ring-orange-400"
            />
          </div>
        </fieldset>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-6 py-3 rounded-lg w-full sm:w-auto"
        >
          Book Demo Now
        </button>
      </form>
    </div>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="text-xs text-purple-200/70 mb-1.5 block">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2.5 text-sm placeholder:text-purple-200/40 focus:outline-none focus:ring-1 focus:ring-orange-400"
      />
    </div>
  );
}

function SelectField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="text-xs text-purple-200/70 mb-1.5 block">{label}</label>
      <select className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-purple-200/40 focus:outline-none focus:ring-1 focus:ring-orange-400">
        <option>{placeholder}</option>
      </select>
    </div>
  );
}