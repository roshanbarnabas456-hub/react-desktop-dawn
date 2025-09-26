import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays, Phone, Mail, MapPin, User, GraduationCap, Camera } from "lucide-react";

export function PriestForm() {
  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>Basic Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Profile Picture */}
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-32 h-32 border-4 border-border">
                <AvatarImage src="" alt="Priest Photo" />
                <AvatarFallback className="bg-muted text-4xl">
                  <Camera className="w-12 h-12 text-muted-foreground" />
                </AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm" className="text-xs">
                Upload Photo
              </Button>
            </div>
            
            {/* Basic Information Fields */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sno">S.No</Label>
                <Input id="sno" placeholder="002" defaultValue="002" />
              </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Fr. Thomas Cheruvally" defaultValue="Thomas Cheruvally" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="birth">Birth Date</Label>
              <Input id="birth" type="date" defaultValue="1934-05-18" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="feast">Feast Day</Label>
              <Input id="feast" placeholder="03-Jul" defaultValue="03-Jul" />
            </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="thomas.cheruvally@diocese.org" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>Contact & Address</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Select defaultValue="kurji-pre">
                <SelectTrigger>
                  <SelectValue placeholder="Select address" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kurji-pre">Kurji - Pre</SelectItem>
                  <SelectItem value="vakakiad">Vakakiad</SelectItem>
                  <SelectItem value="prerana">Prerana</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="prerana">Prerana</Label>
              <Input id="prerana" placeholder="Prerana details" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="(0612) 226248" defaultValue="(0612) 226248" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile1">Mobile 1</Label>
              <Input id="mobile1" placeholder="9430007551" defaultValue="9430007551" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile2">Mobile 2</Label>
              <Input id="mobile2" placeholder="26 June 2017" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Family Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>Family Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Father</h4>
              <div className="space-y-2">
                <Label htmlFor="father-name">Name</Label>
                <Input id="father-name" placeholder="Lt Thomas" defaultValue="Lt Thomas" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="father-via">Via</Label>
                <Input id="father-via" placeholder="Vakakiad" defaultValue="Vakakiad" />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Mother</h4>
              <div className="space-y-2">
                <Label htmlFor="mother-name">Name</Label>
                <Input id="mother-name" placeholder="Lt Mariam" defaultValue="Lt Mariam" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mother-dv">DV</Label>
                <Input id="mother-dv" placeholder="Kottayam" defaultValue="Kottayam" />
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="additional-address">Additional Address</Label>
              <Textarea 
                id="additional-address" 
                placeholder="Cheruvally House"
                defaultValue="Cheruvally House"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="additional-info">Additional Info</Label>
              <Textarea 
                id="additional-info" 
                placeholder="P.O. Moonmilavu"
                defaultValue="P.O. Moonmilavu"
                rows={3}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Formation History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GraduationCap className="w-5 h-5" />
            <span>Formation History</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4 p-3 bg-admin-table-header text-white rounded-md">
              <div className="font-semibold">Stage</div>
              <div className="font-semibold">Institute</div>
              <div className="font-semibold">Year</div>
              <div className="font-semibold">Status</div>
            </div>
            
            {[
              { stage: "Minor Seminary", institute: "Mission Home, Palai", year: "1950", status: "Completed" },
              { stage: "Philosophy", institute: "St. Joseph's Mangalon", year: "1951", status: "Completed" },
              { stage: "Regency I", institute: "Jehanabad", year: "1954", status: "Completed" },
              { stage: "Regency II", institute: "Maner", year: "1955", status: "Completed" },
              { stage: "Theology", institute: "St. Joseph's Mangalon", year: "1956", status: "Completed" },
            ].map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-3 hover:bg-admin-row-hover rounded-md border">
                <div className="font-medium">{item.stage}</div>
                <div>{item.institute}</div>
                <div>{item.year}</div>
                <div>
                  <Badge variant="secondary" className="bg-admin-success text-white">
                    {item.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <Button variant="outline">Cancel</Button>
        <Button variant="secondary">Save Draft</Button>
        <Button>Save & Continue</Button>
      </div>
    </div>
  );
}