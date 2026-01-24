import CityPage from '../solaranlage-[city]/page';

export default function Page() {
  return <CityPage params={{ city: 'thun' }} />;
}

export { generateMetadata } from '../solaranlage-[city]/page';
