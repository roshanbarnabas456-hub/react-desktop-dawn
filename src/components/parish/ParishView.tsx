import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import { Church, Plus, Edit, Trash2 } from "lucide-react";

// Mock data for demonstration
const mockParishHistory = [
  {
    id: 1,
    year: "1965",
    position: "Asst & H.M",
    parish: "Barbipha"
  },
  {
    id: 2,
    year: "1968",
    position: "PP",
    parish: "Barwjpur"
  }
];

export function ParishView() {
  const [parishHistory, setParishHistory] = useState(mockParishHistory);

  return (
    <div className="space-y-6">
      {/* Priest Selection Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Church className="w-5 h-5" />
            <span>Parish Assignments</span>
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

      {/* Current Parish Assignment */}
      <Card>
        <CardHeader>
          <CardTitle>Current Parish Assignment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="current-parish">Current Parish</Label>
              <Input id="current-parish" defaultValue="St. Mary's Church" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">Position</Label>
              <Select defaultValue="parish-priest">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="parish-priest">Parish Priest (PP)</SelectItem>
                  <SelectItem value="assistant">Assistant Priest</SelectItem>
                  <SelectItem value="administrator">Administrator</SelectItem>
                  <SelectItem value="vicar-general">Vicar General (VG)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="since-date">Since Date</Label>
              <Input id="since-date" type="date" defaultValue="2020-01-01" />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <Label htmlFor="parish-address">Parish Address</Label>
            <Textarea 
              id="parish-address" 
              placeholder="Complete parish address with contact details"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Parish History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Parish Assignment History</span>
            <Button className="flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Assignment</span>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-admin-table-header text-white hover:bg-admin-table-header">
                <TableHead className="text-white">Year</TableHead>
                <TableHead className="text-white">Position</TableHead>
                <TableHead className="text-white">Parish/Centre</TableHead>
                <TableHead className="text-white">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {parishHistory.map((assignment) => (
                <TableRow key={assignment.id} className="hover:bg-admin-row-hover">
                  <TableCell className="font-medium">{assignment.year}</TableCell>
                  <TableCell>{assignment.position}</TableCell>
                  <TableCell>{assignment.parish}</TableCell>
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

      {/* Additional Information */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="specializations">Specializations</Label>
              <Textarea 
                id="specializations" 
                placeholder="Special skills, languages, or areas of expertise"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea 
                id="notes" 
                placeholder="Additional notes about parish assignments"
                rows={3}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}