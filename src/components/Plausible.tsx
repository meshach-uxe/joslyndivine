import Script from "next/script";

export function Plausible() {
  if (process.env.NEXT_PUBLIC_PLAUSIBLE_ENABLED !== "true") return null;
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "joslyndivine.com";
  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
