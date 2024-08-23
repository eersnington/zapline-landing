import PricingTable from "@/components/pricing-table";
import { title } from "@/components/primitives";

export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}>Pricing</h1>
      <PricingTable />
    </div>
  );
}
