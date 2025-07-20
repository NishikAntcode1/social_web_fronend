import { Card } from "@mui/material";
import SearchUser from "../SearchUser/SearchUser";
import PopularUserCard from "./PopularUserCard";

const popularUsers = [1, 2, 3, 4];
export default function HomeRight() {
  return (
    <div className="pr-5">
      <SearchUser />

      <Card className="p-5">
        <div className="flex justify-between py-5 items-center">
          <p className="font-semibold opacity-70">Suggesions for you</p>
          <p className="text-xs font-semibold opacity-95">View All</p>
        </div>

        <div>
          {popularUsers.map((_, index) => (
            <PopularUserCard key={index} />
          ))}
        </div>
      </Card>

    </div>
  );
}
