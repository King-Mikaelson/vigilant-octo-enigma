import TopBar from '../../components/topBar/index';
import Filters from '../../components/filters/index';
import CatalogueCard from '../catalogueCard';

export default function MenuCatalogue() {
  const headerStyle = {
    color: '#51145a',
    fontSize: '1.25rem',
    fontWeight: '600',
    marginLeft: '2.5rem',
    paddingTop: '2rem',
  };
  return (
    <div className="menu">
      <TopBar />
      <div style={headerStyle}>Suggested Items</div>
      <Filters />
      <CatalogueCard />
    </div>
  );
}
