import { Layout } from "./layout";
import { Providers } from "./components/Provider";

export const App = () => {
  return (
    <Providers>
      <Layout />
    </Providers>
  );
};
