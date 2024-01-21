import { useRouter } from "next/router";
import LayoutDefault from "./LayoutDefault";
import LayoutFirst from "./LayoutFirst";
import LayoutCleanSide from "./LayoutCleanSide";

const Layout = (props) => {
  const router = useRouter();
  const theme = router.query?.theme ?? "";

  if (theme === "1") {
    return <LayoutFirst {...props} />;
  } else if (theme === "2") {
    return <LayoutCleanSide {...props} />;
  } else if (theme === "3") {
    return <LayoutFirst {...props} />;
  } else {
    return <LayoutDefault {...props} />;
  }
};

export default Layout;
