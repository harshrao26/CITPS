/**
 * ============================================================================
 * CITPS Patna - Paramedical Sciences Admissions Lead Automation Engine
 * ============================================================================
 * Handles form submissions from all CITPS website forms:
 * - Records lead details into Google Sheets with automatic headers & formatting
 * - Dispatches an instant HTML alert email to harshurao058@gmail.com
 * - Generates 1-Click WhatsApp & Phone Callback links for counselors
 * ============================================================================
 */

// Target email address for instant lead alerts
const NOTIFICATION_EMAIL = "harshurao058@gmail.com";

// Sheet tab name for organizing leads
const SHEET_NAME = "CITPS_Admissions_Leads";

/**
 * Handle incoming POST requests from Next.js backend or frontend forms
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  // Wait up to 10 seconds for concurrent requests to prevent row overwrites
  lock.tryLock(10000);

  try {
    let data = {};

    // 1. Parse incoming payload (JSON or Form URL-encoded)
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    // Support both flattened and nested payloads
    const details = data.details && typeof data.details === "object" ? data.details : {};
    const subDetails = details.details && typeof details.details === "object" ? details.details : {};

    // Extract core fields with extensive alias resolution
    const name =
      data.name || data.candidateName || data.candidate_name || data.fullName ||
      details.name || details.candidateName || details.fullName || "Unknown Candidate";

    const phone =
      data.phone || data.mobile || data.contact || data.whatsapp ||
      details.phone || details.mobile || details.contact || details.whatsapp || "Not Provided";

    const email =
      data.email || data.emailAddress || data.email_address ||
      details.email || details.emailAddress || details.email_address || "Not Provided";

    const course =
      data.course || data.program || data.course_title ||
      details.course || details.program || details.course_title || "General Paramedical Inquiry";

    const formType =
      data.form_type || data.formType ||
      details.form_type || details.formType || "Website Lead Form";

    const pageUrl =
      data.page_url || data.pageUrl ||
      details.page_url || details.pageUrl || "Direct";

    const timestampIst =
      data.timestamp_ist || data.timestampIst ||
      details.timestamp_ist || details.timestampIst ||
      Utilities.formatDate(new Date(), "Asia/Kolkata", "dd/MM/yyyy, hh:mm:ss a");

    // Additional academic & background metadata
    const pcbPercent =
      data.pcb_percent || data.pcbPercent || data.percent || data.marks || data.score ||
      details.pcb_percent || details.pcbPercent || details.percent || details.marks || details.score ||
      subDetails.pcb_percent || subDetails.pcbPercent || subDetails.percent || "-";

    const district =
      data.district || data.city || data.location ||
      details.district || details.city || details.location ||
      subDetails.district || subDetails.city || "Not Specified";

    const board =
      data.board || data.educationBoard || data.education_board ||
      details.board || details.educationBoard || details.education_board ||
      subDetails.board || subDetails.educationBoard || "-";

    const fatherName =
      data.father_name || data.fatherName || data.guardian_name || data.guardianName ||
      details.father_name || details.fatherName || details.guardian_name || details.guardianName ||
      subDetails.father_name || subDetails.fatherName || "-";

    const creditCard =
      data.bihar_student_credit_card || data.creditCard || data.credit_card || data.mnssby ||
      details.bihar_student_credit_card || details.creditCard || details.credit_card || details.mnssby ||
      subDetails.bihar_student_credit_card || subDetails.creditCard || "-";

    const visitDate =
      data.preferred_visit_date || data.visitDate || data.visit_date ||
      details.preferred_visit_date || details.visitDate || details.visit_date ||
      subDetails.preferred_visit_date || subDetails.visitDate || "-";

    let message =
      data.message || data.query || data.remarks || data.notes ||
      details.message || details.query || details.remarks || details.notes ||
      subDetails.message || subDetails.query || subDetails.remarks || "-";

    const qualification = data.qualification || details.qualification || subDetails.qualification || "";
    if (qualification && message === "-") {
      message = "Qualification: " + qualification;
    } else if (qualification && !message.includes(qualification)) {
      message = "[" + qualification + "] " + message;
    }

    // 2. Open Spreadsheet & Sheet Tab (Works in both container-bound & standalone modes)
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) {
      const props = PropertiesService.getScriptProperties();
      let sheetId = props.getProperty("CITPS_SHEET_ID");
      if (sheetId) {
        try {
          ss = SpreadsheetApp.openById(sheetId);
        } catch (e) {
          ss = null;
        }
      }
      if (!ss) {
        ss = SpreadsheetApp.create("CITPS Patna - Admissions Leads 2026");
        props.setProperty("CITPS_SHEET_ID", ss.getId());
      }
    }

    let sheet = ss.getSheetByName(SHEET_NAME);

    // If sheet doesn't exist, create it and format headers
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      setupSheetHeaders(sheet);
    } else if (sheet.getLastRow() === 0) {
      setupSheetHeaders(sheet);
    }

    // 3. Append Row (16 Ordered Columns)
    const newRow = [
      timestampIst,                     // Column 1 (A): Timestamp (IST)
      name,                             // Column 2 (B): Candidate Name
      phone,                            // Column 3 (C): WhatsApp Mobile
      email,                            // Column 4 (D): Email Address
      course,                           // Column 5 (E): Program / Course
      formType,                         // Column 6 (F): Form Type / Source
      pageUrl,                          // Column 7 (G): Page URL
      pcbPercent,                       // Column 8 (H): 12th Science %
      district,                         // Column 9 (I): District / City
      board,                            // Column 10 (J): 12th Board
      fatherName,                       // Column 11 (K): Father's Name
      creditCard,                       // Column 12 (L): Bihar Credit Card (MNSSBY)
      visitDate,                        // Column 13 (M): Preferred Visit Date
      message,                          // Column 14 (N): Query / Message
      "New Lead (Pending Call)",        // Column 15 (O): Counseling Status
      JSON.stringify(data),             // Column 16 (P): Raw JSON Payload
    ];

    sheet.appendRow(newRow);

    // Format new row styling
    const lastRowIndex = sheet.getLastRow();
    sheet.getRange(lastRowIndex, 1, 1, newRow.length).setVerticalAlignment("middle");
    sheet.getRange(lastRowIndex, 2).setFontWeight("bold"); // Bold name
    sheet.getRange(lastRowIndex, 3).setFontFamily("Courier New"); // Monospace phone
    sheet.getRange(lastRowIndex, 15).setBackground("#EBF5FB").setFontColor("#1B4F72").setFontWeight("bold");

    // 4. Send Instant Email Alert to harshurao058@gmail.com
    try {
      sendLeadAlertEmail({
        name,
        phone,
        email,
        course,
        formType,
        pageUrl,
        timestampIst,
        pcbPercent,
        district,
        board,
        fatherName,
        creditCard,
        visitDate,
        message,
        sheetUrl: ss.getUrl(),
      });
    } catch (mailErr) {
      Logger.log("Email dispatch warning: " + mailErr.toString());
    }

    // 5. Return success JSON
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Lead recorded in Google Sheet and notification email dispatched.",
        timestamp: timestampIst,
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log("doPost Error: " + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

/**
 * Health check GET endpoint
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "live",
      service: "CITPS Paramedical Admissions Lead Automation Webhook",
      timestamp: Utilities.formatDate(
        new Date(),
        "Asia/Kolkata",
        "dd/MM/yyyy, hh:mm:ss a"
      ),
      instructions: "Send POST requests with candidate lead JSON payload.",
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Initialize Headers with Professional Design
 */
