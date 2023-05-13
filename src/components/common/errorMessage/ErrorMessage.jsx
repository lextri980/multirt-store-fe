import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import { ErrorMessageContainer } from "./ErrorMessage.style";

function ErrorMessage({ children }) {
  return (
    <ErrorMessageContainer>
      <WarningAmberRoundedIcon sx={{ fontSize: "19px" }} />
      <span>{children}</span>
    </ErrorMessageContainer>
  );
}

export default ErrorMessage;
