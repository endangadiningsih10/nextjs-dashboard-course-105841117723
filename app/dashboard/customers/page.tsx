"use client";

import { useState } from "react";

const customersData = [
  {
    name: "Amy Burns",
    email: "amy@burns.com",
    totalInvoices: 2,
    totalPending: 0.0,
    totalPaid: 42.9,
    avatar: "https://i.pravatar.cc/40?u=amy",
  },
  {
    name: "Balazs Orban",
    email: "balazs@orban.com",
    totalInvoices: 3,
    totalPending: 345.77,
    totalPaid: 174.91,
    avatar: "https://i.pravatar.cc/40?u=balazs",
  },
  {
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    totalInvoices: 2,
    totalPending: 203.48,
    totalPaid: 5.0,
    avatar: "https://i.pravatar.cc/40?u=delba",
  },
  {
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    totalInvoices: 2,
    totalPending: 164.61,
    totalPaid: 0.0,
    avatar: "https://i.pravatar.cc/40?u=evil",
  },
  {
    name: "Lee Robinson",
    email: "lee@robinson.com",
    totalInvoices: 2,
    totalPending: 542.46,
    totalPaid: 10.0,
    avatar: "https://i.pravatar.cc/40?u=lee",
  },
  {
    name: "Michael Novotny",
    email: "michael@novotny.com",
    totalInvoices: 2,
    totalPending: 0.0,
    totalPaid: 773.45,
    avatar: "https://i.pravatar.cc/40?u=michael",
  },
];

export default function CustomersPage() {
  const [search, setSearch] = useState("");

  const filteredCustomers = customersData.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Customers</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search customers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg"
      />

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Total Invoices</th>
              <th className="p-3 text-left">Total Pending</th>
              <th className="p-3 text-left">Total Paid</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={customer.avatar}
                    alt={customer.name}
                    className="w-8 h-8 rounded-full"
                  />
                  {customer.name}
                </td>
                <td className="p-3">{customer.email}</td>
                <td className="p-3">{customer.totalInvoices}</td>
                <td className="p-3">${customer.totalPending.toFixed(2)}</td>
                <td className="p-3">${customer.totalPaid.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}