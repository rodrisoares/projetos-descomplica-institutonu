import React from "react";
import styles from "./SingleItem.module.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";
import { useHistory } from 'react-router-dom';

const SingleItem = ({ current, addToCart }) => {

  const history = useHistory();

  function backToHome() {
    history.push('/');
  }

  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={current.image}
        alt={current.title}
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{current.title}</p>
        <p className={styles.details__description}>{current.description}</p>
        <p className={styles.details__price}>R$ {current.price}</p>

        <button
          onClick={() => addToCart(current.id)}
          className={styles.details__addBtn}
        >
          Adicionar ao carrinho
        </button>
        <button
            onClick={backToHome}
          className={styles.details__previousBtn}
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
