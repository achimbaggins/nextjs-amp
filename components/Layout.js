import LayoutFirst from "./LayoutFirst";
import LayoutCleanSide from "./LayoutCleanSide";
import LayoutRightSide from "./LayoutRightSide";
import { theme as themeDefault } from "@/services/url";
import LayoutDefault from "./LayoutDefault";

const Layout = (props) => {
  const theme = themeDefault;

  if (theme == "1") {
    return <LayoutFirst {...props} />;
  } else if (theme == "2") {
    return <LayoutCleanSide {...props} />;
  } else if (theme == "3") {
    return <LayoutFirst {...props} />;
  } else if (theme == "4") {
    return <LayoutRightSide {...props} />;
  } else {
    return <LayoutDefault {...props} />;
  }
};

export default Layout;
