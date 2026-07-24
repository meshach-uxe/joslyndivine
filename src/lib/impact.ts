// Single source of truth for the donation ask — outcomes copy + published
// momentum figures. Both the homepage preview (DonatePanelPreview) and the
// full donate form (DonatePanel) import from here so the two can never drift.
//
// Outcomes are framed as CONTINUITY ("keeps a child in school"), not purchase
// ("buys supplies") — this is the org's "paying for Wednesday" voice.
//
// MOMENTUM figures must mirror the Accountability page (FY24 / Q1 2026). They
// are dated, sourced period numbers — never a fabricated real-time feed.

export type Frequency = "monthly" | "onetime";

export const AMOUNTS = ["15", "30", "60", "120"] as const;

/** Pre-selected default amount. Also the "recommended" anchor. */
export const DEFAULT_AMOUNT = "30";
export const RECOMMENDED_AMOUNT = "30";

export const OUTCOMES: Record<string, string> = {
  "15": "Keeps books in one child's hands every week of the term.",
  "30": "Keeps one child in school every Wednesday of the term.",
  "60": "Covers a child's full year — fees, uniform, transport.",
  "120": "Sustains a kinship-care placement, month after month.",
};

/** Honest, dated social proof. Mirrors the Accountability page. */
export const MOMENTUM = {
  monthlyPartners: 91,
  asOf: "Q1 2026",
};

/** Reassurances shown at the moment of decision (monthly ask). */
export const ASSURANCES = ["Cancel anytime", "100% to programs", "No data sale"];
