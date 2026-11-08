import { useState, type MouseEvent } from 'react';
import Modal from '@/components/Modal';
import { PortfolioDetail, PortfolioPrintProject, type PortfolioDetailData } from '@/components/PortfolioDetail'; 
import { IMAGES } from '@/assets/img';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description?: string;
  role?: string;
  skills: string;
  githubUrl: string;
  notionUrl: string;
  thumbnail: string;      
  modalImages?: string[];
}

// 첫번째 프로젝트용 이미지 리스트
const cloudProject01Images = [
  IMAGES.CLOUD_PROJECT01_01,
  IMAGES.CLOUD_PROJECT01_02,
  IMAGES.CLOUD_PROJECT01_03,
  IMAGES.CLOUD_PROJECT01_04,
  IMAGES.CLOUD_PROJECT01_05,
  IMAGES.CLOUD_PROJECT01_06,
  IMAGES.CLOUD_PROJECT01_07,
  IMAGES.CLOUD_PROJECT01_08,
  IMAGES.CLOUD_PROJECT01_09,
  IMAGES.CLOUD_PROJECT01_10,
  IMAGES.CLOUD_PROJECT01_11,
  IMAGES.CLOUD_PROJECT01_12,
  IMAGES.CLOUD_PROJECT01_13,
  IMAGES.CLOUD_PROJECT01_14,
  IMAGES.CLOUD_PROJECT01_15,
  IMAGES.CLOUD_PROJECT01_16,
  IMAGES.CLOUD_PROJECT01_17,
  IMAGES.CLOUD_PROJECT01_18,
  IMAGES.CLOUD_PROJECT01_19,
];

// 두번째 프로젝트용 이미지 리스트
const cloudProject02Images = [
  IMAGES.CLOUD_PROJECT02_01,
  IMAGES.CLOUD_PROJECT02_04,
  IMAGES.CLOUD_PROJECT02_05,
  IMAGES.CLOUD_PROJECT02_08,
  IMAGES.CLOUD_PROJECT02_09,
  IMAGES.CLOUD_PROJECT02_11,
  IMAGES.CLOUD_PROJECT02_12,
  IMAGES.CLOUD_PROJECT02_13,
  IMAGES.CLOUD_PROJECT02_14,
  IMAGES.CLOUD_PROJECT02_15,
  IMAGES.CLOUD_PROJECT02_16,
  IMAGES.CLOUD_PROJECT02_17,
  IMAGES.CLOUD_PROJECT02_18,
  IMAGES.CLOUD_PROJECT02_19,
  IMAGES.CLOUD_PROJECT02_20,
  IMAGES.CLOUD_PROJECT02_51,
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // 프로젝트 리스트
  const projectList: ProjectItem[] = [
    {
      id: 1,
      title: 'Global Accelerator를 활용한 하이브리드 환경의 인프라 구축',
      category: '클라우드 | 인프라 · 대시보드 · 장애복구',
      description: '웹 서비스의 클라우드 마이그레이션과 온프레미스 데이터베이스 연동을 위한 하이브리드 인프라 구축 프로젝트입니다. Global Accelerator를 활용한 서비스 구성과 장애복구 검증을 다뤘습니다.',
      skills: 'AWS · Global Accelerator · 하이브리드 네트워크 · 장애복구',
      githubUrl: '',
      notionUrl: 'https://app.notion.com/p/rajinse/3a6b30fb662580f39d96f72822c95e5b',
      thumbnail: IMAGES.CLOUD_PROJECT01_01, // 카드 썸네일 이미지
      modalImages: cloudProject01Images, // 모달 출력용 이미지들
    },
    {
      id: 2,
      title: '테라폼을 활용한 MSA 기반의 보안성과 가용성을 갖춘 하이브리드 철도 예매 플랫폼 구축',
      category: '클라우드 | 인프라 · 웹페이지 · 장애복구',
      description: 'Terraform을 활용해 AWS·Azure 하이브리드 환경에 MSA 기반 철도 예매 플랫폼을 구축한 4인 팀 프로젝트입니다. 팀장으로 참여해 인프라 구성과 프론트엔드 구현을 담당했습니다.',
      role: '팀장 · Terraform 기반 AWS/Azure IaC · EKS · Kubernetes HPA · Cognito · SES · 프론트엔드',
      skills: 'Terraform · AWS · Azure · Amazon EKS · Kubernetes · Amazon Cognito · Amazon SES',
      githubUrl: 'https://github.com/hjin-2e/Train_repo.git',
      notionUrl: 'https://app.notion.com/p/rajinse/MSA-3a6b30fb66258089a5edc7fdd4e404c7?v=082b30fb66258369a10e08221f920052',
      thumbnail: IMAGES.CLOUD_PROJECT02_01, // 카드 썸네일 이미지
      modalImages: cloudProject02Images, // 모달 출력용 이미지들
    },
  ];

  // 카드 클릭 이벤트 핸들러
  const handleCardClick = (e: MouseEvent<HTMLAnchorElement>, item: ProjectItem) => {
    e.preventDefault(); 
    setSelectedProject(item);
  };

  const details = (item: ProjectItem): PortfolioDetailData => ({
    title: item.title, category: item.category, description: item.description,
    metadata: [{ label: '사용 기술', value: item.skills }, ...(item.role ? [{ label: '담당 역할', value: item.role }] : [])],
    links: [...(item.githubUrl ? [{ label: 'GitHub', url: item.githubUrl }] : []), { label: 'Notion 상세 자료', url: item.notionUrl }],
    images: item.modalImages ?? [],
  });
  return <section id="project" className="sec sec03">
    <div className="sec-inner"><h3 className="sec-tit">클라우드 프로젝트</h3>
      <ul className="project-list">{projectList.map(item => <li key={item.id}><a href="#none" onClick={event => handleCardClick(event, item)}><div className="project-img"><img loading="lazy" src={item.thumbnail} alt={item.title} /></div><div className="project-txt"><h5>{item.title}</h5><p>{item.category}</p></div></a></li>)}</ul>
      <div className="portfolio-print-projects">{projectList.map(item => <PortfolioPrintProject key={item.id} data={details(item)} />)}</div>
    </div>
    <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} title={selectedProject?.title}>{selectedProject && <PortfolioDetail data={details(selectedProject)} />}</Modal>
  </section>;
};
export default Project;
