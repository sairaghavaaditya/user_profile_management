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

interface EducationSkillsTabProps {
  user: User;
  onUpdate: (user: User) => void;
}

const EducationSkillsTab = ({ user, onUpdate }: EducationSkillsTabProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleSave = () => {
    onUpdate(formData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Education Details */}
      <div className="overflow-hidden rounded-lg border border-border bg-card p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Education Details</h2>
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

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="school">School / College</Label>
            <Input
              id="school"
              placeholder="e.g. Lincoln College"
              value={formData.school}
              disabled={!isEditing}
              onChange={(e) => setFormData({ ...formData, school: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="degree">Highest degree or equivalent</Label>
            <Input
              id="degree"
              placeholder="e.g. Bachelors in Technology"
              value={formData.degree}
              disabled={!isEditing}
              onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="course">Course</Label>
            <Input
              id="course"
              placeholder="e.g. Computer science engineering"
              value={formData.course}
              disabled={!isEditing}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="yearOfCompletion">Year of completion</Label>
              <Select
                value={formData.yearOfCompletion}
                disabled={!isEditing}
                onValueChange={(value) => setFormData({ ...formData, yearOfCompletion: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="YYYY" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 30 }, (_, i) => 2024 - i).map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="grade">Grade</Label>
              <Input
                id="grade"
                placeholder="Enter here"
                value={formData.grade}
                disabled={!isEditing}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Projects */}
      <div className="overflow-hidden rounded-lg border border-border bg-card p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Skills & Projects</h2>
          {!isEditing && (
            <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
              <Edit className="h-4 w-4 text-primary" />
            </Button>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="skills">Skills</Label>
            <Textarea
              id="skills"
              placeholder="Enter here"
              value={formData.skills}
              disabled={!isEditing}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              className="min-h-32"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="projects">Projects</Label>
            <Textarea
              id="projects"
              placeholder="Enter here"
              value={formData.projects}
              disabled={!isEditing}
              onChange={(e) => setFormData({ ...formData, projects: e.target.value })}
              className="min-h-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSkillsTab;
