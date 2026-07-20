import { IMAGES } from '@/assets/img';

const About = () => {

  return (
    <section id="about" className="sec sec01">
      <div className="sec-inner">
        <h3 className="sec-tit">About Me</h3>
        <div className="about-wrap">
          <div className="about-box">
            <div className="about-img">
              <img src={IMAGES.ME} alt="이하진 프로필 사진" />
            </div>
            <div className="about-txt">
              <p>안녕하세요! DevOps 엔지니어 이하진입니다.</p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <a href="https://app.notion.com/p/rajinse/1e6b30fb662582e8a691817d15cf4fd8?source=copy_link" target="_blank" className="link-arrow">
                자기소개 더보기
                <i className="fa-solid fa-circle-chevron-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="about-box mt50">
            <div>
              <h5>WORK EXPERIENCE</h5>
              <div className="about-txt">
                <p>2023.04 - 2025.10 (주)메가스터디교육</p>
                <p>2020.12 - 2023.03 (주)해올정보기술</p>
              </div>
            </div>
            <div>
              <h5>EDUCATION</h5>
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