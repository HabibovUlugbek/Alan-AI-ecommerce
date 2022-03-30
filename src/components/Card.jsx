import React from "react";
import { useEffect, useState } from "react";

export const Card = () => {
  const [mainCard, setMainCard] = useState([]);
  const [card, setCard] = useState([]);

  const addCardHandler = (item) => {
    setCard((prev) => {
      return [item, ...prev];
    });
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setMainCard(json));
  }, []);

  return (
    <div className='album py-5 bg-light'>
      <div className='container'>
        <div className='row row-cols-1 row cols-sm-2 row-cols-md-3'>
          {mainCard.map((card) => (
            <div
              key={card.id}
              className='card shadow-sm p-3'
              style={{ minHeight: "550px" }}>
              <div className='card-title'>
                <h4 className='text-muted text-center'>Product #{card.id}</h4>
              </div>
              <img
                src={card.image}
                alt={card.title}
                className='bg-placeholder card-image-top'
                width='100%'
                height='400px'
              />
              <div className='card-body'>
                <p className='card-text'>{card.title.slice(0, 20)}</p>
                <p className='card-text fw-lighter'>
                  {card.description.slice(0, 100)}
                </p>
              </div>
              <div className='card-footer d-flex justify-content-between align-items-center'>
                <div>
                  <span>{card.category}</span>
                </div>
                <span className='text-muted'>${card.price}</span>
              </div>
              <button className='mt-3 btn btn-outline-primary'>Add Card</button>
            </div>
          ))}
        </div>
      </div>
      <div className='fixed-top m-3'>
        <button type='button' class='btn btn-primary position-relative'>
          Card
          <span class='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
            99+
            <span class='visually-hidden'>unread messages</span>
          </span>
        </button>
      </div>
    </div>
  );
};
