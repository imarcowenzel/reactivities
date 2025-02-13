import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface Props {
  id: string;
}

const EditButton = ({ id }: Props) => {
  return (
    <Button variant={"outline"}>
      <Link href={`/activity/${id}/edit`}>Edit</Link>
    </Button>
  );
};

export default EditButton;
