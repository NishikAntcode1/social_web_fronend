import { Avatar } from "@mui/material";

export default function StoryCircle() {
  return (
    <div>
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar
            sx={{ width: "5rem", height: "5rem" }}
            src="https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_fullxfull.5804742914_ap2d.jpg"
          >
          </Avatar>
          <p>Dolly</p>
        </div>
    </div>
  )
}
