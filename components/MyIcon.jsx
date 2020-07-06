import { SvgIcon } from "@material-ui/core";
import { icons } from "../utils/iconData";

export default ({ icon }) => {
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d={icons[icon].path1} style={{ opacity: 0.4 }} />
      <path d={icons[icon].path2} />
    </SvgIcon>
  );
};
