import React, { useEffect } from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import avatar2 from "../../asseets/images/avatar2.jpg";
import Textarea from "@mui/joy/Textarea";
import { Button, Dialog, DialogTitle, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { green, blue } from "@mui/material/colors";

const ProductDetails = () => {
  const { productId } = useParams();
  const [comment, setComment] = React.useState("");

  const [allProducts, setAllProducts] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [comments, setComments] = React.useState([]);

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    fetch(`heroku link`)
      .then((res) => res.json())
      .then((json) => {
        setAllProducts(json?.allProducts);
      });
  }, []);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // const token = JSON.parse(localStorage.getItem("token"));
  const token = localStorage.getItem("token");

  const product = allProducts?.find((pd) => pd?._id === productId);

  const handleComment = () => {
    // send comment to database
    axios
      .post(
        "heroku comment link",
        {
          comment,
          productId,
          name: userInfo?.fullname,
          userImage: userInfo?.avatar ? userInfo?.avatar : "",
          email: userInfo?.email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setOpen(true);
        setComment("");
        axios
          .get(
            `heroku product link`
          )
          .then((res) => {
            setComments(res.data?.data);
          });
      });
  };

  useEffect(() => {
    // get all the comments from database for specific product
    axios
      .get(
        `heroku product link`
      )
      .then((res) => {
        setComments(res.data?.data);
      });
  }, [productId]);

  return (
    <div>
      <Header />
      <header className="main-header">
        <h1>Welcome Sneakers Seekers</h1>
      </header>
      <main className="product-details-main">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              width: "70%",
              borderRadius: "10px",
            }}
            src={product?.thumbnail}
            alt=""
          />
        </div>
        <div>
          <h1>{product?.shoeName}</h1>
          <p>
            Retail Price :{" "}
            <span
              style={{
                color: "#CD1F1F",
              }}
            >
              ${product?.retailPrice}
            </span>{" "}
          </p>
          <p>Brand : {product?.brand}</p>
          {product?.description && <p>Descriptions :{product?.description}</p>}
          {(product?.description === "" || undefined || null || "\n") && (
            <p>
              Descriptions : A monochromatic Onyx hue envelops the latest Yeezy
              Boost 350 V2, the lifestyle runner from adidas and Kanye West. The
              upper features a dark black Primeknit weave along with rope laces,
              while a post-dyed monofilament side stripe can be found in a
              lighter black shade. A full-length Boost unit is encapsulated in a
              semi-translucent ribbed TPU midsole, while a black rubber outsole
              rounds out the look.
            </p>
          )}
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <Typography
              sx={{
                color: blue[400],
                mb: 2,
              }}
            >
              Comments ({comments?.length})
            </Typography>
            {comments?.map((comment) => (
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
                    src={comment?.userImage ? comment?.userImage : avatar2}
                    alt=""
                  />
                  <p
                    style={{
                      marginTop: "0px",
                      fontSize: "14px",
                    }}
                  >
                    {comment?.name}
                  </p>
                </div>
                <p
                  style={{
                    width: "85%",
                  }}
                >
                  {comment?.comment}
                </p>
              </div>
            ))}
            {comments?.length === 0 && (
              <p style={{ color: "#3A3A3A", margin: "10px 0" }}>
                No comments yet. Be the first one!
              </p>
            )}
          </div>
          {/*  */}
          {token ? (
            <div>
              <p
                style={{
                  color: green[400],
                }}
              >
                Add a comment
              </p>
              <Textarea
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                minRows={4}
                variant="solid"
                sx={{
                  border: "1px solid lightgray",
                }}
              />
              <Button
                onClick={handleComment}
                variant="contained"
                sx={{
                  margin: "15px 0",
                }}
              >
                Submit
              </Button>
            </div>
          ) : (
            <p>Login To Add a Comment</p>
          )}
        </div>
      </main>
      <Footer />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Succesffully Comment Added!"}
        </DialogTitle>
      </Dialog>
    </div>
  );
};

export default ProductDetails;
