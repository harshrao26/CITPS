/**
 * Unified Lead Submission Helper for CITPS
 * Attaches automatic metadata (Page URL, IST Timestamp, Referrer, Form Identifier)
 * and dispatches to the Next.js API backend which pushes to Google Sheets & Email.
 */
export async function submitLead(data = {}) {
  try {
    const pageUrl =
      typeof window !== "undefined" ? window.location.href : "";
    const referrer =
      typeof document !== "undefined" ? document.referrer || "Direct" : "Direct";

    const now = new Date();
    const timestampIso = now.toISOString();
    const timestampIst = now.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const payload = {
      page_url: pageUrl,
      referrer: referrer,
      timestamp: timestampIso,
      timestamp_ist: timestampIst,
      ...data,
    };

    const response = await fetch("/api/submit-lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.error || "Submission failed");
    }

    return {
      success: true,
      leadId: result.leadId,
      message: result.message,
    };
  } catch (error) {
    console.error("submitLead error:", error);
    return {
      success: false,
      error: error.message || "Network error. Please try again or call our helpline.",
    };
  }
}
