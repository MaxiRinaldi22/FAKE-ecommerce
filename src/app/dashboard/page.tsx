
import DashbardInfo from "@/app/dashboard/components/DashboardInfo";
import { DashboardClient } from "./components/DashboardClient";

export default function DashboardPage() {

  return (
    <div className="py-8">
      <DashboardClient />
      <DashbardInfo />
    </div>
  );
}
