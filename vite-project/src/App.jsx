import { Layout } from "./components/layout/component";
import { Restaurants } from "./components/restaurants/component";
import { restaurants } from "./constants/mock";
Layout
export const App = () => {
  return (
    <Layout >
      <Restaurants restaurants={restaurants} />
    </Layout>
  );
};
