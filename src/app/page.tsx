import FairyLand from "@/pages/FairyLand";
import Christening from "../pages/Events";
import Home from "./Home";

export default function Page() {
  return (
    <div className="font-[family-name:var(--font-fairy-text2)] flex flex-col items-center justify-center">
      <Home />
      {/* <Christening />
      <FairyLand /> */}
    </div>
  );
}
