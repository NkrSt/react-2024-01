import { useState } from "react";
import { Layout } from "./components/layout/component";
import { RestaurantPage } from "./pages/restaurant-page/component";
import { UserContext } from "./contexts/user";

export const App = () => {
  const [user, setUser] = useState()
  return (
    <UserContext.Provider value={{user, setUser}}>
    <Layout>
<RestaurantPage />
    </Layout>
    </UserContext.Provider>

  )}