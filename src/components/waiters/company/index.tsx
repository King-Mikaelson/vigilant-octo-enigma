import logo from "../../../assets/companyLogo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
export default function Company() {
  return (
    <section className="company">
      <img src={logo} alt="logo" />
      <aside>
        <div className="company__detail">
          <MdLocationOn size={25} color="#ec9c04" />
          <span>Lorem ipsum amet minim mollit non deserunt est sit aliqua</span>
        </div>
        <br />
        <div className="company__detail">
          <FaPhoneAlt size={15} color="#ec9c04" />
          <span>(+234) 812 345 6789</span>
        </div>
      </aside>
    </section>
  );
}
