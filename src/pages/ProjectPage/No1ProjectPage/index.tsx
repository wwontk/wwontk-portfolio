const No1ProjectPage = () => {
  return (
    <>
      <div className="my-10 px-4">
        <div className="flex flex-col gap-3">
          <p className="text-5xl">🐶</p>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold">
              동반자(DBZ) - 동네 반려동물 찾자
            </p>
            <p className="text-sm">⭐️ 팀 프로젝트</p>
            <p className="text-sm">📅 2024.02 - 2024.03</p>
            <div>
              <p className="font-medium">기술 스택</p>
              <div className="flex gap-1 flex-wrap">
                <span className="bg-[#61DAFB] p-1 rounded text-xs">React</span>
                <span className="bg-[#3178C6] p-1 rounded text-white text-xs">
                  TypeScript
                </span>
                <span className="bg-[#3578E5] p-1 rounded text-white text-xs">
                  Recoil
                </span>
                <span className="bg-[#FF4154] p-1 rounded text-white text-xs">
                  React-Query
                </span>
                <span className="bg-[#5A29E4] p-1 rounded text-white text-xs">
                  Axios
                </span>
                <span className="bg-[#009688] p-1 rounded text-white text-xs">
                  REST API
                </span>
                <span className="bg-[#CA4245] p-1 rounded text-white text-xs">
                  React Router
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
            <p className="font-semibold text-xl">📌 프로젝트 소개</p>
            <p className="bg-gray-100 p-2 text-sm">주요기능을 적어요</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-xl">📌 기여한 부분</p>
            <div className="bg-gray-100 p-2 text-sm">
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-base font-semibold">
                    1. JWT 토큰을 활용한 로그인 기능 구현
                  </p>
                  <div className="flex flex-col pl-3 gap-3">
                    <p>
                      • <span className="font-medium">기술 결정의 배경:</span>{" "}
                      프로젝트는 사용자 인증이 필요한 서비스였으며, 확장성과
                      보안을 동시에 고려한 인증 방식이 필요했습니다. 또한,
                      서버의 상태를 관리하지 않도록 하는 stateless 방식이
                      적합하다고 판단했습니다. 이에 따라 JWT를 사용한 인증
                      방식을 선택하고, 클라이언트 측에서 인증 정보를 저장하는
                      방법으로 local storage를 사용하기로 했습니다.
                    </p>
                    <p>
                      • <span className="font-medium">가설:</span> JWT 토큰을
                      사용하여 인증 정보를 클라이언트에서 관리하면 서버 부하를
                      줄일 수 있고, stateless 방식으로 서버 확장 시에도 문제가
                      발생하지 않을 것이라 가정했습니다. 또한, local storage에
                      토큰을 저장함으로써 사용자가 페이지를 새로고침하더라도
                      인증 상태를 유지할 수 있다고 가정했습니다.
                    </p>
                    <p>
                      • <span className="font-medium">검증:</span> JWT 토큰을
                      이용해 서버에서 토큰을 발급하고, 이를 local storage에
                      저장한 후 각 요청마다 Authorization 헤더를 통해 전달하는
                      방식으로 구현했습니다. 로그인 및 로그아웃 시 토큰의 생성,
                      저장, 삭제 과정이 원활하게 이루어지는지 테스트했으며, 서버
                      확장성을 고려한 부하 테스트와 함께 다양한 사용
                      시나리오에서의 토큰 유효성 검증을 진행했습니다.
                    </p>
                    <p>
                      • <span className="font-medium">결과:</span> JWT를 통한
                      로그인 기능은 서버 부하를 최소화하면서도 사용자 인증
                      상태를 안정적으로 유지할 수 있음을 확인했습니다. 또한,
                      페이지 새로고침 이후에도 인증 상태가 유지되어 사용자
                      경험이 향상되었습니다. stateless 구조 덕분에 서버 확장 시
                      세션 동기화 문제 없이 확장성을 보장할 수 있었습니다.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-base font-semibold">2. 무한 스크롤 구현</p>
                  <div className="flex flex-col pl-3 gap-3">
                    <p>
                      • <span className="font-medium">기술 결정의 배경:</span>{" "}
                      프로젝트는 대량의 데이터를 사용자에게 끊김 없이 제공해야
                      했으며, 한 번에 모든 데이터를 로드하는 대신 필요한
                      데이터만 동적으로 불러오는 방식을 선택했습니다. 이를 통해
                      사용자 경험을 개선하고, 서버 부하를 줄일 수 있는 솔루션이
                      필요했습니다. 따라서, 서버에서 데이터를 페이지 단위로
                      요청할 수 있는 useInfiniteQuery와 사용자 스크롤 위치를
                      감지하는 Intersection Observer API를 사용하기로
                      결정했습니다.
                    </p>
                    <p>
                      • <span className="font-medium">가설:</span> 데이터를
                      일정한 페이지 단위로 불러오고, 사용자가 스크롤할 때마다
                      새로운 데이터를 자동으로 로드하면, 성능과 사용자 경험이
                      모두 향상될 것이라 예상했습니다. 또한, Intersection
                      Observer API를 사용해 스크롤 위치를 감지하고 데이터를
                      로드함으로써, 불필요한 스크롤 이벤트 리스너 사용을 피하고
                      성능을 최적화할 수 있다고 가정했습니다.
                    </p>
                    <p>
                      • <span className="font-medium">검증:</span>{" "}
                      useInfiniteQuery를 통해 서버로부터 페이지별 데이터를
                      받아오고, Intersection Observer를 사용해 마지막 요소가
                      뷰포트에 들어올 때마다 자동으로 새로운 데이터를 요청하는
                      구조로 구현했습니다. 성능 테스트를 통해 스크롤할 때마다
                      부드럽게 데이터가 로드되는지, 서버 요청이 중복으로
                      발생하지 않는지, 사용자가 느끼는 응답 속도가 일정하게
                      유지되는지 검증했습니다.
                    </p>
                    <p>
                      • <span className="font-medium">결과:</span> 사용자는
                      스크롤만으로도 끊김 없이 데이터를 확인할 수 있었으며, 성능
                      면에서도 효과적이었습니다. 스크롤 이벤트 리스너 방식에
                      비해 Intersection Observer는 불필요한 자원 낭비를 줄였고,
                      서버 요청 또한 useInfiniteQuery 덕분에 효율적으로
                      관리되었습니다. 특히, 사용자 경험이 크게 개선되어 데이터를
                      페이지 단위로 요청하더라도 로딩 지연 없이 매끄럽게
                      동작했습니다.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-base font-semibold">
                    3. Axios 인터셉터를 사용한 토큰 재발급 구현
                  </p>
                  <div className="flex flex-col pl-3 gap-3">
                    <p>
                      • <span className="font-medium">기술 결정의 배경:</span>{" "}
                      프로젝트는 JWT 토큰을 사용하여 인증 상태를 유지했으나,
                      토큰 만료 시 재로그인이 필요해 모든 API 요청이 실패하는
                      문제가 발생했습니다. 처음에는 Fetch API를 검토했으나,
                      Fetch는 인터셉터 기능이 없어 토큰 갱신 로직과 에러 처리를
                      수동으로 구현해야 했습니다. 이에 비해 Axios는 인터셉터를
                      제공해 토큰 만료 시 자동으로 갱신을 처리할 수 있어, 더
                      적합한 해결책이었습니다. 최종적으로 Axios를 사용해 토큰
                      갱신을 자동화하기로 결정하였습니다.
                    </p>
                    <p>
                      • <span className="font-medium">가설:</span> Axios의
                      인터셉터를 사용하면, 토큰이 만료되었을 때 자동으로
                      갱신하고, 실패했던 요청을 재시도하여 사용자 경험을 끊김
                      없이 유지할 수 있을 것이라 예상했습니다. 또한, 수동으로
                      요청을 처리하는 Fetch에 비해 코드 복잡성을 줄이면서, 더
                      효율적인 인증 관리가 가능할 것이라고 가정했습니다.
                    </p>
                    <p>
                      • <span className="font-medium">검증:</span> Axios의 요청
                      인터셉터를 통해 모든 API 요청 전에 토큰의 유효성을
                      확인하고, 응답 인터셉터를 통해 401 에러(토큰 만료)가
                      발생할 경우, 자동으로 갱신 요청을 전송하여 새로운 토큰을
                      발급받았습니다. 발급된 토큰으로 실패했던 요청을 다시
                      전송해 데이터를 정상적으로 받아올 수 있는지 확인했습니다.
                      또한, 토큰 갱신이 실패할 경우 사용자에게 알림을 주고
                      로그인 페이지로 리다이렉트하는 기능도 검증했습니다.
                    </p>
                    <p>
                      • <span className="font-medium">결과:</span> 토큰이 만료될
                      때마다 자동으로 갱신되었고, 실패한 요청이 무리 없이
                      재시도되었습니다. 이로 인해, 사용자들은 로그인 상태를 잃지
                      않고 서비스를 계속 이용할 수 있었습니다. Fetch API를
                      사용할 때보다 인터셉터를 통한 로직 처리가 간편했고, 코드의
                      유지 보수성과 확장성도 향상되었습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

export default No1ProjectPage;
