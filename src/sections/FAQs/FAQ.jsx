// Import React and useState hook from React library
import React, { useState } from "react";
// Import Card component from the specified path
import Card from "../../components/card";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const FAQ = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  // Return JSX representing the FAQ component
  return (
    // Render a Card component with class name 'faq' and click event handler toggling showAnswer state
    <Card className="faq" onClick={() => setShowAnswer((prev) => !prev)}>
      {/* Render a div */}
      <div>
        {/* Render a heading with class name 'faq__question' and content from faq.Question */}
        <h5 className="faq__question">{faq.Question}</h5>
        {/* Render a button with class name 'faq__toggle-button' */}
        <button className="faq__toggle-button">
          {/* Render plus or minus icon based on showAnswer state */}
          {showAnswer ? (
            <AiOutlineMinus size={20} />
          ) : (
            <AiOutlinePlus size={20} />
          )}
        </button>
      </div>
      {/* Render answer paragraph if showAnswer is true */}
      {showAnswer && <p className="faq__answer">{faq.Answer}</p>}
    </Card>
  );
};

export default FAQ;
