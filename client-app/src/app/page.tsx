import NavBar from "./layout/NavBar";
import { Activity } from "./models/activity";

async function Home() {

  const data = await fetch("http://localhost:5000/api/activities");
  const activities: Activity[] = await data.json();

  return (
    <div>
      <NavBar />
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
