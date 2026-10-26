import { Button } from "./ui/button";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { Home, Briefcase, Mail, Presentation, HardDriveDownload } from "lucide-react";

export default function Navbar() {
  return (
    <div className="border bg-card text-card-foreground p-3 shadow-sm md:rounded-lg flex justify-between items-center top-0 sticky z-50">
      <Logo />
      {/* Navigation Menus */}
      <div className="space-x-3 items-center">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="ml-auto h-8"
        >
          <a href="#home" aria-label="Home" className="no-underline">
            <Home className=" h-3 w-3" />
            <span className="hidden md:block ml-2">Home</span>
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="ml-auto h-8"
        >
          <a href="#projects" aria-label="Projects" className="no-underline">
            <Presentation className=" h-4 w-4" />
            <span className="hidden md:block ml-2">Projects</span>
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="ml-auto h-8"
        >
          <a href="#work" aria-label="Work" className="no-underline">
            <Briefcase className=" h-4 w-4" />
            <span className="hidden md:block ml-2">Work</span>
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="ml-auto h-8"
        >
          <a href="#contact" aria-label="Contact" className="no-underline">
            <Mail className=" h-4 w-4" />
            <span className="hidden md:block ml-2">Contact</span>
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="ml-auto h-8"
        >
          <a href="https://drive.google.com/file/d/16xwh0PqgquZJ_bvV9-_E6U933ZjEbPJ3/view?usp=drive_link" aria-label="Resume" className="no-underline" target="_blank" rel="noopener noreferrer">
            <HardDriveDownload className=" h-4 w-4" />
            <span className="hidden md:block ml-2">Resume</span>
          </a>
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
