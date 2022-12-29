import "./index.scss"

function ProductCard({ name, price, category, imageUrl }) {
  return (
    <div className='product__card bg-white w-[19%] rounded-xl'>
      <img className="rounded-t-xl" src={imageUrl} alt={name} />
      <div className='px-6 py-4 border-t-gray-200 border-t-[1px]'>
        <div>
          <p className="font-bold text-xl">
            $ {price}
          </p>
          <p className="text-sm font-normal text-gray-500">{category}</p>
          <p className="text-lg">{name}</p>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;

