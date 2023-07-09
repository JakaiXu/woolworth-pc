import { BsFillPersonFill } from "react-icons/bs";
const MyAccount = () => {
  return (
    <div className="flex ml-[5rem]">
      <div className="min-w-[3rem] h-[3rem] border rounded-[50%] bg-gray-100 flex items-center justify-center text-xl hover:border-2 hover:border-gray-600">
        <BsFillPersonFill />
      </div>
      <div className="ml-2 text-left">
        <p>Login or Sign up</p>
        <p className="font-bold">Buy again & Lists</p>
      </div>
    </div>
  );
};

export default MyAccount;
