import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from "../Loader/Loader";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function Download() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (text = "") => {
    setLoading(true);
    let res = await fetch(
      `https://api.unsplash.com/search/collections/?per_page=20&client_id=Ytr6xLjnSn0TkyZ9nooZc7HoyudKvEc5OSukQoKxnKo&query=${text}`
    );
    let data = await res.json();
    console.log(data);
    setData(data.results);
    setLoading(false);
  };

  const handleSearch = () => {
    if (text) {
      setLoading(true);
      setTimeout(() => {
        fetchData(text);
      }, 3000);
    }
  };

  const handleDownload = async (url, filename) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(blobUrl);
    toast.success("Downloaded Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold py-10"
          data-aos="fade-right"
      >Bulk Image Downloader</h1>
      <div className="flex ">
        <form
          className="relative form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
         
          <input
            className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
            placeholder="Search..."
            required
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="reset"
            className="absolute right-3 -translate-y-1/2 top-1/2 p-1"
            onClick={() => setText("")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </form>
           <button
            onClick={handleSearch}
            type="submit"
            className="p-3 border rounded-full m-1"
          >
            <svg
              width="17"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
              className="w-5 h-5 text-gray-500"
            >
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                strokeWidth="1.333"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
      </div>
      <div className="w-full mt-8 flex flex-wrap justify-center items-center gap-5 ">
        {loading ? (
          <Loader />
        ) : data.length === 0 ? (
          <h1 className="text-2xl"></h1>
        ) : (
          data.map((item) => (
            <div
              key={item.id}
              className="rounded overflow-hidden shadow-lg p-4 bg-white my-4 relative duration-200 hover:scale-105"
              data-aos="flip-right"
            >
              {item.cover_photo && (
                <img
                  className="w-[400px] h-[360px] object-cover"
                  src={item.cover_photo.urls.small}
                  alt={item.cover_photo.slug}
                />
              )}
              {item.cover_photo && (
                <button
                  onClick={() =>
                    handleDownload(
                      item.cover_photo.urls.full,
                      `image-${item.cover_photo.id}.jpg`
                    )
                  }
                  className="text-gray-600 bg-gray-100 hover:bg-gray-200 p-3 rounded-lg absolute top-80 right-6 "
                >
                  <ArrowDown />
                </button>
              )}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {item.title || "No Title"}
                </div>
                <p className="text-gray-600 text-sm">
                  Total Photos: {item.total_photos}
                </p>
                <p className="text-gray-600 text-sm">
                  Last Collected:{" "}
                  {new Date(item.last_collected_at).toLocaleDateString()}
                </p>
              </div>
              <div className="px-6 py-4">
                {item.preview_photos &&
                  item.preview_photos.map((photo, index) => (
                    <a href={photo.urls.thumb}
                    key={index}
                    target="_blank"
                    >
                    <img
                      className="inline-block h-12 w-12 rounded-full mr-2"
                      src={photo.urls.thumb}
                      alt={photo.id}
                    />
                    </a>
                  ))}
              </div>
              <div className="px-6 py-4">
                <a
                  href={item.links.html}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Collection
                </a>
              </div>
            </div>
          ))
        )}
      </div>

      {/* <div className="absolute bottom-0">
      <OptionsList />
      </div> */}
    </div>
  );
}

export default Download;
