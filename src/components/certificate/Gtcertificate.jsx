import gtCertificate from "../../assets/images/gt_certificate.png";
import { FaCheckCircle } from "react-icons/fa";

const Gtcertificate = () => {
  return (
    <div className="gtCertificate bg-[#dbd5ef] py-20">
      <div className="w-8/12 mx-auto flex items-center">
        <div className="content w-6/12">
            <h2 className="text-5xl font-bold text-[#50347f] mb-2">Unlock your</h2>
            <h2 className="text-5xl font-bold text-[#50347f] mb-5">Learning GT certificate</h2>
            <ul className="certificateList">
                <li><FaCheckCircle size={25} color="#50347f" />Lorem ipsum dolor sit amet consectetur.</li>
                <li><FaCheckCircle size={25} color="#50347f" />Lorem ipsum dolor sit amet consectetur.</li>
                <li><FaCheckCircle size={25} color="#50347f" />Lorem ipsum dolor sit amet consectetur.</li>
                <li><FaCheckCircle size={25} color="#50347f" />Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
        </div>
        <div className="certificateImg w-6/12">
            <img src={gtCertificate} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gtcertificate;
