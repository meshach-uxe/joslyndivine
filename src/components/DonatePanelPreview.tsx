"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AMOUNTS,
  ASSURANCES,
  DEFAULT_AMOUNT,
  MOMENTUM,
  OUTCOMES,
  RECOMMENDED_AMOUNT,
  type Frequency,
} from "@/lib/impact";

export function DonatePanelPreview() {
  const [freq, setFreq] = useState<Frequency>("monthly");
  const [amount, setAmount] = useState(DEFAULT_AMOUNT);

  const cta =
    freq === "monthly"
      ? `Become a monthly partner — $${amount}/mo`
      : `Send a one-time gift — $${amount}`;

  return (
    <div className="dp" role="region" aria-label="Donate panel preview">
      <div className="dp__head">
        <h3 className="dp__title">Become a monthly partner</h3>
        <span className="dp__pill">{freq === "monthly" ? "Monthly" : "One-time"}</span>
      </div>

      <p className="dp__momentum">
        Join <strong>{MOMENTUM.monthlyPartners} monthly partners</strong> funding this work.{" "}
        <Link href="/accountability">As of {MOMENTUM.asOf}</Link>
      </p>

      <div className="dp__tabs" role="group" aria-label="Donation frequency">
        <button
          className={`dp__tab ${freq === "monthly" ? "is-on" : ""}`}
          aria-pressed={freq === "monthly"}
          onClick={() => setFreq("monthly")}
          type="button"
        >
          Monthly
        </button>
        <button
          className={`dp__tab ${freq === "onetime" ? "is-on" : ""}`}
          aria-pressed={freq === "onetime"}
          onClick={() => setFreq("onetime")}
          type="button"
        >
          One-time
        </button>
      </div>

      <div className="dp__chips" role="group" aria-label="Amount in USD">
        {AMOUNTS.map((amt) => (
          <div key={amt} className="dp__chipwrap">
            {amt === RECOMMENDED_AMOUNT && <span className="dp__badge">Most start here</span>}
            <button
              type="button"
              className={`dp__chip ${amount === amt ? "is-on" : ""}`}
              style={{ width: "100%" }}
              onClick={() => setAmount(amt)}
              aria-pressed={amount === amt}
            >
              ${amt}
            </button>
          </div>
        ))}
      </div>

      <p className="dp__outcome" aria-live="polite">{OUTCOMES[amount]}</p>

      <Link href={`/donate?freq=${freq}&amt=${amount}`} className="btn btn--primary btn--lg dp__cta">
        {cta}
      </Link>

      {freq === "monthly" && (
        <div className="dp__assurances">
          {ASSURANCES.map((a) => (
            <span key={a} className="dp__assurance">&#10003; {a}</span>
          ))}
        </div>
      )}

      <p className="dp__trust">100% to programs after processing fees · No data sale · Cancel anytime.</p>
    </div>
  );
}
