"use client";

import Link from "next/link";
import { useState } from "react";

type Category = "all" | "education" | "shelter" | "mentorship";

type Story = {
  cat: Exclude<Category, "all">;
  name: string;
  teaser: string;
  href: string;
  alt: string;
};

const STORIES: Story[] = [
  { cat: "education", name: "Aminata", teaser: "A reader, two grades ahead, and the most patient mentor in Kroo Bay. The first time she read a book on her own, she read it twice.", href: "/stories/aminata", alt: "Aminata, age 12, reading at the JDF library." },
  { cat: "shelter", name: "Mariama", teaser: "Kinship care meant Mariama stayed with her grandmother instead of moving to a group home. Two years later, she's still there — and still in school.", href: "#", alt: "Mariama and her grandmother at home in Susan's Bay." },
  { cat: "mentorship", name: "Ibrahim", teaser: "Three years with the same mentor. They meet every Saturday. Ibrahim wants to be a teacher, and his mentor was a teacher.", href: "#", alt: "Ibrahim and his mentor Pa Foday at the library." },
  { cat: "education", name: "Fatmata", teaser: "First in her family to pass the secondary entrance exam. She picked the toughest school. She passed.", href: "#", alt: "Fatmata in school uniform on her first day of secondary school." },
  { cat: "education", name: "Kadiatu", teaser: "She read every book in the children's section by the time she was nine. The library now stocks novels.", href: "#", alt: "Kadiatu reading on the library steps." },
  { cat: "mentorship", name: "Pa Foday", teaser: "A mentor's view. Eleven years a teacher, four years with JDF, three current pairings.", href: "#", alt: "Pa Foday, JDF mentor, with three of his mentees." },
  { cat: "shelter", name: "Hassan", teaser: "Placed with his uncle in 2024. Twelve months later, attending school every day, no missed terms.", href: "#", alt: "Hassan and his uncle outside their home." },
  { cat: "education", name: "The Class 4 cohort", teaser: "Not a single child, but a class. What it looks like when 18 children move through a year together.", href: "#", alt: "Class 4 students at JDF after-school library." },
  { cat: "mentorship", name: "Mariatu", teaser: "Two and a half years with her mentor. They've never missed a week. The math homework finally makes sense.", href: "#", alt: "Mariatu and her mentor at a Saturday session." },
  { cat: "shelter", name: "Aunt Isatou", teaser: "A kinship-care story from the carer's side. Three children, one auntie, one shared roof.", href: "#", alt: "Aunt Isatou with her three foster nieces and nephews." },
  { cat: "education", name: "Saidu", teaser: "He learned to read at the library, then went home and taught his little sister. She started program-reading at four.", href: "#", alt: "Saidu reading aloud to his younger sister." },
];

const COUNTS = {
  all: STORIES.length,
  education: STORIES.filter((s) => s.cat === "education").length,
  shelter: STORIES.filter((s) => s.cat === "shelter").length,
  mentorship: STORIES.filter((s) => s.cat === "mentorship").length,
};

export function StoriesGrid() {
  const [filter, setFilter] = useState<Category>("all");
  const visible = STORIES.filter((s) => filter === "all" || s.cat === filter);

  return (
    <>
      <div className="chips" role="tablist" aria-label="Filter stories">
        {(["all", "education", "shelter", "mentorship"] as Category[]).map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={filter === c}
            className={`chip ${filter === c ? "is-on" : ""}`}
            onClick={() => setFilter(c)}
          >
            {c === "all" ? "All" : c.charAt(0).toUpperCase() + c.slice(1)}
            <span className="micro" style={{ marginLeft: 6, opacity: 0.7 }}>{COUNTS[c]}</span>
          </button>
        ))}
      </div>

      <div className="story-grid">
        {visible.map((s) => {
          const isExternal = s.href === "#";
          const variant = (["warm", "cool", "dusk"] as const)[
            STORIES.indexOf(s) % 3
          ];
          const cardContent = (
            <>
              <div
                className={`story-card__img story-card__img--${variant}`}
                role="img"
                aria-label={s.alt}
              />
              <div className="story-card__body">
                <p className="card__eyebrow">{s.cat.charAt(0).toUpperCase() + s.cat.slice(1)}</p>
                <h3 className="story-card__title">{s.name}</h3>
                <p className="story-card__excerpt">{s.teaser}</p>
                <span className="story-card__cta">Read {s.name}&rsquo;s story &rarr;</span>
              </div>
            </>
          );
          return isExternal ? (
            <article key={s.name} className="story-card" aria-label={`${s.name} — coming soon`}>{cardContent}</article>
          ) : (
            <Link key={s.name} className="story-card" href={s.href} style={{ textDecoration: "none", color: "inherit" }}>
              {cardContent}
            </Link>
          );
        })}
      </div>
    </>
  );
}
