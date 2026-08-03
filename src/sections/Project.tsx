import React, { useState, MouseEvent } from 'react';
import Modal from '@/components/Modal'; 
import { IMAGES } from '@/assets/img';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description?: string;
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
      description: 'Global Accelerator를 활용한 하이브리드 환경의 인프라 구축 관련 상세 내용입니다.',
      githubUrl: '',
      notionUrl: 'https://app.notion.com/p/rajinse/3a6b30fb662580f39d96f72822c95e5b',
      thumbnail: IMAGES.CLOUD_PROJECT01_01, // 카드 썸네일 이미지
      modalImages: cloudProject01Images, // 모달 출력용 이미지들
    },
    {
      id: 2,
      title: '테라폼을 활용한 MSA 기반의 보안성과 가용성을 갖춘 하이브리드 철도 예매 플랫폼 구축',
      category: '클라우드 | 인프라 · 웹페이지 · 장애복구',
      description: '테라폼을 활용한 MSA 기반의 보안성과 가용성을 갖춘 하이브리드 철도 예매 플랫폼 구축 관련 작업 상세 내용입니다.',
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

  return (
    <section id="project" className="sec sec03">
      <div className="sec-inner">
        <h3 className="sec-tit">Project</h3>
        <div className="project-wrap">
          <ul className="project-list">
            {projectList.map((item) => (
              <li key={item.id}>
                <a
                  href="#none"
                  onClick={(e) => handleCardClick(e, item)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="project-img">
                    {/* 카드 썸네일 출력 */}
                    <img src={item.thumbnail} alt={item.title} />
                  </div>
                  <div className="project-txt">
                    <h5>{item.title}</h5>
                    <p>{item.category}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 모달 영역 */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="modal-content-wrap">
            <p className="category none"><strong>구분:</strong> {selectedProject.category}</p>
            <p className="desc none">{selectedProject.description}</p>

            {/* 링크 버튼 영역 (링크가 하나라도 있을 때만 렌더링) */}
            {(selectedProject.githubUrl || selectedProject.notionUrl) && (
              <div className="modal-links" style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                {/* 1. githubUrl 값이 있을 때만 버튼 생성 (변수명 selectedProject로 수정됨) */}
                {selectedProject.githubUrl && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="link-btn github">
                    📂 GitHub 바로가기
                  </a>
                )}

                {/* 2. pptUrl 값이 있을 때만 버튼 생성 (변수명 selectedProject로 수정됨) */}
                {selectedProject.notionUrl && (
                  <a href={selectedProject.notionUrl} target="_blank" rel="noopener noreferrer" className="link-btn ppt">
                    📂 Notion 바로가기
                  </a>
                )}
              </div>
            )}

            {/* 모달에 띄울 이미지들 출력 (slice(1) 추가됨) */}
            {selectedProject.modalImages && selectedProject.modalImages.length > 0 && (
              <div className="modal-img-list" style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {selectedProject.modalImages.slice(1).map((imgSrc, index) => (
                  <div key={index} className="modal-img-item">
                    <img 
                      src={imgSrc} 
                      /* 첫 번째 이미지를 제외했으므로, 텍스트 상으로는 2번째 이미지부터 시작하도록 인덱스 조정 (선택사항) */
                      alt={`${selectedProject.title} 이미지 ${index + 2}`} 
                      style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Project;