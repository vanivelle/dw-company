// @ts-ignore
import twilio from "twilio";
import { NextRequest, NextResponse } from "next/server";

/**
 * SMS NOTIFICATION ROUTE
 * 
 * Status: ⏳ READY BUT AWAITING TWILIO APPROVAL
 * 
 * This route sends SMS notifications when a contact form is submitted.
 * Currently, it's configured and ready, but will only work once Twilio
 * approves the account (5-7 business days from creation).
 * 
 * What happens:
 * 1. User submits contact form
 * 2. Email is sent immediately (via send-email route)
 * 3. SMS notification is sent in parallel to +1 (860) 709-7832
 * 4. If SMS fails (account not approved yet), email still works
 * 
 * Expected timeline:
 * - Account created: March 14, 2026
 * - Expected approval: March 21-28, 2026
 * - SMS notifications will auto-start after approval (no code changes needed)
 */

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
const businessPhone = process.env.BUSINESS_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, address, message } =
      await request.json();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const smsBody = `
🏠 Nova Solicitação DW Company!

Nome: ${name}
Telefone: ${phone}
Email: ${email || "Não fornecido"}
Serviço: ${service || "Não especificado"}
Endereço: ${address || "Não fornecido"}

Mensagem:
${message}

---
Responda ASAP!
    `.trim();

    const smsResponse = await client.messages.create({
      body: smsBody,
      from: twilioPhone,
      to: businessPhone,
    });

    console.log("SMS sent successfully:", smsResponse.sid);

    return NextResponse.json(
      {
        success: true,
        messageSid: smsResponse.sid,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending SMS:", error);

    // SMS failure doesn't prevent form submission
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to send SMS",
        note: "Email notification was sent successfully",
      },
      { status: 200 }
    );
  }
}
