import PlausibleProvider from "next-plausible";

export function PlausibleAnalytics() {
  return (
    <>
      <PlausibleProvider
        domain="zaplineai.com"
        customDomain="https://plausible.sreenington.site"
        selfHosted
        enabled
        // trackLocalhost
        taggedEvents
        trackOutboundLinks
      />
    </>
  );
}
