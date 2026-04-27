import { JsonLd } from "./JsonLd";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
  withSchema?: boolean;
};

export function FAQAccordion({ items, withSchema = false }: FAQAccordionProps) {
  return (
    <>
      <div className="faq">
        {items.map((item, i) => (
          <details key={i}>
            <summary>{item.question}</summary>
            <div>
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
      {withSchema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }}
        />
      )}
    </>
  );
}
