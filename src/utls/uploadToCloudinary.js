import { data } from "react-router-dom";

const CLOUD_NAME = "djfwakogh";
const UPLOAD_PRESET = "social_web_app";

export const uploadTOCloudinary = async (file, fileType) => {
    if (file && fileType) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);

        const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${fileType}/upload`, {
            method: "POST",
            body: formData,
        });
        const data = await response.json();

        console.log(data); // Now prints the actual response object
        return data.secure_url;
    } else {
        console.log("error...");
    }
}

