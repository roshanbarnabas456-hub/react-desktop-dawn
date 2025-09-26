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
import { Calendar, Plus, Edit, Trash2 } from "lucide-react";

// Mock data for demonstration
const mockAppointments = [
  {
    id: 1,
    centre: "Jehanabad",
    fromDate: "1961",
    toDate: "1965",
    appointment: "Asst",
    with: "Fr. A.Goveas S.J",
    remarks: ""
  },
  {
    id: 2,
    centre: "Barbipha",
    fromDate: "1965",
    toDate: "1968",
    appointment: "Asst & H.M",
    with: "Fr. Joseph Padamattom",
    remarks: ""
  },
  {
    id: 3,
    centre: "Barwjpur",
    fromDate: "1968",
    toDate: "1969",
    appointment: "PP",
    with: "",
    remarks: ""
  },
  {
    id: 4,
    centre: "B'House",
    fromDate: "1969",
    toDate: "1977",
    appointment: "V.G",
    with: "",
    remarks: ""
  },
  {
    id: 5,
    centre: "Kurji",
    fromDate: "1977",
    toDate: "1979",
    appointment: "PP",
    with: "",
    remarks: ""
  }
];

export function AppointmentsView() {
  const [selectedPriest] = useState("Fr. Antony Panangatt");
  const [appointments, setAppointments] = useState(mockAppointments);

  return (
    <div className="space-y-6">
      {/* Priest Selection Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>Appointments Management</span>
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

      {/* Appointments Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Appointment History</span>
            <Button className="flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Appointment</span>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-admin-table-header text-white hover:bg-admin-table-header">
                <TableHead className="text-white">Centre</TableHead>
                <TableHead className="text-white">From Date</TableHead>
                <TableHead className="text-white">To Date</TableHead>
                <TableHead className="text-white">Appointment</TableHead>
                <TableHead className="text-white">With</TableHead>
                <TableHead className="text-white">Remarks</TableHead>
                <TableHead className="text-white">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id} className="hover:bg-admin-row-hover">
                  <TableCell className="font-medium">{appointment.centre}</TableCell>
                  <TableCell>{appointment.fromDate}</TableCell>
                  <TableCell>{appointment.toDate}</TableCell>
                  <TableCell>{appointment.appointment}</TableCell>
                  <TableCell>{appointment.with}</TableCell>
                  <TableCell>{appointment.remarks}</TableCell>
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
          <CardTitle>Current Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="current-appointment">Current Appointment</Label>
              <Input id="current-appointment" defaultValue="PP" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="current-centre">Current Centre</Label>
              <Input id="current-centre" defaultValue="Kurji" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="since-date">Since Date</Label>
              <Input id="since-date" type="date" defaultValue="1977-01-01" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}