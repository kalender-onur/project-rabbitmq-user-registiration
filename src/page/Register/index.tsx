import PasswordField from "@/components/PasswordField";
import { ToastError, ToastSuccess } from "@/components/Toast";
import { LoadingButton } from "@mui/lab";
import {
  Container,
  CssBaseline,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Register } from "@/services/api/AuthApi";
import RegisterRequestDto from "@/types/Requests/RegiserRequestDto";
import validationSchema from "./Validation";

function RegisterPage() {
  const navigate = useNavigate();

  const initialValues: RegisterRequestDto = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    surname: "",
  };
  const registerMutation = useMutation({
    mutationFn: Register,
    onError: (error: any) => {
      if (error.response !== undefined) ToastError(error.response.data.message);
      else ToastError(error.message);
    },
    onSuccess: (success) => {
      if (success.data !== undefined) {
        ToastSuccess("Register successful");
        navigate("/");
      } else {
        ToastError("Unexpected Error.");
      }
    },
  });

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      await registerMutation.mutateAsync(values);
    },
    validationSchema: validationSchema(),
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Stack>
        <Typography component="h1" variant="h5">
          Kayıt Ol
        </Typography>

        <form noValidate onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            autoFocus
            type="email"
            value={formik.values?.email}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onChange={(value) => {
              formik.setFieldValue("email", value.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Ad"
            name="name"
            value={formik.values?.name}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            onChange={(value) => {
              formik.setFieldValue("name", value.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Soyad"
            name="surname"
            value={formik.values?.surname}
            onBlur={formik.handleBlur}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
            onChange={(value) => {
              formik.setFieldValue("surname", value.target.value);
            }}
          />
          <PasswordField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Şifre"
            autoComplete="current-password"
            value={formik.values?.password}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onChange={(value) => {
              formik.setFieldValue("password", value.target.value);
            }}
          />
          <PasswordField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Şifre (Tekrar)"
            autoComplete="current-password"
            value={formik.values?.confirmPassword}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            onChange={(value) => {
              formik.setFieldValue("confirmPassword", value.target.value);
            }}
          />

          <LoadingButton
            type="submit"
            fullWidth
            disabled={formik.isSubmitting}
            loading={formik.isSubmitting}
            variant="contained"
            color="primary"
          >
            Kayıt Ol
          </LoadingButton>
        </form>
      </Stack>
    </Container>
  );
}

export default RegisterPage;
