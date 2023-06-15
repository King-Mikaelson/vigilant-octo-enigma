import { FaPlus } from 'react-icons/fa';
import mealImage from '../../assets/fastFoodPic.png';
import wineImage from '../../assets/fastFoodPic1.png';
import doughnut from '../../assets/fastFoodPic2.png';
import { CartTypes, Stock, Store } from '../../frontendData/frontendData';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

interface Props {
  item: Store;
}

function SingleCard({ item }: Props) {
  //Add and remove from order state
  const {
    state: { fromCatalogue },
    dispatch,
  } = useContext(AppContext);
  return (
    <>
      <div className="menuCard__card" style={{ height: '198px' }}>
        {item.item_category === 'Meals' ? (
          <img src={mealImage} alt="meals" />
        ) : item.item_category === 'Wine' ? (
          <img src={wineImage} alt="wines" />
        ) : (
          <img src={doughnut} alt="desserts" />
        )}
        <p className="menuCard__title">{item.item_name}</p>
        <div className="menuCard__cartAction">
          <aside>
            {fromCatalogue.some((c: CartTypes) => c.id === item.id) ? (
              <div>
                <FaPlus color="#ec9c04" size={12} />
                <button className="button__element addToCart">Added</button>
              </div>
            ) : (
              <div
                onClick={() =>
                  dispatch!({
                    type: 'ADD_TO_CATALOGUE',
                    payload: item,
                  })
                }
              >
                <FaPlus color="#ec9c04" size={12} />
                <button className="button__element addToCart">
                  Add to order
                </button>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}

export default function CatalogueCard() {
  const {
    state: { items },
    transformItems,
  } = useContext(AppContext);
  return (
    <div className="menuCard">
      {Stock?.map((item: Store) => (
        <SingleCard key={item.id} item={item} />
      ))}
    </div>
  );
}
