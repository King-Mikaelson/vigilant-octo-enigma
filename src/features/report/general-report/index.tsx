// import { useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { createTheme } from "@mui/material/styles";
import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
// import { Dayjs } from "dayjs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../context/AppContext";
// When using TypeScript 4.x and above
import type {} from "@mui/x-date-pickers/themeAugmentation";

const theme = createTheme({
  components: {
    MuiDatePicker: {
      styleOverrides: {
        root: ({ theme }: any) =>
          theme.unstable_sx({
            // https://mui.com/system/getting-started/the-sx-prop/#spacing
            px: 10000,
            py: 25,
            // https://mui.com/system/borders/#border-radius
            borderRadius: 12, // 4px as default.
          }),
        label: {
          padding: "initial",
        },
        icon: ({ theme }: any) =>
          theme.unstable_sx({
            mr: 10,
            ml: "-250000px",
          }),
      },
    },
  },
});

export default function GeneralReport() {
  const navigate = useNavigate();
  // const params = useParams();
  const [filter, setFilter] = useState<boolean>(false);
  const {
    generalReportFromDate,
    setGeneralReportFromDate,
    generalReportToDate,
    setGeneralReportToDate,
  } = useContext(AuthContext);

  return (
    <div className="singleReports">
      <div className="header">
        <div className="flex">
          <IoIosArrowBack
            size={30}
            onClick={() => navigate(-1)}
            color="#B1A9AD"
          />
          <h1>General Report</h1>
        </div>

        <div className="date">
          <h2 className="date__title">Select a Date Range</h2>

          <div className="date__filter">
            <div className="date__filter--start">
              <p>From</p>
              <LocalizationProvider
                theme={theme}
                PopperProps={{
                  sx: {
                    "& .MuiPaper-root": {
                      backgroundColor: "red",
                      border: "10px solid purple",
                    },
                  },
                }}
                dateAdapter={AdapterDayjs}
              >
                <MobileDatePicker
                  sx={{
                    "&.MuiPickersPopper-root": {
                      border: "4px solid red",
                    },
                  }}
                  value={generalReportFromDate}
                  onChange={(newValue) => setGeneralReportFromDate?.(newValue)}
                />
              </LocalizationProvider>
            </div>

            <div className="date__filter--stop">
              <p>To</p>
              <LocalizationProvider
                theme={theme}
                PopperProps={{
                  sx: {
                    "&.MuiPickersLayout-actionBar": {
                      gridColumn: "1/2",
                      gridRow: "10",
                      display: "none",
                    },
                  },
                }}
                dateAdapter={AdapterDayjs}
              >
                <MobileDatePicker
                  sx={{
                    "&.MuiPickersLayout-actionBar": {
                      gridColumn: "1/2",
                      gridRow: "10",
                      display: "none",
                    },
                  }}
                  value={generalReportToDate}
                  onChange={(newValue) => setGeneralReportToDate?.(newValue)}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>

        <div className="date__button">
          <p
            className={
              generalReportFromDate && generalReportToDate
                ? `cancel`
                : `no-display`
            }
            onClick={() => {
              setFilter(false);
              setGeneralReportFromDate?.(null);
              setGeneralReportToDate?.(null);
            }}
          >
            Cancel
          </p>
          <p
            className={
              generalReportFromDate && generalReportToDate ? `active` : `apply`
            }
            onClick={() => {
              if (generalReportFromDate && generalReportToDate) {
                setFilter(true);
                navigate("/reports/general-report/results");
              }
            }}
          >
            Apply
          </p>
        </div>
      </div>

      <main className="singleReports__emptyContent">
        <p>Select a Date Range to See Report</p>
      </main>
    </div>
  );
}
