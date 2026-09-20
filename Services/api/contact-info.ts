import api from "@/src/api/api";

export type ContactInfo = {
  id: number;
  email: string;
  phone: string;
  address: string;
};

type ContactInfoResponse = {
  status: string;
  data: {
    count: number;
    total_pages: number;
    current_page: number;
    next_page: number | null;
    previous_page: number | null;
    data: ContactInfo[];
  };
  message: string;
};

export const getContactInfo = () =>
  api.get<ContactInfoResponse>("api/v1/public/contact_info").then((res) => res.data.data.data);