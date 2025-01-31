import { aboutYou } from "@/lib/data";

export default function Sidebar() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col space-y-2 p-4 h-fit static md:sticky top-24">
      {/* Title/Name */}
      <p className="font-semibold leading-none tracking-tight">
        {aboutYou.name}
      </p>
      {/* Description */}
      <p className="text-sm text-muted-foreground tracking-tight">
        {aboutYou.description}
        <i>{aboutYou.formula}</i>
        {aboutYou.description2}
        Read my {" "}
        <a href="https://daheer.github.io/">
          Blog
        </a>
        {" "} See my {" "}
        <a href="https://github.com/Daheer/">
          GitHub
        </a>
      </p>
    </div>
  );
}
