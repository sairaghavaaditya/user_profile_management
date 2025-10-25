import { User as UserIcon, Copy, Edit } from "lucide-react";
import { User } from "@/types/user";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BasicInfoTab from "./tabs/BasicInfoTab";
import EducationSkillsTab from "./tabs/EducationSkillsTab";
import ExperienceTab from "./tabs/ExperienceTab";

interface UserDetailProps {
  user: User;
  onUpdate: (user: User) => void;
}

const UserDetail = ({ user, onUpdate }: UserDetailProps) => {
  return (
    <div className="w-full space-y-6">
      <div className="overflow-hidden rounded-lg border border-border bg-card p-8">
        <div className="flex items-start gap-6">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-secondary">
            <UserIcon className="h-16 w-16 text-primary" />
          </div>
          
          <div className="flex-1 space-y-2">
            <h1 className="text-3xl font-semibold">{`${user.firstName} ${user.lastName}`}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>{user.email}</span>
              <button className="rounded p-1 transition-colors hover:bg-accent">
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <p className="text-muted-foreground">{user.phone}</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3 bg-muted/50">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="education">Education & Skills</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic" className="mt-6">
          <BasicInfoTab user={user} onUpdate={onUpdate} />
        </TabsContent>
        
        <TabsContent value="education" className="mt-6">
          <EducationSkillsTab user={user} onUpdate={onUpdate} />
        </TabsContent>
        
        <TabsContent value="experience" className="mt-6">
          <ExperienceTab user={user} onUpdate={onUpdate} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserDetail;
