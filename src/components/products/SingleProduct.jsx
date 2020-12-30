import React from "react";
import { Grid, Button } from "@material-ui/core";
import productService from "../../services/ProductsService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";
const SingleProduct = (props) => {
  const { product, onDelete, history } = props;
  console.log(props);
  return (
    <Grid item xs={4}>
      <br />
      <div className="center">
        <img src={product.imageUrl} alt="" className="singleimg" />
        {""} <br />
        <h2>{product.name} </h2>
        <p>
          <b>PKR:</b> {product.price}
        </p>
        {userService.isAdmin() && (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                console.log("navigate to update");
                history.push("/products/update/" + product._id);
              }}
            >
              Edit
            </Button>{" "}
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                productService
                  .deleteProduct(product._id)
                  .then((data) => {
                    console.log(data);
                    onDelete();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Delete
            </Button>
          </>
        )}
      </div>

      <hr />
    </Grid>
  );
};

export default withRouter(SingleProduct);
