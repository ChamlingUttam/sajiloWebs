"use client";

import React, { useEffect, useState } from "react";
import { FeatureCard } from "./FeatureCard";
import { Button } from "../ui/button";
import { RoomCard } from "../room/RoomCard";
import { getFeatures, Feature as FeatureType } from "@/Services/api/features";

const Feature = () => {
  const [features, setFeatures] = useState<FeatureType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getFeatures()
      .then((data) => setFeatures(data))
      .catch(() => setError("Failed to load features"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div id="features" className="w-full bg-white">
      <div className="mx-auto max-w-7xl">

        <header className="flex w-full flex-col gap-8 px-4 py-10 sm:px-6 md:px-10 lg:flex-row lg:items-end lg:justify-between lg:py-16">
          <div className="flex flex-col gap-4">
            <Button className="w-fit bg-[#491A53] text-white">
              Our Features
            </Button>
            <h1 className="text-3xl text-[#491A53] font-semibold leading-tight tracking-tight lg:text-5xl">
              Powerful Features <br />
              Built for Hospitality Business
            </h1>
          </div>
          <p className="max-w-md text-[#491A53] leading-7 sm:text-lg">
            Everything you need to create, manage, and grow your hotel&apos;s online
            presence — all in one platform.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 px-4 pb-10 sm:px-6 md:px-10 lg:grid-cols-2">
          {loading && <p className="text-[#491A53]">Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading &&
            !error &&
            features.map((f) => (
              <FeatureCard
                key={f.id}
                title={f.title}
                description={f.description}
                image={f.image}
              />
            ))}
        </div>

        <RoomCard />
      </div>
    </div>
  );
};

export default Feature;