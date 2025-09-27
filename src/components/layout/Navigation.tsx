import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Users,
  FileText,
  GraduationCap,
  Calendar,
  Heart,
  Home,
  GitBranch,
  Church,
  Save,
  Printer,
  X,
  LogOut
} from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigationItems = [
  { id: "browse", label: "Browse", icon: Users },
  { id: "biodata", label: "BioData", icon: FileText },
  { id: "formation", label: "Formation", icon: GraduationCap },
  { id: "appointments", label: "Appointments", icon: Calendar },
  
  { id: "address", label: "Address", icon: Home },
  { id: "relations", label: "Relations", icon: GitBranch },
  { id: "parish", label: "Parish", icon: Church },
];

const actionItems = [
  { id: "print", label: "Print", icon: Printer, variant: "secondary" as const },
];

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="bg-admin-nav px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              size="sm"
              onClick={() => onTabChange(item.id)}
              className={cn(
                "flex items-center",
                activeTab === item.id 
                  ? "bg-primary text-primary-foreground" 
                  : "text-white hover:bg-white/10"
              )}
            >
              <span>{item.label}</span>
            </Button>
          ))}
        </div>
        
        <div className="flex space-x-2">
          {actionItems.map((item) => (
            <Button
              key={item.id}
              variant={item.variant}
              size="sm"
              className="flex items-center space-x-2"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}