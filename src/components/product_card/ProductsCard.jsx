import { FieldTimeOutlined, FileOutlined } from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";
import React from "react";

const ProductsCard = ({ data }) => {
  return (
    <Card
      className="border"
      actions={[
        <Button className="w-full h-auto py-3 border-none bg-purple-950 rounded-none text-white hover:bg-red-800 uppercase">
          Enrol now
        </Button>,
        <Button className="w-full h-auto py-3 border-none bg-purple-950 rounded-none text-white hover:bg-red-800 uppercase">
          Enquire
        </Button>,
      ]}
      cover={<img alt="example" src={data.img} />}
    >
      <h3 className="text-lg leading-6 mb-4 font-bold">{data.title}</h3>
      <div className="flex justify-between">
        <div className="duration flex items-center gap-3">
          <div className="iconBlock">
            <Avatar className="bg-red-300" shape="square" size={34} icon={<FieldTimeOutlined />} />
          </div>
          <div className="textBlock">
            <div className="title">Duration</div>
            <div className="time">{data.duration}</div>
          </div>
        </div>
        <div className="duration flex items-center gap-3">
          <div className="iconBlock">
            <Avatar className="bg-red-300" shape="square" size={34} icon={<FileOutlined />} />
          </div>
          <div className="textBlock">
            <div className="title">Certification</div>
            <div className="text">of completion</div>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-3 border-t text-xl font-bold flex items-center gap-5">INR {data.price} <span className="font-normal text-sm">(Exclusive of 18% GST)</span></div>
    </Card>
  );
};

export default ProductsCard;
