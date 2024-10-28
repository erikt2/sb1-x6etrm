import { Wallet } from "lucide-react";
import { BudgetSection } from "@/components/dashboard/BudgetSection";

export default function BudgetPage() {
  return (
    <div className="p-4 space-y-6">
      <header className="flex items-center gap-2 mb-6">
        <Wallet className="h-8 w-8 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900">Budget</h1>
      </header>

      <BudgetSection />
    </div>
  );
}