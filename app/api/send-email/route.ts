// @ts-ignore
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// Configurar transporter do Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, address, message } =
      await request.json();

    // Validar campos obrigatórios
    if (!name || !email || !phone || !address || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos" },
        { status: 400 }
      );
    }

    // Email para o sócio
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `Nova Solicitação - ${service || "Sem serviço especificado"}`,
      html: `
        <h2>Nova Solicitação de Contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Serviço:</strong> ${service || "Não especificado"}</p>
        <p><strong>Endereço:</strong> ${address}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    // Email de confirmação para o cliente (opcional)
    const confirmationEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Recebemos sua solicitação - DW Company",
      html: `
        <h2>Obrigado pelo contato!</h2>
        <p>Olá ${name},</p>
        <p>Recebemos sua solicitação e em breve entraremos em contato.</p>
        <p>Qualquer dúvida, ligue: <strong>(860) 709-7832</strong></p>
        <p>Atenciosamente,<br>Equipe DW Company</p>
      `,
    };

    await transporter.sendMail(confirmationEmail);

    return NextResponse.json(
      { message: "Email enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Erro ao enviar email. Tente novamente." },
      { status: 500 }
    );
  }
}
