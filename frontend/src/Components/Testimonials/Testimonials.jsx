import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    review: "We recently hosted a Rehearsal Dinner at the Bridge Building and our entire experience with the Infinity team was exceptional. From our first meeting with Bubba, to our Event Specialist, Kristina, to the Catering Manager, Haven Brown and all of the many folks that served the night of the party, I applaud your professionalism and friendliness. Kristina was efficient, courteous, timely, friendly and never missed a beat.",
  },
  {
    review: "We celebrated our wedding reception at the Skyline Hall and the service was phenomenal. From our initial consultation with Linda, to our Event Planner, Mark, to the Head Chef, Jamie Lewis, and all of the staff present that evening, I commend your attention to detail and warmth. Mark was organized, attentive, punctual, welcoming, and ensured everything ran smoothly.",
  },
  {
    review: "Our company hosted an annual gala at the Riverfront Venue and the entire team made it memorable. From the first discussion with Alex, to our Event Coordinator, Sara, to the Operations Manager, Liam Green, and every member of the team that night, I appreciate your expertise and hospitality. Sara was meticulous, responsive, timely, approachable, and flawlessly handled every aspect.",
  },
  {
    review: "We organized a charity auction at the Grand Ballroom and were impressed by the dedication of the Infinity crew. From our first encounter with Emma, to our Event Director, Noah, to the Logistics Head, Olivia White, and all the staff who supported us, I admire your efficiency and kindness. Noah was diligent, professional, prompt, friendly, and ensured everything was perfect.",
  },
  {
    review: "We hosted a holiday party at the Mountain Lodge and the experience was outstanding. From our first conversation with Sophie, to our Event Supervisor, Daniel, to the Catering Director, Chloe Adams, and all the individuals who assisted us, I applaud your dedication and warmth. Daniel was thorough, courteous, timely, pleasant, and ensured every moment was delightful.",
  },

  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-slider">
      <h2>TESTIMONIALS FROM OUR HAPPY CLIENTS</h2>
      <div className="testimonial">
        <p>{testimonials[currentIndex].review}</p>
      </div>
      <div className="controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
