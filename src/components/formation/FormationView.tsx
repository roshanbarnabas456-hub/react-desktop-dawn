import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GraduationCap, Plus, Edit, Trash2 } from "lucide-react";

// Mock data for demonstration
const mockFormation = [
  {
    id: 1,
    formation: "Mission Home",
    place: "Palai",
    from: "1950",
    to: "1952",
    rectors: "Msgr Vellaringatt"
  },
  {
    id: 2,
    formation: "Philosophy",
    place: "Ranchi",
    from: "1952",
    to: "1955",
    rectors: ""
  },
  {
    id: 3,
    formation: "Regency",
    place: "Nawada",
    from: "1955",
    to: "1956",
    rectors: "Fr. Jacob Kunnunkal"
  },
  {
    id: 4,
    formation: "Theology",
    place: "Pune",
    from: "1957",
    to: "1961",
    rectors: ""
  }
];

export function FormationView() {
  const [formations, setFormations] = useState(mockFormation);

  return (
    <div className="space-y-6">
      {/* Priest Selection Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GraduationCap className="w-5 h-5" />
            <span>Formation History</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="serial-no">Serial No.</Label>
              <Input id="serial-no" defaultValue="006" readOnly />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="priest-name">Name</Label>
              <Select defaultValue="antony-panangatt">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="antony-panangatt">Fr. Antony Panangatt</SelectItem>
                  <SelectItem value="thomas-cheruvally">Fr. Thomas Cheruvally</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" defaultValue="Panangatt" readOnly />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Formation Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Formation Details</span>
            <Button className="flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Formation</span>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-admin-table-header text-white hover:bg-admin-table-header">
                <TableHead className="text-white">Formation</TableHead>
                <TableHead className="text-white">Place</TableHead>
                <TableHead className="text-white">From</TableHead>
                <TableHead className="text-white">To Date</TableHead>
                <TableHead className="text-white">Rector(s)</TableHead>
                <TableHead className="text-white">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {formations.map((formation) => (
                <TableRow key={formation.id} className="hover:bg-admin-row-hover">
                  <TableCell className="font-medium">{formation.formation}</TableCell>
                  <TableCell>{formation.place}</TableCell>
                  <TableCell>{formation.from}</TableCell>
                  <TableCell>{formation.to}</TableCell>
                  <TableCell>{formation.rectors}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Summary Information */}
      <Card>
        <CardHeader>
          <CardTitle>Formation Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ordination-date">Date of Ordination</Label>
              <Input id="ordination-date" type="date" defaultValue="1961-05-15" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ordination-place">Place of Ordination</Label>
              <Input id="ordination-place" defaultValue="Pune" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ordained-by">Ordained By</Label>
              <Input id="ordained-by" defaultValue="Bishop John Doe" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}