import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { color } from "themes/colors";
import { FileContainer } from "./File.style";

function File(props) {
  //! Props type
  //Require: value, clear, name, onClear, register, onChange
  //Option: fileTitle
  //Func: onClear, onChange
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
