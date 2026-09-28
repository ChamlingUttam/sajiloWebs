import api from "@/src/api/api";

export type Feature = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon?: string;
};

type FeaturesResponse = {
  status: string;
  data: {
    count: number;
    total_pages: number;
    current_page: number;
    next_page: number | null;
    previous_page: number | null;
    data: Feature[];
  };
  message: string;
};

export const getFeatures = () =>
  api.get<FeaturesResponse>("api/v1/public/features").then((res) => res.data.data.data);

export const getFeatureById = (id: number) =>
  api.get<{ status: string; data: Feature; message: string }>(`api/v1/public/features/${id}`)
    .then((res) => res.data.data);