import { Outlet } from "react-router-dom";
import NavigationHeader from "../../components/NavigationHeader";

const HomeheaderLayout = () => {
  return (
    <>
      <NavigationHeader />
      <Outlet />
    </>
  );
};
export default HomeheaderLayout;
