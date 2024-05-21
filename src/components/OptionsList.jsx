import { Home } from 'lucide-react';
import { FaExchangeAlt, FaTrashAlt, FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function OptionsList() {
  const navigate = useNavigate()
  const options = [
    { name: "Convert", icon: <FaExchangeAlt /> , href:"/convert"},
    { name: "Remove", icon: <FaTrashAlt /> , href:"/removebg"},
    { name: "Search", icon: <FaSearch /> , href:"/download"},
    { name: "Apps", icon: <Home /> , href:"/AppPage"},
  ];
  const handleClick = (open) => {
    navigate(`${open}`)
  }

  return (
    <div className='flex w-[100%] gap-60'
    >
      {options.map((option, index) => (
        <div key={index} className='flex justify-center items-center flex-col gap- hover:text-[#48CAE4] cursor-pointer'
        onClick={() => handleClick(option.href)}
        >
          <span>{option.icon}</span>
          <span>{option.name}</span>
        </div>
      ))}
    </div>
  );
}

export default OptionsList;
