import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart } from "lucide-react";

export function MedicalView() {
  return (
    <div className="space-y-6">
      {/* Priest Selection Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Heart className="w-5 h-5" />
            <span>Medical Records</span>
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

      {/* Basic Medical Information */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Medical Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="blood-group">Blood Group</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select blood group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a-positive">A+</SelectItem>
                  <SelectItem value="a-negative">A-</SelectItem>
                  <SelectItem value="b-positive">B+</SelectItem>
                  <SelectItem value="b-negative">B-</SelectItem>
                  <SelectItem value="ab-positive">AB+</SelectItem>
                  <SelectItem value="ab-negative">AB-</SelectItem>
                  <SelectItem value="o-positive">O+</SelectItem>
                  <SelectItem value="o-negative">O-</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Height (cm)</Label>
              <Input id="height" type="number" placeholder="170" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input id="weight" type="number" placeholder="70" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Medical History */}
      <Card>
        <CardHeader>
          <CardTitle>Medical History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="allergies">Known Allergies</Label>
              <Textarea 
                id="allergies" 
                placeholder="List any known allergies..."
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="medications">Current Medications</Label>
              <Textarea 
                id="medications" 
                placeholder="List current medications..."
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="medical-conditions">Medical Conditions</Label>
              <Textarea 
                id="medical-conditions" 
                placeholder="List any chronic conditions or past surgeries..."
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emergency-medical">Emergency Medical Contact</Label>
              <Textarea 
                id="emergency-medical" 
                placeholder="Emergency contact information for medical situations..."
                rows={3}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Doctor Information */}
      <Card>
        <CardHeader>
          <CardTitle>Healthcare Providers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="primary-doctor">Primary Doctor</Label>
              <Input id="primary-doctor" placeholder="Dr. Smith" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="doctor-phone">Doctor's Phone</Label>
              <Input id="doctor-phone" placeholder="(123) 456-7890" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hospital">Preferred Hospital</Label>
              <Input id="hospital" placeholder="St. Mary's Hospital" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="insurance">Health Insurance</Label>
              <Input id="insurance" placeholder="Insurance provider and policy number" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Health Status */}
      <Card>
        <CardHeader>
          <CardTitle>Current Health Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="last-checkup">Last Medical Checkup</Label>
              <Input id="last-checkup" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="next-checkup">Next Scheduled Checkup</Label>
              <Input id="next-checkup" type="date" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="health-notes">Additional Health Notes</Label>
              <Textarea 
                id="health-notes" 
                placeholder="Any additional health-related information..."
                rows={4}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}