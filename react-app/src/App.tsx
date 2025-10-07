import React, { useState } from "react";
import FacebookApiDocs from "./components/FacebookApiDocs";
import GoogleApiDocs from "./components/GoogleApiDocs";
import CheckoutApiDocs from "./components/CheckoutApiDocs";
import MessageMediaApiDocs from "./components/MessageMedia";
import AcquireApiDocs from "./components/AcquireApiDocs";
import TuneApiDocs from "./components/TuneApiDocs";
import ZeroBounceActivityApiDocs from "./components/ZeroBounceActivityDocs";
import ZeroBounceApiDocs from "./components/ZeroBounceDocs";
import ThoughtlySuppressionApiDocs from "./components/ThoughtlySuppressionDocs";
import ThoughtlyApiDocs from "./components/Thoughtly";
import SmsCampaignApiDocs from "./components/SmsCampaignApiDocs";
import SfmcSuppressionApiDocs from "./components/SfmcSuppressionApiDocs";
import ReactivateApiDocs from "./components/ReactivateApiDocs";
import MMSuppressionApiDocs from "./components/MMSuppressionApiDocs";
import HomelightApiDocs from "./components/HomelightApiDocs";
import ErrorApiDocs from "./components/ErrorApiDocs";
import BlacklistAllianceApiDocs from "./components/BlacklistAllianceApiDocs";
import AgentApiDocs from "./components/AgentApiDocs";

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("facebook");

  const renderContent = () => {
    switch (selectedTab) {
      case "facebook":
        return <FacebookApiDocs />;
      case "google":
        return <GoogleApiDocs />;
      case "checkout":
        return <CheckoutApiDocs />;
      case "messageMedia":
        return <MessageMediaApiDocs />;
      case "acquire":
        return <AcquireApiDocs />;
      case "tune":
        return <TuneApiDocs />;
      case "zero bounce activity":
        return <ZeroBounceActivityApiDocs />;
      case "zero bounce":
        return <ZeroBounceApiDocs />;
      case "thoughtly suppression":
        return <ThoughtlySuppressionApiDocs />;
      case "thoughtly":
        return <ThoughtlyApiDocs />;
      case "sms campaign":
        return <SmsCampaignApiDocs />;
      case "sfmc suppression":
        return <SfmcSuppressionApiDocs />;
      case "reactivate":
        return <ReactivateApiDocs />;
      case "mm suppression":
        return <MMSuppressionApiDocs />;
      case "homelight":
        return <HomelightApiDocs />;
      case "error":
        return <ErrorApiDocs />;
      case "blacklist alliance":
        return <BlacklistAllianceApiDocs />;
      case "agent":
        return <AgentApiDocs />;
      default:
        return null;
    }
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    height: "200vh",
    fontFamily: "Arial, sans-serif",
  };

  const tabsStyle: React.CSSProperties = {
    width: 180,
    backgroundColor: "#f5f5f5",
    borderRight: "1px solid #ccc",
    display: "flex", //div is now a flexbox container
    flexDirection: "column", //tells Flexbox to stack children vertically (from top to bottom).
    padding: 10, //Adds space inside the tab panel.
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

  const contentStyle: React.CSSProperties = {
    flex: 1,
    padding: 20,
    overflowY: "auto",
  };

  return (
    // Container: This style object is applied to the outermost <div> that wraps both your tabs panel (left side) and your content panel (right side).
    <div style={containerStyle}>
      <div style={tabsStyle}>
        <button
          style={{
            ...buttonBaseStyle,
            ...(selectedTab === "facebook" ? activeButtonStyle : {}),
          }}
          onClick={() => setSelectedTab("facebook")}
        >
          Facebook Ads
        </button>
        <button
          style={{
            ...buttonBaseStyle,
            ...(selectedTab === "google" ? activeButtonStyle : {}),
          }}
          onClick={() => setSelectedTab("google")}
        >
          Google Ads
        </button>
        <button
          style={{
            ...buttonBaseStyle,
            ...(selectedTab === "checkout" ? activeButtonStyle : {}),
          }}
          onClick={() => setSelectedTab("checkout")}
        >
          Checkout
        </button>
        <button
          style={{
            ...buttonBaseStyle,
            ...(selectedTab === "messageMedia" ? activeButtonStyle : {}),
          }}
          onClick={() => setSelectedTab("messageMedia")}
        >
          Message Media
        </button>
        <button
          style={{
            ...buttonBaseStyle,
            ...(selectedTab === "acquire" ? activeButtonStyle : {}),
          }}
          onClick={() => setSelectedTab("acquire")}
        >
          Acquire
        </button>
        <button
          style={{
            ...buttonBaseStyle,
            ...(selectedTab === "tune" ? activeButtonStyle : {}),
          }}
          onClick={() => setSelectedTab("tune")}
        >
          Tune
        </button>
        <button
          style={{
            ...buttonBaseStyle,
            ...(selectedTab === "zero bounce activity"
              ? activeButtonStyle
              : {}),
          }}
          onClick={() => setSelectedTab("zero bounce activity")}
        >
          Zero Bounce Activity
        </button>
        <button
          style={{
            ...buttonBaseStyle,
            ...(selectedTab === "zero bounce" ? activeButtonStyle : {}),
          }}
          onClick={() => setSelectedTab("zero bounce")}
        >
          Zero Bounce
        </button>
        <button
          style={{
            ...buttonBaseStyle,
            ...(selectedTab === "thoughtly suppression"
              ? activeButtonStyle
              : {}),
          }}
          onClick={() => setSelectedTab("thoughtly suppression")}
        >
          Thoughtly Suppression
        </button>
        <button
          style={{
            ...buttonBaseStyle,
            ...(selectedTab === "thoughtly" ? activeButtonStyle : {}),
          }}
          onClick={() => setSelectedTab("thoughtly")}
        >
          Thoughtly
        </button>
        <button
          style={{
            ...buttonBaseStyle,
            ...(selectedTab === "sms campaign" ? activeButtonStyle : {}),
          }}
          onClick={() => setSelectedTab("sms campaign")}
        >
          Sms Campaign
        </button>
        <button
          style={{
            ...buttonBaseStyle,
            ...(selectedTab === "sfmc suppression" ? activeButtonStyle : {}),
          }}
          onClick={() => setSelectedTab("sfmc suppression")}
        >
          Sfmc Suppression
        </button>
        <button
          style={{
            ...buttonBaseStyle,
            ...(selectedTab === "reactivate" ? activeButtonStyle : {}),
          }}
          onClick={() => setSelectedTab("reactivate")}
        >
          Reactivate
        </button>
        <button
          style={{
            ...buttonBaseStyle,
            ...(selectedTab === "mm suppression" ? activeButtonStyle : {}),
          }}
          onClick={() => setSelectedTab("mm suppression")}
        >
          MM Suppression
        </button>
        <button
          style={{
            ...buttonBaseStyle,
            ...(selectedTab === "homelight" ? activeButtonStyle : {}),
          }}
          onClick={() => setSelectedTab("homelight")}
        >
          Homelight
        </button>
        <button
          style={{
            ...buttonBaseStyle,
            ...(selectedTab === "error" ? activeButtonStyle : {}),
          }}
          onClick={() => setSelectedTab("error")}
        >
          Error
        </button>
        <button
          style={{
            ...buttonBaseStyle,
            ...(selectedTab === "blacklist alliance" ? activeButtonStyle : {}),
          }}
          onClick={() => setSelectedTab("blacklist alliance")}
        >
          Blacklist Alliance
        </button>
        <button
          style={{
            ...buttonBaseStyle,
            ...(selectedTab === "agent" ? activeButtonStyle : {}),
          }}
          onClick={() => setSelectedTab("agent")}
        >
          Agent
        </button>
      </div>

      <div style={contentStyle}>{renderContent()}</div>
    </div>
  );
};

export default App;
