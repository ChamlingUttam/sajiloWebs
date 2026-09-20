import api from "@/src/api/api";

export type ScheduleDemoPayload = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  organization_name: string;
  institution_type: string;
  capacity: number;
  country: string;
  address: string;
  preferred_date: string;
  preferred_time: string;
  additional_note: string;
};

export const scheduleDemo = (data: ScheduleDemoPayload) =>
  api.post("api/v1/public/schedule_demo", data);