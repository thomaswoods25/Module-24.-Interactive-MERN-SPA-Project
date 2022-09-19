import React from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import image1 from "../../asseets/images/1.jpg";
import avatar2 from "../../asseets/images/avatar2.jpg";
import Textarea from "@mui/joy/Textarea";
import { Button } from "@mui/material";

const ProductDetails = () => {
  return (
    <div>
      <Header />
      <header className="main-header">
        <h1>Welcome Sneakers Seekers</h1>
      </header>
      <main className="product-details-main">
        <div>
          <img
            style={{
              width: "100%",
              borderRadius: "10px",
            }}
            src={image1}
            alt=""
          />
        </div>
        <div>
          <h1>This is the shoe’s title for this page</h1>
          <p>
            Price :{" "}
            <span
              style={{
                color: "#CD1F1F",
              }}
            >
              $500.87
            </span>{" "}
          </p>
          <p>Brand : Adidas</p>
          <p>
            Descriptions: Utilizing a sleek monochrome finish, the adidas Yeezy
            Foam Runner ‘Onyx’ is an understated colorway for a futuristic
            slip-on. A molded one-piece upper showcases open vents for
            breathability, while the injected EVA foam is lightweight and is
            secured by a unique traction pattern for grip.
          </p>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <p
              style={{
                color: "#3A3A3A",
              }}
            >
              Comments (2)
            </p>
            <div
              style={{
                display: "flex",
                gap: "30px",
              }}
            >
              <div
                style={{
                  width: "15%",
                  textAlign: "center",
                }}
              >
                <img
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    objectFit: "fill",
                  }}
                  src={avatar2}
                  alt=""
                />
                <p
                  style={{
                    marginTop: "0px",
                  }}
                >
                  John Doe
                </p>
              </div>
              <p
                style={{
                  width: "85%",
                }}
              >
                This is a comment for testing.For example, if you are designing
                a brand new website for someone, most times you will have to
                make sure the prototype looks finished by inserting text.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "30px",
              }}
            >
              <div
                style={{
                  width: "15%",
                  textAlign: "center",
                }}
              >
                <img
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    objectFit: "fill",
                  }}
                  src={avatar2}
                  alt=""
                />
                <p
                  style={{
                    marginTop: "0px",
                  }}
                >
                  Martin Guptil
                </p>
              </div>
              <p
                style={{
                  width: "85%",
                }}
              >
                This is a comment for testing.For example, if you are designing
                a brand new website for someone, most times you will have to
                make sure the prototype looks finished by inserting text.
              </p>
            </div>
          </div>
          {/*  */}
          <div
            style={{
              margin: "20px 0",
            }}
          >
            <p>Add a comment</p>
            <Textarea
              minRows={4}
              variant="solid"
              sx={{
                border: "1px solid lightgray",
              }}
            />
            <Button
              variant="contained"
              sx={{
                marginTop: "15px",
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
