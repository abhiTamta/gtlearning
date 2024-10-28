import { Button, Space } from "antd";
import gt_logo from "../../assets/images/gt_learning_logo.png";

const Header = () => {
  return (
    <header className="w-full border-b py-2 sticky">
      <div className="container mx-auto flex justify-between items-center">
        <div className="gt_logo_section w-52">
          <img src={gt_logo} alt="" />
        </div>

        <div className="menuBar">
          <Button className="menuBtn">Home</Button>
          <Button className="menuBtn">About</Button>
          <Button className="menuBtn">Programe</Button>
        </div>
        <Space size={"large"}>
          <Button className="loginBtn">Login / Sign up</Button>
        </Space>
      </div>
    </header>
  );
};

export default Header;
