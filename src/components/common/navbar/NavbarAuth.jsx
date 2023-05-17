import AnchorIcon from "@mui/icons-material/Anchor";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import { Button, Navbar, Text, Tooltip } from "@nextui-org/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { NavbarAuthContainer } from "./NavbarAuth.style";

NavbarAuth.propTypes = {
  isActive: PropTypes.bool,
  setIsActive: PropTypes.func,
};

function NavbarAuth({ isActive, setIsActive }) {
  return (
    <NavbarAuthContainer>
      <Navbar isBordered variant="floating" className="navbar-auth">
        <Navbar.Brand>
          <span className="logo-web">
            <AnchorIcon />
          </span>
          <Text b color="inherit" hideIn="xs">
            MULTIRT STORE
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor="success" hideIn="xs" variant="highlight">
          <Tooltip
            content="Let's buy something"
            placement="bottom"
            color="invert"
          >
            <Link to="/dashboard" className="link-redirect login-link">
              <CategoryOutlinedIcon style={{ marginRight: "5px" }} />
              Dashboard
            </Link>
          </Tooltip>
        </Navbar.Content>
        <Navbar.Content
          activeColor="primary"
          hideIn="xs"
          variant="underline-rounded"
        >
          <Button
            bordered={isActive === false}
            className="btn-group"
            onClick={() => setIsActive(true)}
          >
            Login
          </Button>
          <Button
            bordered={isActive === true}
            className="btn-group"
            onClick={() => setIsActive(false)}
          >
            Register
          </Button>
        </Navbar.Content>
      </Navbar>
    </NavbarAuthContainer>
  );
}

export default NavbarAuth;
