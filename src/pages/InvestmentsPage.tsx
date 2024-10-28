import { Wallet } from "lucide-react";
import { InvestmentSection } from "@/components/dashboard/InvestmentSection";

export default function InvestmentsPage() {
  return (
    <div className="p-4 space-y-6">
      <header className="flex items-center gap-2 mb-6">
        <Wallet className="h-8 w-8 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900">Investments</h1>
      </header>

      <InvestmentSection />
    </div>
  );
}