import { useState } from "react";
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
import { CalendarDays, Phone, Mail, MapPin, User, GraduationCap, Camera, Save } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface PriestFormProps {
  isNewPriest?: boolean;
  priestData?: any;
  onSaved?: () => void;
}

export function PriestForm({ isNewPriest = false, priestData, onSaved }: PriestFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    s_no: priestData?.s_no || "",
    name: priestData?.name || "",
    birth_date: priestData?.birth_date || "",
    feast_day: priestData?.feast_day || "",
    email: priestData?.email || "",
    address_id: priestData?.address_id || "kurji-pre",
    prerana: priestData?.prerana || "",
    phone: priestData?.phone || "",
    mobile_1: priestData?.mobile_1 || "",
    mobile_2: priestData?.mobile_2 || "",
    father_name: priestData?.father_name || "",
    father_via: priestData?.father_via || "",
    mother_name: priestData?.mother_name || "",
    mother_dv: priestData?.mother_dv || "",
    additional_address: priestData?.additional_address || "",
    additional_info: priestData?.additional_info || ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    if (!formData.name) {
      toast({
        title: "Error",
        description: "Name is required",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      if (isNewPriest) {
        const { error } = await supabase
          .from('priests')
          .insert([formData]);
        
        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Priest information saved successfully"
        });
      } else {
        const { error } = await supabase
          .from('priests')
          .update(formData)
          .eq('id', priestData?.id);
        
        if (error) throw error;
        
        toast({
          title: "Success", 
          description: "Priest information updated successfully"
        });
      }
      
      onSaved?.();
    } catch (error) {
      console.error('Error saving priest:', error);
      toast({
        title: "Error",
        description: "Failed to save priest information",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
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
                <Input 
                  id="sno" 
                  placeholder="Enter S.No" 
                  value={formData.s_no}
                  onChange={(e) => handleInputChange('s_no', e.target.value)}
                />
              </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
               <Input 
                 id="name" 
                 placeholder="Enter full name" 
                 value={formData.name}
                 onChange={(e) => handleInputChange('name', e.target.value)}
               />
            </div>
            <div className="space-y-2">
              <Label htmlFor="birth">Birth Date</Label>
               <Input 
                 id="birth" 
                 type="date" 
                 value={formData.birth_date}
                 onChange={(e) => handleInputChange('birth_date', e.target.value)}
               />
            </div>
            <div className="space-y-2">
              <Label htmlFor="feast">Feast Day</Label>
               <Input 
                 id="feast" 
                 placeholder="DD-MMM" 
                 value={formData.feast_day}
                 onChange={(e) => handleInputChange('feast_day', e.target.value)}
               />
            </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email">Email</Label>
                 <Input 
                   id="email" 
                   type="email" 
                   placeholder="Enter email address" 
                   value={formData.email}
                   onChange={(e) => handleInputChange('email', e.target.value)}
                 />
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
              <Select 
                value={formData.address_id}
                onValueChange={(value) => handleInputChange('address_id', value)}
              >
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
               <Input 
                 id="prerana" 
                 placeholder="Prerana details" 
                 value={formData.prerana}
                 onChange={(e) => handleInputChange('prerana', e.target.value)}
               />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
               <Input 
                 id="phone" 
                 placeholder="(0612) 226248" 
                 value={formData.phone}
                 onChange={(e) => handleInputChange('phone', e.target.value)}
               />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile1">Mobile 1</Label>
               <Input 
                 id="mobile1" 
                 placeholder="9430007551" 
                 value={formData.mobile_1}
                 onChange={(e) => handleInputChange('mobile_1', e.target.value)}
               />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile2">Mobile 2</Label>
               <Input 
                 id="mobile2" 
                 placeholder="Mobile 2" 
                 value={formData.mobile_2}
                 onChange={(e) => handleInputChange('mobile_2', e.target.value)}
               />
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
                <Input 
                  id="father-name" 
                  placeholder="Father's name" 
                  value={formData.father_name}
                  onChange={(e) => handleInputChange('father_name', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="father-via">Via</Label>
                <Input 
                  id="father-via" 
                  placeholder="Via" 
                  value={formData.father_via}
                  onChange={(e) => handleInputChange('father_via', e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Mother</h4>
              <div className="space-y-2">
                <Label htmlFor="mother-name">Name</Label>
                <Input 
                  id="mother-name" 
                  placeholder="Mother's name" 
                  value={formData.mother_name}
                  onChange={(e) => handleInputChange('mother_name', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mother-dv">DV</Label>
                <Input 
                  id="mother-dv" 
                  placeholder="DV" 
                  value={formData.mother_dv}
                  onChange={(e) => handleInputChange('mother_dv', e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="additional-address">Additional Address</Label>
              <Textarea 
                id="additional-address" 
                placeholder="Additional address details"
                value={formData.additional_address}
                onChange={(e) => handleInputChange('additional_address', e.target.value)}
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="additional-info">Additional Info</Label>
              <Textarea 
                id="additional-info" 
                placeholder="Additional information"
                value={formData.additional_info}
                onChange={(e) => handleInputChange('additional_info', e.target.value)}
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

      {/* Save Button */}
      <div className="flex justify-end space-x-4">
        <Button 
          onClick={handleSave} 
          disabled={isLoading}
          className="min-w-32"
        >
          <Save className="w-4 h-4 mr-2" />
          {isLoading ? "Saving..." : "Save Priest"}
        </Button>
      </div>

    </div>
  );
}