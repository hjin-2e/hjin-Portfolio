import React from 'react';

const MainLogo = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 700 120" 
      width="100%" 
      height="100%"
    >
      <defs>
        {/* 구글 웹폰트 로드 및 스타일 정의 */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,900;1,900&display=swap');
          
          .logo-text {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 90px;
            font-weight: 900;
            fill: var(--text-h); 
            letter-spacing: -4px;
          }
          
          .italic-style {
            font-style: italic;
          }
        `}</style>
      </defs>

      {/* 텍스트 배치 */}
      <text x="20" y="90" className="logo-text">
        Today<tspan className="italic-style">M</tspan>ohajin
      </text>
    </svg>
  );
};

export default MainLogo;