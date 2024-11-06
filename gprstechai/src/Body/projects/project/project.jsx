import "./project.css";
import React from "react";
import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import localImage from '../../../images/workflow-01.png';
import localImage2 from '../../../images/workflow-02.png';
import localImage3 from '../../../images/workflow-03.png';

function template() {
  return (

    <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 md:pb-20 text-center">
      <h2 className="text-4xl font-bold text-indigo-600 mb-8">
        Projects We Worked on
      </h2>
      <p className="text-indigo-400 mb-10">
      Explore our proven solutions and tools that have powered successful projects and streamlined product development for our clients
      </p>
      <Row className="grid max-w-sm gap-6 mx-auto lg:max-w-none lg:grid-cols-3">
        <Col>
          <Card className="mb-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" style={{ width: "30rem" }}>
            <Card.Body>
              <a href="#0" className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800">
                <img className="inline-flex rounded-t-2xl" src={localImage} width={350} height={288} alt="Workflow 1" />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-lg font-semibold">
                      Built-in Tools
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    Streamline the product development flow with a content platform that's aligned across specs and insights.
                  </p>
                </div>
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="mb-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" style={{ width: "30rem" }}>
            <Card.Body>
              <a href="#0" className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800">
                <img className="inline-flex rounded-t-2xl" src={localImage2} width={350} height={288} alt="Workflow 2" />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-lg font-semibold">
                      Advanced Analytics
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    Gain insights into your processes with advanced analytics that integrate smoothly with your workflow.
                  </p>
                </div>
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="mb-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" style={{ width: "30rem" }}>
            <Card.Body>
              <a href="#0" className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800">
                <img className="inline-flex rounded-t-2xl" src={localImage3} width={350} height={288} alt="Workflow 3" />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-lg font-semibold">
                      Tailored Flows
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    Customize your workflow with tailored flows to enhance collaboration and productivity.
                  </p>
                </div>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
    
  );
};

export default template;
