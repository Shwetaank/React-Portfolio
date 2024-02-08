import Card from "./../../components/card";

const Testimonial = ({ testimonial }) => {
  return (
    <Card className="light">
      <p className="testimonial__quote">{testimonial.quote}</p>
      <div className="testimonial__client">
        <div className="testimonial__client-avtar">
          <img src={testimonial.avtar} alt="testimonial Avatar" />
        </div>
        <div className="testimonial__client-details">
          <h6>{testimonial.name}</h6>
          <small>{testimonial.profession}</small>
          <p>{testimonial.Rating}</p>
        </div>
      </div>
    </Card>
  );
};

export default Testimonial;
