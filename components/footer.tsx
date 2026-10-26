import { Fragment } from "react";
import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <p className="mb-8 text-sm text-muted-foreground text-center">
      {socialLinks.map((link, index) => (
        <Fragment key={link.label}>
          {index > 0 && " • "}
          <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
        </Fragment>
      ))}
      {" • "}
      <a href="https://drive.google.com/file/d/16xwh0PqgquZJ_bvV9-_E6U933ZjEbPJ3/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
    </p>
  );
}
