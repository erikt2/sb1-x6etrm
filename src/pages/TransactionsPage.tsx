import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowUpDown, Wallet } from "lucide-react";

export default function TransactionsPage() {
  return (
    <div className="p-4 space-y-6">
      <header className="flex items-center gap-2 mb-6">
        <Wallet className="h-8 w-8 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
      </header>

      <Card>
        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="p-4 space-y-4">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 border-b last:border-0"
              >
                <div className="flex items-center gap-4">
                  <ArrowUpDown
                    className={`h-8 w-8 ${
                      i % 2 === 0 ? "text-green-600" : "text-red-600"
                    }`}
                  />
                  <div>
                    <p className="font-medium">Transaction Name {i + 1}</p>
                    <p className="text-sm text-gray-500">Mar {i + 1}, 2024</p>
                  </div>
                </div>
                <p
                  className={`font-semibold ${
                    i % 2 === 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {i % 2 === 0 ? "+" : "-"}${(Math.random() * 1000).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
}