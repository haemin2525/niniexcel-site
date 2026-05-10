import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Frame from "../components/Frame";
import PhraseLine from "../components/PhraseLine";
import Pill from "../components/Pill";
import { site } from "../content/site";

export default function Inquiry() {
  const { inquiry } = site;
  const [params] = useSearchParams();
  const [course, setCourse] = useState<string>("");

  useEffect(() => {
    const slug = params.get("course");
    if (slug) {
      const topic = inquiry.topics.find((t) => t.slug === slug);
      if (topic) setCourse(topic.label);
    }
  }, [params, inquiry.topics]);

  return (
    <Frame>
      <header className="py-20 sm:py-28">
        <Link
          to="/"
          className="inline-flex items-center text-[12px] uppercase tracking-[0.18em] text-muted-gray font-medium hover:text-ink transition-colors"
        >
          ← Niniexcel
        </Link>
        <div className="mt-10 anim-fade-up" style={{ animationDelay: "0ms" }}>
          <Pill tone="muted">
            <PhraseLine>INQUIRY · 강의 의뢰</PhraseLine>
          </Pill>
        </div>
        <h1
          className="mt-6 font-display font-bold tracking-[-0.02em] leading-[1.05] text-ink anim-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          <PhraseLine className="text-[clamp(36px,6vw,72px)]">
            {inquiry.title}
          </PhraseLine>
        </h1>
        <p
          className="mt-6 text-body-gray text-[clamp(15px,1.4vw,18px)] max-w-[640px] leading-[1.55] anim-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          {inquiry.intro}
        </p>
      </header>

      <form
        action={inquiry.formspreeEndpoint}
        method="POST"
        className="max-w-[640px] pb-32 anim-fade-up"
        style={{ animationDelay: "360ms" }}
      >
        <input type="hidden" name="_subject" value="[강의 의뢰] niniexcel-site" />

        <Field
          label="기업·기관명"
          name="organization"
          required
          placeholder="예: 한국경제진흥원"
        />
        <Field
          label="담당자 이름"
          name="contact_name"
          required
          placeholder="예: 김혜민"
        />
        <Field
          label="연락처 (이메일)"
          name="email"
          type="email"
          required
          placeholder="예: contact@company.com"
        />

        <SelectField
          label="관심 강의"
          name="course"
          required
          value={course}
          onChange={setCourse}
          options={inquiry.topics}
        />

        <Field
          label="희망 일정"
          name="schedule"
          required
          placeholder="예: 2026년 6월 중 평일 오후 4시간"
        />
        <Field
          label="수강 대상 정보"
          name="audience"
          required
          placeholder="예: 신입사원 50명, 입사 1년차 OT 교육"
        />

        <TextareaField
          label="세부 문의 내용"
          name="message"
          placeholder="자유롭게 적어주세요"
          optional
        />

        <button
          type="submit"
          className="mt-10 inline-flex items-center px-6 py-3 rounded-pill-full bg-ink text-paper text-[15px] font-medium tracking-[-0.005em] hover:bg-body-gray transition-colors duration-200"
        >
          의뢰 보내기
        </button>
      </form>
    </Frame>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

function Field({ label, name, type = "text", required, placeholder }: FieldProps) {
  return (
    <label className="block mt-6 first:mt-0">
      <span className="block text-[12px] uppercase tracking-[0.18em] text-muted-gray font-medium">
        {label} {required && <span className="text-ink">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full px-4 py-3 rounded-[8px] bg-paper border border-ink/15 text-ink text-[15px] focus:border-ink focus:outline-none transition-colors"
      />
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  options: ReadonlyArray<{ slug: string; label: string }>;
};

function SelectField({ label, name, required, value, onChange, options }: SelectFieldProps) {
  return (
    <label className="block mt-6">
      <span className="block text-[12px] uppercase tracking-[0.18em] text-muted-gray font-medium">
        {label} {required && <span className="text-ink">*</span>}
      </span>
      <select
        name={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full px-4 py-3 rounded-[8px] bg-paper border border-ink/15 text-ink text-[15px] focus:border-ink focus:outline-none transition-colors"
      >
        <option value="">선택해주세요</option>
        {options.map((t) => (
          <option key={t.slug} value={t.label}>
            {t.label}
          </option>
        ))}
      </select>
    </label>
  );
}

type TextareaFieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  optional?: boolean;
};

function TextareaField({ label, name, placeholder, optional }: TextareaFieldProps) {
  return (
    <label className="block mt-6">
      <span className="block text-[12px] uppercase tracking-[0.18em] text-muted-gray font-medium">
        {label} {optional && <span className="text-muted-gray normal-case">(선택)</span>}
      </span>
      <textarea
        name={name}
        rows={6}
        placeholder={placeholder}
        className="mt-2 w-full px-4 py-3 rounded-[8px] bg-paper border border-ink/15 text-ink text-[15px] focus:border-ink focus:outline-none transition-colors resize-y"
      />
    </label>
  );
}
