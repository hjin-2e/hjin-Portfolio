import React, { useState, MouseEvent } from 'react';
import Modal from '@/components/Modal'; 

interface WorkItem {
  id: number;
  title: string;
  category: string;
  period: string;
  skill: string;
  contribution : string;
  description: string;
}

const Work = () => {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  // 경력 리스트
  const workList: WorkItem[] = [
    {
      id: 1,
      title: '메가스터디 교육 러셀 유지보수',
      category: 'Web | 퍼블리싱 · 반응형 · FIGMA',
      period: '2021.01 - 2021.06',
      skill: 'HTML5 · CSS3 · Javascript · J-query · Vue', 
      contribution : '퍼블리싱 100%', 
      description: 'Figma 디자인 기반 메가스터디 교육 사이트 퍼블리싱 작업입니다.',
    },
    {
      id: 2,
      title: '차세대 한국유학시스템 구축',
      category: 'Web | 퍼블리싱',
      period: '2022.08 - 2023.03',
      skill: 'HTML5 · CSS3 · Javascript · J-query', 
      contribution : '퍼블리싱 100%', 
      description: '- 유학준비생, 유학생, 졸업생 등 사용자 및 분야 별 맞춤화된 정보 제공을 위한 포털 서비스와 국립국제교육원의 내부 정보 시스템 체계를 구축하고, 유학 관련 업무의 효율적 수행을 위한 유학생 업무 관리 시스템 개선합니다.',
    },
    {
      id: 3,
      title: '공동연계 급여정보 시스템',
      category: 'Web | 퍼블리싱 · 대시보드 · 웹스퀘어',
      period: '2021.01 - 2021.09',
      skill: 'HTML5 · CSS3 · Javascript · J-query', 
      contribution : '퍼블리싱 100%', 
      description: '국민연금 가입자를 위한 5대 공적연금의 연계 표준화 작업 및 통합 서비스 제공을 위한 통합된 공적 연금 연계 급여관리 체계 서비스를 구축했습니다.',
    },
    {
      id: 4,
      title: '판로정보 종합시스템 구축사업',
      category: 'Web | 퍼블리싱 · 반응형',
      period: '2021.07 - 2022.03',
      skill: 'HTML5 · CSS3 · Javascript · J-query · FIGMA', 
      contribution : '퍼블리싱 70% / 판판셀러 관리자 페이지 디자인 100%', 
      description: '비대면화, 유통채널 다각화, 구독경제 확산에 대응할 수 있는 판로정보 종합시스템 플랫폼 구축합니다.',
    },
    {
      id: 5,
      title: '중소벤처확인 시스템 구축 용역',
      category: 'Web | 퍼블리싱 · 반응형 · 대시보드',
      period: '2021.01 - 2021.06',
      skill: 'HTML5 · CSS3 · Javascript · J-query', 
      contribution : '퍼블리싱 100%', 
      description: '2021년에 처음 오픈 된 사이트로 벤처기업 확인 절차에 따른 우대지원제도를 운영 웹 서비스 입니다.',
    },
  ];

  // 카드 클릭 이벤트 핸들러
  const handleCardClick = (e: MouseEvent<HTMLAnchorElement>, item: WorkItem) => {
    e.preventDefault(); 
    setSelectedWork(item);
  };

  return (
    <section id="work" className="sec sec02">
      <div className="sec-inner">
        <h3 className="sec-tit">Work</h3>
        <div className="work-wrap">
          <ul className="work-list">
            {workList.map((item) => (
              <li key={item.id}>
                <a
                  href="#none"
                  onClick={(e) => handleCardClick(e, item)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="work-txt">
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
        isOpen={!!selectedWork}
        onClose={() => setSelectedWork(null)}
        title={selectedWork?.title}
      >
        {selectedWork && (
          <div className="modal-content-wrap">
            {/* <p className="category"><strong>구분:</strong> {selectedWork.category}</p> */}
            <dl className="modal-item-info">
              <dt className="ml0">프로젝트 기간</dt>
              <dd>{selectedWork?.period}</dd>
              <dt>기술 스택</dt>
              <dd>{selectedWork?.skill}</dd>
              <dt>기여도</dt>
              <dd>{selectedWork?.contribution }</dd>
            </dl>
            <p className="desc">{selectedWork.description}</p>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Work;