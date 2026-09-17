"use client";

import { useState, FormEvent } from "react";
import { isAxiosError } from "axios";
import { User, Building2, Calendar } from "lucide-react";
import { scheduleDemo } from "@/Services/api/schedule-demo";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  orgName: string;
  businessType: string;
  roomCapacity: string;
  country: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  orgName: "",
  businessType: "",
  roomCapacity: "",
  country: "",
  address: "",
  preferredDate: "",
  preferredTime: "",
  notes: "",
};

export default function DemoForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function update(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value ?? "" }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function validate(): FormErrors {
    const next: FormErrors = {};
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.firstName?.trim()) next.firstName = "First name is required";
    if (!data.lastName?.trim()) next.lastName = "Last name is required";

    if (!data.phone?.trim()) next.phone = "Phone number is required";
    else if (!phoneRegex.test(data.phone.trim()))
      next.phone = "Enter valid 10-digit phone number";

    if (!data.email?.trim()) next.email = "Email is required";
    else if (!emailRegex.test(data.email.trim()))
      next.email = "Enter a valid email address";

    if (!data.orgName?.trim())
      next.orgName = "Hotel/Organization name is required";
    if (!data.businessType) next.businessType = "Select a business type";
    if (!data.roomCapacity) next.roomCapacity = "Select room capacity";

    if (!data.preferredDate) next.preferredDate = "Preferred date is required";
    if (!data.preferredTime) next.preferredTime = "Preferred time is required";
    if (!data.country?.trim()) next.country = "Country is required";
    if (!data.address?.trim()) next.address = "Address is required";

    return next;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    setSubmitted(false);
    setSubmitError(null);

    if (Object.keys(next).length === 0) {
      setLoading(true);
      try {
        await scheduleDemo({
          first_name: data.firstName,
          last_name: data.lastName,
          phone: data.phone,
          email: data.email,
          organization_name: data.orgName,
          institution_type: data.businessType,
          capacity: parseInt(data.roomCapacity, 10),
          country: data.country,
          address: data.address,
          preferred_date: data.preferredDate,
          preferred_time: data.preferredTime,
          additional_note: data.notes,
        });
        setSubmitted(true);
        setData(initialData);
      } catch (err: unknown) {
        const message = isAxiosError<{ message?: string }>(err)
          ? err.response?.data?.message
          : undefined;
        setSubmitError(message || "Something went wrong. Try again.");
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <div className="bg-[#4A1D57] rounded-2xl p-5 sm:p-7 text-white">
      <h3 className="font-semibold text-lg sm:text-xl mb-1">
        Tell us about your organization
      </h3>
      <p className="text-purple-200/60 text-xs sm:text-sm mb-6">
        Fill in the details below and our experts will prepare a custom demo for
        you.
      </p>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend className="flex items-center gap-2 text-sm font-medium mb-4">
            <User size={14} /> Personal Information
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field
              label="First Name"
              placeholder="John"
              value={data.firstName}
              onChange={(v) => update("firstName", v)}
              error={errors.firstName}
            />
            <Field
              label="Last Name"
              placeholder="Doe"
              value={data.lastName}
              onChange={(v) => update("lastName", v)}
              error={errors.lastName}
            />
            <Field
              label="Phone Number"
              placeholder="98XXXXXXXX"
              value={data.phone}
              onChange={(v) => update("phone", v)}
              error={errors.phone}
            />
            <Field
              label="Email Address"
              placeholder="john@example.com"
              type="email"
              value={data.email}
              onChange={(v) => update("email", v)}
              error={errors.email}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend className="flex items-center gap-2 text-sm font-medium mb-4">
            <Building2 size={14} /> Organization Details
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field
              label="Hotel/Organization Name"
              placeholder="Grand Plaza Hotel"
              value={data.orgName}
              onChange={(v) => update("orgName", v)}
              error={errors.orgName}
            />
            <SelectField
              label="Business Type"
              placeholder="Select Type"
              value={data.businessType}
              onChange={(v) => update("businessType", v)}
              error={errors.businessType}
              options={[
                { label: "Hotel", value: "Hotel" },
                { label: "Resort", value: "Resort" },
                { label: "Boutique Stay", value: "Boutique Stay" },
                { label: "Homestay", value: "Homestay" },
                { label: "Other", value: "Other" },
              ]}
            />
            <SelectField
              label="Room Capacity"
              placeholder="Select Range"
              value={data.roomCapacity}
              onChange={(v) => update("roomCapacity", v)}
              error={errors.roomCapacity}
              options={[
                { label: "1-10", value: "10" },
                { label: "11-25", value: "25" },
                { label: "26-50", value: "50" },
                { label: "51-100", value: "100" },
                { label: "100+", value: "101" },
              ]}
            />
          </div>
          <Field
            label="Country"
            placeholder="Nepal"
            value={data.country}
            onChange={(v) => update("country", v)}
            error={errors.country}
          />
          <Field
            label="Address"
            placeholder="Itahari, Nepal"
            value={data.address}
            onChange={(v) => update("address", v)}
            error={errors.address}
          />
        </fieldset>

        <fieldset>
          <legend className="flex items-center gap-2 text-sm font-medium mb-4">
            <Calendar size={14} /> Schedule Details
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field
              label="Preferred Date"
              type="date"
              value={data.preferredDate}
              onChange={(v) => update("preferredDate", v)}
              error={errors.preferredDate}
            />
            <Field
              label="Preferred Time"
              type="time"
              value={data.preferredTime}
              onChange={(v) => update("preferredTime", v)}
              error={errors.preferredTime}
            />
          </div>
          <div className="mt-4">
            <label className="text-xs text-purple-200/70 mb-1.5 block">
              Additional Notes
            </label>
            <textarea
              rows={3}
              placeholder="Any specific modules you are interested in?"
              value={data.notes}
              onChange={(e) =>
                update(
                  "notes",
                  (e.target as unknown as { value?: string }).value ?? "",
                )
              }
              className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2.5 text-sm placeholder:text-purple-200/40 focus:outline-none focus:ring-1 focus:ring-orange-400"
            />
          </div>
        </fieldset>

        {submitted && (
          <p className="text-sm text-green-400 bg-green-400/10 border border-green-400/30 rounded-lg px-3 py-2">
            Thank you! Your demo request has been submitted — our team will
            reach out shortly.
          </p>
        )}

        {submitError && (
          <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/30 rounded-lg px-3 py-2">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-[#FF751F] hover:bg-orange-600 disabled:opacity-60 text-white text-sm font-medium px-6 py-3 rounded-lg w-full sm:w-auto border border-[#CC5E19]"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="text-xs text-purple-200/70 mb-1.5 block">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value ?? ""}
        onChange={(e) =>
          onChange((e.target as unknown as { value?: string }).value ?? "")
        }
        className={`w-full bg-white/10 border rounded-lg px-3 py-2.5 text-sm placeholder:text-purple-200/40 focus:outline-none focus:ring-1 ${
          error
            ? "border-red-400 focus:ring-red-400"
            : "border-white/10 focus:ring-orange-400"
        }`}
      />
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  placeholder,
  value,
  onChange,
  error,
  options,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  options: { label: string; value: string }[];
}) {
  return (
    <div>
      <label className="text-xs text-purple-200/70 mb-1.5 block">{label}</label>
      <select
        value={value ?? ""}
        onChange={(e) =>
          onChange((e.target as unknown as { value?: string }).value ?? "")
        }
        className={`w-full bg-white/10 border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 ${
          value ? "text-white" : "text-purple-200/40"
        } ${error ? "border-red-400 focus:ring-red-400" : "border-white/10 focus:ring-orange-400"}`}
      >
        <option value="" className="text-gray-500">
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="text-black">
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
