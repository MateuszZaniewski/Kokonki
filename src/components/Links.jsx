import { Link } from "react-router-dom";
import { useVisibilityStore } from "../store/store";

export default function Links() {
  const toggleShowDemo = useVisibilityStore((state) => state.toggleShowDemo);
  return (
    <div className="hidden justify-center gap-12 pt-5 md:flex xl:gap-20">
      <Link
        onClick={() => toggleShowDemo()}
        to={""}
        className="hover:text-[#F6C48F]"
      >
        Nowości
      </Link>
      <Link
        onClick={() => toggleShowDemo()}
        to={""}
        className="hover:text-[#F6C48F]"
      >
        Włóczki
      </Link>
      <Link
        onClick={() => toggleShowDemo()}
        to={""}
        className="hover:text-[#F6C48F]"
      >
        Akcesoria
      </Link>
      <Link
        onClick={() => toggleShowDemo()}
        to={""}
        className="hover:text-[#F6C48F]"
      >
        Promocje
      </Link>
      <Link
        onClick={() => toggleShowDemo()}
        to={""}
        className="hover:text-[#F6C48F]"
      >
        Blog
      </Link>
    </div>
  );
}
