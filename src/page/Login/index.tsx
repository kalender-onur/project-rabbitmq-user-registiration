import PasswordField from "@/components/PasswordField";
import { ToastError, ToastSuccess } from "@/components/Toast";
import LoginRequestDto from "@/types/Requests/LoginRequestDto";
import {
  Container,
  CssBaseline,
  Typography,
  TextField,
  Stack,
  Box,
  Link,
} from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import validationSchema from "./LoginValitation";
import { useMutation } from "@tanstack/react-query";
import { Login } from "@/services/api/AuthApi";

export default function SignIn() {
  const navigate = useNavigate();

  const initialValues: LoginRequestDto = {
    email: "",
    password: "",
  };
  const loginMutation = useMutation({
    mutationFn: Login,
    onError: (error: any) => {
      if (error.response !== undefined) ToastError(error.response.data.message);
      else ToastError(error.message);
    },
    onSuccess: (success) => {
      if (success.data !== undefined) {
        ToastSuccess("Login successful");
        navigate("/");
      } else {
        ToastError("Unexpected Error.");
      }
    },
  });

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      await loginMutation.mutateAsync(values);
    },
    validationSchema: validationSchema(),
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Stack>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <form noValidate onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="User"
            name="email"
            type="email"
            autoFocus
            value={formik.values?.email}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onChange={(value) => {
              formik.setFieldValue("email", value.target.value);
            }}
          />
          <PasswordField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            autoComplete="current-password"
            value={formik.values?.password}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onChange={(value) => {
              formik.setFieldValue("password", value.target.value);
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
            Sign In
          </LoadingButton>
          <Box>
            Hesabınız yok mu?
            <Link
              variant="body1"
              component="button"
              onClick={() => {
                navigate("/Register");
              }}
            >
              Kayıt Olun
            </Link>
          </Box>
        </form>
      </Stack>
    </Container>
  );
}
