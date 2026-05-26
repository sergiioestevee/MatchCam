import { z } from 'zod'

export const authMethods = ['email', 'phone'] as const
export type AuthMethod = (typeof authMethods)[number]

const phonePattern = /^\+?[0-9]{9,15}$/

export const loginFormSchema = z
  .object({
    method: z.enum(authMethods),
    identifier: z.string().trim().min(1, 'Este campo es obligatorio.'),
    password: z
      .string()
      .min(8, 'La contraseña debe tener al menos 8 caracteres.')
      .max(72, 'La contraseña no puede superar 72 caracteres.'),
  })
  .superRefine((values, ctx) => {
    if (values.method === 'email') {
      const emailValidation = z.string().email().safeParse(values.identifier)

      if (!emailValidation.success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['identifier'],
          message: 'Introduce un email válido.',
        })
      }
      return
    }

    if (!phonePattern.test(values.identifier)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['identifier'],
        message: 'Introduce un teléfono válido (9 a 15 dígitos).',
      })
    }
  })

export type LoginFormValues = z.infer<typeof loginFormSchema>
