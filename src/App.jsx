import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import profilePhoto from '../assets/生活照-1280.jpg';
import nounSystemCover from '../assets/p1.png';
import xdataCover from '../assets/p2.png';
import trainTicketCover from '../assets/p3.png';
import bitongWalletCover from '../assets/p4.png';
import misGuidelineCover from '../assets/p5.png';
import experienceMagazineCover from '../assets/p6.png';
import aiComponentLibraryCover from '../assets/p7.png';
import emailIcon from '../assets/icon/email.svg';
import phoneIcon from '../assets/icon/phone.svg';
import wechatIcon from '../assets/icon/wechat.svg';
import TiltedCard from './components/TiltedCard.jsx';
import BorderGlow from './components/BorderGlow.jsx';

const galleryFrom = (modules) => Object.entries(modules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, image]) => image);

const project1Gallery = galleryFrom(import.meta.glob('../assets/project1/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }));
const project2Gallery = galleryFrom(import.meta.glob('../assets/project2/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }));
const project3Gallery = galleryFrom(import.meta.glob('../assets/project3/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }));
const project4Gallery = galleryFrom(import.meta.glob('../assets/project4/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }));
const project5Gallery = galleryFrom(import.meta.glob('../assets/project5/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }));
const project6Gallery = galleryFrom(import.meta.glob('../assets/project6/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }));
const project7Gallery = galleryFrom(import.meta.glob('../assets/project7/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }));
const navItems = [
  { label: '首页', href: '#hero' },
  { label: '经历', href: '#experience' },
  { label: '作品', href: '#work' },
  { label: '优势', href: '#strengths' },
  { label: '联系', href: '#contact' },
];

const contacts = [
  { label: 'Email', value: '942179107@qq.com', href: 'mailto:942179107@qq.com' },
  { label: 'Phone', value: '13510590339', href: 'tel:13510590339' },
  { label: 'WeChat', value: 'JiaHooong' },
];

const stats = [
  { value: '8+', label: '年设计经验' },
  { value: '40%', label: '名词登记量提升' },
  { value: '100%', label: '合规术语解析准确率' },
];

const experiences = [
  {
    company: '深圳市法本信息技术股份有限公司',
    role: '交互体验设计师',
    period: '2020.11 - 至今',
    points: [
      '协助产品经理负责前期产品规划、流程梳理、原型设计、需求分析与高保真原型输出。',
      '专注 Web 端工具类产品体验升级，通过用户调研、流程优化与原型设计提升产品易用性。',
      '搭建 MIS 规范设计组件库，统一设计语言和组件使用文档，降低跨团队协作成本。',
      '主导用户访谈与可用性测试，基于数据迭代方案，累计提升核心功能使用率 30%。',
    ],
  },
  {
    company: '深圳丝路天地电子商务有限公司',
    role: 'UI / 视觉设计师',
    period: '2018.04 - 2020.11',
    points: [
      '负责马踏飞燕 App 机票、火车票、支付板块视觉输出与体验优化。',
      '独立负责 B 端供应链设计工作，推动界面与交互设计落地。',
      '独立负责币通钱包移动端、网页设计和 H5 活动，参与需求分析、原型评审与数据驱动改版。',
    ],
  },
];

const projectWorks = [
  {
    title: '名词系统',
    role: '业务验证 & 交互流程设计',
    period: '2022.05 - 至今',
    metric: '登记量 +40%',
    summary:
      '从 0 到 1 构建面向微信支付线研发与合规人员的名词系统，统一专有名词、消除沟通歧义，并创新设计气泡名词解析与富文本详情布局。',
    tone: 'blue',
    cover: nounSystemCover,
    gallery: project1Gallery,
  },
  {
    title: 'XData 数据门户',
    role: '平台资产权限交接 / 体验流程 & 交互方案',
    period: '2024.03 - 2024.06',
    metric: '操作时长 -35%',
    summary:
      '重构平台资产权限交接流程，将任务拆分为审批前后阶段，重组检索边界和交互约束，降低认知负荷并规避潜在操作风险。',
    tone: 'cyan',
    cover: xdataCover,
    gallery: project2Gallery,
  },
  {
    title: '马踏飞燕-火车票',
    role: 'App 票务体验 / UI 视觉设计',
    period: '2018.04 - 2020.11',
    metric: '票务流程优化',
    summary:
      '围绕火车票查询、车次筛选、订单填写与支付转化等关键链路，输出移动端票务场景的界面设计与体验优化方案。',
    tone: 'silver',
    cover: trainTicketCover,
    gallery: project3Gallery,
    reference: 'references/马踏飞燕-火车票.pdf',
  },
  {
    title: '币通钱包',
    role: '移动端 / Web / H5 活动设计',
    period: '2018.04 - 2020.11',
    metric: '多端体验落地',
    summary:
      '独立负责钱包产品移动端、网页与 H5 活动设计，参与前期需求分析、原型评审，并协助开发推动界面与交互落地。',
    tone: 'graphite',
    cover: bitongWalletCover,
    gallery: project4Gallery,
    reference: 'references/币通钱包.pdf',
  },
];

const teamWorks = [
  {
    title: '体验微刊',
    role: '内容策划 & 编辑',
    period: '团队知识共创',
    metric: '认知同步',
    summary:
      '参与体验微刊策划与编辑，将设计定律、交互方法论转化为图文结合的轻量内容，帮助团队在碎片化时间系统学习。',
    tone: 'blue',
    cover: experienceMagazineCover,
    gallery: project5Gallery,
  },
  {
    title: 'MIS 设计规范',
    role: '组件规范 & Token 建设',
    period: '研发部规范建设',
    metric: '体验一致性',
    summary:
      '梳理 Web 端通用组件、相似组件适用边界与统一设计 Token，帮助产品、设计、研发团队快速精准选用组件。',
    tone: 'cyan',
    cover: misGuidelineCover,
    gallery: project6Gallery,
  },
  {
    title: 'AI 辅助搭建组件库',
    role: 'AI 工作流 & 组件库搭建',
    period: '组件规范沉淀',
    metric: '效率提升',
    summary:
      '借助 AI 辅助搭建 PC 端教育 AI 组件库，高效输出标注与开发说明，缩短设计落地周期，并按需补齐空变体组件，适配后续产品迭代与新增功能。',
    tone: 'silver',
    cover: aiComponentLibraryCover,
    gallery: project7Gallery,
  },
];

const allWorks = [
  ...projectWorks.map((work) => ({ ...work, category: '\u9879\u76ee\u4f5c\u54c1' })),
  ...teamWorks.map((work) => ({ ...work, category: '\u56e2\u961f\u4f5c\u54c1' })),
];

const workScrollKey = 'portfolio-work-scroll-y';

function rememberWorkScroll() {
  sessionStorage.setItem(workScrollKey, String(window.scrollY));
}

function takeRememberedWorkScroll() {
  const value = sessionStorage.getItem(workScrollKey);
  sessionStorage.removeItem(workScrollKey);
  const position = Number(value);
  return Number.isFinite(position) ? position : null;
}

const strengths = [
  {
    title: 'B 端复杂流程梳理',
    body: '擅长从业务堵点中拆解任务路径、权限边界和异常状态，让复杂流程变得清晰可执行。',
  },
  {
    title: '用户调研与可用性测试',
    body: '通过访谈、场景观察和数据反馈识别真实问题，再将洞察转化为可验证的体验方案。',
  },
  {
    title: '交互原型与高保真输出',
    body: '覆盖需求理解、信息架构、流程设计、交互细节和高保真原型交付的完整链路。',
  },
  {
    title: '设计规范与组件库',
    body: '具备组件使用文档、设计 Token、相似组件边界和跨系统体验一致性的建设经验。',
  },
  {
    title: '跨团队协作推进',
    body: '能够高效对接产品、开发、视觉团队，以理性设计推动方案落地并持续迭代。',
  },
  {
    title: 'AI 辅助设计工作流',
    body: '自学 AI 并融入竞品分析、用户研究参考、运营视觉探索等工作流，提升前期探索效率。',
  },
];

function useInViewActivity(ref) {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { rootMargin: '20% 0px' },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return isActive;
}
function VideoBackdrop() {
  const ref = useRef(null);
  const isActive = useInViewActivity(ref);

  return (
    <div ref={ref} className={`video-backdrop ${isActive ? 'is-active' : ''}`} aria-hidden="true">
      <div className="mesh mesh-one" />
      <div className="mesh mesh-two" />
      <div className="grid-flow" />
      <div className="scan-line" />
      <div className="particle-field">
        {Array.from({ length: 18 }, (_, index) => (
          <span key={index} style={{
            '--i': index,
            '--x': `${(index * 7) % 100}%`,
            '--y': `${18 + ((index * 11) % 54)}%`,
          }} />
        ))}
      </div>
    </div>
  );
}
function Grainient({ color1, color2, color3, timeSpeed, warpStrength, warpSpeed, warpAmplitude, blendSoftness, rotationAmount, grainAmount, grainScale, contrast, saturation, centerX, centerY, zoom }) {
  const ref = useRef(null);
  const isActive = useInViewActivity(ref);

  return (
    <div
      ref={ref}
      className={`grainient ${isActive ? 'is-active' : ''}`}
      aria-hidden="true"
      style={{
        '--grainient-color-1': color1,
        '--grainient-color-2': color2,
        '--grainient-color-3': color3,
        '--grainient-speed': `${Math.max(timeSpeed, 0.1) * 36}s`,
        '--grainient-warp-speed': `${Math.max(warpSpeed, 0.1) * 15}s`,
        '--grainient-warp': `${warpStrength * warpAmplitude}px`,
        '--grainient-softness': blendSoftness,
        '--grainient-rotation': `${rotationAmount * 0.1}deg`,
        '--grainient-grain-opacity': grainAmount,
        '--grainient-grain-scale': `${grainScale}px`,
        '--grainient-contrast': contrast,
        '--grainient-saturation': saturation,
        '--grainient-x': `${centerX * 50 + 50}%`,
        '--grainient-y': `${centerY * 50 + 50}%`,
        '--grainient-zoom': zoom,
      }}
    >
      <span className="grainient-color grainient-color-one" />
      <span className="grainient-color grainient-color-two" />
      <span className="grainient-color grainient-color-three" />
      <span className="grainient-grain" />
    </div>
  );
}
function SectionGrainient() {
  return <Grainient color1="#CCEBF8" color2="#F8FAFD" color3="#CCE0FB" timeSpeed={0.25} warpStrength={1} warpSpeed={2} warpAmplitude={50} blendSoftness={0.05} rotationAmount={500} grainAmount={0.1} grainScale={2} contrast={1.5} saturation={1} centerX={0} centerY={0} zoom={0.9} />;
}
function Header() {
  const [isFloating, setIsFloating] = useState(false);
  const isFloatingRef = useRef(false);
  const frame = useRef(null);

  useEffect(() => {
    const updateHeaderState = () => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        const next = window.scrollY > window.innerHeight * 0.72;
        if (next !== isFloatingRef.current) {
          isFloatingRef.current = next;
          setIsFloating(next);
        }
        frame.current = null;
      });
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
    window.addEventListener('resize', updateHeaderState);
    return () => {
      window.removeEventListener('scroll', updateHeaderState);
      window.removeEventListener('resize', updateHeaderState);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <header className={`site-header ${isFloating ? 'is-floating' : ''}`}>
      <a className="brand" href="#hero" aria-label="回到首页"><span>HJH</span><strong>Portfolio</strong></a>
      <nav className="nav-links" aria-label="页面导航">
        {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <a className="header-cta" href="mailto:942179107@qq.com">联系我</a>
    </header>
  );
}
function DetailHeader({ onBack }) {
  return (
    <header className="site-header detail-site-header is-floating">
      <a className="brand" href="#hero" aria-label={'\u56de\u5230\u9996\u9875'}><span>HJH</span><strong>Portfolio</strong></a>
      <nav className="nav-links" aria-label={'\u4f5c\u54c1\u8be6\u60c5\u5bfc\u822a'}>
        <a href="#work">{'\u4f5c\u54c1'}</a>
        <a href="#contact">{'\u8054\u7cfb'}</a>
      </nav>
      <a className="header-cta" href="#work" onClick={onBack}>{'\u8fd4\u56de\u4f5c\u54c1'}</a>
    </header>
  );
}
function Hero() {
  return (
    <section className="hero section-screen" id="hero">
      <VideoBackdrop />
      <Header />
      <div className="hero-content shell">
        <p className="eyebrow">Product Experience Designer / UX / UI</p>
        <h1>
          <strong>JiaHooong</strong>
          <span>探索新时代产品设计</span>
          <span>解决方案</span>
        </h1>
        <p className="hero-copy">产品 × 体验 × 交互</p>
        <div className="hero-actions">
          <a className="primary-btn" href="#work">
            查看作品
          </a>
          <a className="ghost-btn" href="mailto:942179107@qq.com">
            <img className="contact-icon" src={emailIcon} alt="" aria-hidden="true" />
            942179107@qq.com
          </a>
        </div>
      </div>
      <div className="scroll-cue">Scroll</div>
    </section>
  );
}

function SectionTitle({ english, chinese, body, wide = false }) {
  return (
    <div className={`section-heading ${wide ? 'wide' : ''}`}>
      <div>
        <h2>{english}</h2>
        <span className="section-chip">{chinese}</span>
      </div>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <SectionGrainient />
      <div className="shell section-content">
        <SectionTitle english="WORK EXPERIENCE" chinese="个人经历" />

        <div className="profile-layout">
          <TiltedCard
            className="profile-image"
            imageSrc={profilePhoto}
            altText="黄家泓在海边的生活照"
            containerHeight="var(--profile-card-height)"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={6}
            scaleOnHover={1.035}
          />

          <div className="profile-copy">
            <span className="micro-label">about me</span>
            <h3>Hi, I am HuangJiaHong</h3>
            <p>
              相信好的设计不仅仅是美观，更要解决用户的实际问题，同时帮助客户实现商业目标。
              我始终以用户为中心，注重细节，追求完美。
            </p>

            <div className="profile-info-grid">
              <div>
                <span>当前身份</span>
                <strong>产品体验设计师</strong>
              </div>
              <div>
                <span>所在城市</span>
                <strong>深圳</strong>
              </div>
              <div>
                <span>手机</span>
                <strong>135 1059 0339</strong>
              </div>
              <div>
                <span>邮箱</span>
                <strong>942179107@qq.com</strong>
              </div>
            </div>

            <div className="profile-stat-row">
              {stats.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="career-head">
          <span>CAREER PATH</span>
          <strong>工作经历</strong>
        </div>

        <div className="career-timeline">
          {experiences.map((item) => (
            <article className="career-item" key={item.company}>
              <span className="career-dot" />
              <time>{item.period}</time>
              <h3>{item.company}</h3>
              <strong>{item.role}</strong>
              <p>{item.points.slice(0, 2).join('')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section work-section" id="work">
      <SectionGrainient />
      <div className="shell section-content">
        <SectionTitle
          english="SELECTED WORKS"
          chinese="精选作品"
          wide
        />
        <WorkGroup title="项目作品" label="Project Work" works={projectWorks} />
        <WorkGroup title="团队作品" label="Team Work" works={teamWorks} compact />
      </div>
    </section>
  );
}

function WorkGroup({ title, label, works, compact = false }) {
  return (
    <div className={`work-group ${compact ? 'compact' : ''}`}>
      <div className="work-group-head">
        <span>{label}</span>
        <h3>{title}</h3>
      </div>
      <div className="project-grid">
        {works.map((project, index) => (
          <a className={`project-card ${project.tone}`} href={`#work/${encodeURIComponent(project.title)}`} onClick={rememberWorkScroll} key={project.title}>
            <div className="project-visual">
              {project.cover && <img className="project-cover-image" src={project.cover} alt="" loading="lazy" />}
              <div className="visual-window">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="project-body">
              <div>
                <span className="project-role">{project.role}</span>
                <h3>{project.title}</h3>
              </div>
              <p>{project.summary}</p>
              <div className="project-meta">
                <span>{project.period}</span>
                <strong>{project.metric}</strong>
              </div>
              <span className="detail-link">{'\u67e5\u770b\u8be6\u60c5'}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function WorkDetail({ project, onBack }) {
  const gallery = project.gallery?.length ? project.gallery : [project.cover].filter(Boolean);
  const tags = project.tags?.length ? project.tags : [project.role, project.metric].filter(Boolean);

  return (
    <main className="work-detail-page">
      <SectionGrainient />
      <DetailHeader onBack={onBack} />
      <section className="work-detail-shell shell">
        <aside className="work-detail-info">
          <a className="back-link" href="#work" onClick={onBack}>{'\u8fd4\u56de\u7cbe\u9009\u4f5c\u54c1'}</a>
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="work-detail-summary">{project.summary}</p>

          <div className="work-detail-tags" aria-label={'\u4f5c\u54c1\u6807\u7b7e'}>
            {tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>

          <dl className="work-detail-meta">
            <div>
              <dt>{'\u9879\u76ee\u89d2\u8272'}</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>{'\u9879\u76ee\u5468\u671f'}</dt>
              <dd>{project.period}</dd>
            </div>
            <div>
              <dt>{'\u6210\u679c\u4eae\u70b9'}</dt>
              <dd>{project.metric}</dd>
            </div>
            <div>
              <dt>{'\u5c55\u793a\u65b9\u5f0f'}</dt>
              <dd>{project.prototypeUrl && gallery.length ? 'Figma \u539f\u578b + \u56fe\u7247\u6d41' : project.prototypeUrl ? 'Figma \u539f\u578b' : '\u56fe\u7247\u6d41'}</dd>
            </div>
          </dl>
        </aside>

        <div className="work-detail-gallery">
          {project.prototypeUrl ? (
            <iframe
              className="prototype-frame"
              title={project.title + " Figma prototype"}
              src={project.prototypeUrl}
              allowFullScreen
            />
          ) : null}
          {gallery.map((image, index) => (
            <img
              className="work-detail-image"
              src={image}
              alt={project.title + " \u4f5c\u54c1\u5c55\u793a " + (index + 1)}
              key={project.title + index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function Strengths() {
  return (
    <section className="section strengths-section" id="strengths">
      <SectionGrainient />
      <div className="shell section-content">
        <SectionTitle english="CAPABILITIES" chinese="个人优势" wide />
        <div className="strength-grid">
          {strengths.map((item, index) => (
            <BorderGlow
              key={item.title}
              className="strength-glow"
              edgeSensitivity={24}
              glowColor="208 88 68"
              backgroundColor="#FFFFFF"
              borderRadius={8}
              glowRadius={26}
              glowIntensity={0.62}
              coneSpread={22}
              colors={['#1477FF', '#11B7CF', '#CCEBF8']}
            >
              <article className="strength-card">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section section-screen" id="contact">
      <SectionGrainient />
      <div className="shell contact-content">
        <SectionTitle english="CONTACT" chinese="联系方式" />
        <h2 className="contact-statement">
          期待与优秀团队一起，<span className="contact-accent">把</span>复杂<span className="contact-accent">产品</span><span className="contact-accent">做</span>得更<span className="contact-accent">自然</span>。
        </h2>

        <div className="contact-actions" aria-label="联系方式">
          <a className="contact-pill primary" href="mailto:942179107@qq.com">
            <img className="contact-icon" src={emailIcon} alt="" aria-hidden="true" />
            发送邮件
          </a>
          <a className="contact-pill" href="tel:13510590339">
            <img className="contact-icon" src={phoneIcon} alt="" aria-hidden="true" />
            13510590339
          </a>
          <div className="contact-pill">
            <img className="contact-icon" src={wechatIcon} alt="" aria-hidden="true" />
            JiaHooong
          </div>
        </div>

        <footer className="contact-footer">
          <span>黄家洪 / PRODUCT EXPERIENCE DESIGNER</span>
          <span>PRODUCT / INTERACTION / VISUAL</span>
        </footer>
      </div>
    </section>
  );
}

function usePortfolioMotion(root, enabled = true) {
  useLayoutEffect(() => {
    if (!enabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let cancelled = false;
    let context;

    const initialise = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      context = gsap.context(() => {
        const heroLines = gsap.utils.toArray('.hero h1 > strong, .hero h1 > span');
        const opening = gsap.timeline({ defaults: { ease: 'power4.out' } });

        opening
          .set('.site-header', { yPercent: -130, opacity: 0 })
          .set('.hero .eyebrow, .hero-copy, .hero-actions, .scroll-cue', { y: 34, opacity: 0 })
          .set(heroLines, { yPercent: 115, scaleY: 0.72, opacity: 0, transformOrigin: '0% 100%' })
          .to('.site-header', { yPercent: 0, opacity: 1, duration: 1.15, ease: 'expo.out' }, 0.18)
          .to('.hero .eyebrow', { y: 0, opacity: 1, duration: 0.9 }, 0.48)
          .to(heroLines, { yPercent: 0, scaleY: 1, opacity: 1, duration: 1.35, stagger: 0.16 }, 0.62)
          .to('.hero-copy, .hero-actions', { y: 0, opacity: 1, duration: 0.85, stagger: 0.12 }, 1.28)
          .to('.scroll-cue', { y: 0, opacity: 1, duration: 0.7 }, 1.68);

        gsap.utils.toArray('.section, .contact-section').forEach((section) => {
          const heading = section.querySelector('.section-heading h2');
          const chip = section.querySelector('.section-chip');
          const cards = section.querySelectorAll('.profile-image, .profile-copy, .career-item, .project-card, .strength-glow, .contact-statement, .contact-actions, .contact-footer');

          if (heading) gsap.fromTo(heading, { xPercent: -22, y: 70, scaleX: 0.78, opacity: 0, transformOrigin: '0% 50%' }, {
            xPercent: 0, y: 0, scaleX: 1, opacity: 1, duration: 1.25, ease: 'power4.out',
            scrollTrigger: { trigger: section, start: 'top 72%', once: true },
          });
          if (chip) gsap.fromTo(chip, { y: 22, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 68%', once: true },
          });
          if (cards.length) gsap.fromTo(cards, { y: 78, opacity: 0, rotateX: -7, transformOrigin: '50% 100%' }, {
            y: 0, opacity: 1, rotateX: 0, duration: 1.08, stagger: 0.11, ease: 'power4.out',
            scrollTrigger: { trigger: section, start: 'top 62%', once: true },
          });
        });

        gsap.utils.toArray('.project-visual').forEach((visual) => {
          gsap.fromTo(visual, { yPercent: 12, scale: 1.08 }, {
            yPercent: -4, scale: 1, ease: 'none',
            scrollTrigger: { trigger: visual, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
          });
        });
      }, root);
    };

    initialise();
    return () => {
      cancelled = true;
      context?.revert();
    };
  }, [root, enabled]);
}
export default function App() {
  const root = useRef(null);
  const [route, setRoute] = useState(() => window.location.hash);
  const detailMatch = route.match(/^#work\/(.+)$/);
  usePortfolioMotion(root, !detailMatch);

  useEffect(() => {
    const handleRouteChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', handleRouteChange);
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  useEffect(() => {
    if (detailMatch) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (route === '#work') {
      const rememberedPosition = takeRememberedWorkScroll();
      if (rememberedPosition !== null) {
        requestAnimationFrame(() => {
          window.scrollTo({ top: rememberedPosition, behavior: 'auto' });
        });
      }
    }
  }, [detailMatch, route]);

  const selectedProject = detailMatch
    ? allWorks.find((work) => work.title === decodeURIComponent(detailMatch[1]))
    : null;

  const handleBackToWork = () => {
    if (!sessionStorage.getItem(workScrollKey)) {
      const workSection = document.getElementById('work');
      if (workSection) sessionStorage.setItem(workScrollKey, String(workSection.offsetTop));
    }
  };

  if (detailMatch) {
    return selectedProject
      ? <WorkDetail project={selectedProject} onBack={handleBackToWork} />
      : <WorkDetail project={allWorks[0]} onBack={handleBackToWork} />;
  }

  return (
    <main ref={root}>
      <Hero />
      <Experience />
      <Work />
      <Strengths />
      <Contact />
    </main>
  );
}