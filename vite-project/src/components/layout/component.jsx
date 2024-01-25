import { Footer } from "../footer/component";
import { Header } from "../header/component";

export const Layout = ({children}) => {
  return (
    <div>
      <Header isHighlited/>
      <div>{children}</div>
      <Footer />
    </div>
  );
};