function setupSheetHeaders(sheet) {
  const headers = [
    "Timestamp (IST)",
    "Candidate Name",
    "WhatsApp Mobile",
    "Email Address",
    "Program / Course",
    "Form Type / Source",
    "Page URL",
    "12th Science %",
    "District / City",
    "12th Board",
    "Father's Name",
    "Bihar Credit Card (MNSSBY)",
    "Preferred Visit Date",
    "Query / Message",
    "Counseling Status",
    "Raw JSON Payload",
  ];

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

  // Style Header Row: Medical Navy Background with White Bold Text
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground("#004275");
  headerRange.setFontColor("#FFFFFF");
  headerRange.setFontWeight("bold");
  headerRange.setFontSize(10);
  headerRange.setFontFamily("Arial");
  headerRange.setHorizontalAlignment("center");
  headerRange.setVerticalAlignment("middle");

  sheet.setRowHeight(1, 36);
  sheet.setFrozenRows(1);

  // Set initial column widths
  sheet.setColumnWidth(1, 160); // Timestamp
  sheet.setColumnWidth(2, 170); // Name
  sheet.setColumnWidth(3, 130); // Phone
  sheet.setColumnWidth(4, 180); // Email
  sheet.setColumnWidth(5, 230); // Course
  sheet.setColumnWidth(6, 200); // Form Type
  sheet.setColumnWidth(7, 260); // Page URL
  sheet.setColumnWidth(8, 110); // %
  sheet.setColumnWidth(9, 130); // District
  sheet.setColumnWidth(10, 110); // Board
  sheet.setColumnWidth(11, 150); // Father's Name
  sheet.setColumnWidth(12, 140); // MNSSBY
  sheet.setColumnWidth(13, 140); // Visit Date
  sheet.setColumnWidth(14, 240); // Message
  sheet.setColumnWidth(15, 160); // Status
  sheet.setColumnWidth(16, 120); // JSON
}

/**
 * Dispatch High-Priority HTML Notification Email to harshurao058@gmail.com
 */
