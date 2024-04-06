import z from "zod";
export declare const signupInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    fistname: z.ZodOptional<z.ZodString>;
    lastname: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    fistname?: string | undefined;
    lastname?: string | undefined;
}, {
    username: string;
    password: string;
    fistname?: string | undefined;
    lastname?: string | undefined;
}>;
export declare const signinInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export declare const createblogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export declare const updateblogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    id: number;
}, {
    title: string;
    content: string;
    id: number;
}>;
export type updateblogInputT = z.infer<typeof updateblogInput>;
export type signinInputT = z.infer<typeof signinInput>;
export type createblogInputT = z.infer<typeof createblogInput>;
export type signupInputT = z.infer<typeof signupInput>;
