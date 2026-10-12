
import { useState } from "react";
import "./App.css";

const initialProjects = [
  { name: "CodeWise Sample Project", language: "Python", files: 4, status: "Demo data" },
  { name: "Authentication Module", language: "Python", files: 2, status: "Demo data" },
];

function App() {
  const [page, setPage] = useState("Overview");
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! This is the CodeWise AI chat preview. Connect the local RAG pipeline to enable real code-based answers."
    }
  ]);
  const [projects, setProjects] = useState(initialProjects);
  const [fileName, setFileName] = useState("");
  
const [analysis, setAnalysis] = useState(null);
const [loadingAnalysis, setLoadingAnalysis] = useState(false);
const [analysisError, setAnalysisError] = useState("");


  function handleDemoUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setProjects((old) => [
      { name: file.name, language: "Pending analysis", files: "—", status: "UI preview only" },
      ...old
    ]);
  }

  function sendMessage(event) {
    event.preventDefault();
    if (!question.trim()) return;

    setMessages((old) => [
      ...old,
      { role: "user", text: question.trim() },
      {
        role: "assistant",
        text: "This is a UI preview. The FastAPI and RAG connection has not been implemented yet."
      }
    ]);
    setQuestion("");
  }
  
async function analyzeSampleProject() {
  setLoadingAnalysis(true);
  setAnalysisError("");

  try {
    const response = await fetch("http://127.0.0.1:8000/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        project_path: "ai-demo/sample_project",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Analysis failed");
    }

    const data = await response.json();
    setAnalysis(data);
  } catch (error) {
    setAnalysisError(
      error.message || "Could not connect to the backend."
    );
  } finally {
    setLoadingAnalysis(false);
  }
}

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">C</div>
          <div>
            <h2>CodeWise</h2>
            <span>Software intelligence</span>
          </div>
        </div>

        <p className="nav-label">WORKSPACE</p>
        {["Overview", "Projects", "Code Analysis", "Dependencies", "AI Assistant"].map((item) => (
          <button
            key={item}
            className={`nav-item ${page === item ? "active" : ""}`}
            onClick={() => setPage(item)}
          >
            <span>{{
              Overview: "◫",
              Projects: "▤",
              "Code Analysis": "⌘",
              Dependencies: "◎",
              "AI Assistant": "✳"
            }[item]}</span>
            {item}
          </button>
        ))}

        <div className="sidebar-bottom">
          <div className="status-dot" />
          <div>
            <strong>Prototype mode</strong>
            <span>Local development</span>
          </div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <span>Workspace / {page}</span>
          <div className="profile">
            <div className="avatar">CW</div>
            <span>Developer</span>
          </div>
        </header>

        <section className="content">
          <div className="welcome-row">
            <div>
              <p className="eyebrow">YOUR SOFTWARE WORKSPACE</p>
              <h1>{page === "Overview" ? "Understand your codebase." : page}</h1>
              <p className="muted">
                Explore project structure, inspect code, and prepare for AI-powered analysis.
              </p>
            </div>
            
<div className="welcome-actions">
  <button
    className="primary-button"
    onClick={analyzeSampleProject}
    disabled={loadingAnalysis}
  >
    {loadingAnalysis ? "Analyzing..." : "Analyze sample project"}
  </button>

  <label className="secondary-button upload-button">
    Select ZIP
    <input
      type="file"
      accept=".zip"
      onChange={handleDemoUpload}
    />
  </label>
</div>

          </div>

          {fileName && (
            <div className="notice">
              Selected: <strong>{fileName}</strong> — visual preview only; the ZIP has not been analyzed.
            </div>
          )}

          
