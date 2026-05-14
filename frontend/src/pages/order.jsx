// src/pages/OrdersPage.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

/**
 * ✅ PRODUCTION-LOOK Orders UI (Frontend Only)
 * - Desktop: table view + filters + status chips
 * - Mobile: clean card list
 * - Order Details: modal (opens on "View")
 * - Dummy data now, backend later (same UI will work)
 */

const DUMMY_ORDERS = [
  {
    id: "ORD-2026-00021",
    placedAt: "2026-05-07T10:20:00Z",
    status: "Delivered", // Processing | Shipped | Delivered | Cancelled
    payment: "UPI",
    total: 998,
    items: [
      {
        sku: "BK-ATOMIC-01",
        title: "Atomic Habits",
        author: "James Clear",
        qty: 1,
        price: 499,
        cover:
          "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=60",
      },
      {
        sku: "BK-DEEPWORK-02",
        title: "Deep Work",
        author: "Cal Newport",
        qty: 1,
        price: 499,
        cover:
          "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=60",
      },
    ],
    shipping: {
      name: "Daksh Prajapat",
      city: "Jaipur",
      address: "Poornima University, Jaipur, Rajasthan",
    },
    timeline: [
      { label: "Order placed", at: "2026-05-07T10:20:00Z" },
      { label: "Packed", at: "2026-05-07T12:10:00Z" },
      { label: "Out for delivery", at: "2026-05-08T06:10:00Z" },
      { label: "Delivered", at: "2026-05-08T14:05:00Z" },
    ],
  },
  {
    id: "ORD-2026-00022",
    placedAt: "2026-05-06T15:05:00Z",
    status: "Shipped",
    payment: "Card",
    total: 699,
    items: [
      {
        sku: "BK-SAPIENS-03",
        title: "Sapiens",
        author: "Yuval Noah Harari",
        qty: 1,
        price: 699,
        cover:
          "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=60",
      },
    ],
    shipping: {
      name: "Daksh Prajapat",
      city: "Jaipur",
      address: "Poornima University, Jaipur, Rajasthan",
    },
    timeline: [
      { label: "Order placed", at: "2026-05-06T15:05:00Z" },
      { label: "Packed", at: "2026-05-06T18:40:00Z" },
      { label: "Shipped", at: "2026-05-07T08:10:00Z" },
    ],
  },
  {
    id: "ORD-2026-00023",
    placedAt: "2026-05-05T09:40:00Z",
    status: "Processing",
    payment: "COD",
    total: 399,
    items: [
      {
        sku: "BK-ALCHEMIST-04",
        title: "The Alchemist",
        author: "Paulo Coelho",
        qty: 1,
        price: 399,
        cover:
          "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=60",
      },
    ],
    shipping: {
      name: "Daksh Prajapat",
      city: "Jaipur",
      address: "Poornima University, Jaipur, Rajasthan",
    },
    timeline: [{ label: "Order placed", at: "2026-05-05T09:40:00Z" }],
  },
];

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

function formatMoneyINR(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function statusBadge(status) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border";
  if (status === "Delivered")
    return `${base} bg-emerald-50 text-emerald-700 border-emerald-200`;
  if (status === "Shipped")
    return `${base} bg-sky-50 text-sky-700 border-sky-200`;
  if (status === "Processing")
    return `${base} bg-amber-50 text-amber-700 border-amber-200`;
  return `${base} bg-rose-50 text-rose-700 border-rose-200`;
}

