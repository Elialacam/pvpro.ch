import CityPage from '../solaranlage-[city]/page';

export default function Page() {
  return <CityPage params={{ city: 'lausanne' }} />;
}

export { generateMetadata } from '../solaranlage-[city]/page';
