import React, { useState } from "react";
import Card from "../../components/card";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQ = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Card className="faq" onClick={() => setShowAnswer((prev) => !prev)}>
      <div>
        <h5 className="faq__question">{faq.Question}</h5>
        <button className="faq__toggle-button">
          {showAnswer ? <AiOutlineMinus size={20} /> : <AiOutlinePlus size={20} />}
        </button>
      </div>
      {showAnswer && <p className="faq__answer">{faq.Answer}</p>}
    </Card>
  );
};

export default FAQ;
