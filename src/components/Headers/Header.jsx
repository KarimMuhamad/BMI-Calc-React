import InfoWeather from './InfoWeather';
import ToggleDarkMode from './ToggleDarkMode';

const Header = () => {
   return (
      <div className='fixed flex justify-between w-full px-6 py-6'>
         <InfoWeather />
         <ToggleDarkMode />
      </div>
   )
}

export default Header