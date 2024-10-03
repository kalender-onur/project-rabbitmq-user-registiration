import * as yup from "yup";
const validationSchema = () => {
  return yup.object({
    email: yup
      .string()
      .required("Email is required!")
      .email("Must be valid email"),
    password: yup.string().required("Password is required!"),
    name: yup.string().required("Name is required!"),
    surname: yup.string().required("Surename is required!"),
    confirmPassword: yup
      .string()
      .required("Password (again) is required!")
      .oneOf([yup.ref("password")], "Passwods not match"),
  });
};

export default validationSchema;
