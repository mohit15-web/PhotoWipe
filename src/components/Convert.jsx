import { useState } from 'react';
import Image from 'react-image-webp';
import imageCompression from 'browser-image-compression';
import OptionsList from './OptionsList';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Convert = () => {
  const [file, setFile] = useState(null);
  const [webpFile, setWebpFile] = useState(null);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
      const webpImage = await convertToWebP(selectedFile);
      setWebpFile(URL.createObjectURL(webpImage));
    }
  };

  const convertToWebP = async (file) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
      fileType: 'image/webp',
    };
    try {
      const compressedFile = await imageCompression(file, options);
      return compressedFile;
    } catch (error) {
      console.error('Error converting to WebP:', error);
    }
  };

  return (
    <div className=" mt-16 flex flex-col items-center justify-center mb-40 ">
      <div className='flex flex-col justify-center items-center'>
        <h1 className="text-4xl font-bold"  data-aos="fade-right">Image Converter</h1>
        <h1 className="font-medium text-[#979797] py-5"  data-aos="fade-right">
          Convert your image files to WebP format
        </h1>
      </div>
      <div className="bg-[#48CAE4] w-[400px] p-2 rounded-3xl m-auto">
        <label className="text-center ml-36 font-medium cursor-pointer"  data-aos="fade-right">
          <input
            type="file"
            hidden
            onChange={handleFileChange}
          />
          Choose Image
        </label>
      </div>
      <div className="mt-5 text-center">
        {file && (
          <>
            <h2 className='text-2xl font-semibold py-3'>Original Image</h2>
            <img src={file} alt="Original" className="w-[400px]" />
          </>
        )}
        {webpFile && (
          <>
            <h2 className='text-2xl font-semibold py-3'>Converted to WebP</h2>
            <Image src={webpFile} webp={webpFile} alt="WebP" className="w-[400px]" />
          </>
        )}
      </div>
      <div className="fixed py-4 z-10 bottom-0 bg-gray-100 w-[100%] pl-80">
        <OptionsList />
      </div>
    </div>
  );
};

export default Convert;