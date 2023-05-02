import { useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { createTheme } from "@mui/material/styles";
import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { Dayjs } from "dayjs";
import { useState } from "react";
import {filterTable} from "../../../../frontendData/frontendData";
import { useNavigate } from "react-router-dom";
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

export default function UserReport() {
  const navigate = useNavigate()
  const params = useParams();
  const [filter, setFilter] = useState<boolean>(false);
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [value1, setValue1] = React.useState<Dayjs | null>(null);
  const current = new Date();
  const date = `${current.getDate()}/${current.toLocaleString("en-US",{month:"2-digit",
  })}/${current.getFullYear()}`;

  // console.log(value?.toLocaleString());
  const valueString = new Date(`${value?.toDate()}`)
  const valueString1 = new Date(`${value1?.toDate()}`)

  const date2 =`${valueString.getDate()}-${valueString.toLocaleString("en-US",{month:"long",
})}-${valueString.getFullYear()}`
const date3 =`${valueString1.getDate()}-${valueString1.toLocaleString("en-US",{month:"long",
})}-${valueString1.getFullYear()}`




  return (
    <div className="singleReports">
      <div className="header">
        <div className="flex">
          <IoIosArrowBack size={30} onClick={() => navigate(-1)} color="#B1A9AD" />
          <h1>Individual Report</h1>
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
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
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
                  value={value1}
                  onChange={(newValue) => setValue1(newValue)}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>

        <div className="date__button">
          <p
            className={value && value1 ? `cancel` : `no-display`}
            onClick={() => {
              setFilter(false);setValue(null);setValue1(null);
            }}
          >
            Cancel
          </p>
          <p
            className={value && value1 ? `active` : `apply`}
            onClick={() => {
              if(value && value1){setFilter(true)};
            }}
          >
            Apply
          </p>
        </div>
      </div>
      {value && value1 && filter ? (
        <main className="singleReports__content">

          <div className="singleReports__content--header">
          <div className="flex">
              <h2>Name of Waiter: <span className="bold">Alucard</span></h2>
              <p>Date: <span className="bold">{date}</span></p>
            </div>

            <p>Total Amount: <span className="bold">₦250,000</span></p>
            <p>Period of Report: <span className="bold">From {date2} To {date3}</span></p>
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
      ) : (
        <main className="singleReports__emptyContent">
          <p>Select a Date Range to See Report</p>
        </main>
      )}
    </div>
  );
}
