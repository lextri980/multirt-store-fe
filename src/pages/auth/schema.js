import { CONFIRM_PW, FORMAT, PW_FORMAT, REQUIRED } from "constants/message";
import { passwordRegex } from "constants/regex.const";
import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required(`Email ${REQUIRED}`).email(`${FORMAT} email`),
  password: yup.string().required(`Password ${REQUIRED}`),
});

export const sendMailSchema = yup.object().shape({
  email: yup.string().required(`Email ${REQUIRED}`).email(`${FORMAT} email`),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required(`Password ${REQUIRED}`)
    .matches(passwordRegex, `${PW_FORMAT}`),
  confirmPassword: yup
    .string()
    .required(`Confirm password ${REQUIRED}`)
    .oneOf([yup.ref("password"), null], CONFIRM_PW),
});

export const registerSchema = yup.object().shape({
  email: yup.string().required(`Email ${REQUIRED}`).email(`${FORMAT} email`),
  name: yup.string().required(`Name ${REQUIRED}`),
  password: yup
    .string()
    .required(`Password ${REQUIRED}`)
    .matches(passwordRegex, `${PW_FORMAT}`),
  confirmPassword: yup
    .string()
    .required(`Confirm password ${REQUIRED}`)
    .oneOf([yup.ref("password"), null], CONFIRM_PW),
});
