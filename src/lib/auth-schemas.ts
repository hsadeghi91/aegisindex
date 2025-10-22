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
    .min(12, { message: "رمز عبور باید حداقل ۱۲ کاراکتر باشد" })
    .max(100, { message: "رمز عبور نباید بیشتر از ۱۰۰ کاراکتر باشد" })
    .regex(/[a-z]/, { message: "رمز عبور باید حداقل یک حرف کوچک داشته باشد" })
    .regex(/[A-Z]/, { message: "رمز عبور باید حداقل یک حرف بزرگ داشته باشد" })
    .regex(/[0-9]/, { message: "رمز عبور باید حداقل یک عدد داشته باشد" })
    .regex(/[^a-zA-Z0-9]/, { message: "رمز عبور باید حداقل یک کاراکتر خاص داشته باشد" }),
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
