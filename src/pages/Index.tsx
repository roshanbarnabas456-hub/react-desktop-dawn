import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Navigation } from "@/components/layout/Navigation";
import { PriestsList } from "@/components/priests/PriestsList";
import { PriestForm } from "@/components/priests/PriestForm";
import { AppointmentsView } from "@/components/appointments/AppointmentsView";
import { FormationView } from "@/components/formation/FormationView";

import { AddressView } from "@/components/address/AddressView";
import { RelationsView } from "@/components/relations/RelationsView";
import { ParishView } from "@/components/parish/ParishView";

const Index = () => {
  const [activeTab, setActiveTab] = useState("browse");

  const renderContent = () => {
    switch (activeTab) {
      case "browse":
        return <PriestsList />;
      case "biodata":
        return <PriestForm />;
      case "formation":
        return <FormationView />;
      case "appointments":
        return <AppointmentsView />;
      case "address":
        return <AddressView />;
      case "relations":
        return <RelationsView />;
      case "parish":
        return <ParishView />;
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
