import { BsFillPersonFill } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
const MyAccount = () => {
  return (
    <div className="flex justify-self-end">
      <div className="flex">
        <div className="flex items-center justify-center min-w-[3rem] h-[3rem] border rounded-[50%] bg-gray-100 text-xl hover:border-2 hover:border-gray-600 ">
          <CiViewList />
        </div>
        <div className="ml-2 text-left hidden-sm min-w-[150px]">
          <p className="text-[14px]">Login or Sign up</p>
          <p className="font-bold text-[14px]">Buy again & Lists</p>
        </div>
      </div>
      <div className="flex ml-[5px]">
        <div className="min-w-[3rem] h-[3rem] border rounded-[50%] bg-gray-100 flex items-center justify-center text-xl hover:border-2 hover:border-gray-600 ">
          <BsFillPersonFill />
        </div>
        <div className="ml-2 text-left hidden-sm min-w-[160px]">
          <p className="text-[14px]">Login or Sign up</p>
          <p className="font-bold text-[14px]">Buy again & Lists</p>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
