import { useEffect, useMemo, useState } from "react";
import { IoLogoGithub } from "react-icons/io5";
import { RiFileDownloadLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import ProjectCard from "../../component/ProjectCard";
import useGetProjectDataQuery from "../../hooks/query/useGetProjectDataQuery";

const HomePage = () => {
  const { projectData } = useGetProjectDataQuery();

  const texts = useMemo(() => ["프론트엔드 개발자", "웹 개발자"], []);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const typingSpeed = 100; // 타이핑 속도
  const erasingSpeed = 100; // 지우는 속도
  const delayBetween = 700; // 단어 간의 지연 시간

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentTextIndex];
      if (isDeleting) {
        setCurrentCharIndex((prev) => prev - 1);
        setDisplayText(currentText.slice(0, currentCharIndex));
      } else {
        setCurrentCharIndex((prev) => prev + 1);
        setDisplayText(currentText.slice(0, currentCharIndex + 1));
      }

      // 텍스트를 다 썼을 때
      if (!isDeleting && currentCharIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), delayBetween);
      }
      // 텍스트를 다 지웠을 때
      else if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? erasingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentCharIndex, isDeleting, currentTextIndex, texts]);

  return (
    <>
      <div className="mt-24 mx-2 flex flex-col gap-20 lg:w-[1000px] lg:m-auto lg:mt-28">
        <div className="flex flex-col items-center gap-5 lg:items-start sm:gap-7">
          <p className="text-[80px] sm:text-[150px] lg:hidden">👩‍💻</p>
          <div className="lg:w-full lg:flex lg:justify-between lg:items-center">
            <div className="flex flex-col items-center gap-5 lg:items-start">
              <div className="text-center lg:text-left">
                <p className="text-3xl sm:text-6xl font-bold">안녕하세요.</p>
                <p className="text-3xl sm:text-6xl font-bold">
                  저는{" "}
                  <span className="bg-gradient-to-r from-theme-002 to-theme-001 bg-clip-text text-transparent">
                    {displayText}
                  </span>
                </p>
                <p className="text-3xl sm:text-6xl font-bold">입니다.</p>
              </div>
              <p className="text-center sm:hidden">
                함께 일하는 것을 선호하는 개발자 <br /> <b>이태경</b> 입니다.
              </p>
              <p className="hidden sm:block text-2xl">
                함께 일하는 것을 선호하는 개발자 <b>이태경</b> 입니다.
              </p>
              <div className="flex gap-2 lg:text-2xl">
                <button className="px-3 py-2 lg:px-4 rounded-full bg-gradient-to-r from-theme-002 to-theme-001 text-white transition-all hover:shadow duration-150">
                  <span className="flex items-center gap-2">
                    <p>이력서</p>
                    <RiFileDownloadLine />
                  </span>
                </button>
                <button
                  className="w-10 h-10 lg:w-14 lg:h-14 border border-theme-001 text-theme-001 rounded-full flex justify-center items-center text-[20px] lg:text-[28px] transition-all duration-150 hover:shadow"
                  onClick={() =>
                    window.open("https://github.com/wwontk", "_blank")
                  }
                >
                  <IoLogoGithub />
                </button>
              </div>
            </div>
            <p className="hidden lg:block text-[250px]">👩‍💻</p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="font-bold text-2xl sm:text-4xl lg:text-5xl">
            기술 스택
          </p>
          <div className="text-center lg:text-left flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <p className="font-medium sm:text-2xl">Languages</p>
              <div className="overflow-hidden">
                <div className="flex justify-center lg:justify-start gap-2 text-3xl sm:text-5xl lg:text-7xl">
                  <FaHtml5 className="text-[#E34F26]" />
                  <IoLogoCss3 className="text-[#1572B6]" />
                  <IoLogoJavascript className="text-[#F7DF1E]" />
                  <BiLogoTypescript className="text-[#3178C6]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium sm:text-2xl">Frameworks/Libraries</p>
              <div className="flex justify-center lg:justify-start gap-2 text-3xl sm:text-5xl lg:text-7xl">
                <FaReact className="text-[#61DAFB]" />
                <SiAxios className="text-[#5A29E4]" />
                <SiReactquery className="text-[#FF4154]" />
                <SiRedux className="text-[#764ABC]" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium sm:text-2xl">Tools</p>
              <div className="flex justify-center lg:justify-start gap-2 text-3xl sm:text-5xl lg:text-7xl">
                <IoLogoGithub />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-4">
          <p className="font-bold text-2xl sm:text-4xl lg:text-5xl">프로젝트</p>
          <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projectData?.map((item, index) => (
              <ProjectCard item={item} key={index} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="font-bold text-2xl sm:text-4xl lg:text-5xl">CONTACT</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
