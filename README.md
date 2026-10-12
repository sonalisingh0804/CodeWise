# CodeWise — AI-Powered Software Intelligence Platform

> **Understand any software project in minutes instead of weeks.**

CodeWise is an AI-powered software intelligence platform designed to simplify the process of understanding, analyzing, and documenting complex software projects. It aims to help developers explore unfamiliar codebases, understand dependencies, visualize architecture, and generate useful technical insights through automated code analysis and AI-assisted explanations.

Developed as a two-semester BE Information Technology project.

---

## 📌 Table of Contents

- [Problem Statement](#-problem-statement)
- [Objectives](#-objectives)
- [Key Features](#-key-features)
- [Technology Stack](#️-technology-stack)
- [System Architecture](#️-system-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development Roadmap](#-development-roadmap)
- [Target Users](#-target-users)
- [Future Scope](#-future-scope)
- [Project Information](#-project-information)

---

## 🚩 Problem Statement

Understanding an unfamiliar software project can be difficult and time-consuming, especially when working with large codebases, complex dependencies, legacy code, or incomplete documentation.

Developers often need to manually inspect multiple files to understand program flow, relationships between modules, APIs, and overall architecture.

CodeWise aims to reduce this effort by providing a centralized platform for codebase exploration, automated analysis, documentation assistance, and context-aware code explanations.

## 🎯 Objectives

- Simplify the understanding of unfamiliar software projects.
- Automate source-code analysis and structural extraction.
- Identify relationships and dependencies between project components.
- Support semantic search across source-code files.
- Generate meaningful code explanations and technical documentation.
- Improve developer productivity and reduce codebase onboarding time.

## ✨ Key Features

The following capabilities are planned for CodeWise. Their availability depends on implementation progress.

### 1. Intelligent Codebase Analysis
Analyze source files to extract information about functions, classes, modules, and program structure.

### 2. Semantic Code Search
Retrieve relevant code snippets based on the meaning of a natural-language query rather than relying only on exact keyword matches.

### 3. AI-Powered Code Q&A
Ask questions about a software project and receive context-aware answers grounded in relevant source-code snippets.

### 4. Architecture Visualization
Generate visual representations of application architecture, module relationships, and program workflows.

### 5. Dependency Analysis
Explore dependencies and relationships between files, functions, classes, and other software components.

### 6. Automated Documentation
Assist in generating project descriptions, README files, API documentation, and technical summaries.

### 7. UML and ER Diagram Generation
Support the visualization of class relationships and database structures.

### 8. Code Quality and Security Insights
Identify potential code quality issues, security risks, and performance bottlenecks.

### 9. Project Analysis Reports
Provide structured summaries of analyzed projects and their technical characteristics.

---

## 🛠️ Technology Stack

| Component | Technology |
|---|---|
| Frontend | React.js, Vite |
| UI Styling | CSS, Tailwind CSS (planned/integration-dependent) |
| Backend | Python, FastAPI (planned) |
| Code Parsing | Python AST, Tree-sitter (planned) |
| Embeddings | Sentence Transformers |
| Retrieval | Retrieval-Augmented Generation (RAG) |
| Vector Storage | Vector-store module |
| Vector Database | ChromaDB (planned/integration-dependent) |
| Language Model | Local LLM integration (planned) |
| Version Control | Git, GitHub |

*The stack may evolve as the project develops. Technologies listed as planned are not necessarily integrated into the current prototype.*

---

## 🏗️ System Architecture

CodeWise is designed around the following workflow:

1. **Project Input:** Accept a software project through a ZIP upload or GitHub repository.
2. **Source Extraction:** Extract source files and identify supported programming languages.
3. **Code Parsing:** Analyze the source code and extract structural information.
4. **Chunking:** Divide source files into meaningful code segments.
5. **Embedding Generation:** Convert code segments into vector representations.
6. **Vector Storage:** Store embeddings and associated code metadata.
7. **Semantic Retrieval:** Retrieve relevant code segments based on user queries.
8. **AI Processing:** Use retrieved context to generate explanations and technical insights.
9. **Result Presentation:** Display code explanations, search results, documentation, and analysis reports.

---

## 📂 Project Structure

```text
CodeWise_BE/
│
├── ai-demo/
│   ├── sample_project/
│   │   ├── database.py
│   │   ├── main.py
│   │   └── models.py
│   │
│   ├── embedder.py
│   ├── search.py
│   ├── vector_store.py
│   └── ...
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

*This is an illustrative structure. Update it as the actual repository evolves.*

---

## ⚙️ Getting Started

### Prerequisites

Install the following tools before running the project:

- Git
- Node.js and npm
- Python compatible with the relevant demo dependencies
- Visual Studio Code or another code editor

### 1. Clone the Repository

```bash
git clone https://github.com/sonalisingh0804/CodeWise.git
cd CodeWise
```

### 2. Run the Frontend

Navigate to the frontend directory:

```bash
cd frontend
```

Install the Node.js dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal, typically `http://localhost:5173`.

### 3. Run the Python Demo

Open a separate terminal from the repository root:

```bash
cd ai-demo
```

Create and activate a virtual environment using an installed, compatible Python version.

**Windows PowerShell:**

```powershell
py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1
```

Install the demo dependencies if a `requirements.txt` file is available:

```bash
pip install -r requirements.txt
```

Follow the instructions associated with the demo's current entry point and configuration. The frontend and Python demo may operate independently until backend integration is completed.

---

## 🗺️ Development Roadmap

- [x] Initial code-analysis and semantic-search prototype
- [x] Initial React + Vite frontend setup
- [ ] Refine frontend interface and user experience
- [ ] Integrate frontend with backend APIs
- [ ] Implement software-project upload and extraction
- [ ] Expand code parsing and dependency analysis
- [ ] Integrate retrieval-augmented generation
- [ ] Add context-aware code Q&A
- [ ] Develop architecture and dependency visualizations
- [ ] Generate automated documentation and reports
- [ ] Test the platform on different software projects

*The checked items represent initial setup milestones; adjust them to match the actual state of the code.*

---

## 👥 Target Users

- Software developers working with unfamiliar codebases.
- Students learning software engineering and project architecture.
- Faculty members evaluating academic software projects.
- Startups and small software development teams.
- Freelancers maintaining existing applications.

## 🔮 Future Scope

- Support for additional programming languages and frameworks.
- Analysis of large repositories with multiple modules.
- Interactive architecture and dependency graphs.
- Automated API documentation and UML generation.
- Improved code quality and security analysis.
- Exportable technical reports.
- More accurate context-aware AI assistance.

---

## 📚 Project Information

| Field | Details |
|---|---|
| Project Name | CodeWise |
| Domain | Artificial Intelligence and Software Engineering |
| Project Type | BE Information Technology Project |
| Duration | Two Semesters |
| Repository | [GitHub — CodeWise](https://github.com/sonalisingh0804/CodeWise) |

## 🤝 Collaboration

CodeWise is being developed collaboratively as an academic software engineering project. The team aims to build a practical tool that makes complex codebases easier to explore, understand, and maintain.

---

**CodeWise — Making complex codebases easier to understand.**
