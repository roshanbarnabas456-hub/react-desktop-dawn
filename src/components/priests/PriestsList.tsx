import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter, Edit, Eye } from "lucide-react";

// Mock data for demonstration
const mockPriests = [
  {
    id: "002",
    name: "Thomas Cheruvally",
    birth: "18-May-1934",
    feast: "03-Jul",
    email: "thomas.cheruvally@diocese.org",
    address: "Kurji - Pre",
    phone: "(0612) 226248",
    mobile: "9430007551",
    status: "Active"
  },
  {
    id: "003",
    name: "Lt Mathew",
    birth: "15-Mar-1940",
    feast: "21-Sep",
    email: "mathew.lt@diocese.org",
    address: "Vakakiad",
    phone: "(0612) 445623",
    mobile: "9234567890",
    status: "Deceased"
  },
  {
    id: "004",
    name: "Joseph Thuruthyil",
    birth: "22-Aug-1945",
    feast: "19-Mar",
    email: "joseph.t@diocese.org",
    address: "Vellathuval",
    phone: "(0612) 334521",
    mobile: "9876543210",
    status: "Active"
  },
];

interface PriestsListProps {
  onPriestSelect?: (priestId: string) => void;
  onAddNew?: () => void;
  onPriestEdit?: (priest: any) => void;
}

export function PriestsList({ onPriestSelect, onAddNew, onPriestEdit }: PriestsListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPriest, setSelectedPriest] = useState<string | null>(null);

  const filteredPriests = mockPriests.filter(priest =>
    priest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    priest.id.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Priests Directory</span>
            <Button className="flex items-center space-x-2" onClick={onAddNew}>
              <Plus className="w-4 h-4" />
              <span>Add New Priest</span>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search by name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Priests Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-admin-table-header text-white hover:bg-admin-table-header">
                <TableHead className="text-white">S.No</TableHead>
                <TableHead className="text-white">Name</TableHead>
                <TableHead className="text-white">Birth</TableHead>
                <TableHead className="text-white">Feast</TableHead>
                <TableHead className="text-white">Email</TableHead>
                <TableHead className="text-white">Address</TableHead>
                <TableHead className="text-white">Phone</TableHead>
                <TableHead className="text-white">Mobile</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPriests.map((priest) => (
                <TableRow 
                  key={priest.id}
                  className={`cursor-pointer hover:bg-admin-row-hover ${
                    selectedPriest === priest.id ? "bg-admin-row-hover" : ""
                  }`}
                  onClick={() => {
                    setSelectedPriest(priest.id);
                    onPriestSelect?.(priest.id);
                  }}
                >
                  <TableCell className="font-medium">{priest.id}</TableCell>
                  <TableCell className="font-semibold text-primary">{priest.name}</TableCell>
                  <TableCell>{priest.birth}</TableCell>
                  <TableCell>{priest.feast}</TableCell>
                  <TableCell>{priest.email}</TableCell>
                  <TableCell>{priest.address}</TableCell>
                  <TableCell>{priest.phone}</TableCell>
                  <TableCell>{priest.mobile}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={priest.status === "Active" ? "default" : "secondary"}
                      className={priest.status === "Active" ? "bg-admin-success" : "bg-muted"}
                    >
                      {priest.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={(e) => {
                          e.stopPropagation();
                          onPriestEdit?.(priest);
                        }}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}