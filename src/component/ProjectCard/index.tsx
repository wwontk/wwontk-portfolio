import { IoLogoGithub } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import ProjectDataType from "../../type/Project";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ item }: { item: ProjectDataType }) => {
  const navigate = useNavigate();

  return (
    <>
      <li>
        <article className="rounded-xl shadow">
          <div className="flex justify-center p-2">
            {/* <div className="w-full h-[45vw] rounded-xl sm:h-[30vw] lg:h-[15vw] bg-theme-001 m-2"></div> */}
            <img
              src={item.data.photo}
              alt="photo"
              className="w-full h-[45vw] rounded-xl sm:h-[30vw] lg:h-[15vw] object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col p-4 gap-2">
            <p className="font-semibold">FrontEnd</p>
            <div className="text-3xl font-bold truncate bg-gradient-to-r from-theme-002 to-theme-001 bg-clip-text text-transparent">
              {item.data.title}
            </div>
            <p className="font-medium text-sm">{item.data.date}</p>
            <p className="truncate">{item.data.text}</p>
            <div>태그들</div>
            <div className="flex gap-2 justify-end">
              <button
                className="p-2 rounded-full border border-black transition-colors duration-300 hover:border-theme-001 hover:text-theme-001"
                onClick={() => navigate(`/projects/${item.data.no}`)}
              >
                상세보기
              </button>
              <button
                className="w-10 h-10 rounded-full border border-black flex justify-center items-center transition-colors duration-300 hover:border-theme-001 hover:text-theme-001"
                onClick={() => window.open(`${item.data.github}`, "_blank")}
              >
                <IoLogoGithub size={20} />
              </button>
              {item.data.service && (
                <button
                  className="w-10 h-10 rounded-full border border-black flex justify-center items-center transition-colors duration-300 hover:border-theme-001 hover:text-theme-001"
                  onClick={() => window.open(`${item.data.service}`, "_blank")}
                >
                  <MdOutlineArrowOutward size={20} />
                </button>
              )}
            </div>
          </div>
        </article>
      </li>
    </>
  );
};

export default ProjectCard;
