export default function Home() {
  return (
    <main>
      <div className="mx-auto w-[400px] text-center flex flex-col gap-4">
        <div className="text-3xl">Staking here please</div>
        <input type="number" className="w-full"/>
        <div className=" justify-between flex">
          <div>APY</div>
          <div className="text-green-400">24.43%</div>
        </div>
        <button className="w-full bg-blue-500 p-2 rounded-md">Stake BERA</button>
      </div>
    </main>
  );
}
