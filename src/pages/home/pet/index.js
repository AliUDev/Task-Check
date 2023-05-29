import "./styles.css";

const Pet = (props) => {
  const { name, type, picture } = props;
  return (
    <div className="grid-cols  pet-main-container">
      <div className="pet-inner-container">
        <img className="pet-img" src={picture} />
        <div className="pet-details-container">
          <h2 className="pet-single-detail">
            <b className="pet-single-detail-half">Name: </b>
            {name}
          </h2>
          <h2 className="mt-2 pet-single-detail">
            <b className="pet-single-detail-half">Type: </b>
            {type}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Pet;
