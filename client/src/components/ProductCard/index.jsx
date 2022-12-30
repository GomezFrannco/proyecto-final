import "./index.scss"

function ProductCard({ name, price, category, imageUrl }) {
  return (
    <div className='product__card bg-white w-[19%] rounded-xl'>
      <img className="rounded-t-xl" src={imageUrl} alt={name} />
      <div className='card__info px-6 py-4 border-t-gray-200 border-t-[1px]'>
        <div>
          <p className="info__price font-bold text-2xl text-gray-800">
            $ {price}
          </p>
          <p className="info__category text-sm font-normal text-gray-500">{category}</p>
          <p className="info__name text-base font-bold">{name}</p>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;

