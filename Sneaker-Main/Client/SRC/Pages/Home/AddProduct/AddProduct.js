import { Textarea } from "@mui/joy";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddProduct = () => {
  const [image, setImage] = React.useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const price = data.get("price");
    const image = data.get("image");
    const brand = data.get("brand");
    const category = data.get("category");
    const description = data.get("description");
    if (name && price && image && brand && category && description) {
      if (image) {
        let formData = new FormData();
        formData.append("image", image);
        formData.append("key", `c8818fe821c0aee81ebf0b77344f0e2b`);
        axios.post("https://api.imgbb.com/1/upload", formData).then((res) => {
          const imgURL = res.data.data.url;
          axios
            .post("https://mern-sneaker-project.herokuapp.com/api/products", {
              shoeName: name,
              retailPrice: price,
              thumbnail: imgURL,
              brand,
              category,
              description,
            })
            .then((res) => {
              alert("Add product successfully");
              axios
                .get("https://mern-sneaker-project.herokuapp.com/api/products")
                .then((res) => {
                  event.target.reset();
                  res.status === 200 && navigate("/");
                });
            });
        });
      } else {
        alert("Please upload image");
      }
    }
  };
  return (
    <div>
      <Header />
      <header className="main-header">
        <h1>Add a Sneaker!</h1>
      </header>
      <main
        className="main-content"
        style={{
          maxWidth: "550px",
          margin: "0 auto",
        }}
      >
        {/* add a product form */}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <div
              className="form-group"
              style={{
                width: "100%",
              }}
            >
              <TextField
                fullWidth
                id="outlined-basic"
                label="Product Name"
                variant="outlined"
                required
                name="name"
              />
            </div>
            <div
              className="form-group"
              style={{
                width: "100%",
              }}
            >
              <TextField
                fullWidth
                id="outlined-basic"
                label="Price"
                required
                variant="outlined"
                name="price"
                type={"number"}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <TextField
                fullWidth
                id="outlined-basic"
                label="Brand"
                required
                variant="outlined"
                name="brand"
              />
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <TextField
                fullWidth
                id="outlined-basic"
                label="Category"
                required
                variant="outlined"
                name="category"
              />
            </div>
          </div>
          <div
            style={{
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <Button
                variant="contained"
                component="label"
                sx={{
                  width: "35%",
                }}
              >
                Upload Image
                <TextField
                  type="file"
                  sx={{
                    display: "none",
                  }}
                  onChange={(e) => setImage(e.target.files[0])}
                  name="image"
                />
              </Button>
 
              <Typography
                sx={{
                  ml: 2,
                  fontSize: "0.8rem",
                }}
              >
                {image?.name}
              </Typography>
            </Box>
          </div>
          <Textarea
            name="description"
            required
            placeholder="Product Description…"
            minRows={5}
            variant="outlined"
            sx={{
              border: "1px solid #ccc",
              mt: 2,
              borderRadius: "5px",
              mb: "10px",
              p: "10px",
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              mb: "20px",
            }}
          >
            Add Product
          </Button>
        </Box>
      </main>
      <Footer />
    </div>
  );
};
 
export default AddProduct;