import * as yup from "yup";
const validationSchema = () => {
  return yup.object({
    email: yup.string().required("Email is required!"),
    password: yup.string().required("Password is required!"),
  });
};

export default validationSchema;
