import { useState } from "react";
import { Home, PieChart, LineChart, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import AccountsPage from "@/pages/AccountsPage";
import BudgetPage from "@/pages/BudgetPage";
import InvestmentsPage from "@/pages/InvestmentsPage";
import TransactionsPage from "@/pages/TransactionsPage";

const navigation = [
  { name: "Accounts", icon: Home, value: "accounts" },
  { name: "Budget", icon: PieChart, value: "budget" },
  { name: "Investments", icon: LineChart, value: "investments" },
  { name: "History", icon: Clock, value: "transactions" },
];

function App() {
  const [currentPage, setCurrentPage] = useState("accounts");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 overflow-y-auto pb-16">
        {currentPage === "accounts" && <AccountsPage />}
        {currentPage === "budget" && <BudgetPage />}
        {currentPage === "investments" && <InvestmentsPage />}
        {currentPage === "transactions" && <TransactionsPage />}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around">
          {navigation.map((item) => (
            <button
              key={item.value}
              onClick={() => setCurrentPage(item.value)}
              className={cn(
                "flex flex-col items-center px-4 py-2 min-w-[4rem]",
                currentPage === item.value
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              )}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.name}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default App;