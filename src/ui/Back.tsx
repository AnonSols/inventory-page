import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
const Back = () => {
  const navigate = useNavigate();
  return (
    <button className="underline" onClick={() => navigate(-1)}>
      <span className="text-green-400  underline flex items-center justify-center gap-2">
        <FaArrowLeftLong /> Go back
      </span>
    </button>
  );
};

export default Back;
