import React from "react";
import styles from "./footer.module.scss";
import Socials from "./socials.js";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.issue}>
        Find an issue with this page?{" "}
        <a href="https://github.com/RobertBrunhage/website/issues" rel="noopener noreferrer" target="_blank">
          Post it on GitHub!
        </a>
      </p>

      <p className={styles.copyright}>Copyright &copy; {year} Robert Brunhage</p>
      
      <ul className={styles.socials}>
        {Socials.map((item, index) => (
          <li key={index}>
            <a href={item.href} rel="noopener noreferrer" target="_blank">
              <img src={item.img} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
