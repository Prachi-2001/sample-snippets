import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// Grid sample code
export default function Home() {
  return (
    <>
      Equal width grid
      <div className="grid grid-cols-4">
        {/* // grid with equal widths main div has divided into 3 cols and then its
        childrens fit into those 3 cols but whenever we added more childrens */}

        <div className="bg-blue-400">Hey Bro</div>
        <div className="bg-green-400">Hey Bro</div>
        <div className="bg-yellow-400">Hey Bhai</div>
        <div className="bg-red-400">Hey Bhai</div>
      </div>
      {/* // unequal widths */}
      Unequal width grid
      <div className="grid grid-cols-12">
        <div className="bg-blue-400 col-span-5">Hey Bro</div>
        <div className="bg-green-400 col-span-5">Hey Bro</div>
        <div className="bg-yellow-400 col-span-2">Hey Bhai</div>
        <div className="bg-red-400 col-span-6">Hey Bhai</div>
        <div className="bg-orange-400 col-span-6">Hey Bhai</div>
      </div>
    </>
  );
}
