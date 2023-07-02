import { STORAGE_TOKEN } from "constants/service.const";
import PropTypes from "prop-types";
import { getCookie, getLocal } from "utils/storage.util";

// RoleView.propTypes = {
//   role: PropTypes.array.isRequired,
//   children: PropTypes.node.isRequired,
// };

function RoleView(props) {
  const { role, children } = props;

  //* Declare global variables
  const user = localStorage[STORAGE_TOKEN]
    ? JSON.parse(getLocal("user"))
    : JSON.parse(getCookie("user"));

  return role && role.includes(user.role.role_name) ? children : <></>;
}

export default RoleView;
