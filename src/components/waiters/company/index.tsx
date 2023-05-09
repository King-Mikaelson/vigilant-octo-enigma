import logo from "../../../assets/companyLogo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
export default function Company() {
  return (
    <section className="company__wrapper">
      <img src={logo} alt="logo" />
      <aside>
        <div>
          <MdLocationOn size={20} />
          <span>7 Ihiala Avenue, Upper Chime, New Haven, Enugu.</span>
        </div>
        <br />
        <div>
          <FaPhoneAlt />
          <span>09132035923</span>
        </div>
      </aside>
    </section>
  );
}
