import { aboutYou } from "@/lib/data";
import { Button } from "./ui/button";

export default function ActionButton({ actionText }: { actionText: string }) {
  return (
    <Button asChild>
      <a href={`mailto:${aboutYou.email}`} className="no-underline">
        {actionText}
      </a>
    </Button>
  );
}
