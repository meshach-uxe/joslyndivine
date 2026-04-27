"use client";

import { useState, FormEvent } from "react";
import { FormField, FormTextarea, FormSelect } from "./FormField";

type Status = "idle" | "submitting" | "success" | "error" | "no-endpoint";

export function PartnerForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("_company")) return;

    const endpoint = process.env.NEXT_PUBLIC_FORMSPARK_PARTNER_ID;
    if (!endpoint) {
      setStatus("no-endpoint");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    const data: Record<string, FormDataEntryValue> = {};
    fd.forEach((v, k) => {
      if (k !== "_company") data[k] = v;
    });

    try {
      const res = await fetch(`https://submit-form.com/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
    }
  };

  if (status === "success") {
    return (
      <div className="success-panel" role="status" aria-live="polite">
        <h3>Thanks. We&rsquo;ve got your enquiry.</h3>
        <p>A real person reads this and will reply within seven days.</p>
        <button
          type="button"
          className="btn btn--tertiary"
          onClick={() => setStatus("idle")}
        >
          Send another &rarr;
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {status === "error" && (
        <div className="error-banner" role="alert">
          We couldn&rsquo;t send that. Please try again, or email <a href="mailto:partnerships@joslyndivine.com">partnerships@joslyndivine.com</a>.
          {errorMsg && <span className="micro" style={{ display: "block", marginTop: 4 }}>({errorMsg})</span>}
        </div>
      )}
      {status === "no-endpoint" && (
        <div className="error-banner" role="alert">
          Form endpoint not configured yet. Please email <a href="mailto:partnerships@joslyndivine.com">partnerships@joslyndivine.com</a>.
        </div>
      )}

      {/* Honeypot */}
      <input
        type="text"
        name="_company"
        tabIndex={-1}
        autoComplete="off"
        className="honeypot"
        aria-hidden="true"
      />

      <FormField id="part-name" name="name" label="Your name" required autoComplete="name" />
      <FormField id="part-org" name="organisation" label="Organisation" required help="Name of school, company, faith community, or NGO." />
      <FormField id="part-role" name="role" label="Your role" required />
      <FormField id="part-email" name="email" label="Email" type="email" required autoComplete="email" />

      <FormSelect id="part-type" name="partner_type" label="What kind of partnership?" required defaultValue="">
        <option value="" disabled>Choose a type…</option>
        <option value="school">School</option>
        <option value="corporate">Corporate</option>
        <option value="ngo">NGO / charity</option>
        <option value="faith">Faith community</option>
        <option value="other">Other</option>
      </FormSelect>

      <FormTextarea
        id="part-idea"
        name="idea"
        label="What are you thinking?"
        rows={6}
        placeholder="An outline is enough — we&rsquo;ll book a call to talk it through."
        required
      />

      <label className="check" style={{ marginTop: "var(--space-3)", marginBottom: "var(--space-5)" }}>
        <input type="checkbox" name="consent" required />
        <span>I have read and accept the privacy notice.</span>
      </label>

      <button
        type="submit"
        className={`btn btn--primary btn--lg ${status === "submitting" ? "btn--loading" : ""}`}
        disabled={status === "submitting"}
        aria-busy={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Start the conversation"}
      </button>
    </form>
  );
}
