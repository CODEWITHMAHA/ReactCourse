import styles from "./Netflix.module.css";
import styled from "styled-components";

const SeriesCards = ({ series }) => {
  const { img_url, name, rating, description, genre, cast, watch_url } = series;

  // const Button = styled.button( {
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   background: `${rating >= 8.5 ? '#7dcea0' :'#f7dc6f'}`,
  //   color: "var(--btn-color)",
  //   fontWeight:'bold',
  //   cursor:'pointer'
  // });

  const Button = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(props) =>
      props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: "var(--btn-color)";
    font-weight: bold;
    cursor: pointer
  `;

  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} width={"100%"} height={"20%"} alt="" />
        <div className={styles["card-content"]}>
          <h2>Name:{name}</h2>
          <h3 style={{ fontSize: "1.3rem" }}>
            Rating:
            <span
              className={`${styles.rating} ${
                rating >= 8.5 ? styles["super-hit"] : styles.average
              }`}
            >
              {rating}
            </span>
          </h3>
          <p>Summary : {description}</p>
          <p>Genre: {genre}</p>
          <p>Cast: {cast}</p>
          <a href={watch_url} target="-blank">
            <Button rating={rating}>Watch Now</Button>
          </a>
        </div>
      </div>
    </li>
  );
};

export default SeriesCards;
