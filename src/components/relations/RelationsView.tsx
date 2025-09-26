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
import { Users, Plus, Edit, Trash2 } from "lucide-react";

// Mock data for demonstration
const mockRelations = [
  {
    id: 1,
    relation: "E/Sr",
    name: "Mrs Thresiamma Th",
    occupationAndAddress: "Kuzhalvelkathil, Kainakary, Alleppy",
    phone: "(0477) 2724300"
  },
  {
    id: 2,
    relation: "Y/Br",
    name: "Mr P.J Joseph",
    occupationAndAddress: "Panangatt, Pulikunnom, Alleppy",
    phone: "(0477) 2707527"
  },
  {
    id: 3,
    relation: "Y/Sr",
    name: "Sr Kripa SND",
    occupationAndAddress: "Sophia High School, Bangalore",
    phone: "(080) 22281416"
  },
  {
    id: 4,
    relation: "Y/Br",
    name: "Mr Joseph Varghes",
    occupationAndAddress: "Panangatt, Pulinapra, Alleppy",
    phone: ""
  },
  {
    id: 5,
    relation: "Y/Br",
    name: "Mr Tom Jose",
    occupationAndAddress: "Panangatt, Mulackal, Alleppy",
    phone: "(0477) 2251384"
  }
];

export function RelationsView() {
  const [relations, setRelations] = useState(mockRelations);

  return (
    <div className="space-y-6">
      {/* Priest Selection Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span>Family Relations</span>
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

      {/* Relations Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Family Members & Relations</span>
            <Button className="flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Relation</span>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-admin-table-header text-white hover:bg-admin-table-header">
                <TableHead className="text-white">Relation</TableHead>
                <TableHead className="text-white">Name</TableHead>
                <TableHead className="text-white">Occupation and Address</TableHead>
                <TableHead className="text-white">Phone</TableHead>
                <TableHead className="text-white">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {relations.map((relation) => (
                <TableRow key={relation.id} className="hover:bg-admin-row-hover">
                  <TableCell className="font-medium">{relation.relation}</TableCell>
                  <TableCell>{relation.name}</TableCell>
                  <TableCell>{relation.occupationAndAddress}</TableCell>
                  <TableCell>{relation.phone}</TableCell>
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

      {/* Legend */}
      <Card>
        <CardHeader>
          <CardTitle>Relation Codes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div><strong>E/Sr:</strong> Elder Sister</div>
            <div><strong>Y/Sr:</strong> Younger Sister</div>
            <div><strong>E/Br:</strong> Elder Brother</div>
            <div><strong>Y/Br:</strong> Younger Brother</div>
            <div><strong>F:</strong> Father</div>
            <div><strong>M:</strong> Mother</div>
            <div><strong>U:</strong> Uncle</div>
            <div><strong>A:</strong> Aunt</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}