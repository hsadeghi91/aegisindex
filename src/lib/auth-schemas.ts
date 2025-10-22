import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "نام باید حداقل ۲ کاراکتر باشد" })
    .max(100, { message: "نام نباید بیشتر از ۱۰۰ کاراکتر باشد" }),
  email: z
    .string()
    .trim()
    .email({ message: "ایمیل معتبر نیست" })
    .max(255, { message: "ایمیل نباید بیشتر از ۲۵۵ کاراکتر باشد" }),
  password: z
    .string()
    .min(6, { message: "رمز عبور باید حداقل ۶ کاراکتر باشد" })
    .max(100, { message: "رمز عبور نباید بیشتر از ۱۰۰ کاراکتر باشد" }),
});

export const signInSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "ایمیل معتبر نیست" })
    .max(255, { message: "ایمیل نباید بیشتر از ۲۵۵ کاراکتر باشد" }),
  password: z
    .string()
    .min(1, { message: "رمز عبور الزامی است" })
    .max(100, { message: "رمز عبور نباید بیشتر از ۱۰۰ کاراکتر باشد" }),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;
