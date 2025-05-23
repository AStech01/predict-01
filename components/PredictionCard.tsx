import { Eye, MessageCircle } from "lucide-react";

type PredictionCardProps = {
  views: number;
  comments: number;
};

const PredictionCard: React.FC<PredictionCardProps> = ({ views, comments }) => {
  return (
    <div className="bg-white  rounded-xl shadow p-4 w-full max-w-sm">
      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full inline-block mb-2">
        Crypto 🔥
      </span>
      <h3 className="font-semibold text-md mb-1">
        Bitcoin Will Reach $100k By End Of Year
      </h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
        With Their Current Roster And Momentum, The Lakers Are Poised To Take The Championship.
        Their Defense Has Improved Dramatically And ...
      </p>
      <div className="flex items-center text-gray-500 text-sm space-x-4">
        <div className="flex items-center space-x-1">
          <Eye className="w-4 h-4" /> <span>{views}</span>
        </div>
        <div className="flex items-center space-x-1">
          <MessageCircle className="w-4 h-4" /> <span>{comments}</span>
        </div>
      </div>
    </div>
  );
};

export default PredictionCard;
