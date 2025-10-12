import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, budget, timeline, message } = body;

    // Email notification (you can integrate with services like SendGrid, Resend, etc.)
    const emailData = {
      to: 'services.vistaar@gmail.com',
      from: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || 'N/A'}
        Project Type: ${projectType}
        Budget: ${budget || 'N/A'}
        Timeline: ${timeline || 'N/A'}
        Message: ${message}
      `,
    };

    // Log the submission (replace with actual email service)
    console.log('Contact form submission:', emailData);

    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ success: false, message: 'Failed to submit form' }, { status: 500 });
  }
}
