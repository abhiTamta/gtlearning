import { Avatar, Badge, Button } from "antd";
import gt_logo from "../../assets/images/gt_learning_logo.png";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <header className="w-full border-b py-3 sticky">
      <div className="container mx-auto flex justify-between items-center">
        <div className="gt_logo_section w-52">
          <img src={gt_logo} alt="" />
        </div>
        <div className="cartIcon">
          <Button className="p-0 border-none">
            <Badge count={1}>
              <Avatar className="bg-transparent border-none" shape="square" icon={<BsCart3 color="black" size={30} />} size="large" />
            </Badge>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
