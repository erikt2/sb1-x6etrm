import { Card } from "@/components/ui/card";
import { PieChart, ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";

export function OverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* First Row - Monthly Stats */}
      <Card className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Balance</p>
            <h2 className="text-3xl font-bold text-gray-900">$24,563.82</h2>
            <p className="text-sm text-gray-500 mt-1">As of today</p>
          </div>
          <PieChart className="h-6 w-6 text-blue-600" />
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">Monthly Net</p>
            <h2 className="text-3xl font-bold text-blue-600">$4,813.65</h2>
            <p className="text-sm text-blue-600 mt-1 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              +11.3% from last month
            </p>
          </div>
          <TrendingUp className="h-6 w-6 text-blue-600" />
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">Monthly Income</p>
            <h2 className="text-3xl font-bold text-green-600">$8,942.00</h2>
            <p className="text-sm text-green-600 mt-1 flex items-center">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              +8.2% from last month
            </p>
          </div>
          <ArrowUpRight className="h-6 w-6 text-green-600" />
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">Monthly Expenses</p>
            <h2 className="text-3xl font-bold text-red-600">$4,128.35</h2>
            <p className="text-sm text-red-600 mt-1 flex items-center">
              <ArrowDownRight className="h-4 w-4 mr-1" />
              +5.1% from last month
            </p>
          </div>
          <ArrowDownRight className="h-6 w-6 text-red-600" />
        </div>
      </Card>

      {/* Second Row - Yearly Stats */}
      <Card className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">Investment Returns</p>
            <h2 className="text-3xl font-bold text-purple-600">$12,847.32</h2>
            <p className="text-sm text-purple-600 mt-1 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              +9.8% ROI
            </p>
          </div>
          <TrendingUp className="h-6 w-6 text-purple-600" />
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">Yearly Net</p>
            <h2 className="text-3xl font-bold text-blue-600">$57,763.80</h2>
            <p className="text-sm text-blue-600 mt-1 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              +16.2% from last year
            </p>
          </div>
          <TrendingUp className="h-6 w-6 text-blue-600" />
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">Yearly Income</p>
            <h2 className="text-3xl font-bold text-green-600">$107,304.00</h2>
            <p className="text-sm text-green-600 mt-1 flex items-center">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              +12.5% from last year
            </p>
          </div>
          <ArrowUpRight className="h-6 w-6 text-green-600" />
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">Yearly Expenses</p>
            <h2 className="text-3xl font-bold text-red-600">$49,540.20</h2>
            <p className="text-sm text-red-600 mt-1 flex items-center">
              <ArrowDownRight className="h-4 w-4 mr-1" />
              +8.3% from last year
            </p>
          </div>
          <ArrowDownRight className="h-6 w-6 text-red-600" />
        </div>
      </Card>
    </div>
  );
}