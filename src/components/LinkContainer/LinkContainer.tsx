import React from "react";
import style from "./LinkContainer.module.css";
import classNames from "classnames/bind";
import { motion } from "framer-motion";
import LinkIcon from "../LinkIcon/LinkIcon";

interface linkObject {
  name :string
  link : string
}

interface Props {
  link: linkObject[]
}

const LinkContainer = ({ link }:Props) => {
  const sx = classNames.bind(style);
  return (
    <>
      {link.map((item, index) => (
        <motion.a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={sx("linkButton")}
          key={`${item.link}`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            backgroundColor: "#4D4D4D",
          }}
        >
          <div className={sx("linkIcon")}>
            <LinkIcon key={index} data={item} />
          </div>
          {item.name}
        </motion.a>
      ))}
    </>
  );
};

export default LinkContainer;