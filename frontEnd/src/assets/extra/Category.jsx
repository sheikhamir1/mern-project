import React, { useState } from "react";

function Category() {
  const [category, setCategory] = useState([]);
  const [show, setShow] = useState(false);
  const [saveCategory, setSaveCategory] = useState([]);

  function handleCategory() {
    setShow(!show);
  }

  function handleSave() {
    setSaveCategory(category);
    setShow(!show);
  }

  function handleChange(e) {
    setCategory(e.target.value);
  }

  return (
    <>
      <button className="category" onClick={handleCategory}>
        Create Category
      </button>

      {show ? (
        <input type="text" onChange={handleChange} value={category} />
      ) : null}

      <button className="category" onClick={handleSave}>
        Save Category
      </button>

      <h1>{saveCategory}</h1>
    </>
  );
}

export default Category;
