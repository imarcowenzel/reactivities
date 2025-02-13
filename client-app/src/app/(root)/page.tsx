import { Activity } from "@/types";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";

const Home = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/activities");

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const activities: Activity[] = await response.json();

    return <DataTable data={activities} columns={columns} />;
  } catch (error) {
    console.error("Erro ao buscar atividades:", error);
    return <div>Erro ao carregar atividades. Verifique o console.</div>;
  }
};

export default Home;
