import { object, string } from "yup";

const payload = {
    body: object({
        title: string().required("Title Sangat Dibutuhkan"),
        body: string()
            .required("Isi Text Sangat Dibutuhkan")
            .min(120, "Isian Text Sangat Pendek - Minimal 120 Karakter"),
    }),
};

const params = {
    params: object({
        postId: string().required("postId sangat dibutuhkan"),
    }),
};

export const createPostSchema = object({
    ...payload,
});

export const updatePostSchema = object({
    ...params,
    ...payload,
});

export const deletePostSchema = object({
    ...params,
});