function sendLeadAlertEmail(info) {
  const cleanPhone = String(info.phone).replace(/\D/g, "");
  const waPhone = cleanPhone.length === 10 ? "91" + cleanPhone : cleanPhone;
  const whatsappUrl = "https://wa.me/" + waPhone + "?text=" + encodeURIComponent(
    "Namaste " + info.name + ", thank you for contacting CITPS Patna regarding " + info.course + ". Our admissions counselor is ready to assist you."
  );
  const telUrl = "tel:" + cleanPhone;

  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7fa; margin: 0; padding: 24px; color: #1e293b; }
        .card { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
        .header { background: linear-gradient(135deg, #004275 0%, #005A9C 100%); color: #ffffff; padding: 24px; }
        .header h1 { margin: 0 0 6px 0; font-size: 20px; font-weight: 700; letter-spacing: -0.3px; }
        .header p { margin: 0; font-size: 13px; opacity: 0.9; }
        .badge { display: inline-block; background: #FF3B3B; color: #ffffff; font-size: 11px; font-weight: 700; padding: 3px 9px; border-radius: 6px; text-transform: uppercase; margin-bottom: 8px; }
        .content { padding: 24px; }
        .section-title { font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px; }
        table.lead-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px; }
        table.lead-table td { padding: 9px 6px; border-bottom: 1px solid #f1f5f9; }
        table.lead-table td.label { width: 38%; color: #64748b; font-weight: 600; }
        table.lead-table td.value { width: 62%; color: #0f172a; font-weight: 700; }
        .actions { display: flex; gap: 10px; margin: 20px 0 10px 0; }
        .btn { display: inline-block; padding: 11px 20px; border-radius: 8px; font-size: 13px; font-weight: 700; text-decoration: none; text-align: center; }
        .btn-call { background-color: #005A9C; color: #ffffff !important; }
        .btn-wa { background-color: #25D366; color: #ffffff !important; }
        .btn-sheet { background-color: #f1f5f9; color: #334155 !important; border: 1px solid #cbd5e1; }
        .footer { background: #f8fafc; padding: 16px 24px; font-size: 11px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <span class="badge">New Admission Lead Captured</span>
          <h1>${info.name}</h1>
          <p>${info.course} • ${info.timestampIst}</p>
        </div>
        <div class="content">
          <div class="section-title">Candidate Contact & Academic Profile</div>
          <table class="lead-table">
            <tr><td class="label">Candidate Name:</td><td class="value">${info.name}</td></tr>
            <tr><td class="label">WhatsApp Mobile:</td><td class="value"><a href="${telUrl}" style="color:#005A9C; text-decoration:none;">${info.phone}</a></td></tr>
            <tr><td class="label">Email Address:</td><td class="value">${info.email}</td></tr>
            <tr><td class="label">Desired Course:</td><td class="value" style="color:#005A9C;">${info.course}</td></tr>
            <tr><td class="label">12th Science PCB/PCM %:</td><td class="value">${info.pcbPercent}</td></tr>
            <tr><td class="label">12th Education Board:</td><td class="value">${info.board}</td></tr>
            <tr><td class="label">District / City:</td><td class="value">${info.district}</td></tr>
            <tr><td class="label">Father's Name:</td><td class="value">${info.fatherName}</td></tr>
            <tr><td class="label">Bihar Credit Card (MNSSBY):</td><td class="value">${info.creditCard}</td></tr>
            <tr><td class="label">Preferred Visit Date:</td><td class="value">${info.visitDate}</td></tr>
            <tr><td class="label">Form Type / Source:</td><td class="value">${info.formType}</td></tr>
            <tr><td class="label">Submission Page:</td><td class="value"><a href="${info.pageUrl}" style="color:#64748b; font-size:11px;">${info.pageUrl}</a></td></tr>
            <tr><td class="label">Student Query / Notes:</td><td class="value" style="font-weight:normal; color:#475569;">${info.message}</td></tr>
          </table>

          <div class="section-title">1-Click Counselor Fast Actions</div>
          <div class="actions">
            <a href="${telUrl}" class="btn btn-call" style="margin-right:8px;">Call Student</a>
            <a href="${whatsappUrl}" class="btn btn-wa" style="margin-right:8px;" target="_blank">Chat on WhatsApp</a>
            <a href="${info.sheetUrl}" class="btn btn-sheet" target="_blank">Open Google Sheet</a>
          </div>
        </div>
        <div class="footer">
          Central Institute of Technical & Paramedical Sciences (CITPS) Patna<br>
          Automated Admissions Notification Engine • Confidential Counselor Communication
        </div>
      </div>
    </body>
    </html>
  `;

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: "CITPS Admission Lead: " + info.name + " (" + info.course + ") - " + info.district,
    htmlBody: htmlBody,
  });
}
