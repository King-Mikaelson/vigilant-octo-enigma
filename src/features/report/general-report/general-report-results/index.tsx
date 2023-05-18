import { filterTable } from "../../../../frontendData/frontendData";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useContext, useState} from "react";
import AuthContext from "../../../../context/AppContext"
import { AiOutlinePrinter } from "react-icons/ai";
import EmailModal from "../../../../components/modals/EmailModal";
import SuccessModal from  "../../../../components/modals/SuccessModal"
import WhatsappModal from "../../../../components/modals/WhatsappModal";
import Logo from "../../../../assets/companyLogo.png"


type Props ={
  setOpenPrintModal:React.Dispatch<React.SetStateAction<boolean>>
}

const ReportTable = () => { 
    const {
        generalReportFromDate,
        generalReportToDate,
        } = useContext(AuthContext);
  const current = new Date();
  const date = `${current.getDate()}/${current.toLocaleString("en-US", {
    month: "2-digit",
  })}/${current.getFullYear()}`;

  const valueString = new Date(`${generalReportFromDate?.toDate()}`);
  const valueString1 = new Date(`${generalReportToDate?.toDate()}`);

  const date2 = `${valueString.getDate()} ${valueString.toLocaleString(
    "en-US",
    { month: "long" }
  )} ${valueString.getFullYear()}`;

  const date3 = `${valueString1.getDate()} ${valueString1.toLocaleString(
    "en-US",
    { month: "long" }
  )} ${valueString1.getFullYear()}`;
  return(
    <main className="singleReports__content">
    <div className="singleReports__content--header">
      <div className="flex">
        <h2 className="bold-heading">
          General Report
        </h2>
        <p>
          Date: <span className="bold">{date}</span>
        </p>
      </div>

      <p>
        Total Amount: <span className="bold">₦250,000</span>
      </p>
      <p>
        Period of Report:{" "}
        <span className="bold">
          From {date2} To {date3}
        </span>
      </p>
    </div>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Sub-Total</th>
        </tr>
      </thead>

      <tbody>
        {filterTable.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td> ₦{item.price.toLocaleString()}</td>
            <td>{item.quantity.toLocaleString()}</td>
            <td>₦{item.subTotal.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </main>
  )
}


const PrintModal = ({setOpenPrintModal}:Props) => {
  return (
    <div className="item-pry-container1">
      <div className="container-item1">
        <div className="header-parent">
        <div className="buttons">
          <button className="add-btn" onClick={() => setOpenPrintModal(false)}>
            Go Back
          </button>
          <button className="cancel-btn" onClick={() => window.print()}>
             Print Report
          </button>
        </div>
        <div className="header">
        <img src={Logo} alt="logo" />
        <div>
          <p>Hot n’ Spicy Restaurant</p>
        </div>
          <h2>General Report</h2>
        </div>
        </div>
        <hr />
        <ReportTable />
      </div>
    </div>
  );
}


const GeneralReportResults = () => {
    const [selected, setSelected] = useState(" ");
    const [openEmail, setOpenEmail] = useState<boolean>(false);
    const [openWhatsapp, setOpenWhatsapp] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [successText, setSuccessText] = useState<string>("Report has been sent via email susccesssfully");
    const [openPrintModal, setOpenPrintModal] = useState<boolean>(false);

    const handleModalClose = () => {
      setIsModalOpen(false);
    };

    const handleModalOpen = () => {
      setIsModalOpen(true);
    };

    const handleDropDown = (e:React.ChangeEvent<HTMLSelectElement>) => {
      setSelected(e.target.value);
      if (e.target.value === "email"){
        setOpenEmail(true)
      }else if(e.target.value === "whatsapp"){
        setOpenWhatsapp(true)
      }
    }

    const navigate = useNavigate();
    // const params = useParams();

    console.log(selected)
  
    return (
    <>
    {openEmail && selected === "email"  ? <EmailModal setSuccessText={setSuccessText}  setOpenEmail={setOpenEmail} handleModalClose={handleModalClose}  handleModalOpen={ handleModalOpen}/> : " "}

    {selected === "whatsapp" && openWhatsapp ? <WhatsappModal setOpenWhatsapp={setOpenWhatsapp} setSuccessText={setSuccessText} handleModalClose={handleModalClose}  handleModalOpen={ handleModalOpen}/> : " "}

    {openPrintModal  ? <PrintModal setOpenPrintModal={setOpenPrintModal}/> : " "}
    {isModalOpen ?<SuccessModal handleModalClose={handleModalClose} successText={successText}  />
: " "}
     <div className="singleReports">
        <div className="header">
          <div className="flex-wrapper">
            <div className="flex">
            <IoIosArrowBack
              size={30}
              onClick={() => navigate(-1)}
              color="#B1A9AD"
            />
            <h1>General Report</h1>
            </div>

            <div className="flex-wrapper">
              <div className="flex-wrapper print" onClick={() => setOpenPrintModal(true)}>
                <p>Print</p>
                <AiOutlinePrinter size={30} />
              </div>
            <div>
          <select onChange={(e) =>  handleDropDown(e)} id="download&Share" className="download select">
            <option value=" " selected disabled hidden className="options">Download & Share</option>
            <option value="pdf"  className="options">Download as PDF</option>
            <option value="msWord"  className="options">Download as MS Word</option>
            <option value="email"  className="options">Share Via Email</option>
            <option value="whatsapp"  className="options">Share Via Whatsapp</option>
          </select>
        </div>
            </div>

          </div>
  
        </div>
        <ReportTable />
      </div>
    </>
     
    );
}

export default GeneralReportResults