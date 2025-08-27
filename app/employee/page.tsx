import MyDataTable from "@/components/DataTable";
import '@/components/styles/loader.css';

const getData = async () => {
  return [
    { id: 1, name: "John Doe", email: "john@example.com", salary:15000 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", salary:17000 },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", salary:25000 },
    { id: 4, name: "Bob Brown", email: "bob@example.com", salary:14000 },
    { id: 5, name: "Charlie White", email: "charlie@example.com", salary:35000 },
    { id: 6, name: "Eve Black", email: "eve@example.com", salary:45000 },
    { id: 7, name: "Frank Green", email: "frank@example.com", salary:42000 },
    { id: 8, name: "Grace Lee", email: "grace@example.com", salary:9000 },
    { id: 9, name: "Henry Young", email: "henry@example.com", salary:19000 },
    { id: 10, name: "Odie Smather", email: "odie@example.com", salary:23000 },
  ];
};

export default async function Page() {
  const users = await getData();

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Employee page</h1>
      <MyDataTable data={users} />
    </main>
  );
}
