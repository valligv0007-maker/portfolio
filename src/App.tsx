import { FormEvent, useState } from "react";

type IconName =
  | "arrow"
  | "brain"
  | "briefcase"
  | "check"
  | "code"
  | "database"
  | "document"
  | "download"
  | "graduation"
  | "mail"
  | "menu"
  | "phone"
  | "spark"
  | "user"
  | "x";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    brain: <><path d="M9.5 4.5A3.5 3.5 0 0 0 6 8v.4A3.5 3.5 0 0 0 4.5 15H6a3 3 0 0 0 3 3h.5V4.5ZM14.5 4.5A3.5 3.5 0 0 1 18 8v.4a3.5 3.5 0 0 1 1.5 6.6H18a3 3 0 0 1-3 3h-.5V4.5Z" /><path d="M7 10h2.5M14.5 8H17M14.5 13H18" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="12" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>,
    document: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></>,
    download: <><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></>,
    graduation: <><path d="m2 9 10-5 10 5-10 5z" /><path d="M6 11.5V16c3.5 3 8.5 3 12 0v-4.5M22 9v7" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    phone: <path d="M5.4 3.8 8.8 3l2 5-2.2 1.4a15 15 0 0 0 6 6l1.4-2.2 5 2-.8 3.4a3 3 0 0 1-3.4 2.3A17.5 17.5 0 0 1 3.1 7.2 3 3 0 0 1 5.4 3.8Z" />,
    spark: <><path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    x: <><path d="M6 6l12 12M18 6 6 18" /></>,
  };
  return <svg aria-hidden="true" className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

const skillGroups = [
  ["Programming", ["Python", "SQL", "Object-Oriented Programming"]],
  ["Generative AI & Agentic AI", ["Large Language Models", "Retrieval-Augmented Generation", "LangChain", "LangGraph", "OpenAI API", "Azure OpenAI", "GPT-4o", "AI Agents", "Prompt Engineering", "Embeddings", "Conversational Memory", "Structured Outputs", "Hybrid Retrieval", "Semantic Search", "LLM-as-a-Judge", "Hallucination Detection", "Faithfulness Evaluation"]],
  ["Machine Learning & Deep Learning", ["Scikit-learn", "TensorFlow", "Keras", "PyTorch", "Random Forest", "XGBoost", "LSTM", "Classification", "Regression", "Feature Engineering", "Hyperparameter Tuning", "Cross-Validation", "Model Evaluation"]],
  ["Natural Language Processing", ["Text Preprocessing", "Tokenization", "Lemmatization", "TF-IDF", "CountVectorizer", "Text Classification", "Sentiment Analysis", "Intent Classification", "Sequence Modeling"]],
  ["Data, Search & Databases", ["Pandas", "NumPy", "Azure Cosmos DB", "Cosmos DB Vector Search", "Azure Blob Storage", "Vector Indexing", "Metadata Filtering", "SQL"]],
  ["Backend, Cloud & MLOps", ["FastAPI", "REST APIs", "Microsoft Azure", "AWS", "Docker", "Git", "CI/CD", "Containerization", "Deployment", "Logging and Monitoring"]],
  ["Visualization", ["Matplotlib", "Seaborn", "Power BI"]],
];

