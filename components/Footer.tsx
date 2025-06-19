import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="layout-padding flex-col bg-primary-800 space-y-4">
        <div className="flex justify-between">
          <div className="w-1/6">Insider</div>
          <div className="flex flex-wrap gap-4 w-5/6">
            <div className="flex flex-col">
              <div className="font-bold">Art Direction & Graphic Design</div>
              <div className="">Kunyada Chammee</div>
              <div className="">Supareuk Singsai</div>
              <div className="">Hattakarn Janchavee</div>
              <div className="">Waralee Patsarn</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold">Web Design</div>
              <div className="">Parichart Nuaon</div>
              <div className="">Silsupa Sereesuchart</div>
              <div className="">Jiratchaya Ninsuay</div>
              <div className="">Kanna Mueangthianwatthana</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold">Photographer & Production</div>
              <div className="">Supareuk Singsai</div>
              <div className="">Songpob Hamthanan</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold">Financial Manager</div>
              <div className="">Silsupa Sereesuchart</div>
              <div className="">Jiratchaya Ninsuay</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold">Media & Public Relation</div>
              <div className="">Gasorn Supawong</div>
              <div className="">Supareuk Singsai</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold">Web Development</div>
              <div className="">Songpob Hamthanan</div>
              <div className="">Piyanut Plaimee</div>
              <div className="">Kajbandit Kundee</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold">Video Editor</div>
              <div className="">Supareuk Singsai</div>
              <div className="">Jiratchaya Ninsuay</div>
            </div>
          </div>
        </div>
        <div className="horizontal-line"></div>
        <div className="flex justify-between">
          <div className="w-full">About</div>
          <div className="text-wrap">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>
        <div className="w-full text-9xl text-white py-4 text-center bg-primary-700">
          LOGO
        </div>
        <div className="flex justify-between">
          <nav className="flex gap-x-4">
            <Link href={"https://www.instagram.com/funcslash/"}>Instagram</Link>
            <Link href={"https://www.facebook.com/funcslash/"}>Facebook</Link>
            <Link href={"https://www.x.com/funcslash/"}>Twitter</Link>
            <Link href={"https://www.tiktok.com/@funcslash/"}>Tiktok</Link>
          </nav>

          <nav>
            <Link href={"https://ict.su.ac.th/"}>
              Information and Communication Technology, Silpakorn University
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Footer;
