const No2ProjectPage = () => {
  return (
    <>
      <div className="my-10 px-4">
        <div className="flex flex-col gap-3">
          <p className="text-5xl">🤝🏻</p>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold">모임이 모임</p>
            <p className="text-sm">📅 2024.08 - 2024.08</p>
            <p className="text-sm">⭐️ 개인 프로젝트</p>
            <div>
              <p className="font-medium">기술 스택</p>
              <div className="flex gap-1 flex-wrap">
                <span className="bg-[#61DAFB] p-1 rounded text-xs">React</span>
                <span className="bg-[#3178C6] p-1 rounded text-white text-xs">
                  TypeScript
                </span>
                <span className="bg-[#764ABC] p-1 rounded text-white text-xs">
                  Redux
                </span>
                <span className="bg-[#DD2C00] p-1 rounded text-white text-xs">
                  Firebase
                </span>
                <span className="bg-[#06B6D4] p-1 rounded text-white text-xs">
                  Tailwind CSS
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex gap-1">
                <p>📂</p>
                <p>깃허브</p>
              </span>
              <span className="flex gap-1">
                <p>🔗</p>
                <p>서비스</p>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-xl">📌 주요 기능</p>
            <p className="bg-gray-100 p-2 text-sm">주요기능을 적어요</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-xl">📌 기여한 부분</p>
            <p className="bg-gray-100 p-2 text-sm">기여한 부분을 적어요</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-xl">📌 작업 화면</p>
            <p className="bg-gray-100 p-2 text-sm">작업 화면을 넣어요</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-xl">📌 트러블 슈팅</p>
            <p className="bg-gray-100 p-2 text-sm">트러블 슈팅을 적어요</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default No2ProjectPage;
