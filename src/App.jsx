import { useEffect, useState } from 'react';

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
  },
  {
    title: 'XData 数据门户',
    role: '平台资产权限交接 / 体验流程 & 交互方案',
    period: '2024.03 - 2024.06',
    metric: '操作时长 -35%',
    summary:
      '重构平台资产权限交接流程，将任务拆分为审批前后阶段，重组检索边界和交互约束，降低认知负荷并规避潜在操作风险。',
    tone: 'cyan',
  },
  {
    title: '马踏飞燕-火车票',
    role: 'App 票务体验 / UI 视觉设计',
    period: '2018.04 - 2020.11',
    metric: '票务流程优化',
    summary:
      '围绕火车票查询、车次筛选、订单填写与支付转化等关键链路，输出移动端票务场景的界面设计与体验优化方案。',
    tone: 'silver',
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
  },
  {
    title: 'MIS 设计规范',
    role: '组件规范 & Token 建设',
    period: '研发部规范建设',
    metric: '体验一致性',
    summary:
      '梳理 Web 端通用组件、相似组件适用边界与统一设计 Token，帮助产品、设计、研发团队快速精准选用组件。',
    tone: 'cyan',
  },
];

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

function VideoBackdrop() {
  return (
    <div className="video-backdrop" aria-hidden="true">
      <div className="mesh mesh-one" />
      <div className="mesh mesh-two" />
      <div className="grid-flow" />
      <div className="scan-line" />
      <div className="particle-field">
        {Array.from({ length: 18 }, (_, index) => (
          <span
            key={index}
            style={{
              '--i': index,
              '--x': `${(index * 7) % 100}%`,
              '--y': `${18 + ((index * 11) % 54)}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Header() {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const updateHeaderState = () => {
      setIsFloating(window.scrollY > window.innerHeight * 0.72);
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
    window.addEventListener('resize', updateHeaderState);

    return () => {
      window.removeEventListener('scroll', updateHeaderState);
      window.removeEventListener('resize', updateHeaderState);
    };
  }, []);

  return (
    <header className={`site-header ${isFloating ? 'is-floating' : ''}`}>
      <a className="brand" href="#hero" aria-label="回到首页">
        <span>HJH</span>
        <strong>Portfolio</strong>
      </a>
      <nav className="nav-links" aria-label="页面导航">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="mailto:942179107@qq.com">
        联系我
      </a>
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
            <span aria-hidden="true">✉</span>
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
      <div className="shell">
        <SectionTitle english="WORK EXPERIENCE" chinese="个人经历" />

        <div className="profile-layout">
          <div className="profile-image" aria-label="人物形象占位">
            <div className="profile-image-mark">HJH</div>
          </div>

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
      <div className="shell">
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
          <a className={`project-card ${project.tone}`} href="#contact" key={project.title}>
            <div className="project-visual">
              <span className="visual-index">{String(index + 1).padStart(2, '0')}</span>
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
              <span className="detail-link">查看详情</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function Strengths() {
  return (
    <section className="section strengths-section" id="strengths">
      <div className="shell">
        <SectionTitle english="CAPABILITIES" chinese="个人优势" wide />
        <div className="strength-grid">
          {strengths.map((item, index) => (
            <article className="strength-card" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section section-screen" id="contact">
      <div className="shell contact-content">
        <SectionTitle english="CONTACT" chinese="联系方式" />
        <h2 className="contact-statement">期待与优秀团队一起，把复杂产品做得更自然。</h2>

        <div className="contact-actions" aria-label="联系方式">
          <a className="contact-pill primary" href="mailto:942179107@qq.com">
            <span aria-hidden="true">✉</span>
            发送邮件
          </a>
          <a className="contact-pill" href="tel:13510590339">
            <span aria-hidden="true">☏</span>
            13510590339
          </a>
          <div className="contact-pill">
            <span aria-hidden="true">◎</span>
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

export default function App() {
  return (
    <>
      <Hero />
      <Experience />
      <Work />
      <Strengths />
      <Contact />
    </>
  );
}
