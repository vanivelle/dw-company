// @ts-ignore
import twilio from "twilio";
import { NextRequest, NextResponse } from "next/server";

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
