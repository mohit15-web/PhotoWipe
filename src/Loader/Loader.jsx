import "./Loader.css";
export const Loader = () => {
  return (
    <div className="mt-20 justify-center items-center flex flex-col gap-5">
        <div className="dot-spinner p-8">
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
    </div>
    </div>
  );
};
