"use client";
import SearchWarning from "@/components/users/SearchWarning";
import UserCard from "@/components/users/UserCard";
import { User } from "@/lib/types";
import axios from "axios";
import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState(false);
  const [searchQuery] = useDebounce(searchInput, 500);

  const fetchUsers = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?q=${searchQuery}`,
      );
      setUsers(response.data);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [searchQuery]);

  return (
    <>
      <div className="min-h-screen p-8 lg:px-12">
        <div className="flex justify-between mb-8 items-center grid gap-4 grid-cols-1 sm:grid-cols-2">
          <h1 className="font-bold text-xl lg:text-3xl">Users</h1>
          <div className="flex gap-2 items-center border border-gray-300 rounded-full px-4 py-2 justify-self-end w-full lg:w-[60%] justify-between">
            <div className="flex gap-2">
              <Search />
              <input
                type="text"
                placeholder={"Search users..."}
                value={searchInput}
                style={{ outline: "none" }}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <div className="cursor-pointer">
              <X onClick={() => setSearchInput("")} />
            </div>
          </div>
        </div>

        {error && <SearchWarning warning="error" />}
        {loading ? (
          <SearchWarning warning="loading" />
        ) : users.length === 0 ? (
          <SearchWarning warning="not-found" />
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <UserCard user={user} key={user.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
