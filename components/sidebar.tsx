import { aboutYou } from "@/lib/data";

export default function Sidebar() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col space-y-2 p-4 h-fit static md:sticky top-24">
      <p className="font-semibold leading-none tracking-tight">{aboutYou.name}</p>
      <p className="text-xs text-muted-foreground">{aboutYou.suffix}</p>
      <p className="text-sm text-muted-foreground tracking-tight">
        {aboutYou.description}{" "}
        Read my <a href="https://daheer.github.io/">Blog</a>{" "}
        and see my <a href="https://github.com/Daheer/">GitHub</a>.
      </p>
    </div>
  );
}
