import { MenuSuperior } from "./menusuperior";
import { Footer } from "./footer";

export const Layout = ({ children }) => {
  return (
    <div className="m-2">
      <MenuSuperior />
      {children}
      <Footer />
    </div>
  );
};
