# CodeWise – AI-Powered Software Intelligence Platform

**Understand any software project in minutes instead of weeks.**

CodeWise is an AI-powered software intelligence platform designed to simplify the process of understanding, analyzing, and documenting complex software projects. It aims to help developers, students, and software teams understand unfamiliar codebases, explore project structure, identify dependencies, and generate meaningful technical insights.

The platform is being developed as a two-semester BE Information Technology project.

## 🚀 Problem Statement

Understanding a large or unfamiliar software project can be time-consuming due to:
- Complex code structures and dependencies.
- Incomplete or outdated documentation.
- Difficulty identifying relationships between files and modules.
- Challenges in analyzing code quality and understanding program workflows.
- Time-consuming onboarding and maintenance of existing projects.

CodeWise aims to address these challenges by automating codebase analysis and making software architecture easier to understand.

## ✨ Key Features

The following features are planned for the platform:

- **Codebase Analysis:** Analyze source files and extract useful structural information.
- **Project Structure Understanding:** Explore files, modules, classes, and functions.
- **Dependency Analysis:** Understand relationships and dependencies between project components.
- **Architecture Visualization:** Generate visual representations of software architecture and workflows.
- **AI-Powered Code Q&A:** Ask questions about a codebase and receive context-aware answers.
- **Automated Documentation:** Generate project documentation and README content.
- **UML and ER Diagrams:** Support visualization of class relationships and database structures.
- **Code Quality Analysis:** Identify potential code quality issues and improvement opportunities.
- **Security and Performance Insights:** Assist in identifying potential vulnerabilities and performance bottlenecks.
- **Project Reports:** Generate structured reports summarizing codebase analysis.

*Feature availability will depend on implementation progress.*

## 🛠️ Technology Stack

| Component | Technologies |
|---|---|
| Frontend | React.js, Tailwind CSS |
| Backend | Python, FastAPI |
| Code Parsing | Python AST, Tree-sitter |
| AI and Language Models | Local LLM integration / compatible language models |
| Retrieval-Augmented Generation | RAG, embeddings, vector search |
| Vector Database | ChromaDB |
| Database | PostgreSQL |
| Caching | Redis |
| Version Control | Git and GitHub |

*The technology stack is planned and may evolve as development progresses.*

## 🏗️ Project Architecture

The intended workflow is:

1. **Input:** Upload a software project as a ZIP file or provide a GitHub repository.
2. **Parsing:** Extract source files and analyze their structure.
3. **Chunking:** Divide source code into meaningful chunks.
4. **Embedding:** Convert code chunks into vector representations.
5. **Storage:** Store chunks and embeddings for efficient retrieval.
6. **Retrieval:** Retrieve relevant code based on a user's query.
7. **AI Analysis:** Generate explanations and insights using retrieved project context.
8. **Output:** Present code explanations, documentation, dependency information, and other analysis results.

## 📂 Repository Structure

```text
CodeWise_BE/
│
├── ai-demo/
│   ├── sample_project/
│   │   ├── database.py
│   │   ├── main.py
│   │   └── models.py
│   │
│   ├── search.py
│   ├── vector_store.py
│   └── ...
│
└── README.md
```

*The structure above highlights the current demo files; additional files may exist in the repository.*

## ⚙️ Getting Started

### Prerequisites

- Python 3.11 or another version compatible with the project's dependencies.
- Git.
- A code editor such as Visual Studio Code.

### 1. Clone the Repository

```bash
git clone https://github.com/sonalisingh0804/CodeWise.git
cd CodeWise
```

### 2. Navigate to the Demo

```bash
cd ai-demo
```

### 3. Create and Activate a Virtual Environment

**Windows PowerShell:**

```powershell
py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1
```

### 4. Install Dependencies

If a `requirements.txt` file is present in the demo folder:

```bash
pip install -r requirements.txt
```

Otherwise, install the dependencies specified by the individual demo modules.

### 5. Run the Demo

The exact entry point depends on the current implementation. For example, if the demo has a runnable `main.py`, follow its setup instructions and execute:

```bash
python sample_project/main.py
```

*Note: The command above is an example. Database configuration, embedding models, and other dependencies may need to be configured before execution.*

## 🧠 Core Concepts

- **Code Parsing:** Extracts structural information from source code.
- **Embeddings:** Represents code snippets as numerical vectors for semantic search.
- **Vector Search:** Retrieves code snippets relevant to a natural-language query.
- **Retrieval-Augmented Generation (RAG):** Combines relevant retrieved code context with a language model to generate grounded responses.
- **Software Intelligence:** Turns source code and structural information into useful explanations and documentation.

## 🎯 Target Users

- Software developers maintaining existing codebases.
- Students learning from unfamiliar software projects.
- Faculty members reviewing software engineering projects.
- Startups and small development teams.
- Freelancers working with inherited or third-party code.

## 🔮 Future Scope

- Support for multiple programming languages.
- Interactive architecture and dependency graphs.
- Advanced code quality and security analysis.
- Automated API documentation.
- Context-aware codebase chatbot.
- Exportable project analysis reports.
- Improved scalability for large repositories.

## 👥 Project Information

**Project Name:** CodeWise – AI-Powered Software Intelligence Platform

**Domain:** Artificial Intelligence, Software Engineering, and Developer Tools

**Project Type:** BE Information Technology – Two-Semester Project

**Repository:** https://github.com/sonalisingh0804/CodeWise

## 🤝 Contributions

CodeWise is being developed collaboratively. Contributions, suggestions, and feedback that improve code understanding, software analysis, and developer productivity are welcome.

## 📄 License

A license can be added once the project team decides how the source code will be distributed and reused.

---

**CodeWise — Making complex codebases easier to understand.**
