import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const email = "hjin201123@gmail.com";
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  
  // TypeScript를 위해 HTMLDivElement 타입을 지정해 줍니다.
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Contact 섹션이 화면에 들어왔는지 감지하는 옵저버 설정
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsEmailVisible(true); // 화면에 들어오면 true로 변경
        } else {
          setIsEmailVisible(false); // 화면에서 벗어나면 다시 모션 리셋
        }
      },
      { threshold: 0.3 } // 섹션이 30% 이상 보일 때 작동
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="sec sec04">
      <div className="sec-inner">
        <h3 className="sec-tit">Contact</h3>
        <div className="contact-wrap">
          <div className="contact-txt">
            <p>똑똑, 함께 일할 사람을 찾고 계신가요?</p>
          </div>
          <div className="cont-email" ref={containerRef}>
            <p className="word">
              {email.split("").map((char, index) => (
                <span 
                  key={index} 
                  // 감지 상태(isEmailVisible)에 따라 'on' 클래스를 동적으로 붙여줍니다.
                  className={`letter ${isEmailVisible ? 'on' : ''}`} 
                  // 글자마다 0.04초씩 딜레이를 주어 파도타기 효과를 만듭니다.
                  style={{ transitionDelay: `${index * 0.04}s` }}
                >
                  {/* 공백 문자일 경우 깨짐 방지를 위해 처리 */}
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>
          </div>
          <div className="contact-txt mt0">
            <p>저에게 궁금한 점이 있으시다면 연락해 주세요 :) 빠르게 답장 드리겠습니다!</p>
            <a href={`mailto:${email}`} className="email-link link-arrow">
              메일 보내기
              <i className="fa-solid fa-circle-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;