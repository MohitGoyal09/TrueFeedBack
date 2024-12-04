import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be at least 2 characters")
  .max(20, "Username must be no more than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters");

export const signUpSchema = z.object({
    username : usernameValidation,
    password : z.string().min(8, "Password must be at least 8 characters"),
    email : z.string().email("Invalid email address"),
});
