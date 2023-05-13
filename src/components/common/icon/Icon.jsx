import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { IconContainer } from "./Icon.style";

export const UpdateIcon = ({ size, color }) => (
  <IconContainer>
    <BorderColorOutlinedIcon
      style={{ fontSize: size || "", color: color || "" }}
    />
  </IconContainer>
);

export const DeleteIcon = ({ size, color }) => (
  <IconContainer>
    <DeleteOutlineOutlinedIcon
      style={{ fontSize: size || "", color: color || "" }}
    />
  </IconContainer>
);

export const DetailIcon = ({ size, color }) => (
  <IconContainer>
    <DocumentScannerOutlinedIcon
      style={{ fontSize: size || "", color: color || "" }}
    />
  </IconContainer>
);

export const SearchSendingIcon = ({ size, color }) => (
  <IconContainer>
    <SendRoundedIcon
      style={{ fontSize: size || "", color: color || "" }}
    />
  </IconContainer>
);
