import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center h-[75vh] relative top-[-20px] flex-wrap mt-32 md:mt-10 gap-4 2xl:mt-6">
        <img
          src="https://assets-global.website-files.com/5bff8886c3964a992e90d465/5bff98f85ea7faf86504605e_scenes.gif"
          alt=""
          className="w-[800px] xl:w-[700px]"
        />
        <div className="flex flex-col gap-6 px-5">
          <h1 className="text-6xl font-semibold text-wrap xl:text-4xl 2xl:text-6xl">
            A Free Tool For <br /> Image Manipulation
          </h1>
          <p className="text-2xl xl:text-xl">
            Do all with one application download, convert and remove <br />{" "}
            background images.
          </p>
          <div>
            <button className="btn" onClick={() => navigate("/AppPage")}>
              <i className="animation"></i>Get Started
              <i className="animation"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="md:mt-60 xl:mt-1">
      <Footer />
      </div>
    </>
  );
}

export default Home;
