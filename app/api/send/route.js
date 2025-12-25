import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
// Use a properly formatted from email with fallback
const fromEmail = process.env.FROM_EMAIL || "Mahmoud Portfolio <onboarding@resend.dev>";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    // تحقق من المدخلات
    if (!email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    // إرسال الإيميل - في وضع الاختبار، يمكن فقط الإرسال للبريد المُتحقق منه
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ["mahmoudsruby@gmail.com"], // Only verified email in testing mode
      subject: `${subject} - from ${email}`,
      html: `
        <h2>${subject}</h2>
        <p><strong>Sender Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr/>
        <p>Sent from Mahmoud's Portfolio 🚀</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
