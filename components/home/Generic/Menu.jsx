'use client'

import React, { useEffect } from "react";
import styles from "./Menu.module.css";
import Link from 'next/link';


import {
  HiHome,
  HiUserGroup,
  // HiUserCircle,
  HiBell,
  HiCog,
  HiMoon,
  HiSun,
  HiOutlineLogout
} from "react-icons/hi";

function Menu() {
  useEffect(() => {
  const mainMenuLi = document
  .getElementById("mainMenu")
  .querySelectorAll("li");
  function changeActive() {
  mainMenuLi.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
      }
  // console.log(mainMenuLi);
  }, []);
  return (
    <div className={styles.menu}>
      <image
        src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_telegram_Airplane_Air_plane_paper_airplane-22-512.png"
        alt="logo"
      />
      <ul id="mainMenu">
        <Icon icon={<HiHome />} />
        <Icon icon={<HiUserGroup />} />
        <Icon icon={<HiBell />} />
        <Icon icon={<HiCog />} />
      </ul>
      <ul id="lastMenu">
        {/* <Icon icon={<HiUserCircle />} /> */}
        <Icon icon={<HiSun />} />
        <Icon icon={<HiOutlineLogout />} />
      </ul>
    </div>
  );
}

const Icon = ({ icon }) => (
  <li>
    <a href="#">{icon}</a>
  </li>
);

export default Menu;