import CityPage from '../solaranlage-[city]/page';

export default function Page() {
  return <CityPage params={{ city: 'baden' }} />;
}

export { generateMetadata } from '../solaranlage-[city]/page';
