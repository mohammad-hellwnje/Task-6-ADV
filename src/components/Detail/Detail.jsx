import React from 'react';
import { useSelector } from 'react-redux';

function Detail() {

    const card = useSelector((state) => state.cards.currentCard);


    if (!card) {
        return <p>Card not found</p>;
    }

    return (
        <div className="w-full md:w-[53.50%] lg:w-[67.53%]">
            <p className="text-sm font-semibold mb-8 text-[#6941C6]">{card.subtitle}</p>
            <h1 className="text-4xl font-bold mb-8">{card.title}</h1>
            <img src={card.image} alt={card.title} className="mb-8 w-full object-cover" />
            <p className="text-zinc-400">{card.content}</p>
            <div className="mt-4">
                {card.sections.map((section, index) => (
                    <div key={index} className="mb-4">

                        {section.text && <p className="my-4 text-zinc-400">{section.text}</p>}
                        {section.text1 && <p className="my-4 text-zinc-400">{section.text1}</p>}
                        {section.image && (
                            <img
                                src={section.image}
                                alt={`Section ${index + 1}`}
                                className="mb-8 w-full object-cover"
                            />
                        )}
                        {section.text2 && <p className="text-center my-4 text-zinc-400">{section.text2}</p>}
                        {section.text3 && <p className="my-4 text-zinc-400">{section.text3}</p>}
                        {section.text4 && <p className="my-4 text-zinc-400">{section.text4}</p>}
                        {section.text5 && <p className="my-4 text-zinc-400">{section.text5}</p>}
                        {section.text6 && <p className="my-4 text-zinc-400">{section.text6}</p>}
                        {section.tit && <h4 className="my-4 text-zinc-400">{section.tit}</h4>}
                        {section.tit2 && <h5 className="my-4 text-zinc-400">{section.tit2}</h5>}
                        {section.text7 && <p className="my-4 text-zinc-400">{section.text7}</p>}
                        {section.text8 && <p className="my-4 text-zinc-400">{section.text8}</p>}
                        {section.text9 && <p className="my-4 text-zinc-400">{section.text9}</p>}
                        {section.listitem && (
                            <ul className="list-disc list-inside text-zinc-400">
                                {section.listitem.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}

     
                        <div className="flex space-x-2 mt-4">
                            {section.buttons && section.buttons.map((button, btnIndex) => (
                                <button
                                    key={btnIndex}
                                    className={`rounded-2xl text-sm py-0.5 px-2.5 ${button.bgColor} ${button.textColor}`}
                                >
                                    {button.label}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Detail;
