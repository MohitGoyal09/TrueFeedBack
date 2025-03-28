import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  console.log(
    `Attempting to send verification email to: ${email} for user: ${username}`
  );
  try {
    console.log("Calling resend.emails.send...");
    await resend.emails.send({
      from: "noreply@mohitg.xyz",
      to: email,
      subject: "Mystery Message Verification Code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    console.log(`Successfully initiated email send to: ${email}`);
    return { success: true, message: "Verification email sent successfully." };
  } catch (emailError: any) {
    console.error("Error sending verification email:", emailError);
    console.error("Resend Error Code:", emailError?.code);
    console.error("Resend Error Message:", emailError?.message);
    console.error("Resend Error Full:", JSON.stringify(emailError, null, 2));
    return {
      success: false,
      message: `Failed to send verification email: ${
        emailError?.message || "Unknown Resend error"
      }`,
    };
  }
}
