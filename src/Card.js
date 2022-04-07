import star from "./images/Star1.png";

const Card = ({
  img,
  rating,
  reviewCount,
  location,
  title,
  price,
  openSpots,
}) => {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "Online!";
  }
  return (
    <div className="card-area">
      <img className="Card-offer" src={img} alt="Zafyrys" id="zafyrys" />
      <div class="card-star-label">
        <img id="star" src={star} alt="star" />
        <p>
          {rating}{" "}
          <span className="card-grey">
            ({reviewCount}) • {location}{" "}
          </span>
        </p>
      </div>
      <p class="card-description">{title}</p>
      <p class="card-description last">
        <strong>From ${price}</strong> / person
      </p>
      {badgeText !== undefined && <p className="card-badge">{badgeText}</p>}
    </div>
  );
};

export default Card;
