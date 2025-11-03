import React from 'react';

const Resume = () => (
  <div className="section">
    <div className="container">
      <h2 className="section-title">Internships</h2>
      
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">Jun 2025 - Aug 2025</div>
          <div className="timeline-title">Software Engineer Intern | Cisco ThousandEyes</div>
          <div className="timeline-subtitle">San Francisco, CA</div>
          <div className="timeline-content">
            <ul>
              <li>Modernized old <strong>Angular</strong> codebase to <strong>Vue</strong>, utilizing <strong>TypeScript</strong>, <strong>Pinia</strong> for state management, <strong>VueQuery</strong> for API data fetching and caching, and <strong>Vite</strong> for fast tooling, while integrating backend services, enabling component coupling and improving code readability</li>
              <li>Architected a <strong>BFF</strong> (Backend for Frontend) layer using <strong>NestJS</strong> and <strong>GraphQL</strong> to optimize core backend API services, implementing authentication for seamless integration and improved backend service integration and type safety and streamlined backend services integration</li>
              <li>Actively engaged in a <strong>Scrum Agile</strong> framework, participated in daily standups, <strong>sprint planning</strong> and velocity and workflow coordination and codebase discussions using <strong>GitHub</strong>, contributing to a 100% on-time feature delivery of <strong>CI/CD</strong> optimized deployment</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">May 2024 - Aug 2024</div>
          <div className="timeline-title">MLOps Intern | Oxmiq Labs</div>
          <div className="timeline-subtitle">Campbell, CA</div>
          <div className="timeline-content">
            <ul>
              <li>Spearheaded the end-to-end design and implementation of a scalable workflow to run and test all <strong>Large Language Models (LLM)</strong> with a single codebase using <strong>Python</strong> and <strong>LangChain</strong>, enabling unified model management across diverse AI architectures</li>
              <li>Deployed 15 models, including <strong>GPT-2</strong> and <strong>Llama</strong> from <strong>Hugging Face</strong>, by creating <strong>Poetry</strong> files for dependency management and optimizing model loading, reducing manual deployment steps from 12 to 3 in seconds and enabling scalability and reliability through auto-scaling <strong>CI/CD</strong> workflows</li>
              <li>Streamlined <strong>CI/CD</strong> workflows by writing comprehensive documentation to optimize deployment processes, configuring <strong>Terraform</strong>, <strong>GitHub CI/CD</strong> pipelines, and <strong>Azure</strong> deployment, reducing manual deployment steps from 12 to 3 and improving testing efficiency by 5x, then Monitored cloud infrastructure and <strong>Kubernetes</strong> performance with <strong>Prometheus</strong> and <strong>Grafana</strong>, resolving 8 model version conflicts, and presented the project to company CEO, receiving positive recognition for impactful contributions</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">Jul 2023 - Aug 2023</div>
          <div className="timeline-title">Software Engineer Intern | Alibaba Cloud</div>
          <div className="timeline-subtitle">Nanjing, China</div>
          <div className="timeline-content">
            <ul>
              <li>Designed and developed a real-time shuttle bus tracking web application using <strong>React</strong> for the frontend, <strong>Django</strong> for backend services, and <strong>WebSocket</strong> for bi-directional communications, effectively addressing company workers&apos; commuting needs with real-time updates</li>
              <li>Optimized backend performance by implementing advanced geospatial search with <strong>Redis</strong> caching and <strong>PostgreSQL</strong>, streamlining schema normalization, handling data processing with 50+ queries per second and decreasing query latency by 20%</li>
              <li>Deployed the platform on <strong>Alibaba Cloud</strong> with containerized services using <strong>Docker</strong> and <strong>Kubernetes</strong>, leveraging auto-scaling and load balancing to improve server efficiency, ensure 99.99% availability, and save 10k USD operational cost per month</li>
              <li>Integrated with Alibaba&apos;s <strong>Qwen LLM</strong> to build an AI-powered agent, utilizing <strong>Natural Language Processing (NLP)</strong> to enable real-time assistance for route inquiries, handling 500+ user conversations daily</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Resume;
