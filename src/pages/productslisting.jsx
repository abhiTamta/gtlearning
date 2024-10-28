import { Card, Col, Row } from "antd";
import Banner from "../components/banner/Banner";

const Productslisting = () => {
  return (
    <>
    <Banner />
      <div className="container mx-auto py-20">
        <div className="headingTitle mb-10">
          <h2 className="text-4xl font-bold text-center">Our Combos courses</h2>
        </div>
        <div className="comboList">
          <Row>
            <Col span={8}>
              <Card>
                asdf
              </Card> 
              
            </Col>
            <Col span={8}>
              <Card>
                asdf
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                asdf
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Productslisting;
