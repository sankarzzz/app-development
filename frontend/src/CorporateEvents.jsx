import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Grid from './Components/CorporateEvents/Grid';
import './CorporateEvents.css';
import Footer2 from './Components/Footer2/Footer2';
import Footer1 from './Components/Footer1/Footer1';
import Header from './Components/Header/Header';

const CorporateEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/corporateEvents')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div>
        <Header></Header>
        <Grid></Grid>
    <Container className="mt-5">
      <Row>
        {events.map(event => (
          <Col key={event.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={event.image} />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Card.Text><strong>Date:</strong> {event.date}</Card.Text>
                <Card.Text><strong>Time:</strong> {event.time}</Card.Text>
                <Card.Text><strong>Venue:</strong> {event.venue}</Card.Text>
                <Button className="btn-black"><a href={`/corporate-events/${event.id}`}>View</a></Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Footer1></Footer1>
    <Footer2></Footer2>
    </div>
  );
};

export default CorporateEvents;
