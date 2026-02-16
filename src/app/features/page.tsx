import FeaturesSection from "@/components/features/FeatureSection";
import React from "react";

import { createPageMetadata } from "@/lib/metaData";

export async function generateMetadata() {
  return createPageMetadata("/home");
}

const Page = () => {
  return (
    <div>
      <FeaturesSection />
    </div>
  );
};

export default Page;
