import { Outlet } from 'react-router-dom'; // 1. Outlet 임포트
import Header from "@/components/header";
import Footer from "@/components/Footer";

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      
      <main id="main">
        {/* 2. 기존 {children} 대신 <Outlet />을 넣습니다. */}
        {/* URL이 /Info 일 때는 <Info />, /About 일 때는 <About />이 이 자리에 쏙 들어옵니다. */}
        <Outlet /> 
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;