import { yupResolver } from "@hookform/resolvers/yup";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LockIcon from "@mui/icons-material/LockOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import UsernameIcon from "@mui/icons-material/PeopleAltOutlined";
import { Card, Row, Spacer } from "@nextui-org/react";
import Button from "components/common/button/Button";
import ErrorMessage from "components/common/errorMessage/ErrorMessage";
import Input from "components/common/input/Input";
import Loading from "components/common/loading/Loading";
import AnimatedLayout from "components/layouts/animatedLayout/AnimatedLayout";
import { CONFIRM_PW, FORMAT, PW_FORMAT, REQUIRED } from "constants/message";
import { passwordRegex } from "constants/regex.const";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "store/actions/auth.action";
import * as yup from "yup";
import { AuthContainer } from "./Auth.style";

function Register() {
  //* Redux hooks
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  //* Hooks
  const schema = yup.object().shape({
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

  const {
    register,
    handleSubmit,
    resetField,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //* Local state
  const [typePw1, setTypePw1] = useState(false);
  const [typePw2, setTypePw2] = useState(false);

  //@ (handleClearform): click to clear form text
  const handleClearform = () => {
    resetField("email");
    resetField("name");
    resetField("password");
    resetField("confirmPassword");
  };

  //! async (onSubmitLogin): click to submit login form
  const onSubmitRegister = (form) => {
    dispatch(registerRequest(form));
    handleClearform();
  };

  return (
    <AnimatedLayout>
      <AuthContainer>
        <Card css={{ mw: "400px", mh: "700px" }}>
          <form onSubmit={handleSubmit(onSubmitRegister)}>
            <Card.Header className="card-header">
              <p className="title-card">Register</p>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "40px", px: "25px" }}>
              {/* //+ input field: Email */}
              <Input
                placeholder="Email"
                label={<EmailIcon />}
                value="email"
                register={register}
                error={errors.email ? true : false}
              />
              {errors.email ? (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              ) : (
                <Spacer y={1.2} />
              )}
              {/* //+ input field: Name */}
              <Input
                placeholder="Name"
                label={<UsernameIcon />}
                value="name"
                register={register}
                error={errors.name ? true : false}
              />
              {errors.name ? (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              ) : (
                <Spacer y={1.2} />
              )}
              {/* //+ input field: Password */}
              <Input
                placeholder="Password"
                label={<LockIcon />}
                value="password"
                register={register}
                type={typePw1}
                password
                onPassword={() => setTypePw1(!typePw1)}
                error={errors.password ? true : false}
              />
              {errors.password ? (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              ) : (
                <Spacer y={1.2} />
              )}
              {/* //+ input field: Confirm password */}
              <Input
                placeholder="Confirm password"
                label={<LockResetOutlinedIcon />}
                value="confirmPassword"
                register={register}
                type={typePw2}
                password
                onPassword={() => setTypePw2(!typePw2)}
                error={errors.confirmPassword ? true : false}
              />
              {errors.confirmPassword && (
                <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
              )}
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
                  onClick={() => trigger()}
                >
                  {loading === true ? <Loading color="white" /> : "Confirm"}
                </Button>
              </Row>
            </Card.Footer>
          </form>
        </Card>
      </AuthContainer>
    </AnimatedLayout>
  );
}

export default Register;
