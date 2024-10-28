import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, PieChart, ArrowUpRight, ArrowDownRight } from "lucide-react";

const portfolioData = [
  { name: "Jan", value: 24000 },
  { name: "Feb", value: 26500 },
  { name: "Mar", value: 25800 },
  { name: "Apr", value: 28900 },
  { name: "May", value: 27800 },
  { name: "Jun", value: 31200 },
];

const investments = [
  { name: "AAPL", price: "182.52", change: "+1.25%", value: "5,475.60", isPositive: true },
  { name: "GOOGL", price: "141.18", change: "-0.48%", value: "4,235.40", isPositive: false },
  { name: "MSFT", price: "417.88", change: "+2.15%", value: "8,357.60", isPositive: true },
];

export function InvestmentSection() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="h-6 w-6 text-blue-600" />
          <h3 className="text-lg font-semibold">Portfolio Performance</h3>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={portfolioData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#2563eb" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <PieChart className="h-6 w-6 text-blue-600" />
          <h3 className="text-lg font-semibold">Investment Holdings</h3>
        </div>
        <div className="space-y-4">
          {investments.map((investment) => (
            <div 
              key={investment.name}
              className="flex items-center justify-between p-4 rounded-lg bg-gray-50"
            >
              <div>
                <h4 className="font-semibold">{investment.name}</h4>
                <p className="text-sm text-gray-500">${investment.price}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">${investment.value}</p>
                <p className={`text-sm ${investment.isPositive ? 'text-green-600' : 'text-red-600'} flex items-center gap-1`}>
                  {investment.isPositive ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                  {investment.change}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}