import { SideTable } from "../components/SideTable";
import { Table } from "../components/Table";

export default function DashboardPage() {
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
  return (
    <div className="flex">
      <SideTable header="app.parties" list={list} />
      <Table />
    </div>
  );
}
