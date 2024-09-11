import axios from "axios";

import { title } from "@/components/primitives";
import PricingTable from "@/components/pricing-table";
import PricingTableIndian from "@/components/pricing-table-indian";

interface LocationData {
  country_code: string;
}

const fetchUserLocation = async (): Promise<string | null> => {
  try {
    const response = await axios.get<LocationData>("https://ipapi.co/json/");

    console.log("User IP data:", response.data);

    return response.data.country_code;
  } catch (error) {
    console.error("Error fetching location:", error);

    return null;
  }
};

export default async function PricingPage() {
  const userLoc = await fetchUserLocation();

  console.log(userLoc);

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
