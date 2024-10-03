import LoginRequestDto from "@/types/Requests/LoginRequestDto";
import instance from "../axios";
import RegiserRequestDto from "@/types/Requests/RegiserRequestDto";

const Login = async (requestModel: LoginRequestDto) => {
  const { data } = await instance.post("/auth/login", requestModel);
  return data;
};

const Register = async (requestModel: RegiserRequestDto) => {
  const { data } = await instance.post("/auth/register", requestModel);
  return data;
};

export { Login, Register };
