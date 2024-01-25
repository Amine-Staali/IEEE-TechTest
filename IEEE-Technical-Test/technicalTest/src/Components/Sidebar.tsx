import '../css/sidebar.css';
import IeeeTunisiaSection from '../assets/IEEE TUNISIA SECTION -2.png';
import Overview from '../assets/Overview.png';
import Requests from '../assets/Requests.png';
import Settings from '../assets/Settings.png';
import FAQ from '../assets/FAQ.png';
import Contact from '../assets/Contact.png';
import Logout from '../assets/Logout.png';

export default function Sidebar() {
  return (
    <div className="w-2/12 fixed left-0 h-screen px-2 py-5 bg-blue-900">
        <img className="m-auto mb-3" src={IeeeTunisiaSection} alt="" />
        <hr className=' mb-28'/>
        <ul className=" text-gray-400 m-5 w-full flex flex-col ">
          <span className='text-xs'>DASHBOARD</span>
          <div className='mt-5 flex items-center'>
            <img className='mr-2 w-6 h-6' src={Overview} alt="" />
            <li className=' w-11/12'>Overview</li>
          </div>
          <div className='mt-5 flex items-center justify-arround'>
            <div className=" flex items-center">
              <img className='mr-2 img' src={Requests} alt="" />
              <li className='w-11/12 flex items-center text-white notif'>Requests</li>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="12.5" viewBox="0 0 320 512"><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
          </div>
          <div className="mt-5 flex items-center justify-arround">
            <img className='mr-2 img' src={Settings} alt="" />
            <li className='w-11/12'>Settings</li>
          </div>
      </ul>

      <ul className="text-gray-400 m-5 w-full flex flex-col mt-28">
        <span className='text-xs'>HELP AND SUPPORT</span>
        <div className='mt-5 flex items-center'>
          <img className='mr-2 img' src={FAQ} alt="" />
          <li className='w-11/12'>FAQ</li>
        </div>

        <div className="mt-5 flex items-center justify-arround">
          <img className='mr-2 img' src={Contact} alt="" />
          <li className='w-11/12'>Contact Us</li>
        </div>
      </ul>

      <hr className='mt-28 mb-3'/>
      <div className='flex items-center mr-4'>
        <div className="bg-blue-900 shadow-md rounded-lg flex items-center w-36 m-auto px-3 py-2">
          <img className='img mr-2' src={Logout} alt="" />
          <span className='text-lg text-gray-400'>Logout</span>
        </div>
        <svg className='rotate-180' xmlns="http://www.w3.org/2000/svg" height="20" width="12.5" viewBox="0 0 320 512"><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
      </div>

    </div>
  )
}
