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
import { MapPin } from "lucide-react";

export function AddressView() {
  return (
    <div className="space-y-6">
      {/* Priest Selection Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="w-5 h-5" />
            <span>Address Information</span>
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

      {/* Home Address */}
      <Card>
        <CardHeader>
          <CardTitle>Home Address</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="father-name">Father</Label>
              <Input id="father-name" defaultValue="Joseph" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="house-name">Address</Label>
              <Textarea 
                id="house-name" 
                defaultValue="Panangatt House"
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="po">P.O.</Label>
              <Input id="po" defaultValue="P.O. Pulikunnom" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="via">(Via)</Label>
              <Input id="via" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="district">(Dt) District</Label>
              <Input id="district" defaultValue="Alleppy" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pin">Pin</Label>
              <Input id="pin" defaultValue="688604" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Address */}
      <Card>
        <CardHeader>
          <CardTitle>Current Address</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="current-address">Current Address</Label>
              <Textarea 
                id="current-address" 
                placeholder="Current residential address"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="correspondence-address">Correspondence Address</Label>
              <Textarea 
                id="correspondence-address" 
                placeholder="Address for official correspondence"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="(0612) 226248" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile</Label>
              <Input id="mobile" placeholder="9430007551" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="priest@diocese.org" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emergency-contact">Emergency Contact</Label>
              <Input id="emergency-contact" placeholder="Emergency contact number" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}