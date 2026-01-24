import CityPage from '../solaranlage-[city]/page';

export default function Page() {
  return <CityPage params={{ city: 'chur' }} />;
}

export { generateMetadata } from '../solaranlage-[city]/page';
