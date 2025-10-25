import { useState } from "react";
import { Edit } from "lucide-react";
import { User } from "@/types/user";
import { Button } from "@/components/ui/button";
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

interface BasicInfoTabProps {
  user: User;
  onUpdate: (user: User) => void;
}

const BasicInfoTab = ({ user, onUpdate }: BasicInfoTabProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleSave = () => {
    onUpdate(formData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-lg border border-border bg-card p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Basic Details</h2>
          {!isEditing ? (
            <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
              <Edit className="h-4 w-4 text-primary" />
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave}>Save</Button>
            </div>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              placeholder="e.g. John"
              value={formData.firstName}
              disabled={!isEditing}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              placeholder="e.g. Doe"
              value={formData.lastName}
              disabled={!isEditing}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="emailId">Email ID</Label>
            <Input
              id="emailId"
              placeholder="e.g. mrnobody@mail.com"
              value={formData.email}
              disabled={!isEditing}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="yearOfBirth">Year of birth</Label>
            <Select
              value={formData.yearOfBirth}
              disabled={!isEditing}
              onValueChange={(value) => setFormData({ ...formData, yearOfBirth: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="YYYY" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 70 }, (_, i) => 2024 - i).map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select
              value={formData.gender}
              disabled={!isEditing}
              onValueChange={(value) => setFormData({ ...formData, gender: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input
              id="phone"
              placeholder="8332883854"
              value={formData.phone}
              disabled={!isEditing}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="space-y-2 md:col-span-2 lg:col-span-1">
            <Label htmlFor="altPhone">Alternate Phone no</Label>
            <Input
              id="altPhone"
              placeholder="e.g. 9876543210"
              value={formData.altPhone}
              disabled={!isEditing}
              onChange={(e) => setFormData({ ...formData, altPhone: e.target.value })}
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              placeholder="Enter here"
              value={formData.address}
              disabled={!isEditing}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="min-h-24"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pincode">Pincode</Label>
            <Input
              id="pincode"
              placeholder="Enter here"
              value={formData.pincode}
              disabled={!isEditing}
              onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="domicileState">Domicile state</Label>
            <Select
              value={formData.domicileState}
              disabled={!isEditing}
              onValueChange={(value) => setFormData({ ...formData, domicileState: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                <SelectItem value="karnataka">Karnataka</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="domicileCountry">Domicile country</Label>
            <Select
              value={formData.domicileCountry}
              disabled={!isEditing}
              onValueChange={(value) => setFormData({ ...formData, domicileCountry: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="usa">USA</SelectItem>
                <SelectItem value="uk">UK</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoTab;
