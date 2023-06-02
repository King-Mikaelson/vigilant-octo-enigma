import TopMenu from '../../../components/topMenu';
import DashboardCard from '../../../components/admin/dashboardCard';
import DashboardContent from '../../../components/admin/dashboardContent';
import uppistLogo from '../../../assets/uppistWhite.png';
import AppContext from '../../../context/AppContext';
import { useContext } from 'react';
import DashBoardMobileContent from '../../../components/admin/dashBoardContentMobile';

export default function DashboardAdmin() {
  const { openDashboardContent } = useContext(AppContext);

  return (
    <>
      {/* This component and state displays Dashboard Content on small mobile screens,set to false/hidden on big screens */}
      {openDashboardContent ? (
        <div className="pos__addItem">
          <DashBoardMobileContent />
        </div>
      ) : null}
      <div className="dashboardAdmin">
        <div className="topBarMobile__dashboard">
          <img src={uppistLogo} alt="" />
          <div className="topbar__button">
            <h3>Log out</h3>
          </div>
        </div>

        <TopMenu
          name="Dashboard"
          branch="Hot n’ Spicy Restaurant, New Haven, Enugu"
        />
        <DashboardCard />
        <DashboardContent />
      </div>
    </>
  );
}