<div className="stats-grid">
  <article className="stat-card">
    <span>Python files</span>
    <strong>{analysis ? analysis.total_files : "—"}</strong>
    <small>{analysis ? "From live analysis" : "Run analysis to load"}</small>
  </article>

  <article className="stat-card">
    <span>Functions</span>
    <strong>{analysis ? analysis.total_functions : "—"}</strong>
    <small>Extracted from Python AST</small>
  </article>

  <article className="stat-card">
    <span>Classes</span>
    <strong>{analysis ? analysis.total_classes : "—"}</strong>
    <small>Extracted from Python AST</small>
  </article>

  <article className="stat-card">
    <span>Imports</span>
    <strong>{analysis ? analysis.total_imports : "—"}</strong>
    <small>Import statements detected</small>
  </article>
</div>

{analysisError && (
  <div className="notice error-notice">
    <strong>Analysis error:</strong> {analysisError}
  </div>
)}

{analysis && (
  <div className="notice">
    Analysis completed for <strong>{analysis.project}</strong>.
    The metrics above came from the FastAPI backend.
  </div>
)}


          <div className="dashboard-grid">
            <section className="panel project-panel">
              <div className="panel-heading">
                <div>
                  <h3>Projects</h3>
                  <p>Codebases in your workspace</p>
                </div>
                <button className="text-button" onClick={() => setPage("Projects")}>
                  View all →
                </button>
              </div>

              {projects.map((project, index) => (
                <div className="project-row" key={`${project.name}-${index}`}>
                  <div className="file-icon">{"</>"}</div>
                  <div className="project-info">
                    <strong>{project.name}</strong>
                    <span>{project.language} · {project.files} files</span>
                  </div>
                  <span className="tag">{project.status}</span>
                </div>
              ))}
              
{analysis && (
  <div className="analyzed-files">
    <h4>Analyzed Python files</h4>

    {analysis.files.map((file) => (
      <div className="analyzed-file-row" key={file.file}>
        <div className="file-icon">{"</>"}</div>

        <div className="project-info">
          <strong>{file.file}</strong>
          <span>
            {file.lines} lines · {file.functions.length} functions ·{" "}
            {file.classes.length} classes
          </span>
        </div>
      </div>
    ))}
  </div>
)}

              <div className="upload-box">
                <div className="upload-symbol">↑</div>
                <strong>Analyze a new codebase</strong>
                <p>Select a ZIP to preview the upload workflow.</p>
                <label className="secondary-button">
                  Choose ZIP file
                  <input type="file" accept=".zip" onChange={handleDemoUpload} />
                </label>
              </div>
            </section>

            <section className="panel assistant-panel">
              <div className="panel-heading">
                <div>
                  <h3>CodeWise Assistant</h3>
                  <p>Code Q&amp;A interface preview</p>
                </div>
                <span className="preview-tag">Preview</span>
              </div>

              <div className="chat-messages">
                {messages.map((message, index) => (
                  <div className={`message ${message.role}`} key={index}>
                    <span>{message.role === "assistant" ? "CW" : "You"}</span>
                    <p>{message.text}</p>
                  </div>
                ))}
              </div>

              <form className="chat-form" onSubmit={sendMessage}>
                <input
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  placeholder="Ask about your code..."
                />
                <button type="submit" aria-label="Send message">↑</button>
              </form>
              <p className="chat-footnote">Real answers will be enabled after RAG integration.</p>
            </section>
          </div>

          <section className="panel roadmap-panel">
            <div className="panel-heading">
              <div>
                <h3>Development milestones</h3>
                <p>Current implementation progress</p>
              </div>
            </div>
            <div className="milestone-grid">
              <div><span className="milestone-done">✓</span><strong>AST parsing</strong><small>Working prototype</small></div>
              <div><span className="milestone-done">✓</span><strong>Vector search</strong><small>8 chunks stored</small></div>
              <div><span className="milestone-next">3</span><strong>FastAPI backend</strong><small>Next development stage</small></div>
              <div><span className="milestone-next">4</span><strong>RAG + UI integration</strong><small>Planned</small></div>
            </div>
          </section>

          <footer>CodeWise · AI-Powered Software Intelligence Platform</footer>
        </section>
      </main>
    </div>
  );
}

export default App;
