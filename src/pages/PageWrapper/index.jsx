import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

const PageWrapper = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <div className="page-wrapper__content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PageWrapper;
