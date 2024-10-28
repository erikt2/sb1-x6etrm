import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Banknote, ShoppingCart, Home, Car, Utensils, Heart } from "lucide-react";

const budgetCategories = [
  { name: "Shopping", icon: ShoppingCart, spent: 450, budget: 600, color: "bg-purple-600" },
  { name: "Housing", icon: Home, spent: 1200, budget: 1500, color: "bg-blue-600" },
  { name: "Transportation", icon: Car, spent: 280, budget: 400, color: "bg-green-600" },
  { name: "Food", icon: Utensils, spent: 380, budget: 500, color: "bg-yellow-600" },
  { name: "Healthcare", icon: Heart, spent: 150, budget: 300, color: "bg-red-600" },
];

export function BudgetSection() {
  return (
    <div className="space-y-4">
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Banknote className="h-6 w-6 text-blue-600" />
          <h3 className="text-lg font-semibold">Monthly Budget Overview</h3>
        </div>
        <div className="space-y-6">
          {budgetCategories.map((category) => (
            <div key={category.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <category.icon className="h-5 w-5 text-gray-600" />
                  <span className="font-medium">{category.name}</span>
                </div>
                <span className="text-sm text-gray-600">
                  ${category.spent} / ${category.budget}
                </span>
              </div>
              <div className="space-y-1">
                <Progress 
                  value={(category.spent / category.budget) * 100} 
                  className={category.color}
                />
                <p className="text-sm text-gray-500">
                  ${category.budget - category.spent} remaining
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}