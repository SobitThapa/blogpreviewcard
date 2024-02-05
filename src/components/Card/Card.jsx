import CardImg from "../../assets/illustration-article.svg";
import authorImg from "../../assets/image-avatar.webp";
import Badge from "../Badge/Badge";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.Card}>
      <img className={styles.CardImg} src={CardImg} />
      <div>
        <Badge>Learning</Badge>
      </div>
      <p>Published 21 Dec 2023</p>
      <h2>HTML & CSS Foundations</h2>
      <p className={styles.Description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est autem
        inventore ab perferendis.
      </p>
      <div className={styles.Author}>
        <img src={authorImg} alt="" width="30" height="30" />
        <p>Grey Hopper </p>
      </div>
    </div>
  );
};
export default Card;
