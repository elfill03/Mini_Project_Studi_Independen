import { FormEdit } from "../../components/organism";
import Dashboard from "../../pages/Dashboard/Dashboard";
import DetailPesanan from "../../pages/DetailPesanan/DetailPesanan";
import Konsultasi from "../../pages/Konsultasi/Konsultasi";
import Layanan from "../../pages/Layanan/Layanan";
import Pesanan from "../../pages/Pesanan/Pesanan";
import Psikolog from "../../pages/Psikolog/Psikolog";

const router = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/Layanan",
    element: <Layanan />,
  },
  {
    path: "/Psikolog",
    element: <Psikolog />,
  },
  {
    path: "/Konsultasi",
    element: <Konsultasi />,
  },
  {
    path: "/Pesanan",
    element: <Pesanan />,
  },
  {
    path: "/Detail_pesanan",
    element: <DetailPesanan />,
  },  {
    path: "/FormEdit",
    element: <FormEdit />,
  },

];

export default router;
