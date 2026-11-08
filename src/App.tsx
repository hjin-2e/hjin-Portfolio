import { useEffect, useState } from 'react';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { IMAGES } from '@/assets/img';
import Work from '@/sections/Work';
import Project from '@/sections/Project';

const navigation = [["about","소개"],["summary","요약"],["competencies","핵심 역량"],["achievements","핵심 성과"],["career","경력 요약"],["contact","연락처"]];
const skills = ["AWS","Azure","Terraform","CI/CD","HTML · CSS","JavaScript","Vue.js","Figma","GitHub","React","Linux","VMware","AWS EKS","AWS Lambda","Kubernetes","IaaS","Python","SaaS"];
const jobs = [
  {
    "company": "메가스터디교육(주)",
    "period": "2023.04 — 2025.10",
    "duration": "2년 7개월",
    "role": "웹 퍼블리싱 및 프론트엔드 개발",
    "summary": "교육 서비스 운영과 Vue.js 기반 프론트엔드 전환",
    "tasks": [
      "교육 서비스 사용자 사이트 및 관리자 시스템 운영·유지보수",
      "기존 ASP 기반 화면을 Vue.js 컴포넌트로 전환하는 프로젝트에 직접 참여하여 프론트엔드 개발 수행",
      "관리자 시스템 리뉴얼 프로젝트의 웹 퍼블리싱 및 프론트엔드 개발",
      "신규 콘텐츠 페이지 제작 및 기존 서비스 UI 개선",
      "운영 중인 서비스의 화면 오류 수정 및 기능 변경 요구사항 대응"
    ],
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js"
    ],
    "projects": []
  },
  {
    "company": "(주)해올정보기술",
    "period": "2020.12 — 2023.03",
    "duration": "2년 4개월",
    "role": "공공 SI 웹 퍼블리싱 및 UI 기획",
    "summary": "공공 정보시스템 구축 4건과 UI 기획·개발",
    "tasks": [
      "공공기관 정보시스템 구축 프로젝트 4건 참여",
      "사용자 포털 및 관리자 시스템 UI 개발 및 기획",
      "웹 접근성 및 브라우저 호환성 대응",
      "서울사무실 PL 역할 수행 및 SI 사업부 신규 입사자 교육"
    ],
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "WebSquare",
      "Sencha Ext JS"
    ],
    "projects": [
      {
        "title": "중소벤처확인 시스템 구축",
        "client": "중소기업부",
        "period": "2021.01 — 2021.06",
        "tasks": [
          "반응형 포털사이트 퍼블리싱 30% 담당",
          "관리자 시스템 퍼블리싱 100% 수행",
          "웹 접근성 및 브라우저 호환성 대응"
        ]
      },
      {
        "title": "판로정보 종합시스템 구축",
        "client": "중소기업유통센터",
        "period": "2021.08 — 2022.03",
        "tasks": [
          "사용자 포털 및 관리자 시스템 UI 개발",
          "포털사이트 UI 개선 및 추가 기능 구현",
          "관리자 시스템 UI 디자인 및 화면 구현",
          "담당 퍼블리싱 작업 100% 완료"
        ]
      },
      {
        "title": "공동연계 급여정보 시스템 구축",
        "client": "국민연금",
        "period": "2022.04 — 2022.12",
        "tasks": [
          "관리자 시스템 UI 기획 및 개발",
          "관리자 화면 개선 및 추가 기능 구현",
          "서울사무실 PL 역할 수행 및 프로젝트 업무 조율",
          "담당 퍼블리싱 작업 100% 완료"
        ]
      },
      {
        "title": "차세대 한국유학시스템 구축",
        "client": "국제교육원",
        "period": "2022.08 — 2023.01",
        "tasks": [
          "사용자 포털 및 관리자 시스템 UI 개선",
          "반응형 화면 수정 및 기능 개선",
          "웹 접근성 및 브라우저 호환성 대응"
        ]
      }
    ]
  }
];
const careerCompetencies = ["약 5년간 공공 SI 및 교육 서비스 개발·운영 경험","ASP 기반 화면의 Vue.js 컴포넌트 전환 경험","사용자 및 관리자 시스템 개발·유지보수 경험","다양한 개발 환경에서의 요구사항 대응 및 문제 해결 역량","프로젝트 PL 및 신규 입사자 교육을 통한 협업·커뮤니케이션 역량"];
function Heading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="page-heading"><span className="eyebrow">{eyebrow}</span><h1>{title}<span className="mint">.</span></h1><p>{description}</p></div>;
}
function Tags({ items }: { items: string[] }) { return <div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div>; }
function DocumentLinks() {
  return <div className="document-grid"><Link className="document-card" to="/career"><span className="doc-icon">01 / CAREER</span><h3>경력기술서 <span>↗</span></h3><p>어떤 환경에서, 어떤 일을 했는지.<br />회사별 담당 업무와 수행 경험을 정리했습니다.</p><span className="text-link">경력 자세히 보기 →</span></Link><Link className="document-card" to="/portfolio"><span className="doc-icon purple">02 / PORTFOLIO</span><h3>포트폴리오 <span>↗</span></h3><p>무엇을 만들고, 어떻게 구현했는지.<br />클라우드와 웹 프로젝트의 결과물을 소개합니다.</p><span className="text-link">프로젝트 살펴보기 →</span></Link></div>;
}
function Resume() {
  return <><section className="hero"><span className="badge"><span className="status-dot" /> CLOUD ENGINEER · WEB PUBLISHER</span><p className="hero-intro">안녕하세요, 이하진입니다.</p><h1>사용자 경험에서<br /><span className="gradient-text">클라우드 인프라까지.</span></h1><p className="hero-desc">화면을 만드는 경험에서, 서비스를 지탱하는 기술로.<br />서비스 전반을 이해하고 안정적인 운영 환경을 만드는<br className="desktop-break" /> 클라우드 엔지니어를 지향합니다.</p><div className="actions"><Link className="btn primary" to="/career">경력기술서 보기 <span>↗</span></Link><Link className="btn" to="/portfolio">포트폴리오 보기 <span>→</span></Link></div><div className="hero-bottom"><span>DESIGN THE EXPERIENCE. BUILD THE FOUNDATION.</span><Link to={{ pathname: '/', hash: '#about' }}>SCROLL TO EXPLORE ↓</Link></div></section>
  <section id="about" className="content-section"><div className="section-label">01 / ABOUT ME</div><div className="about-grid"><div><h2>서비스를 넓게 보고,<br />더 나은 방식을 고민합니다.</h2><p>웹 퍼블리셔로 사용자와 가장 가까운 영역을 경험했습니다. 이후 서비스가 안정적으로 운영되고 빠르게 배포되는 환경의 중요성을 깨닫고 클라우드 엔지니어의 길을 선택했습니다.</p><p>클라이언트와 개발팀의 요구를 이해하고, 효율적인 CI/CD 환경과 IaC 기반 자동화를 통해 반복 작업을 줄이는 것에 가치를 두고 있습니다.</p><a className="text-link" href="https://app.notion.com/p/rajinse/1e6b30fb662582e8a691817d15cf4fd8?source=copy_link" target="_blank" rel="noreferrer">자기소개 더보기 ↗</a></div><div className="profile-card"><img src={IMAGES.ME} alt="이하진 프로필" /><h3>이하진 <span>LEE HAJIN</span></h3><p>Cloud Engineer<br />Web Publishing Background</p><a href="mailto:hjin201123@gmail.com">hjin201123@gmail.com ↗</a></div></div></section>
  <section id="summary" className="content-section"><div className="section-label">02 / SUMMARY</div><h2>요약</h2><div className="highlight-grid"><article className="highlight-card"><span className="eyebrow">WEB EXPERIENCE</span><h3>서비스를 만드는 경험</h3><p>메가스터디교육과 해올정보기술에서 웹 퍼블리싱, 사이트 운영·유지보수, 공공 시스템 구축을 경험했습니다.</p></article><article className="highlight-card"><span className="eyebrow">CLOUD PROJECTS</span><h3>인프라로 넓힌 시야</h3><p>AWS·Azure 하이브리드 멀티클라우드 DevOps 과정을 수료하고 클라우드 인프라 구축 프로젝트를 수행했습니다.</p></article><article className="highlight-card"><span className="eyebrow">ENGINEERING MINDSET</span><h3>자동화와 지속적인 개선</h3><p>사용자와 개발팀의 요구를 이해하고 CI/CD와 IaC를 통해 반복 작업을 줄이는 엔지니어를 지향합니다.</p></article></div></section><section id="competencies" className="content-section"><div className="section-label">03 / CORE COMPETENCIES</div><h2>핵심 역량</h2><div className="highlight-grid"><article className="highlight-card"><h3>클라우드 인프라</h3><p>AWS·Azure 기반 하이브리드 환경 구축과 가용성·장애복구를 고려한 인프라 프로젝트 경험</p></article><article className="highlight-card"><h3>IaC · DevOps</h3><p>Terraform을 활용한 인프라 구성과 MSA 기반 서비스 구축 프로젝트 경험</p></article><article className="highlight-card"><h3>웹 퍼블리싱</h3><p>HTML·CSS·JavaScript 기반 반응형 화면 구현과 사용자·관리자 서비스 구축 경험</p></article></div><h3 className="toolkit-title">경험을 연결하는 기술들</h3><Tags items={skills} /></section><section id="achievements" className="content-section"><div className="section-label">04 / SELECTED ACHIEVEMENTS</div><h2>핵심 성과</h2><p className="section-description">클라우드와 웹 서비스에서 직접 수행한 주요 프로젝트입니다.</p><div className="highlight-grid"><article className="highlight-card"><span className="eyebrow">HYBRID CLOUD</span><h3>하이브리드 인프라 구축</h3><p>Global Accelerator를 활용한 하이브리드 환경의 인프라 구축 프로젝트를 수행했습니다.</p><Link className="text-link" to="/portfolio">프로젝트 보기 →</Link></article><article className="highlight-card"><span className="eyebrow">TERRAFORM · MSA</span><h3>하이브리드 철도 예매 플랫폼</h3><p>Terraform을 활용해 보안성과 가용성을 고려한 MSA 기반 철도 예매 플랫폼 구축 프로젝트를 수행했습니다.</p><Link className="text-link" to="/portfolio">프로젝트 보기 →</Link></article><article className="highlight-card"><span className="eyebrow">WEB PUBLISHING</span><h3>공공·교육 서비스 화면 구현</h3><p>한국유학시스템, 판로정보 종합시스템 등 공공 서비스 구축과 메가스터디 러셀 운영·유지보수를 담당했습니다.</p><Link className="text-link" to="/portfolio">작업 결과물 보기 →</Link></article></div></section><section id="career" className="content-section"><div className="section-label">05 / CAREER & EDUCATION</div><div className="summary-grid"><div><h2>경력 요약</h2>{jobs.map(job => <div className="summary-row" key={job.company}><span>{job.period}</span><h3>{job.company}</h3><p>{job.role}</p></div>)}</div><div><h2>교육</h2><div className="summary-row"><span>2025.12 — 2026.06</span><h3>AWS · Azure 하이브리드 멀티클라우드 DevOps</h3><p>솔데스크 · 과정 수료</p></div><div className="summary-row"><span>2019.12 — 2020.06</span><h3>UI/UX 스마트 콘텐츠 융합 응용 SW 엔지니어링</h3><p>KH정보교육원 · 과정 수료</p></div><div className="summary-row"><span>2013.03 — 2018.02</span><h3>한서대학교 산업디자인학과</h3><p>졸업</p></div></div></div></section>
  <section className="content-section"><div className="section-label">CERTIFICATIONS</div><h2>자격증</h2><div className="summary-grid"><div className="summary-row"><span>2026.04 취득</span><h3>리눅스마스터 2급</h3></div><div className="summary-row"><span>2026.03 취득</span><h3>네트워크관리사 2급</h3></div></div></section><section className="content-section"><div className="section-label">DOCUMENTS</div><h2>경험과 결과물, 더 자세히.</h2><DocumentLinks /></section></>;
}
function Career() {
  return <>
    <Heading eyebrow="CAREER DETAILS" title="경력기술서" description="공공 SI부터 교육 서비스까지, 약 5년간의 UI 기획·개발과 서비스 운영 경험입니다." />
    <div className="page-tools"><span>WORK EXPERIENCE / 2 COMPANIES</span><button className="btn compact" onClick={() => window.print()}>인쇄 · PDF 저장 ↓</button></div>
    <section className="career-competencies" aria-labelledby="career-competencies-title">
      <span className="eyebrow">CORE COMPETENCIES</span>
      <h2 id="career-competencies-title">핵심 역량</h2>
      <ul>{careerCompetencies.map(item => <li key={item}>{item}</li>)}</ul>
    </section>
    <div className="career-list">{jobs.map((job, i) => <article className="career-card" key={job.company}>
      <div className="career-side"><span className="eyebrow">0{i + 1} / EXPERIENCE</span><h2>{job.company}</h2><p>{job.period}<br />{job.duration}</p><span className="badge">{job.role}</span></div>
      <div className="career-body">
        <h3>{job.summary}</h3>
        <h4>주요 업무 및 성과</h4><ul>{job.tasks.map(task => <li key={task}>{task}</li>)}</ul>
        <div className="career-tech"><h4>사용 기술</h4><Tags items={job.tags} /></div>
        {job.projects.length > 0 && <section className="career-projects" aria-labelledby={'career-projects-' + i}>
          <h4 id={'career-projects-' + i}>주요 프로젝트 및 성과</h4>
          {job.projects.map((project, index) => <article className="career-project" key={project.title}>
            <span className="eyebrow">PROJECT 0{index + 1}</span><h3>{project.title}</h3>
            <dl className="career-project-meta"><div><dt>고객사</dt><dd>{project.client}</dd></div><div><dt>기간</dt><dd>{project.period}</dd></div></dl>
            <ul>{project.tasks.map(task => <li key={task}>{task}</li>)}</ul>
          </article>)}
        </section>}
      </div>
    </article>)}</div>
    <aside className="next-card"><div><span className="eyebrow">SEE THE WORK</span><h2>프로젝트 결과물이 궁금하다면</h2><p>실무 웹 작업과 클라우드 프로젝트를 포트폴리오에서 확인하세요.</p></div><Link className="btn" to="/portfolio">포트폴리오 보기 →</Link></aside>
  </>;
}
function Portfolio() {
  const [filter, setFilter] = useState('전체');
  return <><Heading eyebrow="SELECTED WORK" title="포트폴리오" description="클라우드 인프라부터 사용자 화면까지, 직접 만들어온 프로젝트입니다." /><div className="filter-bar"><div className="filters" aria-label="프로젝트 분류">{['전체', '클라우드', '웹 퍼블리싱'].map(item => <button key={item} aria-pressed={filter === item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div><span>{filter === '전체' ? '07' : filter === '클라우드' ? '02' : '05'} PROJECTS</span></div>{filter !== '웹 퍼블리싱' && <Project />}{filter !== '클라우드' && <Work />}<aside className="next-card"><div><span className="eyebrow">BEHIND THE WORK</span><h2>회사별 업무 경험 보기</h2></div><Link className="btn" to="/career">경력기술서 보기 →</Link></aside></>;
}
function Site() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (pathname !== '/' || !hash) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'start',
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  useEffect(() => { window.scrollTo(0, 0); document.title = `${pathname === '/career' ? '경력기술서' : pathname === '/portfolio' ? '포트폴리오' : '이력서'} | 이하진`; }, [pathname]);
  return <><a className="skip-link" href="#main" onClick={event => { event.preventDefault(); document.getElementById('main')?.focus(); }}>본문 바로가기</a><header className="site-header"><Link className="logo" to="/">hjin<span className="mint">.</span><span className="logo-caption">PORTFOLIO</span></Link><nav aria-label="주 메뉴">{navigation.map(([id, label]) => <Link key={id} to={{ pathname: '/', hash: '#' + id }} className={pathname === '/' && hash === '#' + id ? 'active' : undefined} aria-current={pathname === '/' && hash === '#' + id ? 'location' : undefined} onClick={() => { if (pathname === '/' && hash === '#' + id) document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); }}>{label}</Link>)}</nav><a className="header-contact" href="mailto:hjin201123@gmail.com">함께 이야기해요 ↗</a></header><main id="main" tabIndex={-1}><Routes><Route path="/" element={<Resume />} /><Route path="/career" element={<Career />} /><Route path="/portfolio" element={<Portfolio />} /><Route path="*" element={<><Heading eyebrow="404" title="페이지를 찾을 수 없습니다" description="아래 링크에서 이력서로 돌아갈 수 있습니다." /><Link className="btn" to="/">이력서로 돌아가기 →</Link></>} /></Routes></main><footer id="contact"><div><span className="eyebrow">06 / CONTACT</span><h2>연락처</h2><p className="contact-description">함께 만들어갈 다음을 기다립니다<span className="mint">.</span></p><a className="email" href="mailto:hjin201123@gmail.com">hjin201123@gmail.com ↗</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} 이하진</span><a href="https://github.com/hjin-2e" target="_blank" rel="noreferrer">GitHub ↗</a><Link to="/">이력서 ↑</Link></div></footer></>;
}
export default function App() { return <HashRouter><Site /></HashRouter>; }
