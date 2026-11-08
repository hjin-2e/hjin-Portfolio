export interface PortfolioDetailData {
  title: string;
  category: string;
  description?: string;
  highlights?: string[];
  metadata: { label: string; value: string }[];
  links: { label: string; url: string }[];
  images: string[];
}
export function PortfolioSummary({ data }: { data: PortfolioDetailData }) {
  return <div className="portfolio-detail-summary">
    <p className="portfolio-detail-category">{data.category}</p>
    <dl className="portfolio-detail-meta">{data.metadata.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
    {data.description && <p className="portfolio-detail-description">{data.description}</p>}
    {data.highlights && <div className="portfolio-detail-highlights"><h3>주요 수행 내용</h3><ul>{data.highlights.map(item => <li key={item}>{item}</li>)}</ul></div>}
    <div className="portfolio-detail-links">{data.links.map(link => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>
  </div>;
}
export function PortfolioDetail({ data }: { data: PortfolioDetailData }) {
  return <><PortfolioSummary data={data} /><h3 className="portfolio-detail-image-heading">프로젝트 상세 이미지</h3><div className="portfolio-detail-images">{data.images.map((src, index) => <figure key={src}><img loading="lazy" src={src} alt={data.title + ' 상세 이미지 ' + (index + 1)} /></figure>)}</div></>;
}
export function PortfolioPrintProject({ data }: { data: PortfolioDetailData }) {
  const pairs = Array.from({ length: Math.max(1, Math.ceil(data.images.length / 2)) }, (_, index) => data.images.slice(index * 2, index * 2 + 2));
  return <article className="print-only portfolio-print-project">{pairs.map((images, pageIndex) => <section className={'portfolio-project-page' + (pageIndex === 0 ? ' is-first' : '')} key={pageIndex}>
    <header className="portfolio-project-page-header"><div><span>{data.category}</span><h2>{data.title}</h2></div></header>
    {pageIndex === 0 && <PortfolioSummary data={data} />}
    <div className="portfolio-image-pair">{images.map((src, imageIndex) => <figure key={src}><img loading="lazy" src={src} alt={data.title + ' 상세 이미지 ' + (pageIndex * 2 + imageIndex + 1)} /></figure>)}</div>
  </section>)}</article>;
}
