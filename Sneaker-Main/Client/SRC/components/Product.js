import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
 
const color = (value) => {
  return red[value];
};
 
export default function Products() {
  const [products, setProducts] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const pageSize = 9;
 
  useEffect(() => {
    fetch(
      `https://mern-sneaker-project.herokuapp.com/api/products?limit=${pageSize}&page=${page}`
    )
      .then((res) => res.json())
      .then((json) => {
        setProducts(json?.allProducts);
        const count = json?.count;
        const pageCount = Math.ceil(count / pageSize);
        setCount(pageCount);
      });
  }, [page]);
  const randomColor = [
    "#FFC0CB",
    "#FFB6C1",
    "#FF69B4",
    "#FF1493",
    "#DB7093",
    "#C71585",
    "#FFA07A",
    "#FA8072",
    "#E9967A",
  ];
  return (
    <>
      <div className="featured-sneakers">
        {products.map((pd) => (
          <div
            key={pd?._id}
            style={{
              border: "1px solid lightgray",
              borderRadius: "10px",
              padding: "1px",
              backgroundColor:
                randomColor[Math.floor(Math.random() * randomColor.length)],
            }}
          >
            <Link to={`/product/${pd?._id}`}>
              <img
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  height: "280px",
                }}
                src={pd?.thumbnail}
                alt=""
              />
            </Link>
          </div>
        ))}
      </div>
      <div
        className="pagination"
        style={{
          marginTop: "30px",
        }}
      >
        <strong
          style={{
            padding: "10px",
          }}
        >
          Pages:
        </strong>
        {[...Array(count).keys()].map((number) => (
          <Button
            variant="contained"
            sx={{
              padding: "0px",
              fontWeight: "bold",
              height: "40px",
              width: "40px",
              margin: "5px",
              backgroundColor: number === page ? color(300) : color(500),
 
              "&:hover": {
                backgroundColor: color(400),
              },
            }}
            className={number === page ? "selected" : ""}
            key={number}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </Button>
        ))}
      </div>
    </>
  );
}
