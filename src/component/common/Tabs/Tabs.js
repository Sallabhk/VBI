import React, {useEffect} from "react";
import "./Tabs.scss";
import { BEMHelper } from "../../../utils/bem-helper";


export const Tabs = ({ data, className = "", onChange, parentActiveTab = 0}) => {
  const [activeTab, setActiveTab] = React.useState(parentActiveTab);

  useEffect(() => {
    if(onChange){
      onChange(activeTab)
    }
  }, [activeTab])
  const classHelper = BEMHelper("tabs");

  return (
    <div className={classHelper("", [], className)}>
      <ul className={classHelper("list")}>
        {data.map((tab, index) => (
          <li
            onClick={() => {
              if (!tab.disabled) {
                setActiveTab(index);
              }
            }}
            key={`${tab.label}-${index}`}
            className={classHelper("pane", [
              index === activeTab ? "active" : "",
              tab.disabled ? "disabled" : "",
            ])}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className={classHelper("content")}>{data[activeTab].content}</div>
    </div>
  );
};
