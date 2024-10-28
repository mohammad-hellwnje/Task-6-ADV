import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import Card from './../../components/Card/Card';
import { fetchCards, setCurrentCard } from './../../redux/actions/cardsActions';

function NewsCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { cards } = useSelector((state) => state.cards);
  const cardsPerPage = 3;

  const currentCards = cards.slice(0, cardsPerPage);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const handleCardClick = (card) => {
    dispatch(setCurrentCard(card)); 
    navigate(`/blog/${card.id}`); 
  };

  return (
    <>
      <h2 className='mb-8 text-2xl font-semibold'>All blog posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-[30px]">
        {currentCards.map((card, index) => (
          <div
            key={index}
            className={`${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            onClick={() => handleCardClick(card)}          >
            <Card
              image={card.image}
              title={card.title}
              content={card.content}
              subtitle={card.subtitle}
              layout={card.layout}
              buttons={card.buttons}
              imageHeight={card.imageHeight}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default NewsCard;