const OrdersPage = () => {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("All"); // All | Processing | Shipped | Delivered | Cancelled
  const [selected, setSelected] = useState(null);

  const orders = useMemo(() => {
    return DUMMY_ORDERS.filter((o) => {
      const matchesTab = tab === "All" ? true : o.status === tab;
      const text = `${o.id} ${o.items.map((i) => i.title).join(" ")} ${o.items
        .map((i) => i.author)
        .join(" ")} ${o.payment}`.toLowerCase();
      const matchesQuery = text.includes(query.toLowerCase().trim());
      return matchesTab && matchesQuery;
    });
  }, [query, tab]);

  const totalOrders = DUMMY_ORDERS.length;
  const inProgress = DUMMY_ORDERS.filter((o) =>
    ["Processing", "Shipped"].includes(o.status)
  ).length;

  return (
    <div className="min-h-screen bg-[#f4f9f8]">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-24 pb-28 bg-gradient-to-br from-[#0f172a] via-[#0b3b52] to-[#14b8a6]">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -top-16 -right-16 h-96 w-96 rounded-full bg-lime-300/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-cyan-100 backdrop-blur-md">
                ✦ ORDER DASHBOARD
              </div>

              <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
                My Orders
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-cyan-100/80">
                Track deliveries, invoices, and everything you’ve purchased —
                clean & professional UI now, backend later.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/books"
                  className="rounded-full bg-white px-6 py-3 font-semibold text-[#0f172a] shadow-lg hover:opacity-95"
                >
                  Explore Books →
                </Link>

                <button
                  className="rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md hover:bg-white/15"
                  onClick={() => setTab("All")}
                >
                  View All
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="w-44 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                <div className="text-4xl font-black text-white">{totalOrders}</div>
                <div className="mt-2 text-cyan-100">Total Orders</div>
              </div>

              <div className="w-44 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                <div className="text-4xl font-black text-white">{inProgress}</div>
                <div className="mt-2 text-cyan-100">In Progress</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="relative z-20 -mt-16 px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          {/* FILTER BAR */}
          <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-2xl">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              {/* Search */}
              <div className="flex flex-1 items-center rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4">
                <span className="text-xl text-gray-400">🔍</span>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by order id / book / author / payment..."
                  className="ml-4 w-full bg-transparent outline-none"
                />
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-3">
                {["All", "Processing", "Shipped", "Delivered", "Cancelled"].map(
                  (t) => (
                    <button
                      key={t}
                      onClick={() => setTab(t)}
                      className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                        tab === t
                          ? "bg-[#0f172a] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {t}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
              <p>
                Showing <span className="font-semibold">{orders.length}</span>{" "}
                result(s)
              </p>
              <p className="hidden sm:block">
                Tip: click any row/card to open details
              </p>
            </div>
          </div>

          {/* DESKTOP TABLE */}
          <div className="mt-10 hidden lg:block">
            <div className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-xl">
              <div className="grid grid-cols-12 gap-4 border-b bg-gray-50 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                <div className="col-span-3">Order</div>
                <div className="col-span-3">Items</div>
                <div className="col-span-2">Date</div>
                <div className="col-span-2">Payment</div>
                <div className="col-span-2 text-right">Total / Status</div>
              </div>

              {orders.length === 0 ? (
                <EmptyState />
              ) : (
                <div className="divide-y">
                  {orders.map((o) => (
                    <button
                      key={o.id}
                      onClick={() => setSelected(o)}
                      className="grid w-full grid-cols-12 gap-4 px-6 py-5 text-left hover:bg-gray-50"
                    >
                      <div className="col-span-3">
                        <div className="text-sm font-extrabold text-[#0f172a]">
                          {o.id}
                        </div>
                        <div className="mt-1 text-xs text-gray-500">
                          Ship to {o.shipping.city}
                        </div>
                      </div>

                      <div className="col-span-3 flex items-center gap-3">
                        <div className="flex -space-x-3">
                          {o.items.slice(0, 3).map((it) => (
                            <img
                              key={it.sku}
                              src={it.cover}
                              alt=""
                              className="h-10 w-10 rounded-xl border-2 border-white object-cover shadow-sm"
                            />
                          ))}
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-semibold text-[#0f172a]">
                            {o.items[0]?.title}
                          </span>
                          {o.items.length > 1 ? ` +${o.items.length - 1} more` : ""}
                        </div>
                      </div>

                      <div className="col-span-2 text-sm text-gray-600">
                        {formatDate(o.placedAt)}
                      </div>

                      <div className="col-span-2 text-sm text-gray-600">
                        {o.payment}
                      </div>

                      <div className="col-span-2 text-right">
                        <div className="text-sm font-extrabold text-[#0f172a]">
                          {formatMoneyINR(o.total)}
                        </div>
                        <div className="mt-2 inline-flex justify-end">
                          <span className={statusBadge(o.status)}>
                            <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                            {o.status}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* MOBILE / TABLET CARDS */}
          <div className="mt-10 grid gap-6 lg:hidden">
            {orders.length === 0 ? (
              <div className="rounded-[28px] border border-dashed border-gray-200 bg-white p-10 text-center shadow-xl">
                <EmptyState />
              </div>
            ) : (
              orders.map((o) => (
                <button
                  key={o.id}
                  onClick={() => setSelected(o)}
                  className="rounded-[28px] border border-gray-100 bg-white p-6 text-left shadow-xl hover:-translate-y-1 hover:shadow-2xl transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-extrabold text-[#0f172a]">
                        {o.id}
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        {formatDate(o.placedAt)} • {o.payment}
                      </div>
                    </div>
                    <span className={statusBadge(o.status)}>{o.status}</span>
                  </div>

                  <div className="mt-5 flex items-center gap-4">
                    <img
                      src={o.items[0]?.cover}
                      alt=""
                      className="h-20 w-16 rounded-2xl object-cover shadow"
                    />
                    <div className="flex-1">
                      <div className="font-bold text-[#0f172a]">
                        {o.items[0]?.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {o.items[0]?.author}
                      </div>
                      <div className="mt-2 text-sm text-gray-600">
                        Items: <span className="font-semibold">{o.items.length}</span>
                      </div>
                    </div>
                    <div className="text-right font-extrabold text-[#0f172a]">
                      {formatMoneyINR(o.total)}
                    </div>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                      View
                    </span>
                    <span className="rounded-full bg-gradient-to-r from-teal-500 to-lime-400 px-4 py-2 text-sm font-semibold text-white">
                      Track
                    </span>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      </section>

      {/* DETAILS MODAL */}
      {selected && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* overlay */}
          <button
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            aria-label="Close"
          />

          <div className="relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between gap-6 border-b bg-gray-50 px-6 py-5">
              <div>
                <div className="text-sm font-semibold text-gray-500">Order</div>
                <div className="text-2xl font-black text-[#0f172a]">
                  {selected.id}
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  Placed on {formatDate(selected.placedAt)} • {selected.payment}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className={statusBadge(selected.status)}>{selected.status}</span>
                <button
                  onClick={() => setSelected(null)}
                  className="rounded-xl bg-white px-4 py-2 font-semibold text-gray-700 shadow hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="grid gap-8 p-6 lg:grid-cols-12">
              {/* Items */}
              <div className="lg:col-span-7">
                <div className="text-sm font-bold text-gray-700">Items</div>
                <div className="mt-4 space-y-4">
                  {selected.items.map((it) => (
                    <div
                      key={it.sku}
                      className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
                    >
                      <img
                        src={it.cover}
                        alt=""
                        className="h-20 w-16 rounded-2xl object-cover shadow"
                      />
                      <div className="flex-1">
                        <div className="font-extrabold text-[#0f172a]">
                          {it.title}
                        </div>
                        <div className="text-sm text-gray-500">{it.author}</div>
                        <div className="mt-2 text-sm text-gray-600">
                          Qty: <span className="font-semibold">{it.qty}</span>
                        </div>
                      </div>
                      <div className="font-extrabold text-[#0f172a]">
                        {formatMoneyINR(it.price * it.qty)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="lg:col-span-5">
                <div className="rounded-[24px] border border-gray-100 bg-gradient-to-br from-teal-50 via-white to-lime-50 p-6">
                  <div className="text-sm font-bold text-gray-700">
                    Summary
                  </div>

                  <div className="mt-5 space-y-3 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>Items</span>
                      <span className="font-semibold">{selected.items.length}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold">
                        {formatMoneyINR(selected.total)}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Delivery</span>
                      <span className="font-semibold text-emerald-700">FREE</span>
                    </div>

                    <div className="h-px bg-gray-200 my-3" />

                    <div className="flex justify-between text-base">
                      <span className="font-extrabold text-[#0f172a]">Total</span>
                      <span className="font-extrabold text-[#0f172a]">
                        {formatMoneyINR(selected.total)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-sm font-bold text-gray-700">
                      Shipping
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <div className="font-semibold text-[#0f172a]">
                        {selected.shipping.name}
                      </div>
                      <div>{selected.shipping.address}</div>
                      <div className="mt-1">{selected.shipping.city}</div>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button className="flex-1 rounded-2xl bg-gray-100 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-200">
                      Invoice
                    </button>
                    <button className="flex-1 rounded-2xl bg-gradient-to-r from-teal-500 to-lime-400 px-5 py-3 font-semibold text-white hover:opacity-95">
                      Track
                    </button>
                  </div>
                </div>

                {/* Timeline */}
                <div className="mt-6 rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="text-sm font-bold text-gray-700">
                    Timeline
                  </div>
                  <div className="mt-4 space-y-4">
                    {selected.timeline.map((t, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="mt-1 h-3 w-3 rounded-full bg-teal-500" />
                        <div>
                          <div className="font-semibold text-[#0f172a]">
                            {t.label}
                          </div>
                          <div className="text-sm text-gray-500">
                            {formatDate(t.at)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t bg-gray-50 px-6 py-4">
              <div className="text-sm text-gray-500">
                Backend aayega tab real orders yahi UI me show honge.
              </div>
              <button
                onClick={() => setSelected(null)}
                className="rounded-xl bg-[#0f172a] px-6 py-3 font-semibold text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function EmptyState() {
  return (
    <div className="p-12 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-teal-500 to-lime-400 text-3xl shadow-lg">
        📦
      </div>
      <h3 className="mt-6 text-2xl font-black text-[#0f172a]">
        No orders yet
      </h3>
      <p className="mt-3 text-gray-500">
        Once you place an order, it will appear here automatically.
      </p>
      <Link
        to="/books"
        className="mt-6 inline-flex rounded-full bg-[#0f172a] px-7 py-3 font-semibold text-white"
      >
        Browse Books →
      </Link>
    </div>
  );
}

export default OrdersPage;