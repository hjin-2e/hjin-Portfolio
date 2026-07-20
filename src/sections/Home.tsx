import React from 'react';
import MainLogo from '@/components/MainLogo';

const Home = () => {

  return (
    <section id="home" className="main">
      <div className="main-inner">
        <div className="home-logo-wrap">
          <MainLogo />
        </div>
        
        <p>
          <span>오늘은 뭐하지? 내일은 배포하지! DevOps 엔지니어 이하진입니다.</span>
          <span>안녕하세요! 웹 화면을 그리던 퍼블리셔에서, 이제는 아키텍처를 설계하고 인프라를 자동화하는 엔지니어로 진화 중입니다. <br/> 
          사용자에게 보이는 앞단(Frontend)의 디테일함을 바탕으로, 보이지 않는 뒷단(Cloud)의 안정성까지 책임지는 탄탄한 파이프라인을 구축합니다.</span>
        </p>
      </div>
    </section>
  );
};

export default Home;