import { yupResolver } from "@hookform/resolvers/yup";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LockIcon from "@mui/icons-material/LockOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import { Card, Checkbox, Row, Spacer, Text } from "@nextui-org/react";
import Button from "components/common/button/Button";
import ErrorMessage from "components/common/errorMessage/ErrorMessage";
import Input from "components/common/input/Input";
import Loading from "components/common/loading/Loading";
import Modal from "components/common/modal/Modal";
import AnimatedLayout from "components/layouts/animatedLayout/AnimatedLayout";
import { CONFIRM_PW, FORMAT, PW_FORMAT, REQUIRED } from "constants/message";
import { passwordRegex } from "constants/regex.const";
import { useQuery } from "hooks/useRoute";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import {
  loginRequest,
  resetPasswordRequest,
  sendMailRequest,
} from "store/actions/auth.action";
import * as yup from "yup";
import { AuthContainer } from "./Auth.style";

function Login() {
  //* Redux hooks
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  //* Hooks
  const getQuery = useQuery();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (getQuery.userId && getQuery.token) {
      setResetPasswordModal(true);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //* Form handling
  const loginSchema = yup.object().shape({
    email: yup.string().required(`Email ${REQUIRED}`).email(`${FORMAT} email`),
    password: yup.string().required(`Password ${REQUIRED}`),
  });

  const sendMailSchema = yup.object().shape({
    email: yup.string().required(`Email ${REQUIRED}`).email(`${FORMAT} email`),
  });

  const resetPasswordSchema = yup.object().shape({
    password: yup
      .string()
      .required(`Password ${REQUIRED}`)
      .matches(passwordRegex, `${PW_FORMAT}`),
    confirmPassword: yup
      .string()
      .required(`Confirm password ${REQUIRED}`)
      .oneOf([yup.ref("password"), null], CONFIRM_PW),
  });

  const {
    register: regLogin,
    handleSubmit: handleSubmitLogin,
    resetField: resetFieldLogin,
    trigger: triggerLogin,
    control: controlLogin,
    formState: { errors: loginError },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const {
    register: regSendMail,
    handleSubmit: handleSubmitSendMail,
    trigger: triggerSendMail,
    resetField: resetFieldSendMail,
    formState: { errors: sendMailError },
  } = useForm({
    resolver: yupResolver(sendMailSchema),
  });

  const {
    register: regResetPassword,
    handleSubmit: handleSubmitResetPassword,
    trigger: triggerResetPassword,
    resetField: resetFieldResetPassword,
    formState: { errors: resetPasswordError },
  } = useForm({ resolver: yupResolver(resetPasswordSchema) });

  //* Local state
  const [typePw, setTypePw] = useState(false);
  const [sendMailResetPasswordModal, setSendMailResetPasswordModal] =
    useState(false);
  const [resetPasswordModal, setResetPasswordModal] = useState(false);
  const [typePw1, setTypePw1] = useState(false);
  const [typePw2, setTypePw2] = useState(false);

  //@ (navigateRoute): Change route action
  const navigateRoute = () => {
    navigate("/dashboard");
  };

  //@ (handleClearform): click to clear form text
  const handleClearform = () => {
    resetFieldLogin("email");
    resetFieldLogin("password");
    resetFieldSendMail("email");
    resetFieldResetPassword("password");
    resetFieldResetPassword("confirmPassword");
  };

  //@ (closeModal): close all modal
  const closeModal = () => {
    setSendMailResetPasswordModal(false);
    setResetPasswordModal(false);
    const userIdParam = searchParams.get("userId");
    const tokenParam = searchParams.get("token");

    if (userIdParam && tokenParam) {
      searchParams.delete("userId");
      searchParams.delete("token");
      setSearchParams(searchParams);
    }
  };

  //! async (onSubmitLogin): click to submit login form
  const onSubmitLogin = (form) => {
    dispatch(loginRequest(form, navigateRoute));
  };

  //! async (onSubmitSendMailReset): click to submit send mail form
  const onSubmitSendMailReset = (form) => {
    dispatch(sendMailRequest(form, closeModal));
  };

  //! async (onSubmitSendMailReset): click to submit send mail form
  const onSubmitResetPassword = (form) => {
    const formData = {
      password: form.password,
      userId: getQuery.userId,
      token: getQuery.token,
    };
    dispatch(resetPasswordRequest(formData, closeModal));
  };

  return (
    <AnimatedLayout>
      <AuthContainer>
        <Card css={{ mw: "400px", mh: "400px" }}>
          <form onSubmit={handleSubmitLogin(onSubmitLogin)}>
            <Card.Header className="card-header">
              <p className="title-card">Login</p>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "30px", px: "25px" }}>
              <Input
                placeholder="Email"
                label={<EmailIcon />}
                value="email"
                register={regLogin}
                error={loginError.email ? true : false}
              />
              {loginError.email ? (
                <ErrorMessage>{loginError.email.message}</ErrorMessage>
              ) : (
                <Spacer y={1.2} />
              )}
              <Input
                placeholder="Password"
                label={<LockIcon />}
                value="password"
                type={typePw}
                password
                onPassword={() => setTypePw(!typePw)}
                register={regLogin}
                error={loginError.password ? true : false}
              />
              {loginError.password ? (
                <ErrorMessage>{loginError.password.message}</ErrorMessage>
              ) : (
                <Spacer y={1.2} />
              )}
              <Row justify="space-between">
                <Controller
                  control={controlLogin}
                  name="remember"
                  defaultValue={true}
                  render={({ field }) => (
                    <Checkbox {...field} defaultSelected>
                      <Text size={14}>Remember me</Text>
                    </Checkbox>
                  )}
                ></Controller>
                <Text
                  size={14}
                  className="forgot-pw"
                  onClick={() => setSendMailResetPasswordModal(true)}
                >
                  Forgot password?
                </Text>
              </Row>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="flex-end">
                <Button color="warning" width="100px" onClick={handleClearform}>
                  Clear
                </Button>
                <Spacer x={1} />
                <Button
                  color="success"
                  width="100px"
                  type="submit"
                  disabled={loading === true ? true : false}
                  onClick={() => triggerLogin()}
                >
                  {loading === true ? <Loading color="white" /> : "Confirm"}
                </Button>
              </Row>
            </Card.Footer>
          </form>
        </Card>
        {/* //!--------------------------------- Modal section ----------------------------------------*/}
        {/* //* Modal send mail ------------------------------------------- */}
        <Modal
          header="Send mail resetting password"
          open={sendMailResetPasswordModal}
          close={() => {
            setSendMailResetPasswordModal(false);
          }}
        >
          <form onSubmit={handleSubmitSendMail(onSubmitSendMailReset)}>
            <Input
              placeholder="Email"
              label={<EmailIcon />}
              value="email"
              register={regSendMail}
              error={sendMailError.email ? true : false}
            />
            {sendMailError.email ? (
              <ErrorMessage>{sendMailError.email.message}</ErrorMessage>
            ) : (
              ""
            )}
            <footer className="modal-footer">
              <Button
                color="warning"
                onClick={() => setSendMailResetPasswordModal(false)}
              >
                Cancel
              </Button>
              <Button
                color="success"
                type="submit"
                disabled={loading === true ? true : false}
                onClick={() => triggerSendMail()}
              >
                {loading === true ? <Loading color="white" /> : "Send mail"}
              </Button>
            </footer>
          </form>
        </Modal>

        {/* //* Modal reset password --------------------------------------- */}
        <Modal
          header="Reset password"
          open={resetPasswordModal}
          close={() => {
            setResetPasswordModal(false);
          }}
        >
          <form onSubmit={handleSubmitResetPassword(onSubmitResetPassword)}>
            <Input
              placeholder="New password"
              label={<LockIcon />}
              value="password"
              password
              type={typePw1}
              onPassword={() => setTypePw1(!typePw1)}
              register={regResetPassword}
              error={resetPasswordError.password ? true : false}
            />
            {resetPasswordError.password ? (
              <ErrorMessage>{resetPasswordError.password.message}</ErrorMessage>
            ) : (
              <Spacer y={1.2} />
            )}
            <Input
              placeholder="Confirm password"
              label={<LockResetOutlinedIcon />}
              value="confirmPassword"
              password
              type={typePw2}
              onPassword={() => setTypePw2(!typePw2)}
              register={regResetPassword}
              error={resetPasswordError.confirmPassword ? true : false}
            />
            {resetPasswordError.confirmPassword ? (
              <ErrorMessage>
                {resetPasswordError.confirmPassword.message}
              </ErrorMessage>
            ) : (
              ""
            )}
            <footer className="modal-footer">
              <Button
                color="warning"
                onClick={() => setResetPasswordModal(false)}
              >
                Cancel
              </Button>
              <Button
                color="success"
                type="submit"
                disabled={loading === true ? true : false}
                onClick={() => triggerResetPassword()}
              >
                {loading === true ? (
                  <Loading color="white" />
                ) : (
                  "Reset password"
                )}
              </Button>
            </footer>
          </form>
        </Modal>
      </AuthContainer>
    </AnimatedLayout>
  );
}

export default Login;