const projects = [
  {
    num: "01",
    title: "AI-Powered Agronomy Knowledge Intelligence Platform",
    category: "Generative AI · RAG · Enterprise Knowledge Systems",
    description: "Built an enterprise-grade RAG platform that enables intelligent retrieval and question answering across agronomy documents, crop research, SOPs, compliance materials, and operational knowledge.",
    contributions: ["Multi-format document ingestion for PDF, DOCX, PPT, and research reports.", "Document cleaning, semantic chunking, and metadata enrichment.", "Azure OpenAI embeddings and Azure Cosmos DB Vector Search.", "Hybrid retrieval and metadata filtering.", "GPT-4o grounded responses and conversational memory.", "LLM-as-a-Judge evaluation for relevance, faithfulness, grounding, and hallucination detection.", "FastAPI services, Docker, and Azure deployment."],
    tech: ["Python", "Azure OpenAI", "GPT-4o", "LangChain", "Cosmos DB Vector Search", "FastAPI", "Docker"],
    outcome: "Reduced manual document-search effort by approximately 65%.",
    visual: "rag",
  },
  {
    num: "02",
    title: "Crop Advisory & Research Intelligence Platform",
    category: "Generative AI · Agriculture AI · RAG",
    description: "Developed an AI-powered platform for contextual crop recommendations, pest-management insights, fertilizer guidance, and agricultural research analysis.",
    contributions: ["Ingestion of research papers, field reports, agronomy manuals, and advisory documents.", "Semantic chunking and embeddings.", "RAG using Azure OpenAI GPT-4o.", "Azure Cosmos DB Vector Search and metadata-based retrieval.", "Prompt grounding and conversational memory.", "Automated response evaluation.", "FastAPI REST services and Docker-based Azure deployment."],
    tech: ["Python", "Azure OpenAI", "GPT-4o", "LangChain", "RAG", "Azure Cosmos DB", "FastAPI", "Docker"],
    visual: "search",
  },
  {
    num: "03",
    title: "NLP-Based Agrochemical Compliance & Data Integrity Monitoring",
    category: "NLP · Deep Learning · Regulatory Compliance",
    description: "Designed a machine learning system to identify inconsistencies, compliance risks, and data-quality issues in agrochemical research, laboratory inspection, and regulatory validation reports.",
    contributions: ["Scientific document text preprocessing.", "Tokenization, lemmatization, and sequence preparation.", "LSTM-based compliance classification.", "Compliant versus non-compliant report categorization.", "Feature engineering and hyperparameter optimization.", "Evaluation using precision, recall, F1-score, accuracy, and confusion matrices."],
    tech: ["Python", "TensorFlow", "Keras", "LSTM", "NLP", "Scikit-learn", "Pandas", "NumPy"],
    visual: "compliance",
  },
  {
    num: "04",
    title: "Customer Experience & Product Sentiment Intelligence",
    category: "NLP · Machine Learning · Customer Analytics",
    description: "Developed an AI-powered feedback analytics platform to understand farmer, distributor, and customer feedback about agricultural products, crop solutions, and support services.",
    contributions: ["NLP preprocessing for tickets, emails, surveys, and product reviews.", "TF-IDF and CountVectorizer feature extraction.", "Intent classification for complaints, product queries, service requests, crop issues, and recommendations.", "Random Forest model training and GridSearchCV optimization.", "Evaluation using accuracy, precision, recall, F1-score, and confusion matrices.", "FastAPI endpoints for real-time feedback analysis."],
    tech: ["Python", "NLP", "Scikit-learn", "Random Forest", "TF-IDF", "CountVectorizer", "FastAPI"],
    visual: "sentiment",
  },
  {
    num: "05",
    title: "Crop Yield & Demand Forecasting Platform",
    category: "Machine Learning · Predictive Analytics · Forecasting",
    description: "Built a forecasting platform using historical sales, weather, soil, and regional agricultural data to analyze crop-yield and product-demand trends.",
    contributions: ["Data preprocessing and exploratory data analysis.", "Feature engineering and correlation analysis.", "Linear Regression, Random Forest Regressor, and XGBoost Regressor.", "Hyperparameter tuning and cross-validation.", "Evaluation using RMSE, MAE, MSE, and R-squared.", "Forecasting workflows, REST APIs, and visualization dashboards."],
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Power BI", "FastAPI"],
    visual: "forecast",
  },
];

function Button({ children, href, variant = "primary", onClick }: { children: React.ReactNode; href?: string; variant?: "primary" | "secondary" | "text"; onClick?: () => void }) {
  const className = `button button-${variant}`;
  return href ? <a className={className} href={href} onClick={onClick}>{children}</a> : <button className={className} type="button" onClick={onClick}>{children}</button>;
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return <div className="section-heading">
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {subtitle && <p>{subtitle}</p>}
  </div>;
}

