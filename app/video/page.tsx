import Briefer from "@/components/landing/briefer";
import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Demo Video</h1>
      <Briefer />
    </div>
  );
}
