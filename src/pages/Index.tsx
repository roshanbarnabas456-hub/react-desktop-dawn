import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Navigation } from "@/components/layout/Navigation";
import { PriestsList } from "@/components/priests/PriestsList";
import { PriestForm } from "@/components/priests/PriestForm";

const Index = () => {
  const [activeTab, setActiveTab] = useState("browse");

  const renderContent = () => {
    switch (activeTab) {
      case "browse":
        return <PriestsList />;
      case "biodata":
        return <PriestForm />;
      case "formation":
        return <PriestForm />;
      case "appointments":
        return <div className="p-8 text-center text-muted-foreground">Appointments management coming soon...</div>;
      case "medical":
        return <div className="p-8 text-center text-muted-foreground">Medical records coming soon...</div>;
      case "address":
        return <div className="p-8 text-center text-muted-foreground">Address management coming soon...</div>;
      case "relations":
        return <div className="p-8 text-center text-muted-foreground">Relations management coming soon...</div>;
      case "parish":
        return <div className="p-8 text-center text-muted-foreground">Parish assignments coming soon...</div>;
      default:
        return <PriestsList />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="container mx-auto p-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
