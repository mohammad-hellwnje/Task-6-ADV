import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';  
import { fetchCards, setCurrentPage, setSuggestedCards } from './../../redux/actions/cardsActions';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';  
import Card from './../Card/Card';

function AllBlog() {
  const dispatch = useDispatch();
  const navigate = useNavigate();  

  const { cards, currentPage, cardsPerPage } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchCards()); 
  }, [dispatch]);
  

  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      dispatch(setCurrentPage(pageNumber)); 
    }
  };

  const getCurrentCards = () => {
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;

    return cards.slice(indexOfFirstCard, indexOfLastCard);
  };

  const currentCards = getCurrentCards();

  const handleCardClick = (id) => {
    dispatch(setSuggestedCards(currentCards.filter(card => card.id !== id))); 
    navigate(`/blog/${id}`);
  };
  const renderPaginationButtons = () => {
    const paginationButtons = [];

    for (let i = 1; i <= 3; i++) {
      paginationButtons.push(
        <button
          key={i}
          className={`p-2.5 flex items-center justify-center  ${
            currentPage === i ? 'bg-[#F9F5FF] text-gray-600 rounded-lg' : ' '
          }`}
          onClick={() => handlePageChange(i)}
          style={{ fontSize: '14px' }}
        >
          {i}
        </button>
      );
    }

    if (totalPages > 3) {
      paginationButtons.push(
        <span key="dots" className="p-2.5 ">
          ...
        </span>
      );

      paginationButtons.push(
        <button
          key={totalPages}
          className={`p-2.5  flex items-center justify-center rounded ${
            currentPage === totalPages ? 'bg-[#F9F5FF] text-gray-600 rounded-lg' : ' '
          }`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return paginationButtons;
  };

  return (
    <div className="px-8 lg:px-28">
      <h2 className='mb-8 text-2xl'>All blog posts</h2>
      <div className="grid mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 ">
        {currentCards.length > 0 ? (
          currentCards.map((card) => (
            <div key={card.id} onClick={() => handleCardClick(card.id)}>  
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
          <p>NO BLOG</p>
        )}
      </div>

      {cards.length > cardsPerPage && (
        <div className="border-t pt-8 pb-13 sm:pb-7.5 ">
          <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row justify-between sm:space-x-4">

            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center text-sm"
            >
              <AiOutlineLeft className="mr-[4.17px]" /> Previous
            </button>

            <div className="flex justify-center items-center">
              {renderPaginationButtons()}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center text-sm"
            >
              Next <AiOutlineRight className="ml-[4.17px]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllBlog;
