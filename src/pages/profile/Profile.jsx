import { yupResolver } from "@hookform/resolvers/yup";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LockIcon from "@mui/icons-material/LockOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import UsernameIcon from "@mui/icons-material/PeopleAltOutlined";
import { Avatar, Card, Spacer } from "@nextui-org/react";
import clsx from "clsx";
import {
  Button,
  ErrorMessage,
  File,
  Input,
  Loading,
  Modal,
} from "components/common";
import { AnimatedLayout } from "components/layouts";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAvatarRequest,
  getProfileRequest,
  updateAvatarRequest,
  updatePasswordRequest,
  updateProfileRequest,
} from "store/actions/profile.action";
import { formatDate } from "utils/function.util";
import { titlePage } from "utils/titlePage.util";
import { ProfileContainer } from "./Profile.style";
import { avatarSchema, passwordSchema, profileSchema } from "./schema";

function Profile() {
  titlePage("Multirt | Profile");

  //* Redux hooks --------------------------------------------------------------------------------------------
  const { profile, loading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  //* Declare global variables -------------------------------------------------------------------------------
  //* Local state --------------------------------------------------------------------------------------------
  const [openUpdateProfileModal, setOpenUpdateProfileModal] = useState(false);
  const [openUpdateAvatarModal, setOpenUpdateAvatarModal] = useState(false);
  const [openUpdatePasswordModal, setOpenUpdatePasswordModal] = useState(false);
  const [avatarAction, setAvatarAction] = useState("");
  const [fileName, setFileName] = useState("");
  const [pw1, setPw1] = useState(false);
  const [pw2, setPw2] = useState(false);
  const [pw3, setPw3] = useState(false);
  const [previewFile, setPreviewFile] = useState("");

  //* Form and validate --------------------------------------------------------------------------------------
  const {
    register: regProfile,
    handleSubmit: handleSubmitProfile,
    trigger: triggerProfile,
    resetField: resetFieldProfile,
    reset: resetProfile,
    formState: { errors: errorsProfile },
  } = useForm({
    resolver: yupResolver(profileSchema),
  });

  const {
    register: regAvatar,
    handleSubmit: handleSubmitAvatar,
    trigger: triggerAvatar,
    resetField: resetFieldAvatar,
    formState: { errors: errorsAvatar },
  } = useForm({
    resolver: yupResolver(avatarSchema),
  });

  const {
    register: regPassword,
    handleSubmit: handleSubmitPassword,
    trigger: triggerPassword,
    resetField: resetFieldPassword,
    formState: { errors: errorsPassword },
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });

  //* Hooks --------------------------------------------------------------------------------------------------
  //* Effects ------------------------------------------------------------------------------------------------
  useEffect(() => {
    dispatch(getProfileRequest());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (profile)
      resetProfile({
        name: profile.name,
        email: profile.email,
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  //@ (handleClearForm): clear form -------------------------------------------------------
  const handleClearForm = () => {
    resetFieldProfile("name");
    resetFieldProfile("email");
    resetFieldAvatar("avatar");
    resetFieldPassword("password");
    resetFieldPassword("oldPassword");
    resetFieldPassword("confirmPassword");
    setFileName("");
    setPreviewFile(null);
  };

  //@ (handleChangeFile): handle choose a file -------------------------------------------------------
  const handleChangeFile = (e) => {
    setFileName(e.target.value);
    const imagePreview = URL.createObjectURL(e.target.files[0]);
    setPreviewFile(imagePreview);
  };

  //@ (handleAvatarAction): handle update and delete avatar action
  function handleAvatarAction(action) {
    setAvatarAction(action);
  }

  //! async (onSubmitProfile): Submit profile -------------------------------------------------------
  const onSubmitProfile = (form) => {
    dispatch(updateProfileRequest(form));
    setOpenUpdateProfileModal(false);
  };

  //! async (onSubmitAvatar): Submit avatar -------------------------------------------------------
  const onSubmitAvatar = (form) => {
    if (avatarAction === "update") {
      const formData = new FormData();
      formData.append("avatar", form.avatar[0]);
      dispatch(updateAvatarRequest(formData));
      setOpenUpdateAvatarModal(false);
    } else {
      dispatch(deleteAvatarRequest());
      setOpenUpdateAvatarModal(false);
    }
    setAvatarAction("");
  };

  //! async (onSubmitPassword): Submit password -------------------------------------------------------
  const onSubmitPassword = (form) => {
    dispatch(updatePasswordRequest(form));
    setOpenUpdatePasswordModal(false);
  };

  //! Condition rendering --------------------------------------------------------------------------------------------------
  //!! Return section ------------------------------------------------------------------------------------------------------
  return (
    <AnimatedLayout>
      <ProfileContainer>
        {/* //*---------------------------------------- Card 1 ----------------------------------------*/}
        <Card css={{ mw: "420px", padding: "25px 40px" }}>
          <div className="horizontal-center">
            <p>Comming soon</p>
            <Spacer x={0.5}></Spacer>
            <Loading />
          </div>
        </Card>

        {/* //*---------------------------------------- Card 2 ----------------------------------------*/}
        <Card
          css={{
            maxWidth: "420px",
            minWidth: "420px",
            padding: "25px 40px",
            margin: "0 90px",
          }}
        >
          <Card.Header className="center">
            <Avatar
              className="avatar"
              text={profile?.name.charAt(0).toUpperCase()}
              src={profile?.avatar?.path}
            />
          </Card.Header>
          <Card.Body>
            {loading === true ? (
              <Loading type="gradient" size="lg" />
            ) : (
              <>
                <p className="mb-10">
                  <span className="title">ID</span>
                  <span className="content">{profile?._id}</span>
                </p>
                <p className="mb-10">
                  <span className="title">Name</span>
                  <span className="content">{profile?.name}</span>
                </p>
                <p className="mb-10">
                  <span className="title">Email</span>
                  <span className="content">{profile?.email}</span>
                </p>
                <p className="mb-10">
                  <span className="title">Account</span>
                  <span className="content">{profile?.role?.role_name}</span>
                </p>
              </>
            )}
          </Card.Body>
          <Card.Footer className="center full-width">
            <Button
              color="warning"
              onClick={() => {
                setOpenUpdateProfileModal(true);
                handleClearForm();
              }}
            >
              Update profile
            </Button>
            <Spacer x={1} />
            <div className="horizontal-center">
              <Button
                color="success"
                width="100%"
                onClick={() => {
                  setOpenUpdateAvatarModal(true);
                  handleClearForm();
                }}
              >
                Change avatar
              </Button>
              <Button
                color="danger"
                width="100%"
                onClick={() => {
                  setOpenUpdatePasswordModal(true);
                  handleClearForm();
                }}
              >
                Change password
              </Button>
            </div>
          </Card.Footer>
        </Card>

        {/* //*----------------------------------------- Card 3 ----------------------------------------*/}
        <Card css={{ mw: "420px", padding: "25px 40px" }}>
          <div className="horizontal-center">
            <p>Comming soon</p>
            <Spacer x={0.5}></Spacer>
            <Loading />
          </div>
        </Card>

        {/* //!--------------------------------- Modal section ----------------------------------------*/}
        {/* //* Modal: update profile ------------------------------- */}
        <Modal
          open={openUpdateProfileModal}
          header="Update profile"
          close={() => setOpenUpdateProfileModal(false)}
        >
          <form onSubmit={handleSubmitProfile(onSubmitProfile)}>
            <Input
              label={<UsernameIcon />}
              placeholder="Name"
              value="name"
              register={regProfile}
              error={errorsProfile.name ? true : false}
            />
            {errorsProfile.name ? (
              <ErrorMessage>{errorsProfile.name.message}</ErrorMessage>
            ) : (
              <Spacer y={1} />
            )}
            <Input
              label={<EmailIcon />}
              placeholder="Email"
              value="email"
              register={regProfile}
              error={errorsProfile.email ? true : false}
            />
            {errorsProfile.email && (
              <ErrorMessage>{errorsProfile.email.message}</ErrorMessage>
            )}
            <footer className="modal-footer">
              <Button
                color="warning"
                width="170px"
                onClick={() => setOpenUpdateProfileModal(false)}
              >
                Cancel
              </Button>
              <Button
                color="success"
                type="submit"
                width="170px"
                disabled={loading === true ? true : false}
                onClick={() => triggerProfile()}
              >
                {loading === true ? <Loading color="white" /> : "Update"}
              </Button>
            </footer>
          </form>
        </Modal>

        {/* //* Modal: update avatar ------------------------------- */}
        <Modal
          open={openUpdateAvatarModal}
          header="Change avatar"
          close={() => setOpenUpdateAvatarModal(false)}
        >
          <div className="horizontal-center">
            <Avatar
              size={"xl"}
              text={profile?.name.charAt(0).toUpperCase()}
              css={{ size: "$40" }}
              src={previewFile}
            />
          </div>
          <form onSubmit={handleSubmitAvatar(onSubmitAvatar)}>
            <File
              onChange={handleChangeFile}
              name={fileName}
              fileTitle="Choose avatar"
              onClear={handleClearForm}
              register={regAvatar}
              value="avatar"
            />
            {errorsAvatar.avatar && (
              <ErrorMessage>{errorsAvatar.avatar.message}</ErrorMessage>
            )}
            <footer className="modal-footer">
              <Button
                color="warning"
                width="110px"
                onClick={() => setOpenUpdateAvatarModal(false)}
              >
                Cancel
              </Button>
              <Button
                color="success"
                type="submit"
                width="110px"
                disabled={loading === true ? true : false}
                onClick={() => {
                  triggerAvatar();
                  handleAvatarAction("update");
                }}
              >
                {loading === true ? <Loading color="white" /> : "Update"}
              </Button>
              <Button
                color="danger"
                type="submit"
                width="110px"
                disabled={profile?.avatar === null}
                onClick={() => handleAvatarAction("delete")}
              >
                Delete
              </Button>
            </footer>
          </form>
        </Modal>

        {/* //* Modal: update password ------------------------------- */}
        <Modal
          open={openUpdatePasswordModal}
          header="Change password"
          close={() => setOpenUpdatePasswordModal(false)}
        >
          <form onSubmit={handleSubmitPassword(onSubmitPassword)}>
            <Input
              placeholder="Old password"
              label={<LockIcon />}
              value="oldPassword"
              register={regPassword}
              password
              isText={pw1}
              onPassword={() => setPw1(!pw1)}
              error={errorsPassword.oldPassword ? true : false}
            />
            {errorsPassword.oldPassword ? (
              <ErrorMessage>{errorsPassword.oldPassword.message}</ErrorMessage>
            ) : (
              <Spacer y={1} />
            )}
            <Input
              placeholder="New password"
              label={<LockIcon />}
              value="password"
              register={regPassword}
              password
              isText={pw2}
              onPassword={() => setPw2(!pw2)}
              error={errorsPassword.password ? true : false}
            />
            {errorsPassword.password ? (
              <ErrorMessage>{errorsPassword.password.message}</ErrorMessage>
            ) : (
              <Spacer y={1} />
            )}
            <Input
              placeholder="Confirm new password"
              label={<LockResetOutlinedIcon />}
              value="confirmPassword"
              register={regPassword}
              password
              isText={pw3}
              onPassword={() => setPw3(!pw3)}
              error={errorsPassword.confirmPassword ? true : false}
            />
            {errorsPassword.confirmPassword && (
              <ErrorMessage>
                {errorsPassword.confirmPassword.message}
              </ErrorMessage>
            )}
            <footer className="modal-footer">
              <Button
                color="warning"
                width="170px"
                onClick={() => setOpenUpdatePasswordModal(false)}
              >
                Cancel
              </Button>
              <Button
                color="success"
                width="170px"
                type="submit"
                disabled={loading === true ? true : false}
                onClick={() => triggerPassword()}
              >
                {loading === true ? <Loading color="white" /> : "Update"}
              </Button>
            </footer>
          </form>
        </Modal>
      </ProfileContainer>
    </AnimatedLayout>
  );
}

export default Profile;
