import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import PropTypes from "prop-types";
import { color } from "themes/colors";
import { FileContainer } from "./File.style";

File.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.any.isRequired,
  onClear: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  fileTitle: PropTypes.string,
};

function File(props) {
  const { value, fileTitle, onClear, name, register, onChange } = props;

  return (
    <FileContainer>
      <input
        type="file"
        id="file"
        class="inputfile"
        {...register(value, { onChange })}
      />
      <div className="input-file pointer">
        <label for="file" className="pointer">
          <AttachFileRoundedIcon style={{ fontSize: "20px" }} />
          {fileTitle || "Choose a file"}
        </label>
        <ClearRoundedIcon
          style={{ fontSize: "20px", color: color.redP }}
          onClick={onClear}
        />
      </div>
      <p className="word-break">{name}</p>
    </FileContainer>
  );
}

export default File;
