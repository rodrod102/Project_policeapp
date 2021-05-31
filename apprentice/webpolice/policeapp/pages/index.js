import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "./navbar";
import Homepage from "./homepage";
import Affiliate from "./affiliatepage";
import { useState } from "react";
import Agencys from "./aboutagency";

export default function Home() {
  const [chagepage, setChagepage] = useState(1);
  const clickme = (x) => {
    if (x === 1) {
      setChagepage(1);
    } else if (x === 2) {
      setChagepage(2);
    } else if (x === 3) {
      setChagepage(3);
    } else console.log("not page");
    console.log(x);
  };
  const page = () => {
    if (chagepage === 1) {
      return (
        <div className="col-8">
          <Homepage />
        </div>
      );
    } else if (chagepage === 2) {
      return (
        <div className="col-8">
          <Agencys />
        </div>
      );
    } else if (chagepage === 3) {
      return (
        <div className="col-8">
          <Affiliate />
        </div>
      );
    } else console.log("not page");
  };

  return (
    <div className="container-fluid">
      <div>
        <Navbar
          handleClickabout={() => clickme(2)}
          handleClickhome={() => clickme(1)}
          handleClickaffiliate={() => clickme(3)}
        />
      </div>
      <div className="row">
        <div className="col-4">SIDEBAR</div>
        {page()}
      </div>
      <footer></footer>
    </div>
  );
}
