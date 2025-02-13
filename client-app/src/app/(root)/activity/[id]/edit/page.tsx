"use client";

import ActivityForm from "@/components/activity-form";
import { Activity } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditActivity = () => {
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

  return <ActivityForm activity={activity} />;
};

export default EditActivity;
