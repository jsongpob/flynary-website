import Link from "next/link";

const navigation = () => {
  return (
    <nav>
      <div className="layout-padding items-center justify-between">
        <div className="w-[89px] h-[89px] rounded-full bg-gray-500"></div>
        <div className="flex gap-x-5">
          <Link href={"/"}>Home</Link>
          <Link href={"/project"}>Project</Link>
          <Link href={"/creator"}>Creator</Link>
          <Link href={"/bit-to-fly"}>Bit to Fly</Link>
          <Link href={"/keynote"}>Keynote</Link>
        </div>
      </div>
    </nav>
  );
};
export default navigation;
