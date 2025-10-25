import { useState } from "react";
import { Edit, FileText } from "lucide-react";
import { User } from "@/types/user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ExperienceTabProps {
  user: User;
  onUpdate: (user: User) => void;
}

const ExperienceTab = ({ user, onUpdate }: ExperienceTabProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleSave = () => {
    onUpdate(formData);
    setIsEditing(false);
  };

  const workExperience = formData.workExperience || [
    { domain: "", subDomain: "", experience: "" },
    { domain: "", subDomain: "", experience: "" },
  ];

  const updateWorkExperience = (index: number, field: string, value: string) => {
    const newExperience = [...workExperience];
    newExperience[index] = { ...newExperience[index], [field]: value };
    setFormData({ ...formData, workExperience: newExperience });
  };

  return (
    <div className="space-y-6">
      {/* Work Experience */}
      <div className="overflow-hidden rounded-lg border border-border bg-card p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Work Experience</h2>
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

        <div className="space-y-6">
          {workExperience.map((exp, index) => (
            <div key={index} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor={`domain-${index}`}>Domain</Label>
                <Input
                  id={`domain-${index}`}
                  placeholder="e.g. Technology"
                  value={exp.domain}
                  disabled={!isEditing}
                  onChange={(e) => updateWorkExperience(index, "domain", e.target.value)}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor={`subdomain-${index}`}>Sub-domain</Label>
                  <Input
                    id={`subdomain-${index}`}
                    placeholder="e.g. MERN Stack"
                    value={exp.subDomain}
                    disabled={!isEditing}
                    onChange={(e) => updateWorkExperience(index, "subDomain", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`experience-${index}`}>Experience</Label>
                  <Select
                    value={exp.experience}
                    disabled={!isEditing}
                    onValueChange={(value) => updateWorkExperience(index, "experience", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5+">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LinkedIn & Resume */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg border border-border bg-card p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">LinkedIn</h2>
            {!isEditing && (
              <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
                <Edit className="h-4 w-4 text-primary" />
              </Button>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedIn">Profile URL</Label>
            <Input
              id="linkedIn"
              placeholder="linkedin.com/in/mrnbean"
              value={formData.linkedIn}
              disabled={!isEditing}
              onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-border bg-card p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Resume</h2>
            {!isEditing && (
              <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
                <Edit className="h-4 w-4 text-primary" />
              </Button>
            )}
          </div>

          <div className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-primary" />
              <span className="text-sm">{formData.resume || "No resume uploaded"}</span>
            </div>
            <Button variant="link" size="sm" className="text-primary">
              View
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTab;
