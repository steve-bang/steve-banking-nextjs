import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatAmount(amount: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
}

export const authFormSchema = ( type:string ) =>  z.object({
  // sign-up
  firstName: type === 'sign-in' ? z.string().optional() : z.string(),
  lastName: type === 'sign-in' ? z.string().optional() : z.string(),
  address: type === 'sign-in' ? z.string().optional() : z.string(),
  state: type === 'sign-in' ? z.string().optional() : z.string(),
  postalCode: type === 'sign-in' ? z.string().optional() : z.string(),
  dateOfBirth: type === 'sign-in' ? z.string().optional() : z.string().regex(new RegExp(/^\d{4}-\d{2}-\d{2}$/), {
    message: "Invalid date format, use YYYY-MM-DD"
  }),

  // sign-in
  email: z.string().email(),
  password : z.string().min(6, {
    message: "Password must be at least 6 characters long"
  })
  .regex(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/), {
    message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
  }),
});