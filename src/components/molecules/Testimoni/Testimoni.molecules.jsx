import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { img5, img6, img7, img8 } from "../../../assets";

const Testimoni = () => {
  return (
    <>
      <div className="testimoni container-fluid pt-5 pb-5">
        <h1 className="test pb-5 text-center">Testimoni Pasien</h1>
        <Carousel variant="dark">
          <Carousel.Item interval={2000}>
            <div className="tester d-flex ms-auto me-auto">
              <img src={img5} alt="" className="testerImage ms-2" />
              <div className="ms-3 d-block pt-3 pb-2">
                <h1>Emili Penelope</h1>
                <p>
                  Seneng banget bisa ketemu sama kak Eva. Diskusinya terbuka,
                  bertahap dan reflektif. Kakak bisa ajak aku pelan-pelan
                  mengenali diri aku sampai tanpa sadar aku bisa menemukan
                  keyakinan atas keputusan-keputusanku.
                </p>
                <h2>Feb 01, 2023</h2>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div className="tester d-flex ms-auto me-auto">
              <img src={img6} alt="" className="testerImage ms-2" />
              <div className="ms-3 d-block pt-3 pb-2">
                <h1>Varra Yunezza</h1>
                <p>
                  Saya sangat terbantu dengan sesi konsultasi ini. Selama sesi
                  konsultasi benar-benar mendengarkan apa yang jadi keluhanku
                  dan bertanya mengenai apa yang jadi harapan aku. Kak Nathan
                  gak pernah maksain apapun ke aku.
                </p>
                <h2>Feb 07, 2023</h2>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div className="tester d-flex ms-auto me-auto">
              <img src={img7} alt="" className="testerImage ms-2" />
              <div className="ms-3 d-block pt-3 pb-2">
                <h1>Jefran Cortez</h1>
                <p>
                  Aku mau bilang makasih banget karena sudah ngasih banyak
                  pengetahuan dan pertanyaan-pertanyaan reflektif yang bikin aku
                  sadar kalau aku punya banyak kesempatan baik di luar sana.
                  Semoga berubah jadi lebih baik
                </p>
                <h2>March 04, 2023</h2>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div className="tester d-flex ms-auto me-auto">
              <img src={img8} alt="" className="testerImage ms-2" />
              <div className="ms-3 d-block pt-3 pb-2">
                <h1>Alexander Felix</h1>
                <p>
                  Aku mau bilang makasih banget karena sudah membantu hampir
                  seluruh permasalahan yang telah ku alamin, ternyata banyak hal
                  yang perlu ku lakukan untuk memperbaiki diri sendiri. Semoga
                  aku dapat menjadi orang yang berguna bagi keluargaku.
                </p>
                <h2>March 21, 2023</h2>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Testimoni;
