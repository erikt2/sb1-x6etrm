import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, CreditCard, Plus, Radar } from "lucide-react";
import { OverviewCards } from "@/components/dashboard/OverviewCards";

export default function AccountsPage() {
  return (
    <div className="p-4 space-y-6">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Radar className="h-8 w-8 text-orange-600" />
          <h1 className="text-2xl font-bold text-gray-900">S.M.A.R.T Budget</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Account
          </Button>
          <Button variant="default">Connect Bank</Button>
        </div>
      </header>

      <OverviewCards />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Building2 className="h-8 w-8 text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">Main Checking</h3>
              <p className="text-sm text-gray-500">**** 4832</p>
            </div>
            <div className="ml-auto">
              <p className="font-semibold">$12,458.32</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <CreditCard className="h-8 w-8 text-purple-600" />
            <div>
              <h3 className="font-semibold text-lg">Savings Account</h3>
              <p className="text-sm text-gray-500">**** 7645</p>
            </div>
            <div className="ml-auto">
              <p className="font-semibold">$12,105.50</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}