import DashboardIcon from "@mui/icons-material/Dashboard";
import errorImg from "assets/img/error404.gif";
import Button from "components/common/button/Button";
import { useNavigate } from "react-router";
import { NotFoundContainer } from "./NotFound.style";

function NotFound() {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <img src={errorImg} alt="error" />
      <div className="detail-404">
        <p>Do you enter right url?</p>
        <Button
          width="190px"
          elementFront={<DashboardIcon />}
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </Button>
      </div>
    </NotFoundContainer>
  );
}

export default NotFound;
