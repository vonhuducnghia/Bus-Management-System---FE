import { SearchOutlined } from "@mui/icons-material";
import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import AuthModal from "../../components/AuthModal/auth-modal";
import { useState } from "react";
import BusDetailDrawer from "../../components/DrawerBusDetail/bus-detail-drawer";
const Schedule = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = () => setIsModalOpen(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  interface DataType {
    id: string;
    bus: string;
    date: string;
    route: string;
    timeSlot: string;
    price: string;
  }

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No ID",
      dataIndex: "id",
      key: "name",
    },
    {
      title: "Bus",
      dataIndex: "bus",
      key: "bus",
      render: (_, record) => {
        return (
          <>
            <Box sx={{ display: "flex" }}>
              {" "}
              <img src="./images/bus.png"></img>
              <Typography
                sx={{ marginTop: "50px" }}
                onClick={() => {
                  showDrawer();
                }}
              >
                {record.bus}
              </Typography>
            </Box>
          </>
        );
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Route",
      key: "route",
      dataIndex: "route",
    },
    {
      title: "Time Slot",
      key: "timeSlot",
      dataIndex: "timeSlot",
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <button
            style={{
              display: "inline-block",
              textDecoration: "none",
              color: "white",
              width: "62px",
              height: "42px",
              background: "black",
              textAlign: "center",
              padding: "6px 0",
              borderRadius: "8px",
              fontSize: "18px",
            }}
            onClick={() => {
              showModal();
            }}
          >
            Book
          </button>
        );
      },
    },
  ];
  const data: DataType[] = [
    {
      id: "1741D",
      bus: "Bus 001",
      date: "Mar 15,2024",
      route: "HN-HCM",
      timeSlot: "9:00",
      price: "49,99",
    },
    {
      id: "1741D",
      bus: "Bus 001",
      date: "Mar 15,2024",
      route: "HN-HCM",
      timeSlot: "9:00",
      price: "49,99",
    },
    {
      id: "1741D",
      bus: "Bus 001",
      date: "Mar 15,2024",
      route: "HN-HCM",
      timeSlot: "9:00",
      price: "49,99",
    },
    {
      id: "1741D",
      bus: "Bus 001",
      date: "Mar 15,2024",
      route: "HN-HCM",
      timeSlot: "9:00",
      price: "49,99",
    },
    {
      id: "1741D",
      bus: "Bus 001",
      date: "Mar 15,2024",
      route: "HN-HCM",
      timeSlot: "9:00",
      price: "49,99",
    },
    {
      id: "1741D",
      bus: "Bus 001",
      date: "Mar 15,2024",
      route: "HN-HCM",
      timeSlot: "9:00",
      price: "49,99",
    },
  ];

  return (
    <>
      <Box sx={{ padding: " 50px 50px" }}>
        <Grid container columnSpacing={6}>
          <Grid item xs={3}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlined />
                  </InputAdornment>
                ),
              }}
              id="outlined-basic"
              variant="outlined"
              placeholder="Search..."
            />
          </Grid>
          <Grid item xs={1.5}>
            <button
              style={{
                display: "inline-block",
                textDecoration: "none",
                color: "white",
                width: "148px",
                height: "54px",
                background: "black",
                textAlign: "center",
                padding: "12px 0",
                borderRadius: "8px",
                fontSize: "18px",
              }}
            >
              Top Booking
            </button>
          </Grid>
          <Grid item xs={2}>
            <Box
              sx={{
                width: "165px",
                height: "54px",
                display: "flex",
                background: "#292929",
                padding: "0 10px",
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  display: "inline-block",
                  marginTop: "15px",
                  color: "white",
                }}
              >
                Filter:
              </Typography>
              <TextField
                placeholder="No ID"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                  },
                }}
              ></TextField>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: " 50px 50px" }}>
        <Table columns={columns} dataSource={data} />;
      </Box>
      <AuthModal openModal={isModalOpen} handleClosed={handleClose} />
      <BusDetailDrawer open={open} onClose={onClose} />
    </>
  );
};

export default Schedule;
