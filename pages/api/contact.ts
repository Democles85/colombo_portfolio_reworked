import sendgrid from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, lastName, subject, email, phone, country, message } =
    req.body;

  const msg = {
    to: 'resonatewithyourself@gmail.com',
    from: 'resonatewithyourselfemailer@gmail.com',
    subject: `[Message from Resonate With Yourself] ${subject}`,
    // Create HTML template for email body here
    html: `
      <div style="width: 100%; height: 100%; background-color: #111111; color: #ffffff; padding: 20px; font-family: 'Roboto', sans-serif;">
        <h1 style="font-size: 2rem; font-weight: 700; margin-bottom: 0;">New Message from <span style="color: #FFAF36;">Resonate with Yourself</span></h1>
        <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 0;">${firstName} ${lastName}</h2>
        <p style="font-size: 1.25rem; font-weight: 400; margin-bottom: 0;">${email}</p>
        <p style="font-size: 1.25rem; font-weight: 400; margin-bottom: 0;">${phone}</p>
        <p style="font-size: 1.25rem; font-weight: 400; margin-bottom: 0;">${country}</p>
        <p style="font-size: 1.25rem; font-weight: 400; margin-bottom: 0;">${message}</p>
      </div>
    `,
  };

  try {
    await sendgrid.send(msg);
    res.status(200).send('Success');
  } catch (error) {
    res.status(400).send('Error');
  }
};
