import styles from "@/styles/Review.module.css";
import Image from "next/image";
import { RevealWrapper } from "next-reveal";

interface ReviewProps {
  date: string;
  image: string;
  description: string;
  name: string;
}

const Review: React.FC<ReviewProps> = ({ date, image, description, name }) => {
  return (
    <div className={styles.review}>
      <div>
        <Image src={image} alt="Image" width={80} height={80} />
        <h4>{name}</h4>
        <p>{date}</p>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default Review;
