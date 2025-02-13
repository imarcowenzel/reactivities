import Link from "next/link";

import { Button } from "@/components/ui/button";

const BackButton = () => {
  return (
    <Button>
      <Link href="/">Back</Link>
    </Button>
  );
};

export default BackButton;
