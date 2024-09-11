import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class ContactUsService {
  async sendEmail(contactData: any) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ionos.com',
      port: 587,
      secure: false,
      auth: {
        user: 'contact@infotechseamless.com',
        pass: 'Seamless@contact!',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const mailOptions = {
      from: 'contact@infotechseamless.com',
      to: 'contact@infotechseamless.com',
      subject: contactData.subject,
      text: `${contactData.message}\n\n\nCompany: ${contactData.company}\nName: ${contactData.name}\nPhone no: ${contactData.phone}\nE-mail: ${contactData.email}`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      return { message: 'Email sent successfully!', info };
    } catch (error) {
      return { message: 'Error sending email', error };
    }
  }
}
