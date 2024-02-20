import { Input, Button } from "../components";
import { Form, Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 py-8 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <Input
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <Input
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <Button text="login" />
        </div>

        <button type="button" className="btn btn-secondary btn-block">
          Guest user
        </button>
        <p className="text-center">
          Not a memeber ?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
