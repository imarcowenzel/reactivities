"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Activity } from "@/types";

const ActivityPage = () => {
  const [activity, setActivity] = useState<Activity | null>(null);
  const params = useParams();

  useEffect(() => {
    const fetchActivity = async () => {
      const url = `http://localhost:5000/api/activities/${params.id}`;
      console.log(url);
      const res = await fetch(url);
      const data = await res.json();
      setActivity(data);
    };
    fetchActivity();
  }, []);

  console.log(activity);

  return <div>{activity?.title}</div>;
};

export default ActivityPage;
