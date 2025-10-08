import React, { useEffect, useState } from "react";
import SidebarTabs from "./components/SidebarTabs";
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
import PublicApiDocs from "./components/PublicDocs";
import SearchApiDocs from "./components/SearchApiDocs";
import SessionShortApiDocs from "./components/SessionShortDocs";
import SmartRouterApiDocs from "./components/SmartRouterDocs";
import TwilioApiDocs from "./components/TwilioApiDocs";
import UserIdentificationApiDocs from "./components/UserIdentificationDocs";
import UserManagementApiDocs from "./components/UserManagementDocs";
import WorkerApiDocs from "./components/WorkerApiDocs";
import WorkspaceApiDocs from "./components/WorkspaceApiDocs";
import HomePage from "./components/Homepage";

// --- Header ---
const AlysonLogo = () => (
  <img
    src="https://www.alyson.ai/media/images/alysonlogo.svg"
    alt="Alyson Logo"
    style={{ height: 40 }}
  />
);

const Header: React.FC<{ onLogout: () => void }> = ({ onLogout }) => (
  <header
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "5px 20px",
      backgroundColor: "#FFFFFF",
      color: "#07074b",
    }}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <AlysonLogo />
      <h1
        style={{
          marginLeft: 10,
          fontFamily: "sans-serif",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Palisade API Docs
      </h1>
    </div>
    <button
      onClick={onLogout}
      style={{
        backgroundColor: "#ff4d4d",
        color: "#fff",
        border: "none",
        borderRadius: 4,
        padding: "8px 16px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      Logout
    </button>
  </header>
);

// --- Footer ---
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
  const [selectedTab, setSelectedTab] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
    } else {
      const email = prompt("Enter your email:");
      const password = prompt("Enter your password:");

      if (email === "apidocs@alyson.com" && password === "alyson123@") {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userEmail", email);
        setIsAuthenticated(true);
      } else {
        alert("Login cancelled or incomplete.");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    setSelectedTab("home");
    setIsAuthenticated(false);
    window.location.reload();
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
        return <HomePage onGetStarted={() => setSelectedTab("facebook")} />;
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <Header onLogout={handleLogout} />
      <div
        style={{
          display: "flex",
          height: "calc(100vh - 100px)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Hide Sidebar on Homepage */}
        {selectedTab !== "home" && (
          <SidebarTabs selectedTab={selectedTab} onTabSelect={setSelectedTab} />
        )}

        <div style={{ flex: 1, padding: 20, overflowY: "auto" }}>
          {renderContent()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
