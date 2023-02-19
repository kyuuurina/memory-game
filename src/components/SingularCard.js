import "./SingularCard.css";

export const SingularCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <>
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="" className="front" />
        <img
          src="/img/cover.png"
          alt=""
          className="back"
          onClick={handleClick}
        />
      </div>
    </>
  );
};
