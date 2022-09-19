import React from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import "../../asseets/styles/main.css";
import image1 from "../../asseets/images/1.jpg";
import image8 from "../../asseets/images/8.jpg";
import image9 from "../../asseets/images/9.jpg";
import image4 from "../../asseets/images/4.jpg";
import image5 from "../../asseets/images/5.jpg";
import image10 from "../../asseets/images/10.jpg";
import featured from "../../asseets/images/featured.jpg";
import { Button, Box, TextField } from "@mui/material";
import Textarea from "@mui/joy/Textarea";

const imgData = [
  {
    img: image1,
  },
  {
    img: image8,
  },
  {
    img: image9,
  },
  {
    img: image4,
  },
  {
    img: image5,
  },
  {
    img: image10,
  },
];

const Home = () => {
  return (
    <div>
      <Header />
      <header className="main-header">
        <h1>Welcome Sneakers Seekers</h1>
      </header>
      <main>
        {/* <!-- Featured Sneakers --> */}
        <div className="featured-sneakers">
          {imgData.map((data, index) => {
            return (
              <div key={index}>
                <img
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    height: "280px",
                  }}
                  src={data.img}
                  alt="featured"
                />
              </div>
            );
          })}
        </div>
        <Box
          sx={{
            width: 150,
            marginX: "auto",
            mb: 4,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontWeight: "bold",
            }}
          >
            Load More...
          </Button>
        </Box>
      </main>

      <div className="featured-container">
        <p>Contact us</p>
        <div className="featured-item">
          <img
            style={{
              width: "50%",
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

            <form>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </Box>
              <Box
                sx={{
                  mt: 2,
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Subject"
                  variant="outlined"
                  sx={{
                    width: 1,
                  }}
                />
                <Textarea
                  placeholder="Your Message…"
                  minRows={5}
                  variant="outlined"
                  sx={{
                    border: "1px solid #ccc",
                    mt: 2,
                  }}
                />
              </Box>
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  width: 1 / 3,
                }}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
