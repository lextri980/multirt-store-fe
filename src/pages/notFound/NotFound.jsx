import DashboardIcon from "@mui/icons-material/Dashboard";
import errorImg from "assets/img/error404.gif";
import { Button } from "components/common";
import { useNavigate } from "react-router";
import { titlePage } from "utils/titlePage.util";
import { NotFoundContainer } from "./NotFound.style";

function NotFound() {
  titlePage("Multirt | Not found");

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
