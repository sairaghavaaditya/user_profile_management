import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { User } from "@/types/user";
import Header from "@/components/Header";
import UserDetail from "@/components/UserDetail";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { initialUsers } from "@/data/initialUsers";

const UserDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, users, setUsers } = (location.state as { user?: User; users?: User[]; setUsers?: (u: User[]) => void } | null) || {};
  const currentUser = user ?? initialUsers.find((u) => u.id === Number(id));

  const handleUpdate = (updatedUser: User) => {
    if (setUsers && users) {
      const updatedUsers = users.map((u: User) => (u.id === updatedUser.id ? updatedUser : u));
      setUsers(updatedUsers);
      toast.success("User updated successfully");
    }
  };

  if (!currentUser) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">User not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <Button
          variant="ghost"
          className="mb-6 gap-2"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Users
        </Button>
        <UserDetail user={currentUser} onUpdate={handleUpdate} />
      </main>
    </div>
  );
};

export default UserDetailPage;
