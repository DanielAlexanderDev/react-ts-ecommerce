import React, { FormEventHandler } from "react";

const SideBarSearch = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("enviado");
  };
  return (
    <aside>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category-options">
          <span>Category</span>
        </label>
        <input list="options" id="category-options" />
        <datalist id="options">
          <option value="OP1" />
          <option value="OP2" />
          <option value="OP3" />
          <option value="OP4" />
        </datalist>
        <label>
          <span>Min Price</span>
          <input type="text" name="min" placeholder="ej: 0" />
        </label>
        <label>
          <span>Max Price</span>
          <input type="text" name="max" placeholder="ej: 100" />
        </label>
        <button type="submit" onSubmit={handleSubmit}>
          Search
        </button>
      </form>
    </aside>
  );
};

export default SideBarSearch;
