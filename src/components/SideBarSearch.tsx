import React, { FormEventHandler } from "react";
import { Button, FormSelect } from "react-bootstrap";

const SideBarSearch = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("enviado");
  };
  return (
    <div className="p-3 d-flex flex-row justify-content-center">
      <form onSubmit={handleSubmit}>
        <div className="text-center mb-4">
          <label htmlFor="options" className="form-label">
            <span>Category</span>
          </label>

          <FormSelect id="options">
            <option value="all" selected>
              All
            </option>
            <option value="furniture">Furniture</option>
            <option value="clothes">Clothes</option>
            <option value="shoes">Shoes</option>
            <option value="electronics">Electronics</option>
            <option value="others">Others</option>
          </FormSelect>
        </div>
        <div className="d-flex flex-row justify-content-center mb-4">
          <label className="text-center mx-1">
            <span>Min Price</span>
            <input
              style={{ width: "8rem" }}
              type="text"
              name="min"
              placeholder="ej: 0"
              className="form-control"
            />
          </label>
          <label className="text-center">
            <span>Max Price</span>
            <input
              style={{ width: "8rem" }}
              type="text"
              name="max"
              placeholder="ej: 100"
              className="form-control"
            />
          </label>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <Button variant="dark" type="submit" onSubmit={handleSubmit}>
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SideBarSearch;
