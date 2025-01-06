//next image
import Image from "next/image";
import me from '../.next/cache/images/DP/DP.png';

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image src={me} width={637} height={578} className="w-full h-full -right-[80%]"/>
    </div>
  )
};

export default Avatar;
