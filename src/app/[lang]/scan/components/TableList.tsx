"use client";
import { SideTable } from "./SideTable";
import { Table } from "./Table";

export const TableList = () => {
  const list = [
    {
      id: 1,
      name: "Anvil Co",
      invoices: 1,
    },
    {
      id: 2,
      name: "Vance Lda.",
      invoices: 1,
    },
    {
      id: 3,
      name: "Smith and Sons",
      invoices: 1,
    },
  ];

  const tableHeader = [
    {
      key: "empty",
      functionality: "checkbox",
      name: "",
      columns: 1,
    },
    {
      key: "invoiceDate",
      functionality: "sort",
      name: "app.invoiceDate",
      columns: 4,
    },
    {
      key: "invoiceNumber",
      name: "app.invoiceNumber",
      columns: 3, // 1
    },
    {
      key: "clientName",
      name: "app.clientName",
      columns: 5,
    },
    {
      key: "subtotal",
      name: "app.subtotal",
      columns: 3, // 1
    },
    {
      key: "vat",
      name: "app.vat",
      columns: 2, // 1
    },
    {
      key: "vatPercent",
      name: "app.vatPercent",
      columns: 2, // 1
    },
    {
      key: "total",
      name: "app.total",
      columns: 4,
    },
    {
      key: "dueDate",
      name: "app.dueDate",
      columns: 3,
    },
    {
      key: "orderNumber",
      name: "app.orderNumber",
      columns: 3,
    },
    {
      key: "allocation",
      name: "app.allocation",
      columns: 2,
    },
    {
      key: "vatDetails",
      name: "app.vatDetails",
      columns: 2,
    },
    {
      key: "file",
      name: "app.file",
      columns: 5,
    },
  ];

  const tableList = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    invoiceDate: `2023-01-${i + 1}`,
    invoiceNumber: `INV-${i + 1}`,
    clientName: `Client ${i + 1}`,
    subtotal: `${i + 1}.00`,
    vat: `${i + 1}.00`,
    vatPercent: `${i + 1}0%`,
    total: `${i + 2}.00`,
    dueDate: `2023-02-${i + 1}`,
    orderNumber: `ORD-${i + 1}`,
    allocation: `${i + 1}0%`,
    vatDetails: `${i + 1}0%`,
    file: `Invoice${i + 1}.pdf`,
  }));

  const fileSlot = (item: any) => (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-100 text-lg font-bold"
    >
      {item.file}
    </a>
  );
  const invoiceNumberSlot = (item: any) => (
    <span className="text-green-100 text-lg font-bold">
      {item.invoiceNumber}
    </span>
  );
  return (
    <div className="flex">
      <SideTable header="app.parties" list={list} />
      <Table
        headers={tableHeader}
        list={tableList}
        slots={{ file: fileSlot, invoiceNumber: invoiceNumberSlot }}
      />
    </div>
  );
};
