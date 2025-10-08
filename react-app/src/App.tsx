import React, { useEffect, useState } from "react";
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
import AdminApiDocs from "./components/AdminApiDocs";
import AlysonSessionDocs from "./components/AlysonSessionApiDocs";
import CampaignDocs from "./components/CampaignApiDocs";
import ConnectorDocs from "./components/ConnectorApiDocs";
import DataAxleApiDocs from "./components/DataAxleApiDocs";
import DatasetApiDocs from "./components/DatasetApiDocs";
import EventApiDocs from "./components/EventApiDocs";
import FileOnboardingApiDocs from "./components/FileOnboardingDocs";
import FiltersApiDocs from "./components/FiltersApiDocs";
import FormBuilderApiDocs from "./components/FormBuilderApiDocs";
import JsonApiDocs from "./components/JsonApiDocs";
import PlaybookProposalManagementDocs from "./components/PlaybookProposalManagementDocs";
import LoginComponent from "./components/Login";
import PublicApiDocs from "./components/PublicDocs";
import SearchApiDocs from "./components/SearchApiDocs";
import SessionShortApiDocs from "./components/SessionShortDocs";
import SmartRouterApiDocs from "./components/SmartRouterDocs";
import TwilioApiDocs from "./components/TwilioApiDocs";
import UserIdentificationApiDocs from "./components/UserIdentificationDocs";
import UserManagementApiDocs from "./components/UserManagementDocs";
import WorkerApiDocs from "./components/WorkerApiDocs";
import WorkspaceApiDocs from "./components/WorkspaceApiDocs";

const AlysonLogo = () => (
  <img
    src="https://www.alyson.ai/media/images/alysonlogo.svg"
    alt="Alyson Logo"
    style={{ height: 40 }}
  />
);

const Header: React.FC = () => (
  <header
    style={{
      display: "flex",
      alignItems: "center",
      padding: "5px 0px",
      backgroundColor: "#FFFFFF",
      color: "#07074b",
    }}
  >
    <AlysonLogo />
    <h1
      style={{
        marginLeft: 10,
        fontFamily: "sans-serif",
        fontSize: 20,
        paddingTop: "5px",
        paddingRight: "200px",
        fontWeight: "bold",
      }}
    >
      Palisade API Docs
    </h1>
  </header>
);

