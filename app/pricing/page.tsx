import axios from "axios";
import { headers } from "next/headers";

import { title } from "@/components/primitives";
import PricingTable from "@/components/new_pricing";
// import PricingTable from "@/components/pricing-table";
// import PricingTableIndian from "@/components/pricing-table-indian";

export const dynamic = "force-dynamic";

const fetchUserLocation = async (ip: string): Promise<string | null> => {
  try {
    const response = await axios.get(`https://ipapi.co/${ip}/json/`);

    console.log("User IP data:", response.data);

    return response.data.country_code || "IN";
  } catch (error) {
    console.error("Error fetching location:", error);

    return null;
  }
};

export default async function PricingPage() {
  const headersList = headers();
  const ip = headersList.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";

  console.log("User IP:", ip);

  // const userLoc = await fetchUserLocation(ip);

  // console.log("User Location:", userLoc);

  return (
    <div>
      <h1 className={title()}>Pricing</h1>
      <div className="my-12" />
      {/* {userLoc === "IN" ? <PricingTableIndian /> : <PricingTable />} */}
      <PricingTable />
    </div>
  );
}
