import { Button, Card, Col, Row } from "antd";
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
          <Row gutter={30} justify={"center"}>            
            <Col span={6}>
              <Card>
                <div className="cardTitle">Analytics</div>
                <div className="priceBox">
                  <div className="flex justify-center items-center text-white text-lg gap-1 font-bold">
                    <div className="priceType">INR</div>
                    <div className="currentPrice">25,000</div>
                    <div className="mainPrice font-normal ml-3 text-[16px]">85,000</div>
                  </div>
                  <div className="text-center text-white text-sm">Exclusive of 18% GST</div>
                </div>
                <div className="conentBox">
                  <div className="">
                    <h4>5 hands on courses</h4>
                    <ol>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ol>
                  </div>
                  <div className="">
                    <h4>Skills</h4>
                    <ol>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ol>
                  </div>
                </div>
                <div className="buttonSection">
                  <Button className="learnmorebtn">Learn more</Button>
                  <Button className="buynowbtn">Buy now</Button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Productslisting;
