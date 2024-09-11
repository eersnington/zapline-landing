import axios from "axios";

import { title } from "@/components/primitives";
import PricingTable from "@/components/pricing-table";
import PricingTableIndian from "@/components/pricing-table-indian";

export const dynamic = "force-dynamic";

const fetchUserLocation = async (): Promise<string | null> => {
  try {
    const response = await axios.get("https://ipapi.co/json/");

    console.log("User IP data:", response.data);

    return response.data.country_code;
  } catch (error) {
    console.error("Error fetching location:", error);

    return null;
  }
};

export default async function PricingPage() {
  const userLoc = await fetchUserLocation();

  console.log("User Location:", userLoc);

  return (
    <div>
      <h1 className={title()}>Pricing</h1>
      <div className="my-12" />
      {userLoc === "IN" || userLoc === "AE" ? (
        <PricingTableIndian />
      ) : (
        <PricingTable />
      )}
    </div>
  );
}
