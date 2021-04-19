import React, {useEffect} from "react";
import { BEMHelper } from "../../../utils/bem-helper";
import { Tabs } from "../../common/Tabs/Tabs";
import { AllSongs } from "../AllSongs/AllSongs";
import { PlayList } from "../PlayList/PlayList";
import "./HomePage.scss"
const classHelper = BEMHelper("homepage");

export const HomePage = () => {
    const tabData = [
        {
          label: "All Songs",
          content: (
            <AllSongs />
          ),
        },
        {
          label: "Playlist",
          content: (
         <PlayList />
          ),
        },
      ];
  return (
    <div className={classHelper("")}>
      <Tabs data={tabData}/>
    </div>
  );
};
