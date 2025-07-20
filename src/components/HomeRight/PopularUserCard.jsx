import { Avatar, Button, CardHeader, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function () {
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <Button size="small">FOLLOW</Button>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    </div>
  );
}
