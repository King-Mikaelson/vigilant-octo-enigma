import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import AuthContext from "../features/authentication/context/AuthContext";
import { Dayjs } from "dayjs";
import { AppContextProp } from "../types";
import PosService from "../lib/posData";
import { cartReducer, initialState, State } from "./Reducers";

const AppContext = createContext<AppContextProp>(null!);
export default AppContext;
export const AppProvider = ({ children }: AppContextProp) => {
  const { user, emailR }: any = useContext(AuthContext);

  //FETCHING ITEMS
  const [allItems, setAllItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All Menu");
  const [searchQuery, setSearchQuery] = useState("");
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const getItems = async () => {
    try {
      const response = await PosService.getAllItems();
      // if (response) {
      const sorted = response?.sort(({ a, b }: any) =>
        a?.item_name.localeCompare(b?.item_name)
      );
      dispatch({
        type: "INITIALIZE_CART",
        payload: {
          ...initialState,
          items: sorted,
        },
      });
      setAllItems(sorted);
      // }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  // PRODUCTS FILTER
  const transformItems = (items: any) => {
    let sortedProducts = items;

    if (activeCategory === "All Menu") {
      sortedProducts = items;
    }

    // if (activeCategory === "Beers") {
    //   sortedProducts = sortedProducts.filter(
    //     (item) => item.category === "Beers"
    //   );
    // }

    // if (activeCategory === "Meals") {
    //   sortedProducts = sortedProducts.filter(
    //     (item) => item.category === "Meals"
    //   );
    // }

    // if (activeCategory === "Soft Drinks") {
    //   sortedProducts = sortedProducts.filter(
    //     (item) => item.category === "Soft Drinks"
    //   );
    // }

    // if (activeCategory === "Energy drink") {
    //   sortedProducts = sortedProducts.filter(
    //     (item) => item.category === "Energy drink"
    //   );
    // }

    // if (activeCategory === "Wines") {
    //   sortedProducts = sortedProducts.filter(
    //     (item) => item.category === "Wines"
    //   );
    // }

    // if (activeCategory === "Cigarettes") {
    //   sortedProducts = sortedProducts.filter(
    //     (item) => item.category === "Cigarettes"
    //   );
    // }

    // if (activeCategory === "Soups/Swallow") {
    //   sortedProducts = sortedProducts.filter(
    //     (item) => item.category === "Soups/Swallow"
    //   );
    // }

    // if (activeCategory === "Grills") {
    //   sortedProducts = sortedProducts.filter(
    //     (item) => item.category === "Grills"
    //   );
    // }

    // if (activeCategory === "Noodles") {
    //   sortedProducts = sortedProducts.filter(
    //     (item) => item.category === "Noodles"
    //   );
    // }

    // if (activeCategory === "Rice") {
    //   sortedProducts = sortedProducts.filter(
    //     (item) => item.category === "Rice"
    //   );
    // }

    // if (activeCategory === "Chips") {
    //   sortedProducts = sortedProducts.filter(
    //     (item) => item.category === "Chips"
    //   );
    // }

    if (searchQuery !== "") {
      sortedProducts = items.filter((prod: any) =>
        prod.item_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return sortedProducts;
  };

  //Fetches items on log in
  useEffect(() => {
    if (user !== null) {
      getItems();
    }
  }, []);

  //STATES
  const [storeType, setStoreType] = useState("");
  const [loginOption, setLoginOption] = useState("email");
  const [otpState, setOtpState] = useState("");
  // UseState for choosing a From and To Date in the Individual Reports
  const [generalReportFromDate, setGeneralReportFromDate] =
    useState<Dayjs | null>(null);
  const [generalReportToDate, setGeneralReportToDate] = useState<Dayjs | null>(
    null
  );
  const [individualReportFromDate, setIndividualReportFromDate] =
    useState<Dayjs | null>(null);
  const [individualReportToDate, setIndividualReportToDate] =
    useState<Dayjs | null>(null);
  const [openAddItem, setOpenAddItem] = useState<boolean>(false);
  const [openDashboardContent, setOpenDashboardContent] =
    useState<boolean>(false);
  const [openMobileNavMenu, setOpenMobileNavMenu] = useState<boolean>(false);

  //CONTEXT DATA
  const contextData: any = {
    user,
    storeType,
    setStoreType,
    loginOption,
    setLoginOption,
    otpState,
    setOtpState,
    allItems,
    transformItems,
    state,
    dispatch,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    generalReportFromDate,
    setGeneralReportFromDate,
    generalReportToDate,
    setGeneralReportToDate,
    individualReportFromDate,
    setIndividualReportFromDate,
    individualReportToDate,
    setIndividualReportToDate,
    openAddItem,
    setOpenAddItem,
    openDashboardContent,
    setOpenDashboardContent,
    openMobileNavMenu,
    setOpenMobileNavMenu,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};
