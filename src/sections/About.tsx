import { IMAGES } from '@/assets/img';

const About = () => {

  return (
    <section id="about" className="sec sec01">
      <div className="sec-inner">
        <h3 className="sec-tit">About Me</h3>
        <div className="about-wrap">
          <div className="about-box container-md">
            <div className="about-img">
              <img src={IMAGES.ME} alt="이하진 프로필 사진" />
            </div>
            <div className="about-txt">
              <p>안녕하세요. 사용자 경험부터 클라우드 인프라까지 연결하는 DevOps 엔지니어 이하진입니다.</p>
              <p>웹 퍼블리셔로 서비스를 개발하며 사용자와 가장 가까운 영역을 경험했습니다.</p>
              <p>이후 서비스가 안정적으로 운영되고 빠르게 배포되는 환경의 중요성을 깨닫고 Cloud/DevOps 엔지니어의 길을 선택했습니다.</p>
              <p>저는 단순히 인프라를 구축하는 데 그치지 않고, 클라이언트와 개발팀의 요구사항을 이해하여 효율적인 CI/CD 환경을 설계하고, IaC를 통해 반복적인 작업을 자동화하여 생산성을 높이는 것에 가치를 두고 있습니다.</p>
              <p>프론트엔드부터 인프라까지 서비스 전반을 바라보는 시각을 바탕으로, 팀과 적극적으로 소통하며 안정적인 서비스 운영과 지속적인 개선을 만들어가는 DevOps 엔지니어가 되겠습니다.</p>
              <a href="https://app.notion.com/p/rajinse/1e6b30fb662582e8a691817d15cf4fd8?source=copy_link" target="_blank" className="link-arrow">
                자기소개 더보기
                <i className="fa-solid fa-circle-chevron-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="about-box container-md mt50">
            <div>
              <h5 className="sub-tit">WORK EXPERIENCE</h5>
              <div className="about-txt">
                <p>2023.04 - 2025.10 (주)메가스터디교육</p>
                <p>2020.12 - 2023.03 (주)해올정보기술</p>
              </div>
            </div>
            <div>
              <h5 className="sub-tit">EDUCATION</h5>
              <div className="about-txt">
                <p>2025.12 - 2026.06 AWS와 Azure 기반 하이브리드 멀티클라우드 DevOps 과정 수료 - 솔데스크</p>
                <p>2019.12 - 2020.06 UI/UX 스마트 콘텐츠 융합 응용 SW 엔지니어링 양성과정 수료 - KH정보교육원</p>
                <p>2013.03 - 2018.02 한서대학교 산업디자인학과 졸업</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;