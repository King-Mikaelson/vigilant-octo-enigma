import { BiLogOut } from 'react-icons/bi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import uppistLogo from '../../assets/uppistWhite.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { RxDashboard } from 'react-icons/rx';
import { HiOutlineChartSquareBar } from 'react-icons/hi';
import { AiOutlineSetting } from 'react-icons/ai';
import { SlNotebook } from 'react-icons/sl';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import {
  logoutUser,
  setIsAuthenticated,
} from '../../redux/features/user/userSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SideBar() {
  const [activeTab, setActiveTab] = useState<string>('menu');
  const auth = useAppSelector((state) => state.user.isAuthenticated);
  const dispatch = useAppDispatch();
  console.log(auth);

  const activeStyle = {
    color: '#51145a',
    fontWeight: 'bold',
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
      // Logout successful, do something here (e.g., redirect, show success message)
      toast('Logged Out Successfully!');
    } catch (error) {
      // Handle logout error here
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="sidebar__container">
      <div className="sidebar__logo">
        <img src={uppistLogo} alt="" width={'100%'} />
      </div>
      <div className="sidebar__wrapper">
        <div
          className={
            activeTab === 'dashboard' ? 'active__parent' : 'sidebar__parent'
          }
        >
          <NavLink
            to={'/dashboard'}
            style={activeTab === 'dashboard' ? activeStyle : undefined}
            onClick={() => {
              setActiveTab('dashboard');
            }}
            className="sidebar__link"
          >
            <RxDashboard size={20} />
            Dashboard
          </NavLink>
        </div>

        <div
          className={
            activeTab === 'catalogue' ? 'active__parent' : 'sidebar__parent'
          }
        >
          <NavLink
            to={'/items-catalogue'}
            style={activeTab === 'catalogue' ? activeStyle : undefined}
            onClick={() => {
              setActiveTab('catalogue');
            }}
            className="sidebar__link"
          >
            <SlNotebook size={20} />
            Items Catalogue
          </NavLink>
        </div>

        <div
          className={
            activeTab === 'menu' ? 'active__parent' : 'sidebar__parent'
          }
        >
          <NavLink
            to={'/menu_manager'}
            style={activeTab === 'menu' ? activeStyle : undefined}
            onClick={() => {
              setActiveTab('menu');
            }}
            className="sidebar__link"
          >
            <MdOutlineRestaurantMenu size={20} />
            Menu Manager
          </NavLink>
        </div>

        <div
          className={
            activeTab === 'report' ? 'active__parent' : 'sidebar__parent'
          }
        >
          <NavLink
            to={'/reports/individual-report'}
            style={activeTab === 'report' ? activeStyle : undefined}
            onClick={() => {
              setActiveTab('report');
            }}
            className="sidebar__link"
          >
            <HiOutlineChartSquareBar size={20} />
            Report
          </NavLink>
        </div>

        <div
          className={
            activeTab === 'settings' ? 'active__parent' : 'sidebar__parent'
          }
        >
          <NavLink
            to={'/settings/profile'}
            style={activeTab === 'settings' ? activeStyle : undefined}
            onClick={() => {
              setActiveTab('settings');
            }}
            className="sidebar__link"
          >
            <AiOutlineSetting size={20} />
            Settings
          </NavLink>
        </div>

        <div
          className={
            activeTab === 'logOut' ? 'active__parent' : 'sidebar__parent'
          }
          onClick={() => dispatch(setIsAuthenticated(false))}
        >
          <NavLink
            to={'/'}
            style={activeTab === 'logOut' ? activeStyle : undefined}
            onClick={() => {
              // localStorage.clear();
              handleLogout();
            }}
            className="sidebar__link"
          >
            <BiLogOut size={20} />
            Log Out
          </NavLink>
        </div>
      </div>
    </div>
  );
}
