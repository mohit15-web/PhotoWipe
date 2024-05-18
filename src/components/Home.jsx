import Footer from "./Footer";

function Home() {
  return (
   <>
    <div className="flex justify-center items-center h-[75vh] relative top-[-20px] flex-wrap mt-32 gap-4 xl:mt-4 2xl:mt-6">
      <img
        src="https://assets-global.website-files.com/5bff8886c3964a992e90d465/5bff98f85ea7faf86504605e_scenes.gif"
        alt=""
        className="w-[800px]"
      />
      <div className="flex flex-col gap-6 px-5">
        <h1 className="text-6xl font-semibold text-wrap">A Free Tool For <br /> Image Manipulation</h1>
        <p className="text-2xl">
          Do all with one application download, convert and remove <br /> background
          images.
        </p>
        <div>
          <button className="btn">
            <i className="animation"></i>Get Started<i className="animation"></i>
          </button>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  );
}

export default Home;