const Footer: React.FC = () => (
  <footer
    style={{
      textAlign: "center",
      padding: "2px 0px",
      backgroundColor: "#FFFFFF",
      color: "#07074b",
      position: "fixed",
      bottom: 0,
      width: "100%",
    }}
  >
    <span style={{ fontSize: 14 }}>
      © {new Date().getFullYear()} All rights reserved{" "}
      <a
        href="https://www.alyson.ai/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#007bff", textDecoration: "none" }}
      >
        Alyson
      </a>
    </span>
  </footer>
);

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("facebook");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (auth === "true") setIsAuthenticated(true);
  }, []);

  // useEffect(() => {
  //   localStorage.removeItem("isAuthenticated");
  //   setIsAuthenticated(false);
  // }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

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
      case "admin":
        return <AdminApiDocs />;
      case "alyson session":
        return <AlysonSessionDocs />;
      case "campaign":
        return <CampaignDocs />;
      case "connector":
        return <ConnectorDocs />;
      case "data axle":
        return <DataAxleApiDocs />;
      case "dataset":
        return <DatasetApiDocs />;
      case "event":
        return <EventApiDocs />;
      case "file onboarding":
        return <FileOnboardingApiDocs />;
      case "filters":
        return <FiltersApiDocs />;
      case "form builder":
        return <FormBuilderApiDocs />;
      case "json":
        return <JsonApiDocs />;
      case "playbook proposal management":
        return <PlaybookProposalManagementDocs />;
      case "public":
        return <PublicApiDocs />;
      case "search":
        return <SearchApiDocs />;
      case "session shortcode":
        return <SessionShortApiDocs />;
      case "smart router":
        return <SmartRouterApiDocs />;
      case "twilio":
        return <TwilioApiDocs />;
      case "user identification":
        return <UserIdentificationApiDocs />;
      case "user management":
        return <UserManagementApiDocs />;
      case "worker":
        return <WorkerApiDocs />;
      case "workspace":
        return <WorkspaceApiDocs />;
      default:
        return null;
    }
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    height: "calc(100vh - 100px)", // accounting for header + footer
    fontFamily: "Arial, sans-serif",
  };

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

  const contentStyle: React.CSSProperties = {
    flex: 1,
    padding: 20,
    overflowY: "auto",
  };

  if (!isAuthenticated) {
    return <LoginComponent onLogin={handleLogin} />;
  }

  return (
    <>
      <Header />
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
              ...(selectedTab === "blacklist alliance"
                ? activeButtonStyle
                : {}),
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
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "admin" ? activeButtonStyle : {}),
            }}
            onClick={() => setSelectedTab("admin")}
          >
            Admin
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "alyson session" ? activeButtonStyle : {}),
            }}
            onClick={() => setSelectedTab("alyson session")}
          >
            Alyson Session
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "campaign" ? activeButtonStyle : {}),
            }}
            onClick={() => setSelectedTab("campaign")}
          >
            Campaign
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "connector" ? activeButtonStyle : {}),
            }}
            onClick={() => setSelectedTab("connector")}
          >
            Connector
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "data axle" ? activeButtonStyle : {}),
            }}
            onClick={() => setSelectedTab("data axle")}
          >
            Data Axle
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "dataset" ? activeButtonStyle : {}),
            }}
            onClick={() => setSelectedTab("dataset")}
          >
            Dataset
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "event" ? activeButtonStyle : {}),
            }}
            onClick={() => setSelectedTab("event")}
          >
            Event
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "file onboarding" ? activeButtonStyle : {}),
            }}
            onClick={() => setSelectedTab("file onboarding")}
          >
            File Onboarding
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "filters" ? activeButtonStyle : {}),
            }}
            onClick={() => setSelectedTab("filters")}
          >
            Filters
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "form builder" ? activeButtonStyle : {}),
            }}
            onClick={() => setSelectedTab("form builder")}
          >
            Form Builder
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "json" ? activeButtonStyle : {}),
            }}
            onClick={() => setSelectedTab("json")}
          >
            Json
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "playbook proposal management"
                ? activeButtonStyle
                : {}),
            }}
            onClick={() => setSelectedTab("playbook proposal management")}
          >
            Playbook Proposal
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "public" ? activeButtonStyle : {}),
            }}
            onClick={() => setSelectedTab("public")}
          >
            Public
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "search" ? activeButtonStyle : {}),
            }}
            onClick={() => setSelectedTab("search")}
          >
            Search
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "session shortcode" ? activeButtonStyle : {}),
            }}
            onClick={() => setSelectedTab("session shortcode")}
          >
            Session Shortcode
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "smart router" ? activeButtonStyle : {}),
            }}
            onClick={() => setSelectedTab("smart router")}
          >
            Smart Router
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "twilio" ? activeButtonStyle : {}),
            }}
            onClick={() => setSelectedTab("twilio")}
          >
            Twilio
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "user identification"
                ? activeButtonStyle
                : {}),
            }}
            onClick={() => setSelectedTab("user identification")}
          >
            User Identification
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "user management" ? activeButtonStyle : {}),
            }}
            onClick={() => setSelectedTab("user management")}
          >
            User Management
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "worker" ? activeButtonStyle : {}),
            }}
            onClick={() => setSelectedTab("worker")}
          >
            Worker
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              ...(selectedTab === "workspace" ? activeButtonStyle : {}),
            }}
            onClick={() => setSelectedTab("workspace")}
          >
            Workspace
          </button>
        </div>

        <div style={contentStyle}>{renderContent()}</div>
      </div>
      <Footer />
    </>
  );
};

export default App;
