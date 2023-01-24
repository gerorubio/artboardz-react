import FirstIcon from "@/assets/icons/FirstIcon";
import SecondIcon from "@/assets/icons/SecondIcon";
import ThirdIcon from "@/assets/icons/ThirdIcon";
import Avatar from "../User/Avatar";

const LeaderboardItem = ({ position, image, name, amount }) => {
  let pos;
  switch (position) {
    case 1:
      pos = <FirstIcon />;
      break;
    case 2:
      pos = <SecondIcon />;
      break;
    case 3:
      pos = <ThirdIcon />;
      break;
    default:
      pos = <p>{position}.</p>;
      break;
  }

  return (
    <li className="flex gap-3 justify-between text-white items-center font-Montserrat tracking-wide text-base font-semibold">
      <div className="grid grid-cols-leaderItem place-items-center gap-[10px]  py-2">
        <div className="w-[40px] text-center">{pos}</div>
        <div className="w-[48px] h-[48px] rounded-full border border-white">
          <Avatar image={image} username={name} />
        </div>
        <p className=" ">{name}</p>
      </div>
      <p>{amount}</p>
    </li>
  );
};

export default LeaderboardItem;
