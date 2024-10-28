import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../Card/Card';
import { setSuggestedCards, setCurrentCard } from './../../redux/actions/cardsActions';

function SuggestesBlog() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cards, suggestedCards } = useSelector((state) => state.cards);

  useEffect(() => {
    if (cards && cards.length > 0) {  
      const blogId = parseInt(id, 10);  
      const filteredCards = cards.filter(card => card.id !== blogId);
      const limitedSuggested = filteredCards.slice(0, 9);  
      dispatch(setSuggestedCards(limitedSuggested));  
    }
  }, [dispatch, id, cards]);  

  const handleCardClick = (card) => {
    dispatch(setCurrentCard(card)); 
    navigate(`/blog/${card.id}`); 
  };

  return (
    <div className="w-full md:w-[44.41%] lg:w-[29.68%]">
      <div className=" grid grid-cols-1 gap-6 ">
        {suggestedCards.length > 0 ? (
          suggestedCards.map((card) => (
            <div key={card.id} className="w-full" onClick={() => handleCardClick(card)}>
              <Card
                image={card.image}
                title={card.title}
                content={card.content}
                subtitle={card.subtitle}
                layout="vertical"
                buttons={card.buttons}
                imageHeight="h-48"
              />
            </div>
          ))
        ) : (
          <p>No suggested blogs available.</p>
        )}
      </div>
    </div>
  );
}

export default SuggestesBlog;
