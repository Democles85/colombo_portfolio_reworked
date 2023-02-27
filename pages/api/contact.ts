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
      <div style="width: 100%; height: 100%; background-color: #111111; color: #ffffff; padding: 20px; font-family: 'Roboto', sans-serif; border-radius: 10px;">
        <h1 style="font-size: 2rem; font-weight: 700; margin-bottom: 0;">New Message from <span style="color: #FFAF36;">Resonate with Yourself</span></h1>
        <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 0;"><span style="color: #FFAF36;">Name:</span> ${firstName} ${lastName}</h2>
        <p style="font-size: 1.25rem; font-weight: 400; margin-bottom: 0;"><span style="color: #FFAF36;">Email:</span> ${email}</p>
        <p style="font-size: 1.25rem; font-weight: 400; margin-bottom: 0;"><span style="color: #FFAF36;">Phone Number:</span> ${phone}</p>
        <p style="font-size: 1.25rem; font-weight: 400; margin-bottom: 0;"><span style="color: #FFAF36;">Country:</span> ${country}</p>
        <p style="font-size: 1.25rem; font-weight: 400; margin-bottom: 0;"><span style="color: #FFAF36;">Message:</span><br>${message}</p>
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
