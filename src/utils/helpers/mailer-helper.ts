import { MailOptions } from 'nodemailer/lib/sendmail-transport';
import { transport } from '../../config/nodemailer.config';
import { constants } from '../constants/constants';
export const sendInvite = async (toEmail: string, verificationCode: string): Promise<any> => {
  try {
    const mailOptions: MailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: toEmail,
      subject: constants.MAIL_SUBJECT,
      text: `${constants.MAIL_TEXT} ${verificationCode}`,
    };
    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    return error;
  }
};
