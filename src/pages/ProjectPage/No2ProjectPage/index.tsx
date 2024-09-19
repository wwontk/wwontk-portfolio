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
            <p className="font-semibold text-xl">📌 프로젝트 소개</p>
            <p className="bg-gray-100 p-2 text-sm">주요기능을 적어요</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-xl">📌 기여한 부분</p>
            <p className="bg-gray-100 p-2 text-sm">
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-base font-semibold">
                    1. Firebase Realtime Database를 사용한 실시간 채팅 구현
                  </p>
                  <div className="flex flex-col pl-3 gap-3">
                    <p>
                      • <span className="font-medium">기술 결정의 배경:</span>{" "}
                      프로젝트에서 실시간 채팅 기능을 구현할 때, 빠르고 안정적인
                      실시간 데이터 전송이 핵심이었습니다. 특히, 별도의 백엔드
                      서버 없이 클라이언트 간 실시간 데이터 전송을 간편하게
                      구현할 수 있는 솔루션이 필요했습니다. 초기에는 WebSocket,
                      Pusher 등 다양한 실시간 통신 방식을 검토했지만, 서버 유지
                      관리나 비용 문제, 복잡한 설정 과정이 걸림돌이 되었습니다.
                      이에 반해 Firebase Realtime Database는 백엔드 서버 없이도
                      자동 동기화 및 실시간 데이터 전송을 제공하기 때문에,
                      프로젝트의 요구사항에 부합하는 효율적인 선택이었습니다.
                    </p>
                    <p>
                      • <span className="font-medium">가설:</span> Firebase
                      Realtime Database를 사용하면 50ms 이하의 응답 시간으로
                      데이터가 거의 실시간에 가깝게 전송될 것이라 예상했습니다.
                      이를 통해, 사용자 간 채팅 데이터가 지연 없이 전달되며,
                      채팅 사용 경험이 원활해질 것이라 가정했습니다. 또한,
                      Firebase의 자동 동기화 기능 덕분에 서버 로직을 별도로
                      구현할 필요 없이 빠른 개발이 가능할 것이라고 예상했습니다.
                    </p>
                    <p>
                      • <span className="font-medium">검증:</span> Firebase
                      Realtime Database의 실시간 데이터 동기화 기능을 사용해
                      메시지를 보내고 받을 때, 각 클라이언트의 데이터베이스
                      상태가 실시간으로 업데이트되는지 확인했습니다. 사용자 A가
                      메시지를 입력하면, 거의 즉시 사용자 B의 화면에도 해당
                      메시지가 표시되는지, 그리고 다수의 사용자가 채팅할 때도
                      응답 시간이 유지되는지를 테스트했습니다. 또한, Firebase의
                      오프라인 기능을 통해 네트워크 연결이 끊겼을 때도 메시지를
                      로컬에 저장하고, 연결이 복구되면 다시 동기화되는지를
                      확인했습니다.
                    </p>
                    <p>
                      • <span className="font-medium">결과:</span> Firebase
                      Realtime Database를 사용한 결과, 채팅 메시지의 응답 시간이
                      50ms 이하로 매우 빠르게 처리되었고, 다수의 사용자와의
                      실시간 채팅에서도 안정적인 성능을 유지했습니다. 별도의
                      백엔드 서버를 구축하지 않고도 실시간 데이터 동기화를
                      구현할 수 있었고, Firebase의 확장성 덕분에 트래픽이 늘어날
                      때도 시스템이 원활하게 동작했습니다. 이를 통해 사용자
                      경험을 크게 향상시켰으며, 채팅 기능을 신속하게 구현할 수
                      있었습니다.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-base font-semibold">
                    2. Redux를 사용한 유저 관리 기능 구현
                  </p>
                  <div className="flex flex-col pl-3 gap-3">
                    <p>
                      • <span className="font-medium">기술 결정의 배경:</span>{" "}
                      프로젝트에서 유저 관리는 핵심 기능 중 하나로, 로그인 상태,
                      유저 정보, 권한 등을 전역에서 효율적으로 관리해야
                      했습니다. 단순한 상태 관리 도구로는 상태 변화 추적이
                      어렵고, 데이터가 여러 컴포넌트에 걸쳐 사용되는 상황에서
                      코드의 복잡성이 증가할 우려가 있었습니다. 따라서 전역
                      상태를 체계적으로 관리하고, 예측 가능한 상태 변화를
                      가능하게 하는 Redux를 사용하기로 결정했습니다.
                    </p>
                    <p>
                      • <span className="font-medium">가설:</span> Redux를
                      사용하여 유저 관련 상태(로그인, 로그아웃, 권한 등)를
                      중앙에서 관리하면, 애플리케이션 전역에서 상태 접근이
                      쉬워지고, 상태 변경을 예측 가능하게 만들 수 있다고
                      가정했습니다. 또한, Redux의 액션과 리듀서를 통해 상태
                      변화를 명시적으로 관리하면, 디버깅이 용이해지고 상태
                      관리의 복잡성을 줄일 수 있을 것이라고 예상했습니다.
                    </p>
                    <p>
                      • <span className="font-medium">검증:</span> Redux를 통해
                      유저 정보를 전역에서 관리하고, 로그인, 로그아웃, 권한
                      변경과 같은 액션들을 명시적으로 처리했습니다. Redux
                      DevTools를 이용해 상태 변화의 흐름을 추적하면서 상태
                      변경이 의도한 대로 이루어졌는지 확인했습니다.
                    </p>
                    <p>
                      • <span className="font-medium">결과:</span> Redux를
                      사용하여 유저 상태를 관리한 결과, 상태 변화를 중앙에서
                      쉽게 추적할 수 있었고, 상태 변경이 명확하게 이루어짐으로써
                      디버깅이 훨씬 수월해졌습니다. 특히, 유저의 로그인 상태와
                      권한 정보를 효율적으로 관리할 수 있었고, 애플리케이션의
                      확장성 또한 보장되었습니다. 전역 상태 관리로 인해 중복
                      코드가 줄어들었고, 상태 관리의 복잡성 또한 크게
                      감소했습니다.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-base font-semibold">
                    3. 커스텀 훅과 공통 컴포넌트를 통한 코드 중복 감소 및 UI
                    변경 시간 단축
                  </p>
                  <div className="flex flex-col pl-3 gap-3">
                    <p>
                      • <span className="font-medium">기술 결정의 배경:</span>{" "}
                      프로젝트가 점차 복잡해지면서, 코드 중복과 UI 요소 관리에
                      대한 어려움이 발생했습니다. 비슷한 로직과 UI 컴포넌트가
                      여러 곳에서 중복되면서 유지보수가 어려워지고, UI 변경
                      요청이 발생할 때마다 반복적인 수정 작업이 필요했습니다.
                      이를 해결하기 위해, 커스텀 훅과 공통 컴포넌트를 개발하여
                      중복 코드를 줄이고, UI 변경 작업을 보다 효율적으로 처리할
                      수 있는 구조로 개선하고자 했습니다.
                    </p>
                    <p>
                      • <span className="font-medium">가설:</span> 공통으로
                      사용되는 로직을 커스텀 훅으로 추출하고, 재사용 가능한 공통
                      컴포넌트를 개발하면 코드 중복률을 줄이고 유지보수 시간을
                      단축할 수 있을 것이라 가정했습니다. 또한, 공통된 UI 요소를
                      모듈화하면 UI 변경 사항이 발생할 때 단일 수정으로 여러
                      곳에 반영될 수 있어, UI 변경 소요 시간이 줄어들 것이라
                      예상했습니다.
                    </p>
                    <p>
                      • <span className="font-medium">검증:</span> 프로젝트에서
                      자주 사용되는 로직을 기준으로 5개 이상의 커스텀 훅을
                      개발하고, 반복되는 UI 요소를 공통 컴포넌트로
                      모듈화했습니다. 이후, 다양한 화면에서 이 훅과 컴포넌트를
                      사용하여 기능을 구현하고, 이전 대비 코드 중복이 얼마나
                      감소했는지, UI 변경이 얼마나 빠르게 이루어지는지
                      확인했습니다. 변경 요청이 있을 때, 공통 컴포넌트에서 한
                      번의 수정만으로 여러 화면에서 수정이 적용되는 과정을
                      테스트했습니다.
                    </p>
                    <p>
                      • <span className="font-medium">결과:</span> 커스텀 훅과
                      공통 컴포넌트를 도입한 결과, 코드 중복률이 30% 감소했으며,
                      UI 변경 소요 시간도 10% 단축되었습니다. 이를 통해 유지보수
                      비용이 줄어들었고, UI 변경 요청이 들어올 때마다 반복적인
                      작업이 필요하지 않게 되어 개발 생산성이 크게
                      향상되었습니다. 또한, 모듈화된 컴포넌트 덕분에 코드의
                      가독성과 재사용성이 높아졌습니다.
                    </p>
                  </div>
                </div>
              </div>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-xl">📌 알게된 것</p>
            <p className="bg-gray-100 p-2 text-sm">트러블 슈팅을 적어요</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default No2ProjectPage;
