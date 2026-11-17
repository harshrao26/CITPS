import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const rawBody = await request.json();

    // 1. Flatten nested details if present
    const rawDetails =
      rawBody.details && typeof rawBody.details === "object" ? rawBody.details : {};
    const merged = { ...rawDetails, ...rawBody };

    // 2. Normalize core fields with alias fallbacks
    const name = (
      merged.name ||
      merged.candidateName ||
      merged.candidate_name ||
      merged.fullName ||
      merged.full_name ||
      ""
    ).trim();

    const phone = (
      merged.phone ||
      merged.mobile ||
      merged.contact ||
      merged.whatsapp ||
      ""
    ).trim();

    const email = (
      merged.email ||
      merged.emailAddress ||
      merged.email_address ||
      ""
    ).trim();

    const course = (
      merged.course ||
      merged.program ||
      merged.course_title ||
      "General Paramedical Inquiry"
    ).trim();

    const form_type = (
      merged.form_type ||
      merged.formType ||
      "Website Lead Form"
    ).trim();

    const page_url = (
      merged.page_url ||
      merged.pageUrl ||
      ""
    ).trim();

    // 3. Normalize academic & background fields
    const pcb_percent = (
      merged.pcb_percent ||
      merged.pcbPercent ||
      merged.percent ||
      merged.marks ||
      merged.score ||
      ""
    ).trim();

    const district = (
      merged.district ||
      merged.city ||
      merged.location ||
      ""
    ).trim();

    const board = (
      merged.board ||
      merged.educationBoard ||
      merged.education_board ||
      ""
    ).trim();

    const father_name = (
      merged.father_name ||
      merged.fatherName ||
      merged.guardian_name ||
      merged.guardianName ||
      ""
    ).trim();

    const bihar_student_credit_card = (
      merged.bihar_student_credit_card ||
      merged.creditCard ||
      merged.credit_card ||
      merged.mnssby ||
      ""
    ).trim();

    const preferred_visit_date = (
      merged.preferred_visit_date ||
      merged.visitDate ||
      merged.visit_date ||
      ""
    ).trim();

    let message = (
      merged.message ||
      merged.query ||
      merged.remarks ||
      merged.notes ||
      ""
    ).trim();

    const qualification = (
      merged.qualification ||
      merged.qualification_status ||
      ""
    ).trim();

    if (qualification && !message) {
      message = `Qualification: ${qualification}`;
    } else if (qualification && message && !message.includes(qualification)) {
      message = `[${qualification}] ${message}`;
    }

    // 4. Validation: Name and Mobile are mandatory
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Candidate name and contact phone number are required." },
        { status: 400 }
      );
    }

    const timestamp = merged.timestamp || new Date().toISOString();
    const timestamp_ist =
      merged.timestamp_ist ||
      new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

    // 5. Build clean, flat payload for Google Apps Script
    const payload = {
      name,
      phone,
      email: email || "Not Provided",
      course,
      form_type,
      page_url,
      timestamp,
      timestamp_ist,
      pcb_percent: pcb_percent || "-",
      district: district || "Not Specified",
      board: board || "-",
      father_name: father_name || "-",
      bihar_student_credit_card: bihar_student_credit_card || "-",
      preferred_visit_date: preferred_visit_date || "-",
      message: message || "-",
      qualification: qualification || "-",
      details: merged, // Raw audit payload
    };

    const gasUrl =
      process.env.GOOGLE_SCRIPT_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    console.log("[Lead Captured & Normalized]:", JSON.stringify(payload, null, 2));

    if (gasUrl) {
      try {
        const gasResponse = await fetch(gasUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          redirect: "follow",
        });

        if (!gasResponse.ok) {
          console.error(
            `[GAS Forwarding Failed]: HTTP ${gasResponse.status}`,
            await gasResponse.text()
          );
        } else {
          console.log("[GAS Forwarding Success]: Lead recorded in Google Sheet");
        }
      } catch (gasErr) {
        console.error("[GAS Forwarding Error]:", gasErr);
      }
    } else {
      console.warn(
        "[CITPS Lead Backend]: GOOGLE_SCRIPT_URL environment variable is not configured. Lead recorded locally."
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your application has been received successfully.",
        leadId: `CITPS-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Lead API Route Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process lead. Please try calling our helpline directly.",
      },
      { status: 500 }
    );
  }
}
