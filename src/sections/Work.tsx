import React, { useState, MouseEvent } from 'react';
import Modal from '@/components/Modal'; 
import { IMAGES } from '@/assets/img';

interface WorkItem {
  id: number;
  title: string;
  category: string;
  period: string;
  skill: string;
  contribution : string;
  description: string;
  notionUrl: string;
  thumbnail: string;      
  modalImages?: string[];
}

const work01Images = [
  IMAGES.WORK01_01,
  IMAGES.WORK01_02,
  IMAGES.WORK01_03,
  IMAGES.WORK01_04,
  IMAGES.WORK01_05,
  IMAGES.WORK01_06,
];

const work02Images = [
  IMAGES.WORK02_01,
  IMAGES.WORK02_02,
  IMAGES.WORK02_03,
  IMAGES.WORK02_04,
  IMAGES.WORK02_05,
  IMAGES.WORK02_06,
];

const work03Images = [
  IMAGES.WORK03_01,
  IMAGES.WORK03_02,
  IMAGES.WORK03_03,
];

const work04Images = [
  IMAGES.WORK04_01,
  IMAGES.WORK04_02,
];

const work05Images = [
  IMAGES.WORK05_01,
  IMAGES.WORK05_02,
  IMAGES.WORK05_03,
  IMAGES.WORK05_04,
];

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
      description: '메가스터디 러셀 퍼블리싱을 담당하며 웹사이트 운영 및 유지보수, 모집요강 프로젝트 개발, 신규 사이트 구축 등 다양한 퍼블리싱 업무를 수행했습니다.',
      notionUrl: 'https://app.notion.com/p/rajinse/Web-3a3b30fb662580fa9f8ded862bef4ed0',
      thumbnail: IMAGES.WORK05_01,
      modalImages: work05Images, 
    },
    {
      id: 2,
      title: '차세대 한국유학시스템 구축',
      category: 'Web | 퍼블리싱',
      period: '2022.08 - 2023.03',
      skill: 'HTML5 · CSS3 · Javascript · J-query', 
      contribution : '퍼블리싱 100%', 
      description: '유학준비생, 유학생, 졸업생 등 사용자별 맞춤형 유학 정보를 제공하는 한국유학 공식 포털(Study in Korea)과 각 대학 입학처 및 담당자가 활용하는 유학생 업무 관리 시스템(SIMS)을 구축한 프로젝트입니다.',
      notionUrl: 'https://app.notion.com/p/rajinse/Web-3a3b30fb662580b2aa5df52467cdc345',
      thumbnail: IMAGES.WORK04_01,
      modalImages: work04Images, 
    },
    {
      id: 3,
      title: '공동연계 급여정보 시스템',
      category: 'Web | 퍼블리싱 · 대시보드 · 웹스퀘어',
      period: '2021.01 - 2021.09',
      skill: 'HTML5 · CSS3 · Javascript · J-query', 
      contribution : '퍼블리싱 100%', 
      description: '국민연금 가입자를 위해 5대 공적연금 연계 업무를 표준화하고 통합 서비스를 제공하는 공동연계 급여정보 시스템 구축 프로젝트입니다.',
      notionUrl: 'https://app.notion.com/p/rajinse/Web-2b0b30fb6625826d9d3e01452b827c01',
      thumbnail: IMAGES.WORK03_01,
      modalImages: work03Images, 
    },
    {
      id: 4,
      title: '판로정보 종합시스템 구축사업',
      category: 'Web | 퍼블리싱 · 반응형',
      period: '2021.07 - 2022.03',
      skill: 'HTML5 · CSS3 · Javascript · J-query · FIGMA', 
      contribution : '퍼블리싱 100% / 판판셀러 관리자 페이지 디자인 100%', 
      description: '비대면화, 유통채널 다각화, 구독경제 확산 등 급변하는 시장 환경과 코로나19로 인한 온라인 시장 확대 트렌드에 발맞추어, 소상공인 및 중소벤처기업을 위한 맞춤형 판로정보 종합시스템 플랫폼을 구축한 사업입니다.',
      notionUrl: 'https://app.notion.com/p/rajinse/Web-1a1b30fb6625828399ae8178ff8062fb',
      thumbnail: IMAGES.WORK02_01,
      modalImages: work02Images, 
    },
    {
      id: 5,
      title: '중소벤처확인 시스템 구축 용역',
      category: 'Web | 퍼블리싱 · 반응형 · 대시보드',
      period: '2021.01 - 2021.06',
      skill: 'HTML5 · CSS3 · Javascript · J-query', 
      contribution : '퍼블리싱 100%', 
      description: '기존 3개 기관으로 분산되어 있던 확인 주체를 통합하여, 사용자용 반응형 포털 사이트에서 벤처기업 확인 절차(벤처투자, 연구개발, 혁신성장 등)에 따른 우대지원제도 운영 및 온라인 신청·평가·심의 프로세스를 지원하는 벤처기업 확인 통합 시스템 신규 구축 프로젝트입니다.',
      notionUrl: 'https://app.notion.com/p/rajinse/Web-e00b30fb66258262bc5e0180734cefbf',
      thumbnail: IMAGES.WORK01_01,
      modalImages: work01Images, 
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
                  <div className="work-img">
                    {/* 카드 썸네일 출력 */}
                    <img src={item.thumbnail} alt={item.title} />
                  </div>
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

            {/* 링크 버튼 영역 (링크가 하나라도 있을 때만 렌더링) */}
            {(selectedWork.notionUrl) && (
              <div className="modal-links">
                {selectedWork.notionUrl && (
                  <a href={selectedWork.notionUrl} target="_blank" rel="noopener noreferrer" className="link-btn notion">📂 Notion 바로가기</a>
                )}
              </div>
            )}

            {selectedWork.modalImages && selectedWork.modalImages.length > 0 && (
              <div className="modal-img-list" style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {selectedWork.modalImages.slice(0).map((imgSrc, index) => (
                  <div key={index} className="modal-img-item">
                    <img 
                      src={imgSrc} 
                      /* 첫 번째 이미지를 제외했으므로, 텍스트 상으로는 2번째 이미지부터 시작하도록 인덱스 조정 (선택사항) */
                      alt={`${selectedWork.title} 이미지 ${index + 1}`} 
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

export default Work;