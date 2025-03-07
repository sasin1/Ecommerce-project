import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage"
import Login from "../Pages/auth/login";
import Register from "../Pages/auth/Register";
import PageNotFound from "../Pages/Error/PageNotFound";
import CategoriesList from "../Pages/Categories/categories.list";
import HomeheaderLayout from "../Pages/Layout/HomeHeaderLayout";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import UserLayout from "../Pages/Layout/UserLayout";
import About from "../Pages/NavLinks/About";


const RoutersComponent = () => {
  return(
  <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomeheaderLayout />}>
            <Route index element={<Homepage/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="Register" element={<Register />}/>
            <Route path="CategoriesList/:slug" element={<CategoriesList/>}/>
            <Route path="About" element={<About />} />
          </Route>

            <Route path="/Admin" element={<UserLayout />}>
              <Route index element={<AdminDashboard />}></Route>
            </Route>

            <Route path="*" element= {<PageNotFound />} />

      </Routes>
    </BrowserRouter>
  </>
  );
};

export default RoutersComponent;
