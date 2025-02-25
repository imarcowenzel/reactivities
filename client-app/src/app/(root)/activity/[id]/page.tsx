"use client";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Activity } from "@/types";
import BackButton from "./components/back-button";
import EditButton from "./components/edit-button";

const ActivityPage = () => {
  const [activity, setActivity] = useState<Activity | null>(null);
  const params = useParams();

  useEffect(() => {
    const fetchActivity = async () => {
      const url = `http://localhost:5000/api/activities/${params.id}`;
      const res = await fetch(url);
      const data = await res.json();
      setActivity(data);
    };
    fetchActivity();
  }, [params.id]);

  if (!activity) {
    return (
      <div>
        <h1>Activity not found!</h1>
      </div>
    );
  }

  const date = new Date(activity.date);
  const dateFormatted = format(date, "dd/MM/yyyy hh:mm aa", { locale: ptBR });

  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1>{activity.title}</h1>
        <p>{activity.description}</p>
        <p>{activity.date}</p>
        <p>{dateFormatted}</p>
        <p>{activity.city}</p>
        <p>{activity.venue}</p>
      </div>
      <div className="flex gap-2">
        <BackButton />
        <EditButton id={activity.id} />
      </div>
    </div>
  );
};

export default ActivityPage;
