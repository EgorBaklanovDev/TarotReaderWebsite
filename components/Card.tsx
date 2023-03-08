import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "@/styles/Card.module.css";

interface CardProps {
  title: string;
  image: StaticImageData;
  description: string;
  night: boolean;
}

const Card: React.FC<CardProps> = ({ title, image, description, night }) => {
  return (
    <div className={styles.card + " " + (night ? styles.night : "")}>
      <Image src={image} alt="icon" width={100} height={100} priority />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Card;
