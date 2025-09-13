import z from "zod";

const phoneRegex =
  /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-4|6-9])[0-9]{7}$/;

export const contactSchema = z.object({
  fullName: z.string().min(1, "Trường này không được để trống"),
  email: z.email("Email không hợp lệ"),
  phone: z.string().regex(phoneRegex, "Số điện thoại không hợp lệ"),
  message: z.string().optional(),
});
