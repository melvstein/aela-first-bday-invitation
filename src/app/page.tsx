import Rsvp from "@/pages/Rsvp";
import Events from "../pages/Events";
import Home from "./Home";

export default function Page() {
  return (
    <div className="font-[family-name:var(--font-fairy-text3)] flex flex-col items-center justify-center">
      <Home />
      <Events />
      <Rsvp />
    </div>
  );
}
