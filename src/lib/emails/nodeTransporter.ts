import { render } from 'svelte-email';

import nodemailer from 'nodemailer';
import Welcome from '$lib/emails/Welcome.svelte';

const email = import.meta.env.VITE_EMAIL;
const password = import.meta.env.VITE_PASSWORD;
interface EmailData {
	name: string;
	email: string;
	subject?: string;
	phone?: string;
	message: string;
}
const transporter = nodemailer.createTransport({
	service: 'gmail',

	auth: {
		user: email,
		pass: password
	}
});
export function sendMail(data: EmailData) {
	const { name, email, subject, message, phone } = data;
	const emailHtml = render({
		template: Welcome,
		// component: Welcome,
		props: {
			name,
			email,
			message,
			phone,
			subject
		}
	});

	const mailOptions = {
		from: email,
		to: 'kanward80@gmail.com',
		subject: 'hello world',
		html: emailHtml
	};
	// Send the email
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error('❌ Error:', error.message);
		} else {
			console.log('✅ Email sent:', info.response);
		}
	});
}
