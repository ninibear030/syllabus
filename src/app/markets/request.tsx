import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/dialog";
import Image from "next/image";

export const Request = ({
  name,
  img,
  title,
  progress,
}: {
  name: string;
  img: string;
  title: string;
  progress: number;
}) => {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  return (
    <div
      className="flex flex-col gap-2 border border-[#202426] p-4 rounded-xl hover:border-indigo-200 transition-all duration-300 overflow-hidden relative"
      onClick={() => setOpen(true)}
    >
      <Image
        src={img}
        alt={name}
        width={300}
        height={300}
        className="absolute right-0 bottom-0 rounded-full opacity-30 transform translate-x-[30%] translate-y-[40%] -z-10"
      />
   
      <div className="flex items-center gap-2 z-10">
        <Image
          src={img}
          alt={name}
          width={24}
          height={24}
          className="rounded-full"
        />{" "}
        {name}
      </div>
      <div className=" text-2xl font-bold"> {title}</div>
      <div className="flex justify-between text-sm">
        <div> 50M/100M HONEY</div>
        <div className="mb-1 text-base font-medium dark:text-white">
          progress: {progress}%
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div
          className="bg-indigo-200 h-1.5 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <button className="rounded-lg bg-indigo-200 p-2 text-[#16181A]">
            Details/deposit
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-[#16181A]">
          <DialogHeader>
            <DialogTitle>Kodiak Finance</DialogTitle>
          </DialogHeader>
          <div className="flex justify-between">
            <div> 50M/100M HONEY</div>
            <div className="mb-1 text-base font-medium dark:text-white">
              progress: {progress}%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between">
            <div>Incentives</div>
            <div className="text-green-500">50% APR</div>
          </div>
          <div className="flex justify-between">
            <div>Tokens</div>
            <div className="text-orange-500">200K Kodiak</div>
          </div>
          <div className="flex justify-between">
            <div>Duration</div>
            <div className="text-blue-400">6 Months</div>
          </div>
          <div className="flex justify-between">
            <div></div>
            <a className="underline cursor-pointer" href="/audits">
              Audits
            </a>
          </div>
          <hr className="py-2" />
          <div>Deposit amount:</div>
          <input
            type="number"
            className="bg-white"
            value={amount}
            placeholder="enter amount"
            onChange={(e) => setAmount(e.target.value)}
          />

          <DialogFooter>
            <button className="w-full p-2 bg-blue-500 rounded-lg">
              deposit
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
