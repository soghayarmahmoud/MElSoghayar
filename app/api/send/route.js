import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['mahmoudsruby@gmail.com', email], // sends to you + the user
      subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us</p>
          <p>New Message Submitted from: {email}</p>
          <p>{message}</p>
        </>
      ),
    });

    if (error) {
      console.error('Resend API returned an error:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Server-side processing error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
