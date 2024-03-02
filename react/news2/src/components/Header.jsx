import React from "react";
import ButtonCustom from "./Button";
import { Button } from "react-bootstrap";

const Header = () => {
  const menuLinks = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About",
    },
    {
      id: 3,
      title: "Services",
    },
    {
      id: 4,
      title: "Blog",
    },
    {
      id: 5,
      title: "Contact",
    },
  ];

  return (
    <header className="bg-slate-200 py-5 px-10">
      <div className="flex gap-5 flex-col md:flex-row justify-between items-center">
        <div className="w-32">
          <img
            className="rounded-full border-x-4 border-red-500 "
            src="https://picsum.photos/id/23/100/100"
            alt=""
          />
        </div>
        <div className="menu ">
          <nav>
            <ul className="flex space-x-8">
              {menuLinks.map((item) => (
                <li key={item.id}>
                  <a href="#">{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="buttons flex gap-3 ">
          <Button variant="danger">Hello</Button>
          <ButtonCustom />
        </div>
      </div>
    </header>
  );
};

export default Header;
