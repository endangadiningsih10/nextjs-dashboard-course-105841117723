"use client";

import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const invoicesData = [
  {
    name: "Michael Novotny",
    email: "michael@novotny.com",
    amount: 448.0,
    date: "Sep 10, 2023",
    status: "Paid",
    avatar: "https://i.pravatar.cc/40?u=michael",
  },
  {
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    amount: 5.0,
    date: "Aug 19, 2023",
    status: "Paid",
    avatar: "https://i.pravatar.cc/40?u=delba",
  },
  {
    name: "Balazs Orban",
    email: "balazs@orban.com",
    amount: 345.77,
    date: "Aug 5, 2023",
    status: "Pending",
    avatar: "https://i.pravatar.cc/40?u=balazs",
  },
  {
    name: "Lee Robinson",
    email: "lee@robinson.com",
    amount: 542.46,
    date: "Jul 16, 2023",
    status: "Pending",
    avatar: "https://i.pravatar.cc/40?u=lee",
  },
  {
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    amount: 6.66,
    date: "Jun 27, 2023",
    status: "Pending",
    avatar: "https://i.pravatar.cc/40?u=evil",
  },
  {
    name: "Amy Burns",
    email: "amy@burns.com",
    amount: 12.5,
    date: "Jun 17, 2023",
    status: "Paid",
    avatar: "https://i.pravatar.cc/40?u=amy",
  },
];

export default function InvoicesPage() {
  const [search, setSearch] = useState("");

  const filteredInvoices = invoicesData.filter(
    (invoice) =>
      invoice.name.toLowerCase().includes(search.toLowerCase()) ||
      invoice.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Invoices</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search invoices..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg"
      />

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.map((invoice, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={invoice.avatar}
                    alt={invoice.name}
                    className="w-8 h-8 rounded-full"
                  />
                  {invoice.name}
                </td>
                <td className="p-3">{invoice.email}</td>
                <td className="p-3">${invoice.amount.toFixed(2)}</td>
                <td className="p-3">{invoice.date}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      invoice.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>
                <td className="p-3 flex gap-2">
                  <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-gray-100 rounded hover:bg-red-100">
                    <TrashIcon className="h-4 w-4 text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <button className="px-3 py-1 border rounded">&lt;</button>
        <button className="px-3 py-1 border rounded bg-blue-500 text-white">
          1
        </button>
        <button className="px-3 py-1 border rounded">2</button>
        <button className="px-3 py-1 border rounded">3</button>
        <button className="px-3 py-1 border rounded">&gt;</button>
      </div>
    </div>
  );
}