import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required!")
    .min(3, "Username must be 3 characters long!"),

  email: yup
    .string()
    .email("Must contain a valid email!")
    .required("Email is required"),

  password: yup
    .string()
    .required("Password is required!")
    .min(6, "Password must contain 6 characters!"),

  tos: yup.boolean().oneOf([true], "Must accept the terms to continue!"),
});

export default formSchema;
