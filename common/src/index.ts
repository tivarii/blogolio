import z from "zod"

export const signupInput=z.object({
    username:z.string().email(),
    password:z.string().min(8),
    fistname: z.string().optional(),
    lastname: z.string().optional()
})

export const signinInput=z.object({
    username:z.string().email(),
    password:z.string().min(8),
})

export const createblogInput=z.object({
    title:z.string(),
    content:z.string(),
});

export const updateblogInput=z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()
});

export type updateblogInputT=z.infer<typeof updateblogInput>;
export type signinInputT=z.infer<typeof signinInput>;
export type createblogInputT=z.infer<typeof createblogInput>;
export type signupInputT=z.infer<typeof signupInput>;