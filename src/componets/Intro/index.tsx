import { FC } from "react";
import "./Intro.scss";
import IntroIndex from "./components/Pages/Index";
import IntroContext from "./components/Pages/Context";
import IntroAudit from "./components/Pages/Audit";

interface IntroProps {
  page: "home" | "context" | "audit";
}

const Intro: FC<IntroProps> = ({ page }) => {
  switch (page) {
    case "home":
      return <IntroIndex />;
    case "context":
      return <IntroContext />;
    case "audit":
      return <IntroAudit />;
  }
};
export default Intro;
