import { Outlet } from "react-router-dom";

const UserLayout=()=>
{
 return(
    <>
        <h1>This is a user page</h1>
        <Outlet />

    </>
 )
}
export default UserLayout;