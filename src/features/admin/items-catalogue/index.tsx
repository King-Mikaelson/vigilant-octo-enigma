import { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import ItemsCatalogue from '../../../components/admin/itemsCatalogue';
import MenuCatalogue from '../../../components/menu-catalogue';

export default function Catalogue() {
  const { openAddItem } = useContext(AppContext);

  return (
    <>
      {/* This component and state displays Add Item on small mobile screens,set to false/hidden on big screens */}
      {openAddItem ? (
        <div className="pos__addItem">
          <ItemsCatalogue />
        </div>
      ) : null}
      <div className="pos">
        <aside className="pos__left">
          <MenuCatalogue />
        </aside>
        <aside className="pos__right">
          <ItemsCatalogue />
        </aside>
      </div>
    </>
  );
}
