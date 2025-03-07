"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useState } from "react";

function NavigationHeader() {

  const [user, setuser] = useState();

  return (
    <Navbar className="bg-teal-100 py-3">
      <Navbar.Brand href="/" >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnmrgCWfgo_sMSRqHXnOKALHltLHZeny-4w&s"
          className="mr-3 h-6 sm:h-9"
          alt="Ecommerce Logo"
        />
        <span className="self-center  text-xl font-semibold">
         Ecommerce App
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
       {
        user?

        <Dropdown
        arrowIcon={false}
        inline
        label={
          <Avatar
            alt="User settings"
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded
          />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm">{name}</span>
          <span className="block truncate text-sm font-medium">
            {email}
          </span>
        </Dropdown.Header>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
      :
      <>
      <Navbar.Collapse>
        <Navbar.Link href="/login" >
        <span className="bg-blue-600 text-white rounded-md px-5 py-2 ">
          Login</span>
          </Navbar.Link>
        <Navbar.Link href="/Register" >
        <span className="bg-blue-600 text-white rounded-md px-5 py-2 ">Register</span>
        </Navbar.Link>
      </Navbar.Collapse>
      </>
// validation complete
       }
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/"  className="text-gray-800" >
          Home
        </Navbar.Link>
        <Navbar.Link href="/About">About</Navbar.Link>

        <Dropdown
        arrowIcon={false}
        inline
        label="Categories"
      >
        <Dropdown.Header>
          Sub Category
        </Dropdown.Header>
        <Dropdown.Item href="/CategoriesList/Electronics">Electronics</Dropdown.Item>
        <Dropdown.Item href="/CategoriesList/Furniture">Furniture</Dropdown.Item>
        <Dropdown.Item href="/CategoriesList/Beauty">Beauty</Dropdown.Item>
        <Dropdown.Item href="/CategoriesList/Foods">Foods</Dropdown.Item>
      </Dropdown>
        <Navbar.Link href="/AllRpoducts">All Products</Navbar.Link>
        <Navbar.Link href="/Contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavigationHeader;