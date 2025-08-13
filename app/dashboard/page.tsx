"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type RevenueItem = {
  name: string;
  revenue: number;
};

const revenueData: RevenueItem[] = [
  { name: "Jan", revenue: 2000 },
  { name: "Feb", revenue: 3800 },
  { name: "Mar", revenue: 3500 },
  { name: "Apr", revenue: 5000 },
  { name: "May", revenue: 3100 },
  { name: "Jun", revenue: 1800 },
  { name: "Jul", revenue: 2500 },
  { name: "Aug", revenue: 2700 },
  { name: "Sep", revenue: 2200 },
  { name: "Oct", revenue: 3000 },
  { name: "Nov", revenue: 2600 },
  { name: "Dec", revenue: 3400 },
];

const latestInvoices = [
  { name: "Michael Novotny", email: "michael@novotny.com", amount: 448.0 },
  { name: "Delba de Oliveira", email: "delba@oliveira.com", amount: 5.0 },
  { name: "Balazs Orban", email: "balazs@orban.com", amount: 345.77 },
  { name: "Lee Robinson", email: "lee@robinson.com", amount: 542.46 },
];

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-8">
      {/* Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Collected" value="$1,006.26" />
        <StatCard label="Pending" value="$1,256.32" />
        <StatCard label="Total Invoices" value="13" />
        <StatCard label="Total Customers" value="6" />
      </div>

      {/* Grafik & Invoice */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Revenue */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Revenue</h2>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#8884d8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Latest Invoices */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Latest Invoices</h2>
          <ul className="divide-y divide-gray-200">
            {latestInvoices.map((inv, idx) => (
              <li key={idx} className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium">{inv.name}</p>
                  <p className="text-sm text-gray-500">{inv.email}</p>
                </div>
                <span className="font-semibold">${inv.amount.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow text-center">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}