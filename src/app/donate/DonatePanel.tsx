"use client";

import { useState } from "react";
import {
  AMOUNTS,
  ASSURANCES,
  DEFAULT_AMOUNT,
  OUTCOMES,
  RECOMMENDED_AMOUNT,
  type Frequency,
} from "@/lib/impact";

type Channel = "card" | "bank" | "momo" | "crypto";

export function DonatePanel() {
  const [freq, setFreq] = useState<Frequency>("monthly");
  const [amount, setAmount] = useState(DEFAULT_AMOUNT);
  const [channel, setChannel] = useState<Channel>("card");
  const [custom, setCustom] = useState("");

  const onContinue = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("how-to-give-now")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const title = freq === "monthly" ? "Become a monthly partner" : "Send a one-time gift";
  const cta = freq === "monthly" ? "Continue: Become a monthly partner" : "Continue: Send your gift";

  return (
    <form
      className="dp"
      style={{ position: "sticky", top: 96 }}
      onSubmit={(e) => {
        e.preventDefault();
        onContinue(e as unknown as React.MouseEvent);
      }}
    >
      <div className="dp__head">
        <h2 className="dp__title">{title}</h2>
        <span className="dp__pill">{freq === "monthly" ? "Pre-selected" : "One-time"}</span>
      </div>

      {/* Frequency */}
      <div className="dp__tabs" role="tablist" aria-label="Donation frequency">
        <button
          type="button"
          role="tab"
          aria-selected={freq === "monthly"}
          className={`dp__tab ${freq === "monthly" ? "is-on" : ""}`}
          onClick={() => setFreq("monthly")}
        >
          Monthly
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={freq === "onetime"}
          className={`dp__tab ${freq === "onetime" ? "is-on" : ""}`}
          onClick={() => setFreq("onetime")}
        >
          One-time
        </button>
      </div>

      {/* Amounts */}
      <div className="dp__chips" role="radiogroup" aria-label="Amount in USD">
        {AMOUNTS.map((amt) => (
          <div key={amt} className="dp__chipwrap">
            {amt === RECOMMENDED_AMOUNT && <span className="dp__badge">Most start here</span>}
            <button
              type="button"
              role="radio"
              aria-checked={amount === amt}
              className={`dp__chip ${amount === amt ? "is-on" : ""}`}
              style={{ width: "100%" }}
              onClick={() => { setAmount(amt); setCustom(""); }}
            >
              ${amt}
            </button>
          </div>
        ))}
      </div>
      <div className="field" style={{ marginBottom: "var(--space-4)" }}>
        <label htmlFor="dp-custom" className="sr-only">Other amount in USD</label>
        <input
          id="dp-custom"
          type="text"
          inputMode="decimal"
          className="input"
          placeholder="Other amount (USD)"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
        />
      </div>
      <p className="dp__outcome">{OUTCOMES[amount] ?? ""}</p>

      {/* Channels */}
      <div className="dp__tabs" role="tablist" aria-label="Payment channel">
        {(["card", "bank", "momo", "crypto"] as Channel[]).map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={channel === c}
            className={`dp__tab ${channel === c ? "is-on" : ""}`}
            onClick={() => setChannel(c)}
          >
            {c === "card" ? "Card" : c === "bank" ? "Bank" : c === "momo" ? "Mobile" : "Crypto"}
          </button>
        ))}
      </div>

      <p className="micro" style={{ margin: "var(--space-3) 0 var(--space-5)" }}>
        {channel === "card" && "Card / PayPal · Receipt in 5 minutes."}
        {channel === "bank" && "Bank transfer · 1–3 days · lowest fees."}
        {channel === "momo" && "Orange Money or Africell · 10 minutes."}
        {channel === "crypto" && "BTC, ETH, or USDC · 10–30 minutes."}
      </p>

      <button
        type="submit"
        className="btn btn--primary btn--lg dp__cta"
        onClick={onContinue}
      >
        {cta}
      </button>
      {freq === "monthly" && (
        <div className="dp__assurances">
          {ASSURANCES.map((a) => (
            <span key={a} className="dp__assurance">&#10003; {a}</span>
          ))}
        </div>
      )}
      <p className="dp__trust">
        100% to programs after fees · We never sell donor data · Cancel anytime, no questions.
      </p>
    </form>
  );
}