function HeroGraphic() {
  return <div className="hero-graphic" aria-label="Illustrative retrieval augmented generation architecture">
    <div className="graphic-grid" />
    <svg className="network-lines" viewBox="0 0 600 500" aria-hidden="true">
      <defs><linearGradient id="line" x1="0" x2="1"><stop stopColor="#35D6C5" /><stop offset="1" stopColor="#7C5CFC" /></linearGradient></defs>
      <path d="M85 128C165 128 151 245 239 245M85 250h154M85 371c82 0 72-126 154-126M318 245h92M486 245h48" />
      <circle cx="85" cy="128" r="3" /><circle cx="85" cy="250" r="3" /><circle cx="85" cy="371" r="3" /><circle cx="239" cy="245" r="3" /><circle cx="410" cy="245" r="3" /><circle cx="534" cy="245" r="3" />
    </svg>
    <div className="node node-doc n1"><Icon name="document" /><span>Documents</span><small>PDF · DOCX</small></div>
    <div className="node node-doc n2"><Icon name="database" /><span>Knowledge</span><small>Metadata</small></div>
    <div className="node node-doc n3"><Icon name="code" /><span>Chunks</span><small>Semantic</small></div>
    <div className="node node-core"><span className="pulse" /><Icon name="spark" size={24} /><b>Embeddings</b><small>Vector space</small></div>
    <div className="node node-search"><Icon name="database" /><b>Vector search</b><small>Hybrid retrieval</small></div>
    <div className="node node-answer"><Icon name="brain" /><b>Grounded answer</b><small>GPT-4o</small></div>
    <div className="tech-panel"><span>AI STACK</span><div>{["Python", "Azure OpenAI", "LangChain", "LangGraph", "RAG", "FastAPI"].map((x) => <small key={x}>{x}</small>)}</div></div>
  </div>;
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "forecast") return <div className="project-visual chart-visual"><span className="visual-label">FORECAST / SEASONAL DEMAND</span><svg viewBox="0 0 500 170"><path className="area" d="M0 150C55 138 75 75 130 93s78 48 125-10 85-50 115-10 75-16 130-48v145H0Z" /><path className="chart-line" d="M0 150C55 138 75 75 130 93s78 48 125-10 85-50 115-10 75-16 130-48" /></svg><div className="chart-axis"><span>JAN</span><span>APR</span><span>JUL</span><span>OCT</span></div></div>;
  if (type === "sentiment") return <div className="project-visual dashboard-visual"><span className="visual-label">FEEDBACK INTELLIGENCE</span><div className="donut" /><div className="bars">{[72, 48, 84, 60].map((v, i) => <i key={i} style={{ height: `${v}%` }} />)}</div><div className="mini-list"><span>Product query <b>42</b></span><span>Service request <b>28</b></span><span>Crop issue <b>19</b></span></div></div>;
  if (type === "compliance") return <div className="project-visual compliance-visual"><span className="visual-label">ILLUSTRATIVE COMPLIANCE VIEW</span><div className="doc-lines"><i /><i /><i /><i /></div><div className="risk-score"><small>REVIEW FLAG</small><b>Context mismatch</b><span>Requires validation</span></div><div className="metric-row"><span>Precision</span><span>Recall</span><span>F1-score</span></div></div>;
  if (type === "search") return <div className="project-visual search-visual"><span className="visual-label">AGRONOMY KNOWLEDGE SEARCH</span><div className="search-box">How can I manage crop stress?<span>↗</span></div><div className="result-line"><i /><div><b>Field advisory</b><span>Context matched · Research report</span></div></div><div className="result-line"><i /><div><b>Recommended guidance</b><span>Grounded in retrieved sources</span></div></div></div>;
  return <div className="project-visual rag-visual"><span className="visual-label">RAG SYSTEM / DATA FLOW</span><div className="mini-flow">{["DOCS", "CHUNKS", "VECTOR", "LLM", "ANSWER"].map((x, i) => <div key={x}><span>{i === 0 ? <Icon name="document" /> : i === 2 ? <Icon name="database" /> : i === 3 ? <Icon name="brain" /> : <Icon name="code" />}</span><small>{x}</small>{i < 4 && <i />}</div>)}</div><div className="grounded"><Icon name="check" /><span>Grounded response</span><small>Sources verified</small></div></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
  const [resumeNote, setResumeNote] = useState(false);
  const [formState, setFormState] = useState<"idle" | "error" | "ready">("idle");

  const closeMenu = () => setMenuOpen(false);
  const showResumeNote = () => {
    setResumeNote(true);
    window.setTimeout(() => setResumeNote(false), 3500);
  };
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setFormState(form.checkValidity() ? "ready" : "error");
    if (!form.checkValidity()) form.reportValidity();
  };
  const openProject = (index: number) => {
    setSelectedProject(index);
    window.setTimeout(() => document.querySelector("#project-detail")?.scrollIntoView({ behavior: "smooth", block: "center" }), 0);
  };

  return <div className="site-shell">
    <header className="navbar">
      <a className="brand" href="#home" onClick={closeMenu}><span>GV.</span><b>Ghybuvalli</b></a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
        <button className="nav-resume" onClick={showResumeNote}><Icon name="download" size={16} /> Resume</button>
        <a className="nav-connect" href="#contact" onClick={closeMenu}>Let's Connect <Icon name="arrow" size={16} /></a>
      </nav>
      <button className="mobile-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "x" : "menu"} size={22} /></button>
    </header>

    <main>
      <section id="home" className="hero section">
        <div className="hero-copy">
          <span className="eyebrow"><i /> GENERATIVE AI · MACHINE LEARNING · AGENTIC AI</span>
          <h1>Building Intelligent AI Systems That Solve <span>Real-World Problems.</span></h1>
          <p className="hero-lead">I’m Pannekatla Ghybuvalli, a Generative AI & Machine Learning Engineer with 5+ years of experience building enterprise AI solutions, production-grade RAG pipelines, intelligent retrieval systems, AI agents, and machine learning applications.</p>
          <div className="capabilities">
            {["Generative AI & RAG Systems", "Agentic AI & Intelligent Workflows", "Machine Learning & NLP"].map((x) => <span key={x}><Icon name="check" size={15} />{x}</span>)}
          </div>
          <div className="hero-actions">
            <Button href="#projects">Explore My Projects <Icon name="arrow" /></Button>
            <Button variant="secondary" onClick={showResumeNote}><Icon name="download" /> Download Resume</Button>
          </div>
        </div>
        <div className="hero-side">
          <div className="availability"><i /> Open to AI/ML Opportunities</div>
          <HeroGraphic />
        </div>
      </section>

      <section id="about" className="section about">
        <div className="about-intro">
          <SectionHeading eyebrow="ABOUT ME" title="Engineering Intelligence, From Data to Deployment." />
          <div className="about-copy">
            <p>I am a Generative AI & Machine Learning Engineer experienced in designing, developing, and deploying enterprise AI solutions across Generative AI, natural language processing, deep learning, and predictive machine learning.</p>
            <p>My work spans the complete AI lifecycle, including data preparation, document processing, model development, retrieval optimization, LLM evaluation, API development, cloud deployment, monitoring, and continuous improvement.</p>
            <p>I focus on building reliable, scalable, and production-oriented AI systems that transform complex data into actionable insights.</p>
          </div>
        </div>
        <div className="expertise-grid">
          {[
            ["Generative AI", "Developing LLM-powered applications, RAG pipelines, grounded responses, prompt engineering, and conversational AI.", "spark"],
            ["Agentic AI", "Exploring intelligent agents, workflow orchestration, tool integration, and multi-step AI problem-solving.", "brain"],
            ["Machine Learning", "Building classification, regression, forecasting, and deep learning solutions for real-world business problems.", "code"],
            ["Production AI", "Deploying AI applications through REST APIs, Docker, cloud infrastructure, evaluation pipelines, and monitoring.", "database"],
          ].map(([title, body, icon], i) => <article className="expertise-card" key={title}><span className="card-num">0{i + 1}</span><div className="icon-box"><Icon name={icon as IconName} /></div><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section id="skills" className="section skills">
        <SectionHeading eyebrow="CAPABILITIES" title="My Technical Toolkit" subtitle="Technologies and frameworks I use to build end-to-end AI solutions." />
        <div className="skills-grid">
          {skillGroups.map(([group, skills], index) => <article className={`skill-card skill-${index}`} key={group as string}><div className="skill-title"><span>0{index + 1}</span><h3>{group}</h3></div><div className="chips">{(skills as string[]).map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}
        </div>
      </section>

      <section id="projects" className="section projects">
        <SectionHeading eyebrow="SELECTED WORK" title="Selected Projects" subtitle="Enterprise AI and machine learning solutions designed to improve knowledge access, automation, intelligence, and decision-making." />
        <div className="project-grid">
          {projects.map((project, index) => <article className={`project-card project-card-${index}`} key={project.title}>
            <ProjectVisual type={project.visual} />
            <div className="project-content">
              <span className="project-index">PROJECT {project.num}</span>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">{project.tech.slice(0, 5).map((x) => <span key={x}>{x}</span>)}</div>
              <button className="case-link" onClick={() => openProject(index)}>View Case Study <Icon name="arrow" /></button>
            </div>
          </article>)}
        </div>
        <article id="project-detail" className="project-detail">
          <div className="detail-head"><div><span className="eyebrow">PROJECT {projects[selectedProject].num} / CASE STUDY</span><h3>{projects[selectedProject].title}</h3></div><span className="detail-count">{String(selectedProject + 1).padStart(2, "0")}<i />05</span></div>
          <div className="detail-grid">
            <div><h4>Project overview</h4><p>{projects[selectedProject].description}</p>{projects[selectedProject].outcome && <div className="outcome"><Icon name="spark" /><span><small>DOCUMENTED OUTCOME</small>{projects[selectedProject].outcome}</span></div>}</div>
            <div><h4>Key contributions</h4><ul>{projects[selectedProject].contributions.map((x) => <li key={x}><Icon name="check" size={15} />{x}</li>)}</ul></div>
          </div>
          <div className="detail-tech">{projects[selectedProject].tech.map((x) => <span key={x}>{x}</span>)}</div>
        </article>
      </section>

      <section id="architecture" className="section architecture">
        <SectionHeading eyebrow="TECHNICAL DEEP DIVE" title="Inside the RAG Architecture" subtitle="From unstructured agricultural documents to grounded, context-aware answers." />
        <p className="illustrative-note"><span>NOTE</span> This diagram illustrates the documented implementation architecture; visual interface elements are conceptual.</p>
        <div className="pipeline">
          {[
            ["Document Ingestion", "PDF, DOCX, PPT, research reports", "LangChain loaders · Azure Blob Storage", "document"],
            ["Document Processing", "Cleaning, semantic chunking", "Metadata enrichment · Indexing", "code"],
            ["Embedding Generation", "Azure OpenAI embeddings", "Semantic vector representations", "spark"],
            ["Vector Retrieval", "Azure Cosmos DB Vector Search", "Hybrid retrieval · Metadata filters", "database"],
            ["Context Assembly", "Relevant passage retrieval", "Context preparation for the LLM", "document"],
            ["LLM Generation", "Azure OpenAI GPT-4o", "Grounding · Conversational memory", "brain"],
            ["Evaluation", "LLM-as-a-Judge", "Relevance · Faithfulness · Hallucination", "check"],
            ["Deployment", "FastAPI · Docker · Azure", "Scalable REST services", "code"],
          ].map(([title, desc, meta, icon], i) => <article className="pipeline-step" key={title}><div className="step-top"><span>0{i + 1}</span><div className="icon-box"><Icon name={icon as IconName} /></div></div><h3>{title}</h3><p>{desc}</p><small>{meta}</small></article>)}
        </div>
        <div className="challenge-section">
          <div><span className="eyebrow">PROBLEM SOLVING</span><h3>Challenges & Solutions</h3></div>
          <div className="challenge-grid">
            {[
              ["Unstructured documents", "Document processing, semantic chunking, and metadata enrichment."],
              ["Retrieving relevant information", "Embeddings, vector search, hybrid retrieval, and metadata filtering."],
              ["Unsupported LLM answers", "Grounded prompts, retrieved context, and systematic evaluation."],
              ["Production integration", "FastAPI services, Docker containerization, and Azure deployment."],
            ].map(([challenge, solution], i) => <article key={challenge}><span>0{i + 1}</span><small>CHALLENGE</small><h4>{challenge}</h4><i /><small>SOLUTION</small><p>{solution}</p></article>)}
          </div>
        </div>
        <div className="big-outcome"><div><span>~65%</span><p>reduction in manual document-search effort</p></div><small>DOCUMENTED PROJECT OUTCOME</small></div>
      </section>

      <section id="experience" className="section experience">
        <SectionHeading eyebrow="CAREER" title="Professional Experience" />
        <div className="experience-card">
          <div className="experience-line"><i /><span /></div>
          <div className="experience-meta"><span className="date">FEB 2021 — PRESENT</span><div className="icon-box"><Icon name="briefcase" /></div></div>
          <div className="experience-main"><h3>Senior Data Scientist</h3><p className="company">GITS Technocrats Solutions Private Limited</p><p className="location">Bengaluru, India</p><p className="experience-summary">Designed and developed AI and machine learning solutions spanning enterprise RAG systems, agricultural intelligence, NLP-based compliance monitoring, customer sentiment analytics, and predictive forecasting.</p></div>
          <div className="responsibilities"><h4>Core responsibilities</h4>{["End-to-end AI application development", "Generative AI and RAG implementation", "Document ingestion and vector retrieval", "Machine learning and deep learning model development", "LLM evaluation and response-quality improvement", "REST API development using FastAPI", "Docker-based deployment and cloud integration", "Data preprocessing, model evaluation, and continuous optimization"].map((x) => <span key={x}><Icon name="check" size={15} />{x}</span>)}</div>
        </div>
      </section>

      <section id="workflow" className="section workflow">
        <SectionHeading eyebrow="ENGINEERING APPROACH" title="How I Build Production AI Systems" subtitle="A general representation of my engineering approach—adapted to the requirements of each project." />
        <div className="workflow-paths">
          <article className="workflow-card gen-path"><div className="workflow-title"><div className="icon-box"><Icon name="spark" /></div><div><span>PATH 01</span><h3>Generative AI workflow</h3></div></div><div className="path-steps">{["Ingestion", "Chunking", "Embeddings", "Retrieval", "LLM", "Evaluation"].map((x, i) => <div key={x}><span>{i + 1}</span><b>{x}</b>{i < 5 && <i />}</div>)}</div></article>
          <article className="workflow-card ml-path"><div className="workflow-title"><div className="icon-box"><Icon name="code" /></div><div><span>PATH 02</span><h3>Machine learning workflow</h3></div></div><div className="path-steps">{["Data", "Preprocessing", "Features", "Training", "Evaluation", "Deployment"].map((x, i) => <div key={x}><span>{i + 1}</span><b>{x}</b>{i < 5 && <i />}</div>)}</div></article>
        </div>
        <div className="process-list">{["Understand the business problem", "Collect and prepare data", "Process documents and engineer features", "Build embeddings or machine learning models", "Retrieve context or generate predictions", "Develop API and application integration", "Evaluate quality, reliability, and performance", "Deploy, monitor, and optimize"].map((x, i) => <div key={x}><span>{String(i + 1).padStart(2, "0")}</span><p>{x}</p></div>)}</div>
      </section>

      <section id="education" className="section education">
        <SectionHeading eyebrow="FOUNDATION" title="Education" />
        <article className="education-card"><div className="education-icon"><Icon name="graduation" size={28} /></div><div><span>2015</span><h3>Bachelor of Science (Computers)</h3><p>Sai Parameshwara Degree College</p><small>Jammalamadugu, Andhra Pradesh, India</small></div></article>
      </section>

      <section id="contact" className="section contact">
        <div className="contact-copy">
          <span className="eyebrow">LET’S CONNECT</span>
          <h2>Let's Build Something <span>Intelligent.</span></h2>
          <p>I’m interested in opportunities involving Generative AI, RAG systems, Agentic AI, NLP, machine learning, and production AI engineering.</p>
          <div className="contact-list">
            <a href="mailto:valligv0007@gmail.com"><span><Icon name="mail" /></span><div><small>EMAIL</small><b>valligv0007@gmail.com</b></div></a>
            <a href="tel:+918217858579"><span><Icon name="phone" /></span><div><small>PHONE</small><b>+91 8217858579</b></div></a>
            <div><span><Icon name="user" /></span><div><small>LOCATION</small><b>Bengaluru, India</b></div></div>
          </div>
          <Button variant="secondary" onClick={showResumeNote}><Icon name="download" /> Download Resume</Button>
        </div>
        <form className="contact-form" onSubmit={submitForm} noValidate>
          <div className="form-head"><span>START A CONVERSATION</span><i /></div>
          <label>Name<input name="name" required placeholder="Your name" /></label>
          <label>Email<input name="email" type="email" required placeholder="you@company.com" /></label>
          <label>Subject<input name="subject" required placeholder="Opportunity or project inquiry" /></label>
          <label>Message<textarea name="message" required minLength={10} rows={5} placeholder="Tell me a little about the role or project..." /></label>
          <button className="button button-primary submit-button" type="submit">Send Message <Icon name="arrow" /></button>
          <p className={`form-status ${formState}`}>
            {formState === "ready" ? "Prototype ready: connect a form backend to enable delivery." : formState === "error" ? "Please complete all fields with a valid email." : "Prototype form — messages are not currently delivered."}
          </p>
        </form>
      </section>
    </main>

    <footer>
      <div className="footer-brand"><span>GV.</span><div><b>Pannekatla Ghybuvalli</b><p>Generative AI & Machine Learning Engineer.</p></div></div>
      <div className="footer-links">{["About", "Skills", "Projects", "Experience", "Contact"].map((x) => <a key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</div>
      <div className="footer-contact"><a href="mailto:valligv0007@gmail.com">valligv0007@gmail.com</a><div><span title="Add LinkedIn URL">LinkedIn — URL pending</span><span title="Add GitHub URL">GitHub — URL pending</span></div></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Pannekatla Ghybuvalli</span><span>Designed for clarity · Built for impact</span></div>
    </footer>
    {resumeNote && <div className="toast" role="status"><Icon name="download" /><span><b>Resume file not connected</b>Add the resume file to enable download.</span></div>}
  </div>;
}

export default App;
