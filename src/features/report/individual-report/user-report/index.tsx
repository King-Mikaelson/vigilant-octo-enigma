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
import AuthContext from "../../../../context/AppContext";
// When using TypeScript 4.x and above
import type {} from "@mui/x-date-pickers/themeAugmentation";
import { MdArrowBackIosNew } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

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

export default function UserReport() {
  const navigate = useNavigate();
  // const params = useParams();
  const [filter, setFilter] = useState<boolean>(false);
  const {
    individualReportFromDate,
    setIndividualReportFromDate,
    individualReportToDate,
    setIndividualReportToDate,
  } = useContext(AuthContext);

  return (
    <div className="singleReports">
      <div className="header">
        <div
          className="flex"
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoIosArrowBack
            size={30}
            onClick={() => navigate(-1)}
            color="#B1A9AD"
          />
          <h1>Individual Report</h1>
        </div>

        <div className="header__parent">
          <div
            onClick={() => {
              navigate(-1);
              navigate("/reports");
            }}
            className="header"
          >
            <MdArrowBackIosNew size={15} className="back__icon" />
            <h2>Individual Report</h2>
          </div>
          <hr />
        </div>

        <div className="date">
          <h2 className="date__title">Select a Date Range</h2>

          <div className="dateHeader__parent">
            <div className="header">
              <h2>Select a Date Range</h2>
              <IoCloseOutline size={20} className="back__icon" />
            </div>
            <hr />
          </div>

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
                  value={individualReportFromDate}
                  onChange={(newValue) =>
                    setIndividualReportFromDate?.(newValue)
                  }
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
                  value={individualReportToDate}
                  onChange={(newValue) => setIndividualReportToDate?.(newValue)}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>

        <div className="date__button">
          <p
            className={
              individualReportFromDate && individualReportToDate
                ? `cancel`
                : `no-display`
            }
            onClick={() => {
              setFilter(false);
              setIndividualReportFromDate?.(null);
              setIndividualReportToDate?.(null);
            }}
          >
            Cancel
          </p>
          <p
            className={
              individualReportFromDate && individualReportToDate
                ? `active`
                : `apply`
            }
            onClick={() => {
              if (individualReportFromDate && individualReportToDate) {
                setFilter(true);
                navigate("/reports/individual-report/results");
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
