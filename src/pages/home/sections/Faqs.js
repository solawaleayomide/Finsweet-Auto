import React, { useState } from "react";
import { Faq } from "../../../datas/Home";
import { FiPlus, FiMinus } from "react-icons/fi";

function Faqs() {
  const [activeId, setActiveId] = useState(null);

  const toggleAns = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-steelgrey">
      <div className="container py-8">
        <h2 className="font-bold text-[2rem] text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="items-center">
          {Faq.map((faq, _i) => {
            const isActive = activeId === faq.id;
            return (
              <div key={faq.id} className="mb-2 bg-white p-5 rounded-md">
                <div className="mb-3 flex justify-between items-center">
                  <h2 className="font-bold md:text-[1.2rem]">{faq.question}</h2>

                  <div
                    className="bg-primary text-white p-2 rounded-md cursor-pointer"
                    onClick={() => toggleAns(faq.id)}
                  >
                    {isActive ? <FiMinus /> : <FiPlus />}
                  </div>
                </div>

                {isActive && ( // Render the answer only if this FAQ is active
                  <p className="text-gray-700">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Faqs;
