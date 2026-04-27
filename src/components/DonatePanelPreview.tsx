"use client";

import Link from "next/link";
import { useState } from "react";

const OUTCOMES: Record<string, string> = {
  "15": "$15/month buys school supplies for one child each term.",
  "30": "$30/month = a school term for one child.",
  "60": "$60/month covers a child's full school year support.",
  "120": "$120/month sustains a kinship-care placement for one child.",
};

type Frequency = "monthly" | "onetime";

export function DonatePanelPreview() {
  const [freq, setFreq] = useState<Frequency>("monthly");
  const [amount, setAmount] = useState("30");

  return (
    <div className="dp" role="region" aria-label="Donate panel preview">
      <div className="dp__head">
        <h3 className="dp__title">Become a monthly partner</h3>
        <span className="dp__pill">Pre-selected · {freq === "monthly" ? "Monthly" : "One-time"}</span>
      </div>
      <div className="dp__tabs" role="tablist">
        <button
          className={`dp__tab ${freq === "monthly" ? "is-on" : ""}`}
          role="tab"
          aria-selected={freq === "monthly"}
          onClick={() => setFreq("monthly")}
          type="button"
        >
          Monthly
        </button>
        <button
          className={`dp__tab ${freq === "onetime" ? "is-on" : ""}`}
          role="tab"
          aria-selected={freq === "onetime"}
          onClick={() => setFreq("onetime")}
          type="button"
        >
          One-time
        </button>
      </div>
      <div className="dp__chips">
        {["15", "30", "60", "120"].map((amt) => (
          <button
            key={amt}
            type="button"
            className={`dp__chip ${amount === amt ? "is-on" : ""}`}
            onClick={() => setAmount(amt)}
            aria-pressed={amount === amt}
          >
            ${amt}
          </button>
        ))}
      </div>
      <p className="dp__outcome">{OUTCOMES[amount]}</p>
      <Link
        href={`/donate?freq=${freq}&amt=${amount}`}
        className="btn btn--primary btn--lg dp__cta"
      >
        Continue to /donate
      </Link>
      <p className="dp__trust">100% to programs after processing fees · No data sale · Cancel anytime.</p>
    </div>
  );
}
