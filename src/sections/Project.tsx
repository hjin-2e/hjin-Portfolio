import React, { useState, MouseEvent } from 'react';
import Modal from '@/components/Modal'; 
import { IMAGES } from '@/assets/img';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description?: string;
  images?: string[];
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
  IMAGES.CLOUD_PROJECT02_02,
  IMAGES.CLOUD_PROJECT02_03,
  IMAGES.CLOUD_PROJECT02_04,
  IMAGES.CLOUD_PROJECT02_05,
  IMAGES.CLOUD_PROJECT02_06,
  IMAGES.CLOUD_PROJECT02_07,
  IMAGES.CLOUD_PROJECT02_08,
  IMAGES.CLOUD_PROJECT02_09,
  IMAGES.CLOUD_PROJECT02_10,
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
  IMAGES.CLOUD_PROJECT02_21,
  IMAGES.CLOUD_PROJECT02_22,
  IMAGES.CLOUD_PROJECT02_23,
  IMAGES.CLOUD_PROJECT02_24,
  IMAGES.CLOUD_PROJECT02_25,
  IMAGES.CLOUD_PROJECT02_26,
  IMAGES.CLOUD_PROJECT02_27,
  IMAGES.CLOUD_PROJECT02_28,
  IMAGES.CLOUD_PROJECT02_29,
  IMAGES.CLOUD_PROJECT02_30,
  IMAGES.CLOUD_PROJECT02_31,
  IMAGES.CLOUD_PROJECT02_32,
  IMAGES.CLOUD_PROJECT02_33,
  IMAGES.CLOUD_PROJECT02_34,
  IMAGES.CLOUD_PROJECT02_35,
  IMAGES.CLOUD_PROJECT02_36,
  IMAGES.CLOUD_PROJECT02_37,
  IMAGES.CLOUD_PROJECT02_38,
  IMAGES.CLOUD_PROJECT02_39,
  IMAGES.CLOUD_PROJECT02_40,
  IMAGES.CLOUD_PROJECT02_41,
  IMAGES.CLOUD_PROJECT02_42,
  IMAGES.CLOUD_PROJECT02_43,
  IMAGES.CLOUD_PROJECT02_44,
  IMAGES.CLOUD_PROJECT02_45,
  IMAGES.CLOUD_PROJECT02_46,
  IMAGES.CLOUD_PROJECT02_47,
  IMAGES.CLOUD_PROJECT02_48,
  IMAGES.CLOUD_PROJECT02_49,
  IMAGES.CLOUD_PROJECT02_50,
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
      images: cloudProject01Images,
    },
    {
      id: 2,
      title: '테라폼을 활용한 MSA 기반의 보안성과 가용성을 갖춘 하이브리드 철도 예매 플랫폼 구축',
      category: '클라우드 | 인프라 · 웹페이지 · 장애복구',
      description: '테라폼을 활용한 MSA 기반의 보안성과 가용성을 갖춘 하이브리드 철도 예매 플랫폼 구축 관련 작업 상세 내용입니다.',
      images: cloudProject02Images,
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
                    <img src={item.images && item.images.length > 0 ? item.images[0] : ''} alt={item.title} />
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

            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="modal-img-list" style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {selectedProject.images.map((imgSrc, index) => (
                  <div key={index} className="modal-img-item">
                    <img 
                      key={index} 
                      src={imgSrc} 
                      alt={`${selectedProject.title} 이미지 ${index + 1}`} 
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