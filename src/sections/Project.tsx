import { Link } from 'react-router-dom';

const Project = () => {

  return (
    <section id="project" className="sec sec03">
      <div className="sec-inner">
        <h3 className="sec-tit">Project</h3> 
        <div className="project-wrap">
          <ul className="project-list">
            <li>
              <a href="https://app.notion.com/p/rajinse/Web-3a3b30fb662580b2aa5df52467cdc345?source=copy_link" target="_blank">
              </a>
              <div className="project-txt">
                <h5>차세대 한국유학시스템 구축</h5>
                <p>Web | 퍼블리싱</p>
              </div>
            </li>
            <li>
              <a href="https://app.notion.com/p/rajinse/Web-2b0b30fb6625826d9d3e01452b827c01?source=copy_link" target="_blank">
              </a>
              <div className="project-txt">
                <h5>공동연계 급여정보 시스템</h5>
                <p>Web | 퍼블리싱 · 대시보드 · 웹스퀘어</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Project;