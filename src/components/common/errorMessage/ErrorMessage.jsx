import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import { ErrorMessageContainer } from "./ErrorMessage.style";
import PropTypes from 'prop-types';

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired
};

function ErrorMessage({ children }) {
  return (
    <ErrorMessageContainer>
      <WarningAmberRoundedIcon sx={{ fontSize: "19px" }} />
      <span>{children}</span>
    </ErrorMessageContainer>
  );
}

export default ErrorMessage;
