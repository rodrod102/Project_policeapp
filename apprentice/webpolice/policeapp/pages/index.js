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
  const [clickside, setClickside] = useState(false);
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
  const clicksidebar = () => {
    clickside ? setClickside(false) : setClickside(true);
    console.log("sidebar", clickside);
  };
  const page = () => {
    if (chagepage === 1) {
      return <Homepage />;
    } else if (chagepage === 2) {
      return <Agencys />;
    } else if (chagepage === 3) {
      return <Affiliate />;
    } else console.log("not page");
  };

  return (
    <div className="container-fluid body-bg">
      <div>
        <Navbar
          handleClickabout={() => clickme(2)}
          handleClickhome={() => clickme(1)}
          handleClickaffiliate={() => clickme(3)}
          handleClicksidebar={() => clicksidebar()}
        />
      </div>
      <div className="row">
        <div className="col-2">
          {" "}
          {clickside ? <div>SIDEBAR</div> : <div></div>}
        </div>
        <div className="col-8">{page()}</div>
        <div className="col-2">
          <div class="card ">
            <img
              src="https://www.khaophuket.com/photo/listing/2020/1584435974_1-org.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text name_head">พล.ต.ท.กิตติ์รัฐ พันธุ์เพ็ชร์</p>
              <p class="card-text name_head">ผบช.ภ.8</p>
            </div>
          </div>
          <div class="card text-dark bg-warning mb-3 card_nayobye">
            <div class="card-header">นโยบาย</div>
            <div class="card-body">
              <h5 class="card-title">สำนักงานตำรวจแห่งชาติ</h5>
              <p class="card-text"></p>
            </div>
          </div>
          <div type="button" className="right_bar">
            <img
              src="https://i.pinimg.com/736x/0e/ec/93/0eec933cc069b6eff04800f6b9731677.jpg"
              class="img-thumbnail"
              alt="facebook error"
            />
          </div>
          <div type="button" className="right_bar">
            <img
              src="https://static-s.aa-cdn.net/img/gp/20600010535165/u3ubJ1cN73KYW7mmTcMy-wdFXka8nXYZcYv2nt_oat2IDPYzQw0QnbSeyVF68pocTQs=s300?v=1"
              class="img-thumbnail"
              alt="polic4.0 error"
            />
          </div>
          <div class="card text-center right_bar" type="button">
            <div class="card-body">
              <h5 class="card-title">โครงการฝึกยุทธวิธีตำรวจ</h5>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div>
          ตำรวจภูธรภาค 8 88/8 หมู่ 5 ถนนเทพกระษัตรี ตำบลไม้ขาว อำเภอถลาง
        </div>
        <div> จังหวัดภูเก็ต 83110 โทรศัพท์กลาง 0-7633-8388 เบอร์โทรภายใน</div>
        <div> โทรศัพท์สื่อสาร 0-7633-8380 สำนักงาน ผบช.ภ.8</div>
        <div>
          โทรสารกลาง 0-7639-0442,0-7639-0443 Fax : 0-7639-0442 0-7633-8381{" "}
        </div>
      </footer>
    </div>
  );
}
