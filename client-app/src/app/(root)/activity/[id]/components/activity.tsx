import { Activity } from "@/types";

interface Props {
  activity: Activity;
}

const ActivityPage = ({ activity }: Props) => {
  return <h1>{activity.title}</h1>;
};

export default ActivityPage;
