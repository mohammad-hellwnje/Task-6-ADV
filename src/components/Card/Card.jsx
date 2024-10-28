import { MdArrowForward } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Card = ({ image, title, content, subtitle, layout, buttons, imageHeight }) => {
  const isDarkMode = useSelector((state) => state.navbar?.isDarkMode);

  return (
    <div className={`${layout === 'horizontal' || layout === 'horizontal-fourth' ? 'flex' : ''} 
                    ${layout === 'horizontal-fourth' ? 'flex-col lg:flex-row' : ''}`}
    >
      <img
        src={image}
        alt={title}
        className={`${layout === 'horizontal-fourth' ? 'w-full lg:w-2/5 object-cover mb-4 lg:mb-0 lg:mr-8' : ''}
                    ${layout === 'horizontal' ? 'w-2/5 object-cover mr-8' : 'object-cover mb-8 w-full'} 
                    ${imageHeight}`}
      />
      <div className="relative">
        {subtitle && <span className="block text-gray-500 text-sm mb-3 text-titlecolor">{subtitle}</span>}
        <h2 className="text-sm font-semibold mb-3 flex items-center justify-between">
          {title}
          <MdArrowForward
            className={`w-5 h-5 transform -rotate-45 ${isDarkMode ? 'text-white' : 'text-black'}`}
          />
        </h2>
        <p className="text-base font-normal text-zinc-400 mb-6.5">{content}</p>
        <div className="flex space-x-2">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`rounded-2xl py-0.5 px-2.5 text-sm me-2 ${button.bgColor} ${button.textColor} `}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
