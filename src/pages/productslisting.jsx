import { Row, Col, Card } from "antd";
import React from "react";

const Productslisting = () => {
  return (
    <div className="container mx-auto">
      <div className="headingTitle py-5 border-b">
        <h2 className="text-4xl font-bold mb-2">Combo courses</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem dolorum sequi asperiores minus. Earum id facere,
          assumenda atque ducimus veniam et voluptates, asperiores quaerat
          officiis quo molestiae voluptatum praesentium dolorum itaque iure
          corrupti quas in voluptate error, dolores quis unde inventore. Earum
          ad, maiores numquam porro perferendis placeat at aliquid.
        </p>
      </div>
      <div className="cardList">
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Productslisting;
