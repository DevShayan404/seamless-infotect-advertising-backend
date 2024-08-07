import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class ContactUsService {
  async sendEmail(contactData: any) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'muhammadshayandev@gmail.com',
        pass: 'mhoh xzvh bkbb eklh',
      },
    });
    const mailOptions = {
      from: contactData.email,
      to: 'muhammadshayandev@gmail.com',
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
