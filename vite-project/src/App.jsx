import { useState } from "react";
import { Layout } from "./components/layout/component";
import { RestaurantPage } from "./pages/restaurant-page/component";
import { UserContext } from "./contexts/user";
import { Provider } from "react-redux";
import { store } from "./redux";

export const App = () => {
  const [user, setUser] = useState();
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout>
          <RestaurantPage />
        </Layout>
      </UserContext.Provider>
    </Provider>
  );
};
