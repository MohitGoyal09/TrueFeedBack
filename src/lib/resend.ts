import { Resend } from "resend";

// Log the key presence (Be careful NOT to log the actual key value!)
console.log(
  `Resend API Key Present: ${!!process.env.RESEND_API_KEY?.substring(0, 5)}`
);
// You could log the first few characters if needed for verification, but avoid logging the full key.
// console.log(`Resend API Key Starts With: ${process.env.RESEND_API_KEY?.substring(0, 5)}...`);

export const resend = new Resend(process.env.RESEND_API_KEY);
