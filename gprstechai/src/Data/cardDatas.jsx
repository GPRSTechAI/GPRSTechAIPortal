import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import localImage from '../images/workflow-01.png';
import localImage2 from '../images/workflow-02.png';
import localImage3 from '../images/workflow-03.png';

export const cardData = [
  {
    id: 1,
    title: "Built-in Tools",
    description: "Streamline the product development flow with a content platform that's aligned across specs and insights.",
    imageSrc: localImage
  },
  {
    id: 2,
    title: "Advanced Analytics",
    description: "Gain insights into your processes with advanced analytics that integrate smoothly with your workflow.",
    imageSrc: localImage2
  },
  {
    id: 3,
    title: "Tailored Flows",
    description: "Customize your workflow with tailored flows to enhance collaboration and productivity.",
    imageSrc: localImage3
  }
];
