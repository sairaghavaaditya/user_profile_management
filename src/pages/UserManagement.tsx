import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initialUsers } from "@/data/initialUsers";
import { User } from "@/types/user";
import Header from "@/components/Header";
import UserList from "@/components/UserList";
import UserFormModal from "@/components/UserFormModal";
import { toast } from "sonner";

const UserManagement = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleView = (user: User) => {
    navigate(`/user/${user.id}`, { state: { user, users, setUsers } });
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
    toast.success("User deleted successfully");
  };

  const handleAdd = () => {
    setIsModalOpen(true);
  };

  const handleSave = (userData: Partial<User>) => {
    const newUser: User = {
      id: users.length + 1,
      firstName: userData.firstName || "",
      lastName: userData.lastName || "",
      email: userData.email || "",
      phone: userData.phone || "",
      workExperience: [],
    };
    setUsers([...users, newUser]);
    toast.success("User added successfully");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <UserList users={users} onView={handleView} onDelete={handleDelete} onAdd={handleAdd} />
      </main>
      <UserFormModal open={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} />
    </div>
  );
};

export default UserManagement;
