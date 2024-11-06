import "./project.css";
import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { cardData } from "../../../Data/cardDatas";

function template() {
  return (

    <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 md:pb-20 text-center">
    <h2 className="text-4xl font-bold text-indigo-600 mb-8">
      Enhance Your Workflow
    </h2>
    <p className="text-indigo-400 mb-10">
      Discover the tools and processes that streamline your product development journey.
    </p>
    <Row className="grid max-w-sm gap-6 mx-auto lg:max-w-none lg:grid-cols-3">
      {cardData.map((card) => (
        <Col key={card.id}>
          <Card className="mb-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" style={{ width: "30rem" }}>
            <Card.Body>
              <a href="#0" className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800">
                <img className="inline-flex rounded-t-2xl" src={card.imageSrc} width={350} height={288} alt={card.title} />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-lg font-semibold">
                      {card.title}
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    {card.description}
                  </p>
                </div>
              </a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
    
  );
};

export default template;
