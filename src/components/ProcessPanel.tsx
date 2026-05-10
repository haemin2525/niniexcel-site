import PhraseLine from "./PhraseLine";

type Props = {
  label: string;
  title: string;
  body: string;
};

export default function ProcessPanel({ label, title, body }: Props) {
  return (
    <article className="bg-paper shadow-card-light rounded-[8px] px-6 sm:px-8 py-10 sm:py-12 hover:bg-hover-light transition-colors duration-200">
      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-gray font-medium">
        <PhraseLine>{label}</PhraseLine>
      </p>
      <h3 className="mt-5 text-[clamp(16px,1.6vw,20px)] font-bold text-ink tracking-[-0.005em]">
        <PhraseLine>{title}</PhraseLine>
      </h3>
      <p className="mt-3 text-[14px] leading-[1.55] text-body-gray break-keep">
        {body}
      </p>
    </article>
  );
}
