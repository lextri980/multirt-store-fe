import { FILE_SIZE_MAX } from "constants/common";
import {
  CONFIRM_PW,
  FILE_SIZE,
  FILE_TYPE,
  FORMAT,
  REQUIRED,
} from "constants/message";
import * as yup from "yup";

export const profileSchema = yup.object().shape({
  name: yup.string().required(`Name ${REQUIRED}`),
  email: yup.string().required(`Email ${REQUIRED}`).email(`${FORMAT} email`),
});

export const avatarSchema = yup.object().shape({
  avatar: yup
    .mixed()
    .required(`Avatar ${REQUIRED}`)
    .test("hasFile", `Avatar ${REQUIRED}`, (value) => value && value[0])
    .test("fileType", FILE_TYPE, (value) => {
      if (!value || !value[0]) return true;
      return (
        value[0].type === "image/jpeg" ||
        value[0].type === "image/png" ||
        value[0].type === "image/jpg" ||
        value[0].type === "image/gif"
      );
    })
    .test("fileSize", FILE_SIZE, (value) => {
      if (!value || !value[0]) return true;
      return value[0].size < FILE_SIZE_MAX;
    }),
});

export const passwordSchema = yup.object().shape({
  oldPassword: yup.string().required(`Old password ${REQUIRED}`),
  password: yup.string().required(`New password ${REQUIRED}`),
  confirmPassword: yup
    .string()
    .required(`Confirm password ${REQUIRED}`)
    .oneOf([yup.ref("password"), null], CONFIRM_PW),
});
