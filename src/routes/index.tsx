import { Route, Routes } from "react-router-dom";
import MainLayout from "components/layout";
import LandingPage from "pages/Landing-Page";
import Explore from "pages/explore";
import Minting from "pages/Minting/Minting";
import Auction from "pages/auction";
// import Home from "pages/home";
import Collections from "pages/collections";
import MintingWFC from "pages/minting-wfc/MintingWFC";
import SettingProfile from "pages/setting/profile";
import SettingNotification from "pages/setting/notification";
import SettingDisplay from "pages/setting/display";
import Staking from "pages/staking/staking";
import Staking_hominid from "pages/staking/staking_hominid";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/minting-wfc" element={<MintingWFC />} />
        <Route path="/minting" element={<Minting />} />
        <Route
          path="/auction"
          element={
            <Auction
              name="Hominids"
              current={1672}
              hour="08"
              min="23"
              sec="06"
              lastBid="JDHWSJ_01"
            />
          }
        />
        <Route path="/collections" element={<Collections />} />
        <Route path="/settings" element={<SettingProfile />} />
        <Route path="/settings/notification" element={<SettingNotification />} />
        <Route path="/settings/display" element={<SettingDisplay />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/staking/hominid" element={<Staking_hominid />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
