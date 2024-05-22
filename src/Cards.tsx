import "./index.css";

type Props = {
  image: string;
  name: string;
  cost: number;
};

function Cards({ image, name, cost }: Props) {
  return (
    <div className="bg-gray=200 rounded-lg shadow-md shadow-x3">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-700">₹{cost}</p>
      </div>
      <div className="flex flex-col items-center justify-between">
        <p className="bg-gray-200 py-2 px-4 rounded text-blue-600 my-2">View Number </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-6 rounded">
        Best Prizes
        </button>
      </div>
    </div>
  );
}

export default Cards;
