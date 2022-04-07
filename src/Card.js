import star from "./images/Star1.png";

const Card = (props) => {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "Online!";
  }
  return (
    <div className="card-area">
      <img
        className="Card-offer"
        src={props.item.coverImg}
        alt="Zafyrys"
        id="zafyrys"
      />
      <div class="card-star-label">
        <img id="star" src={star} alt="star" />
        <p>
          {props.item.stats.rating}{" "}
          <span className="card-grey">
            ({props.item.stats.reviewCount}) • {props.item.location}{" "}
          </span>
        </p>
      </div>
      <p class="card-description">{props.item.title}</p>
      <p class="card-description last">
        <strong>From ${props.item.price}</strong> / person
      </p>
      {badgeText !== undefined && <p className="card-badge">{badgeText}</p>}
    </div>
  );
};

export default Card;
