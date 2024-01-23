import "./card.css";

const card = ({ children, className, onClick }) => {
  return (
    <>
      <article className={`card ${className}`} onClick={onClick}>
        {children}
      </article>
    </>
  );
};

export default card;
