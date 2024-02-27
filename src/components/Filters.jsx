import { Form, useLoaderData, Link } from "react-router-dom";
import Input from "./Input";
import Select from "./Select";
import Range from "./Range";
import Checkbox from "./Checkbox";
const Filters = () => {
  const { meta } = useLoaderData();
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <Input
        type="search"
        label="search product"
        name="search"
        size="input-sm"
      />

      {/**Companies */}
      <Select
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
      />
      {/**Categories */}
      <Select
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
      />
      {/**Orders */}
      <Select
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
      />
      {/* Shipping */}
      <Checkbox name="shipping" label="free shipping" size="checkbox-sm" />
      {/* Price */}
      <Range name="price" label="select price" size="range-sm" />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm ">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};
export default Filters;
