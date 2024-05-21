import './RemoveBg.css'
import image from '../assets/download.png'
import { useNavigate } from 'react-router-dom'; 
import { memo } from 'react';
import OptionsList from './OptionsList';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function AppPage() {
    const navigate = useNavigate()
    const images = [
        { id: 1, url: 'https://plus.unsplash.com/premium_photo-1664352957938-9a35a0e19403?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 1' },
        { id: 2, url: 'https://images.unsplash.com/photo-1715852637581-0e09305ec8e1?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 2' },
        { id: 3, url: 'https://images.unsplash.com/photo-1715594565265-26e6b44763e2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 3' },
        { id: 4, url: 'https://images.unsplash.com/photo-1716136716704-7d5f7bbb6de4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 4' },
      ];
    return (
        <>
        <div>
        <div className="flex justify-center items-center flex-col">
            <img src="https://badass-app.vercel.app/static/media/hero-img-2.aecae7980905c700e4ca.png" alt=""
            className="w-[600px] border mt-12 bg-blue-300 rounded-xl"
            />
            <h1 className="text-4xl font-semibold pt-6"
       data-aos="fade-right"
            
            >Remove Image Background</h1>
            <p className="py-6 text-lg text-gray-500">Get a transparent background for any image</p>

            <button className='removeBgButton'
            data-aos="zoom-in-left"
            onClick={() => navigate("/removeBg")}
            >Upload Image</button>
            <p className="py-6 text-lg text-gray-500">No image? try one of these</p>
        </div>
        <div className="flex justify-center items-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="">
          <img src={image.url} alt={image.alt} className="w-16 h-16 rounded-lg" />
        </div>
      ))}
    </div>

    <div className="flex justify-center items-center flex-col mt-10">
            <img src="https://badass-app.vercel.app/static/media/chain.e33754ea5500ca9abefd.png" alt=""
            className="w-[500px] border mt-12 bg-blue-300 rounded-xl"
            />
            <h1 className="text-4xl font-semibold pt-6"
       data-aos="fade-right"
            
            >Convert Your Images | Files</h1>
            <p className="py-6 text-lg text-gray-500">With Photowipe, you can convert your files to any format</p>

            <button className='removeBgButton'
            data-aos="zoom-in-left"
            onClick={() => navigate("/convert")}
            >Choose Files</button>
        </div>

        <div className="flex justify-center items-center flex-col my-10 mb-40">
            <img src={image} alt=""
            className="w-[4 00px] mt-12 rounded-xl"
            />
            <h1 className="text-4xl font-semibold pt-6"
       data-aos="fade-right"
            
            >Download Multiple Images At Once</h1>
            <p className="py-6 text-lg text-gray-500">Ever thought of downloading multiple images at once?</p>

            <button
            onClick={() => navigate("/download")}
            className='removeBgButton'
            data-aos="zoom-in-left"

            >Download Images</button>
        </div>
        </div>
        <div className="fixed py-4 z-10 bottom-0 bg-gray-100 w-[100%] pl-80">
        <OptionsList />
      </div>
        </>
    );
}

let memoiseAppPage = memo(AppPage);
export default memoiseAppPage;