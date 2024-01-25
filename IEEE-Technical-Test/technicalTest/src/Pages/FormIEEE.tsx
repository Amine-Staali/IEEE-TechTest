import Sidebar from "../Components/Sidebar";
import MainNavbar from "../Components/MainNavbar";
import ContentOne from "../Components/ContentOne";
import ContentTwo from "../Components/ContentTwo";
import Footer from "../Components/Footer";
import { useState } from "react";
import ContentThree from "../Components/ContentThree";

export default function FormIEEE() {
  const [num, setNum] = useState(1);
  const NextStep = (n: number) => {
    setNum(n + 1);
  };

  return (
    <>
      <Sidebar />
      <MainNavbar />
      {(() => {
        switch (num) {
          case 1:
            return <ContentOne fct={NextStep} n={num} />;
          case 2:
            return <ContentTwo fct1={NextStep} n={num} />;
          case 3:
            return <ContentThree />
          default:
            setNum(1);
            return <ContentOne fct={NextStep} n={num} />;
        }
      })()}

      <Footer />
    </>
  );
}
