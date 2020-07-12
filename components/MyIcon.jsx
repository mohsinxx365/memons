import { SvgIcon } from "@material-ui/core";
import { icons } from "../utils/iconData";

export default ({ icon }) => {
  const iconData = icons[icon];

  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d={iconData.path1} style={{ opacity: 0.4 }} />
      {iconData.path2 ? <path d={iconData.path2} /> : ""}
    </SvgIcon>
  );
};
