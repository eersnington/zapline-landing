import axios from "axios";

import PricingTable from "@/components/pricing-table";
import { title } from "@/components/primitives";

const fetchUserLocation = async () => {
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

  console.log(userLoc);

  return (
    <div>
      <h1 className={title()}>Pricing</h1>
      <div className="my-12" />
      <PricingTable />
    </div>
  );
}
