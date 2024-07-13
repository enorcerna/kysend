import { canvaURL } from "../constants/global.ts";

function Canva() {
  return (
    <a
      className="px-3 py-1 border border-green-600 hover:bg-green-600 text-white font-semibold rounded-lg"
      href={canvaURL}
      target="_blank"
    >
      To Canva
    </a>
  );
}

export default Canva;
