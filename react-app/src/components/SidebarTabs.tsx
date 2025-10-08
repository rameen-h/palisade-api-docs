// components/SidebarTabs.tsx

import React from "react";

type SidebarTabsProps = {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
};

const tabs = [
  "facebook",
  "google",
  "checkout",
  "messageMedia",
  "acquire",
  "tune",
  "zero bounce activity",
  "zero bounce",
  "thoughtly suppression",
  "thoughtly",
  "sms campaign",
  "sfmc suppression",
  "reactivate",
  "mm suppression",
  "homelight",
  "error",
  "blacklist alliance",
  "agent",
  "admin",
  "alyson session",
  "campaign",
  "connector",
  "data axle",
  "dataset",
  "event",
  "file onboarding",
  "filters",
  "form builder",
  "json",
  "playbook proposal management",
  "public",
  "search",
  "session shortcode",
  "smart router",
  "twilio",
  "user identification",
  "user management",
  "worker",
  "workspace",
];

const SidebarTabs: React.FC<SidebarTabsProps> = ({
  selectedTab,
  onTabSelect,
}) => {
  const tabsStyle: React.CSSProperties = {
    width: 180,
    backgroundColor: "#f5f5f5",
    borderRight: "1px solid #ccc",
    display: "flex",
    flexDirection: "column",
    padding: 10,
    overflowY: "auto",
  };

  const buttonBaseStyle: React.CSSProperties = {
    margin: "8px 0",
    padding: 12,
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    cursor: "pointer",
    textAlign: "left",
    transition: "background-color 0.2s ease",
  };

  const activeButtonStyle: React.CSSProperties = {
    backgroundColor: "#d0d0d0",
    fontWeight: "bold",
  };

  return (
    <div style={tabsStyle}>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={{
            ...buttonBaseStyle,
            ...(selectedTab === tab ? activeButtonStyle : {}),
          }}
          onClick={() => onTabSelect(tab)}
        >
          {tab
            .split(" ")
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join(" ")}
        </button>
      ))}
    </div>
  );
};

export default SidebarTabs;
