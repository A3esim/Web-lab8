import styles from "./Header.module.css"

import ContainerCard from '../ContainerCard/ContainerCard';
import Nav from "../Nav/Nav"
import BrickLayout from "../BrickLayout/BrickLayout";
import HeaderBoxes from "./HeaderBoxes/HeaderBoxes";

import { SearchNormal1 } from "iconsax-react";
import { Setting4 } from "iconsax-react";

import JsonHeader from '../../Jsons/HeaderBoxes.json';

const Header = () => {
  return (
    <header className={`${styles.header} flex justify-content-center`}>
        <ContainerCard className="flex flex-column">
          <div className={styles["blur-circle-shape"]}></div>

          <Nav />
          <BrickLayout />
          
          <div className={`${styles["headings-header"]} flex justify-content-center flex-column `}>
            <h2 className={styles["heading-header-title"]}></h2>
            <h1 className={styles["heading-header-second-title"]}>
               <br />
               <span></span>
            </h1>
            
            <div className={`${styles["search-bar"]} flex align-items-center`}>
              <SearchNormal1 size="30" color="var(--white-100)"/>
              <input type="text" className={styles["search-input"]} placeholder="" />
              <button className={`${styles["search-btn"]} flex justify-content-center align-items-center`}>
                <Setting4 size="20" color="var(--dark-900)"/>
              </button>
            </div>

            <HeaderBoxes titles_numbers={JsonHeader.informations} />
          </div>
        </ContainerCard>
    </header>
  )
}

export default Header