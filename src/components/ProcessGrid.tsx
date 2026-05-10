import ProcessPanel from "./ProcessPanel";
import { site } from "../content/site";

export default function ProcessGrid() {
  const panels = site.process;
  return (
    <section
      aria-label="강사 운영 프로세스"
      className="mt-32 sm:mt-40 lg:mt-48 anim-fade-up"
      style={{ animationDelay: "640ms" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {panels.map((p) => (
          <ProcessPanel
            key={p.label}
            label={p.label}
            title={p.title}
            body={p.body}
          />
        ))}
      </div>
    </section>
  );
}
