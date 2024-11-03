import Birthday from "./events/Birthday";
import Christening from "./events/Christening";
import Home from "./Home";

export default function Page() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] pt-8">
      <Home />
      <Christening />
      <Birthday />
    </div>
  );
}
