import { EmailTemplate } from "@/app/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const sendToEmail = process.env.SENDTOEMAIL;

export async function POST(request, response) {
    try {
        const { firstName, lastName, email, subject, message } = await request.json();
        const data = await resend.emails.send({
            from: 'Resend <resend@currentuser.dev>', //you will have to properly configure this email address according to your website domain and Resend rules
            to: sendToEmail,
            subject: subject,
            react: EmailTemplate({ firstName: firstName, lastName: lastName, email: email, subject: subject, message: message }),
          });
        return NextResponse.json(data);
    }
    catch (error) {
        return NextResponse.error(error);
    }
}