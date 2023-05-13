import Account from "@mui/icons-material/AccountCircleOutlined";
import AnchorIcon from "@mui/icons-material/Anchor";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Moon from "@mui/icons-material/DarkModeOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import Sun from "@mui/icons-material/WbSunnyOutlined";
import {
  Avatar,
  Badge,
  Dropdown,
  Input,
  Navbar,
  Spacer,
  Switch,
  Text,
  Tooltip,
} from "@nextui-org/react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutRequest } from "store/actions/auth.action";
import { getProfileRequest } from "store/actions/profile.action";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import { NavbarContainer } from "./Navbar.style";

function NavbarMenu() {
  //* Redux hooks
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);

  //* Local state
  const [switchChecked, setSwitchChecked] = useState(true);
  const [logoutModal, setLogoutModal] = useState(false);

  //* Hooks
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getProfileRequest());
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  //@ (handleChangeSwitch): change color for switch
  const handleChangeSwitch = () => {
    setSwitchChecked(!switchChecked);
  };

  //@ (changeRoute): Change route navigation
  const changeRoute = (key) => {
    if (key === "logout") {
      setLogoutModal(true);
    } else {
      navigate(`/${key}`);
    }
  };

  //! async (onSubmitLogout):  handle logout
  const onSubmitLogout = () => {
    setLogoutModal(false);
    dispatch(logoutRequest(() => navigate("/dashboard")));
  };

  //* Condition rendering
  let topLoginBtn;
  if (isAuthenticated === false) {
    topLoginBtn = (
      <Tooltip
        content="You do not have an account? Click here to create an account."
        placement="bottom"
        color="invert"
      >
        <Link to="/authentication" className="link-redirect login-link">
          <Account style={{ marginRight: "5px" }} />
          Login
        </Link>
      </Tooltip>
    );
  } else {
    topLoginBtn = (
      <>
        <Avatar
          style={{ marginRight: "-20px" }}
          text={profile?.name.charAt(0).toUpperCase()}
          src={profile?.avatar?.path}
        />
        <Dropdown>
          <Dropdown.Button light color="primary">
            {profile?.name}
          </Dropdown.Button>
          <Dropdown.Menu onAction={changeRoute} aria-label="Static Actions">
            <Dropdown.Item key="dashboard">
              <div className="vertical-center">
                <DashboardIcon />
                <span className="ml-5">Dashboard</span>
              </div>
            </Dropdown.Item>
            <Dropdown.Item key="profile">
              <div className="vertical-center">
                <AssignmentIndIcon />
                <span className="ml-5">Profile</span>
              </div>
            </Dropdown.Item>
            {user.isAdmin ? (
              <Dropdown.Item key="manage-user">
                <div className="vertical-center">
                  <PeopleIcon />
                  <span className="ml-5">User management</span>
                </div>
              </Dropdown.Item>
            ) : (
              ""
            )}
            <Dropdown.Item color="error" key="logout">
              <div className="vertical-center">
                <LogoutIcon />
                <span className="ml-5">Logout</span>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  }

  //!! Return section ---------------------------------
  return (
    <NavbarContainer>
      <Navbar isBordered className="dark-theme">
        <Navbar.Brand
          onClick={() => navigate("/dashboard")}
          style={{ cursor: "pointer", minWidth: "300px" }}
        >
          <span className="logo-web">
            <AnchorIcon />
          </span>
          <Text b color="inherit" hideIn="xs">
            MULTIRT STORE
          </Text>
          <Spacer x={1}></Spacer>
          {user ? (
            <Badge
              size="md"
              color={user.isAdmin === true ? "warning" : "success"}
            >
              {user.isAdmin === true ? "Admin account" : "User account"}
            </Badge>
          ) : (
            ""
          )}
        </Navbar.Brand>
        {/* //! Middle menu navbar ----------------------------------- */}
        <Navbar.Content>
          {location.pathname === "/profile" ? (
            <Tooltip
              content="Click to go to dashboard"
              placement="bottom"
              color="invert"
            >
              <div
                className="title-profile"
                onClick={() => navigate("/dashboard")}
              >
                <SupervisedUserCircleOutlinedIcon />
                <h4>Your profile</h4>
              </div>
            </Tooltip>
          ) : location.pathname === "/dashboard" ? (
            <Input
              className="search-input"
              clearable
              bordered
              color="primary"
              contentRightStyling={false}
              placeholder="Search..."
              contentLeft={<SearchIcon className="search-icon" />}
            />
          ) : (
            ""
          )}
        </Navbar.Content>
        {/* //! Right menu navbar ----------------------------------- */}
        <Navbar.Content style={{ cursor: "pointer", minWidth: "300px" }}>
          <Badge size="sm" content="1" color="error">
            <ShoppingCart className="pointer" />
          </Badge>
          <Switch
            checked={switchChecked}
            size="md"
            shadow
            iconOn={<Sun />}
            iconOff={<Moon />}
            className={clsx({
              "switch-theme-light": switchChecked === true,
              "switch-theme-dark": switchChecked === false,
            })}
            aria-label="switch"
            onChange={handleChangeSwitch}
          />
          {/* //* Group btn login checking authen */}
          {topLoginBtn}
        </Navbar.Content>
      </Navbar>
      {/* //! Secondary menu navbar ----------------------------------- */}
      {location.pathname !== "/profile" &&
      location.pathname !== "/manage-user" ? (
        <div className="secondary-menu">
          <Dropdown>
            <Dropdown.Button>Menu</Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
              <Dropdown.Item key="new">New file</Dropdown.Item>
              <Dropdown.Item key="copy">Copy link</Dropdown.Item>
              <Dropdown.Item key="edit">Edit file</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Spacer x={2} />
          <Button name="ABC" className="ml-20" color="success">
            ABC
          </Button>

          <Spacer x={2} />
          <Button name="ABC" className="ml-20" color="success">
            ABC
          </Button>
          <Spacer x={2} />
          <Button name="ABC" className="ml-20" color="success">
            ABC
          </Button>

          <Spacer x={2} />
          <Button name="ABC" className="ml-20" color="success">
            ABC
          </Button>
        </div>
      ) : (
        ""
      )}

      {/* //* Modal section ------------------------------------------------------- */}
      <Modal
        header="Do you want to logout?"
        open={logoutModal}
        close={() => {
          setLogoutModal(false);
        }}
      >
        <div className="modal-footer">
          <Button color="warning" onClick={() => setLogoutModal(false)}>
            Cancel
          </Button>
          <Button color="danger" type="submit" onClick={() => onSubmitLogout()}>
            Logout
          </Button>
        </div>
      </Modal>
    </NavbarContainer>
  );
}

export default NavbarMenu;
