import { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import OptionsList from "./OptionsList";
import { Loader } from "../Loader/Loader"; // Ensure this path is correct
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { toast } from "react-toastify";
// ..
AOS.init();
function RemoveBg() {
  const [inputImage, setInputImage] = useState(null);
  const [outputImage, setOutputImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const removeBackground = async () => {
    if (!inputImage) return;

    setIsLoading(true); // Start loading

    const formData = new FormData();
    formData.append("image_file", inputImage);
    formData.append("size", "auto");

    const api_key = "VB4g5EFzeZuFkVRLPJYRppJU";
    const url = "https://api.remove.bg/v1.0/removebg";

    try {
      const response = await axios({
        method: "post",
        url: url,
        data: formData,
        responseType: "arraybuffer",
        headers: {
          "X-Api-Key": api_key,
        },
        encoding: null,
      });

      if (response.status !== 200) {
        console.error("Error:", response.status, response.statusText);
      } else {
        const imgsrc = URL.createObjectURL(
          new Blob([response.data], { type: "image/png" })
        );
        setOutputImage(imgsrc);
        console.log(imgsrc);
      }
    } catch (error) {
      console.error("Request failed:", error);
    } finally {
      setIsLoading(false); // Stop loading
      toast.success("Background Removed ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  const downloadImage = async (url, description) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      saveAs(blob, description || "downloaded_image.jpg"); // Set a default filename if description is not available
      toast.success(" Downloaded Successfully ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-[100%] h-[90vh]">
      <div className="absolute top-0 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold pt-5"
        data-aos="fade-right"
        >Remove Background</h1>
        <p className="text-xl my-4 text-gray-500"
        data-aos="fade-in"
        >
          Remove the background of any image
        </p>
      </div>
      
      <div className="flex justify-center items-center absolute top-32">
        <div className="bg-[#fff] w-[200px] p-2 rounded-3xl">
          <label className="text-center ml-12 font-medium cursor-pointer">
            <input
              type="file"
              hidden
              multiple
              onChange={(e) => {
                setInputImage(e.target.files[0]);
              }}
            />
            Choose Files
          </label>
        </div>
        <button
          className="bg-[#48CAE4] w-[200px] p-2 rounded-3xl"
          onClick={removeBackground}
        >
          Remove Background
        </button>
      </div>

      <div className="absolute top-48">
        {isLoading ? (
          <Loader />
        ) : outputImage ? (
          <div className="flex flex-col justify-center items-center">
            <img
              src={outputImage}
              alt="output image"
              className="h-[320px] w-[400px] p-5 rounded-md m-auto shadow-xl"
            />
            <button
              className="removeBgButton mt-5"
              onClick={() => downloadImage(outputImage)}
            >
              Download
            </button>
          </div>
        ) : null}
      </div>
      <div className="absolute bottom-0"
    >
        <OptionsList />
      </div>
    </div>
  );
}

export default RemoveBg;
