import React from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import "../../asseets/styles/main.css";

import featured from "../../asseets/images/featured.jpg";
import { Button, Box, TextField, Modal, Typography } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import Products from "../../components/Products";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid lightgray",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};
const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");
    if (name && email && subject && message) {
      setOpen(true);
      e.target.reset();
    } else {
      alert("Please fill all the fields");
    }
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Header />
      <header className="main-header">
        <h1>Welcome Sneakers Seekers</h1>
      </header>
      <main>
        {/* <!-- Featured Sneakers --> */}
        <Products />
        <Box
          sx={{
            width: 150,
            marginX: "auto",
            mb: 4,
          }}
        ></Box>
      </main>

      <div className="featured-container">
        <p>Contact us</p>
        <div className="featured-item">
          <img
            className="fetatred-img"
            style={{
              // width: "50%",
              height: "450px",
              borderRadius: "10px",
            }}
            src={featured}
            alt="featured"
          />
          <div>
            <h2
              style={{
                margin: 0,
              }}
            >
              Get in touch
            </h2>
            <p>Be the first to know about the latest drops.</p>

            <Box component="form" onSubmit={handleOpen}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                }}
              >
                <TextField
                  // required
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  name="name"
                />
                <TextField
                  // required
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type={"email"}
                  name="email"
                />
              </Box>
              <Box
                sx={{
                  mt: 2,
                }}
              >
                <TextField
                  // required
                  id="outlined-basic"
                  label="Subject"
                  variant="outlined"
                  name="subject"
                  sx={{
                    width: 1,
                  }}
                />
                <Textarea
                  // required
                  placeholder="Your Message…"
                  minRows={5}
                  name="message"
                  variant="outlined"
                  sx={{
                    border: "1px solid #ccc",
                    mt: 2,
                  }}
                />
              </Box>
              <Button
                type="submit"
                // onClick={handleOpen}
                variant="contained"
                sx={{
                  mt: 3,
                  width: 1 / 3,
                }}
              >
                Submit
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Your Information was
                  </Typography>
                  <hr />
                  <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                    Submitted Successfully
                  </Typography>
                </Box>
              </Modal>
            </Box>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
