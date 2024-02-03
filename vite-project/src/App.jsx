import { Layout } from "./components/layout/component";
import { restaurants } from "./constants/mock";
import { RestaurantPage } from "./pages/restaurant-page/component";


export const App = () => {
  return (
    <Layout>
<RestaurantPage restaurants={restaurants}/>
    </Layout>
  )}