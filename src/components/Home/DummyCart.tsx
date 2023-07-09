import everydayLogo from "../../assets/fs_everday_market_logo.png";
import woolworth from "../../assets/fs_waw_logo.webp";
import metro from "../../assets/fs_metro60_logo.png";
import bigW from "../../assets/fs_bigw_logo.png";
import pet from "../../assets/fs_pet_culture_logo.png";
import mydeal from "../../assets/fs_my_deal_logo.png";
const h2Class = "text-orange-700 text-xl font-bold";
const pClass = "text-gray-500 mb-4";
const DummyCart = () => {
  return (
    <div className="flex p-10 shadow-lg rounded-xl w-[900px] bg-white">
      <div className="w-[45%]">
        <h2 className={h2Class}>Everyday Rewards</h2>
        <p className={pClass}>Scan, boost and enjoy everyday</p>
        <h2 className={h2Class}>Everyday Extra</h2>
        <p className={pClass}>The value really stacks up</p>
        <h2 className={h2Class}>Everyday Pay</h2>
        <p className={pClass}>Collect points and pay securely</p>
        <h2 className={h2Class}>Everyday Market</h2>
        <p className={pClass}>More brands you love in one shop</p>
        <h2 className={h2Class}>Everyday Insurance</h2>
        <p className={pClass}>Quality cover wtih more to enjoy</p>
        <h2 className="text-xl font-bold">Mobile</h2>
        <p className={pClass}>Plans plus ways to save</p>
        <h2 className="text-xl font-bold">Gift cards</h2>
        <p className={pClass}>The perfect gifting idea</p>
        <h2 className="text-xl font-bold">Credit cards</h2>
        <p className={pClass}>Enjoy all the benefits</p>
      </div>
      <div>
        <p className="text-lg font-bold text-gray-400 m-4">Shop with our Partners</p>
        <div className="grid grid-cols-3 m-4 gap-10">
          <div className="w-[9rem] h-[9rem] border rounded-lg shadow-lg mr-5">
            <img src={everydayLogo} alt="everyday picture" className="w-full" />
          </div>
          <div className="w-[9rem] h-[9rem] border rounded-lg shadow-lg mr-5">
            <img src={woolworth} alt="everyday picture" />
          </div>
          <div className="w-[9rem] h-[9rem] border rounded-lg shadow-lg mr-5">
            <img src={metro} alt="everyday picture" />
          </div>
          <div className="w-[9rem] h-[9rem] border rounded-lg shadow-lg mr-5">
            <img src={bigW} alt="everyday picture" />
          </div>
          <div className="w-[9rem] h-[9rem] border rounded-lg shadow-lg mr-5">
            <img src={pet} alt="everyday picture" />
          </div>
          <div className="w-[9rem] h-[9rem] border rounded-lg shadow-lg mr-5">
            <img src={mydeal} alt="everyday picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DummyCart;
