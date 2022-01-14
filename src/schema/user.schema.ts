import { object, string, ref } from "yup";

export const createUserSchema = object({
    body: object({
        name: string().required("Name Sangan Dibutuhkan"),
        password: string()
            .required("Password Sangat Dibutuhkan")
            .min(6, "Panjang Password Terlalu Pendek, Minimal 6 Karakter.")
            .matches(/^[a-zA-Z0-9_.-]*$/, "Password Hanya Boleh Berisi Huruf Latin."),
        passwordConfirmation: string().oneOf(
            [ref("password"), null],
            "Passwords Harus Sama"
        ),
        role: string().required("Role User Sangat Dibutuhkan"),
        email: string()
            .email("Alamat Email Harus Valid")
            .required("Alamat Email Sangat Dibutuhkan"),
    }),
});

export const createUserSessionSchema = object({
    body: object({
        password: string()
            .required("Password Sangat Dibutuhkan")
            .min(6, "Panjang Password Terlalu Pendek, Minimal 6 Karakter.")
            .matches(/^[a-zA-Z0-9_.-]*$/, "Password Hanya Boleh Berisi Huruf Latin."),

        email: string()
            .email("Alamat Email Harus Valid")
            .required("Alamat Email Sangat Dibutuhkan"),
    }),
});
