import { Container, Table } from "react-bootstrap";
import { ProductParams } from "./types/types";
import styled from "styled-components";

interface TableComponentProps {
  products: ProductParams[];
  onToggleBought: (productId: string) => void;
  onDeleteProduct: (productId: string) => void;
}

const styledTable = styled.td<{ isBought?: boolean }>`
  text-decoration: ${(props) => (props.isBought ? "line-through" : "none")};
`;

const TableComponent: React.FC<TableComponentProps> = ({
  products,
  onToggleBought,
  onDeleteProduct,
}) => {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Shop</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
              <styledTable isBought={product.isBought}>
                {product.id}
              </styledTable>
              </td>
              <td>
              <styledTable isBought={product.isBought}>
                {product.name}
              </styledTable>
              </td>
              <td>
              <styledTable isBought={product.isBought}>
                {product.shop}
              </styledTable>
              </td>
              <td>
              <styledTable isBought={product.isBought}>
                {product.category}
              </styledTable>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableComponent;
