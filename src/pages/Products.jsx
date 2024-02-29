import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";

export const loader = async ({ request }) => {
  //To get all the inputs checkbox and put them into one object
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch(url, {
    params: params,
  });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
