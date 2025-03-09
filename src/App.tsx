import { useState } from "react";
import "./App.css";
import { ProductParams } from "./types/types";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { categories } from "./data/Category";
import { shops } from "./data/Shop";
import { nanoid } from "nanoid";
import TableComponent from "./TableComponent";

function App() {
  const [products, setProducts] = useState<ProductParams[]>([]);
  const [productName, setProductName] = useState<string>("");
  const [productShop, setProductShop] = useState<string>("");
  const [productCategory, setProductCategory] = useState<string>("");

  const handleAddProduct = () => {
    if (!productName || !productShop || !productCategory) {
      alert("Lütfen boş alanları doldurun!");
      return;
    }

    const newProduct: ProductParams = {
      id: nanoid(),
      name: productName,
      shop: productShop,
      category: productName,
    };

    setProducts([...products, newProduct]);
    setProductName("");
    setProductShop("");
    setProductCategory("");
    console.log(newProduct);
    console.log(products);
  };
  return (
    <>
    <h1 className="text-center">ADD BASKET</h1>
      <Container>
        <Form>
          <InputGroup size="lg" style={{ margin: "30px" }}>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              placeholder="Enter Product"
            />
          </InputGroup>

          <Form.Select
            style={{ margin: "30px" }}
            size="lg"
            value={productShop}
            onChange={(e) => setProductShop(e.target.value)}  
          >
            <option>Select Shop</option>
            {shops.map((shop) => (
              <option key={shop.id}>{shop.name}</option>
            ))}
          </Form.Select>

          <Form.Select
            style={{ margin: "30px" }}
            size="lg"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          >
            <option>Select Category</option>
            {categories.map((category) => (
              <option key={category.id}>{category.name}</option>
            ))}
          </Form.Select>

          <div className="AddButton d-flex justify-content-center">
            <Button onClick={handleAddProduct} variant="secondary">
              Add
            </Button>
          </div>
        </Form>
      </Container>
      <div className="mt-5">
      <TableComponent
        products={products}
        onToggleBought={() => {}}
        onDeleteProduct={() => {}}
      />
      </div>
    </>
  );
}

export default App;
