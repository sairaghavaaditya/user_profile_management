import { Eye, Trash2, Plus } from "lucide-react";
import { User } from "@/types/user";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface UserListProps {
  users: User[];
  onView: (user: User) => void;
  onDelete: (id: number) => void;
  onAdd: () => void;
}

const UserList = ({ users, onView, onDelete, onAdd }: UserListProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Users</h1>
        <Button onClick={onAdd} className="gap-2">
          <Plus className="h-4 w-4" />
          Add user
        </Button>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-24">Sr. No</TableHead>
              <TableHead>User name</TableHead>
              <TableHead>E-mail</TableHead>
              <TableHead className="w-32 text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={user.id} className="transition-colors hover:bg-muted/30">
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <button
                    onClick={() => navigate(`/user/${user.id}`)}
                    className="text-left font-medium text-primary hover:underline cursor-pointer"
                  >
                    {`${user.firstName} ${user.lastName}`}
                  </button>
                </TableCell>
                <TableCell className="text-muted-foreground">{user.email}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onView(user)}
                      className="rounded p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onDelete(user.id)}
                      className="rounded p-2 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserList;
