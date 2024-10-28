import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards, setCurrentCard } from './../../redux/actions/cardsActions';
import { useNavigate } from 'react-router-dom';
import Card from './../Card/Card';

const RecentBlog = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const lastFourCards = cards.slice(-4);

  const handleCardClick = (card) => {
    dispatch(setCurrentCard(card)); 
    navigate(`/blog/${card.id}`); 
  };

  return (
    <div className="px-8 py-15 lg:px-28">
      <h2 className="text-2xl font-bold mb-8">Recent Blog Posts</h2>
      <div className="flex mb-15 flex-col lg:flex-row">
        <div className="mb-8 lg:me-8">
          {lastFourCards.length > 0 && lastFourCards[0] && (
            <div onClick={() => handleCardClick(lastFourCards[0])}> 
              <Card
                image={lastFourCards[0].image}
                title={lastFourCards[0].title}
                content={lastFourCards[0].content}
                subtitle={lastFourCards[0].subtitle}
                layout="vertical"
                showArrow={true}
                imageHeight="h-[228px]"
                buttons={lastFourCards[0].buttons}
              />
            </div>
          )}
        </div>

        <div className="flex justify-between flex-col">
          {lastFourCards.slice(1, 3).map((card, index) => (
            <div
              key={card.id}
              className={`${index === 0 ? 'mb-8' : ''}`}
              onClick={() => handleCardClick(card)} 
            >
              <Card
                image={card.image}
                title={card.title}
                content={card.content}
                subtitle={card.subtitle}
                layout="horizontal"
                showArrow={false}
                imageHeight="h-[200px]"
                buttons={card.buttons}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        {lastFourCards.length > 3 && (
          <div 
            onClick={() => handleCardClick(lastFourCards[3])}
            className="flex flex-col lg:flex-row" 
          > 
            <Card
              image={lastFourCards[3].image}
              title={lastFourCards[3].title}
              content={lastFourCards[3].content}
              subtitle={lastFourCards[3].subtitle}
              layout="horizontal-fourth"
              showArrow={true}
              imageHeight="h-[246px]"
              buttons={lastFourCards[3].buttons}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentBlog;
