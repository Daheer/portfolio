import Image from "next/image";
import { WorkExperience } from "@/lib/data";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";
import DateRange from "./date-range";

interface WorkShowcaseProps {
  experience: WorkExperience;
  whetherlast: boolean;
}

export default function WorkShowcase({ experience, whetherlast }: WorkShowcaseProps) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap justify-between gap-2">
        <div className="flex items-center space-x-4">
          <Avatar>
            {experience.logo ? (
              <Image src={experience.logo} alt={`${experience.company} logo`} width={28} height={28} unoptimized className="aspect-square h-full w-full" />
            ) : (
              <AvatarFallback>{experience.company.slice(0, 2).toUpperCase()}</AvatarFallback>
            )}
          </Avatar>
          <h3 className="font-semibold leading-none tracking-tight">{experience.company}</h3>
        </div>
        {experience.years && <DateRange date={experience.years} />}
      </div>
      <p className="text-sm text-muted-foreground">{experience.position}</p>
      <p className="text-sm text-muted-foreground pb-2">{experience.description}</p>
      {!whetherlast && <Separator />}
    </div>
  );
}
