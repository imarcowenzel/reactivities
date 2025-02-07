import { Activity } from "@/types";

const Home = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/activities");

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const activities: Activity[] = await response.json();

    return (
      <div>
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>{activity.title}</li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Erro ao buscar atividades:", error);
    return <div>Erro ao carregar atividades. Verifique o console.</div>;
  }
};

export default Home;
