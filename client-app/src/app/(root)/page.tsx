import { Activity } from "@/types";
import { DataTable } from "./components/data-table";
import { payments } from "./components/mock-data";
import { columns } from "./components/columns";

const Home = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/activities");

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const activities: Activity[] = await response.json();

    return (
      <div>
        <DataTable data={payments} columns={columns} />
      </div>
    );
  } catch (error) {
    console.error("Erro ao buscar atividades:", error);
    return <div>Erro ao carregar atividades. Verifique o console.</div>;
  }
};

export default Home;
