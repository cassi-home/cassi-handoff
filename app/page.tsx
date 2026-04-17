"use client";

import { useState } from "react";
import { PROJECTS, type Project, type SubIssue } from "./data";

const STATUS_DOT: Record<string, string> = {
  Backlog: "var(--text-3)",
  Todo: "var(--text-3)",
  "In Progress": "var(--amber)",
  Done: "var(--success)",
  Cancelled: "var(--text-3)",
};

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<number | null>(2);
  const totalIssues = PROJECTS.reduce((sum, p) => sum + p.issues.length, 0);

  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 100px" }}>
      {/* Header */}
      <div style={{ marginBottom: "40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--amber)", fontFamily: "monospace" }}>CASSI</span>
          <span style={{ fontSize: "11px", color: "var(--text-3)" }}>/</span>
          <span style={{ fontSize: "11px", letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--text-3)", fontFamily: "monospace" }}>v1 Engineering Handoff</span>
        </div>
        <h1 style={{ fontSize: "36px", fontWeight: 300, color: "var(--text-1)", margin: "0 0 10px", letterSpacing: "-0.02em" }}>
          Build Specs
        </h1>
        <p style={{ fontSize: "14px", color: "var(--text-3)", lineHeight: 1.6, maxWidth: "600px" }}>
          {PROJECTS.length} projects, {totalIssues} issues, ordered by target date. Each project links to its Linear board, prototype, and sub-issues with states.
        </p>
      </div>

      {/* Timeline bar */}
      <div style={{ display: "flex", gap: "3px", marginBottom: "32px" }}>
        {PROJECTS.map((p) => (
          <div
            key={p.id}
            onClick={() => setExpandedProject(expandedProject === p.id ? null : p.id)}
            style={{
              flex: p.issues.length || 1,
              height: "4px",
              borderRadius: "2px",
              background: p.color,
              opacity: expandedProject === p.id ? 1 : 0.4,
              cursor: "pointer",
              transition: "opacity 0.15s ease",
            }}
            title={p.name}
          />
        ))}
      </div>

      {/* Project list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            expanded={expandedProject === project.id}
            onToggle={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, expanded, onToggle }: { project: Project; expanded: boolean; onToggle: () => void }) {
  return (
    <div style={{
      border: `1px solid ${expanded ? "rgba(255,255,255,0.12)" : "var(--border)"}`,
      borderRadius: "12px",
      overflow: "hidden",
      transition: "border-color 0.15s ease",
      background: expanded ? "var(--surface)" : "transparent",
    }}>
      {/* Project header */}
      <div onClick={onToggle} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px 20px", cursor: "pointer" }}>
        {/* Color dot */}
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: project.color, flexShrink: 0 }} />

        {/* Name + meta */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "15px", fontWeight: 500, color: "var(--text-1)" }}>{project.name}</span>
            <span style={{ fontSize: "11px", fontFamily: "monospace", color: "var(--text-3)" }}>
              {project.issues.length} issue{project.issues.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          {project.prototypeUrl && (
            <a
              href={project.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                fontSize: "10px", fontFamily: "monospace", color: "var(--lilac)",
                textDecoration: "none", padding: "3px 10px", borderRadius: "4px",
                border: "1px solid rgba(181,170,238,0.25)",
              }}
            >
              prototype
            </a>
          )}
          <a
            href={project.linearUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontSize: "10px", fontFamily: "monospace", color: "var(--text-3)",
              textDecoration: "none", padding: "3px 10px", borderRadius: "4px",
              border: "1px solid var(--border)",
            }}
          >
            linear
          </a>
          {project.targetDate && (
            <span style={{ fontSize: "11px", fontFamily: "monospace", color: "var(--text-3)", minWidth: "50px", textAlign: "right" }}>
              {project.targetDate}
            </span>
          )}
          {!project.targetDate && (
            <span style={{ fontSize: "11px", fontFamily: "monospace", color: "var(--text-3)", minWidth: "50px", textAlign: "right" }}>—</span>
          )}
          <span style={{
            fontSize: "13px", color: "var(--text-3)",
            transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.15s ease",
          }}>
            ▸
          </span>
        </div>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {/* Context: the WHY */}
          <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid var(--border)" }}>
            {/* Problem + Hypothesis */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div>
                <span style={{ fontSize: "9px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--urgent)", display: "block", marginBottom: "6px" }}>Problem</span>
                <p style={{ fontSize: "13px", color: "var(--text-2)", lineHeight: 1.6, margin: 0 }}>{project.context.problem}</p>
              </div>
              <div>
                <span style={{ fontSize: "9px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--success)", display: "block", marginBottom: "6px" }}>Hypothesis</span>
                <p style={{ fontSize: "13px", color: "var(--text-2)", lineHeight: 1.6, margin: 0 }}>{project.context.hypothesis}</p>
              </div>
            </div>

            {/* Customer evidence */}
            <span style={{ fontSize: "9px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--amber)", display: "block", marginBottom: "8px" }}>Customer Evidence</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
              {project.context.evidence.map((q, i) => (
                <div key={i} style={{ padding: "10px 14px", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "8px" }}>
                  <p style={{ fontSize: "13px", color: "var(--text-1)", margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>&ldquo;{q.text}&rdquo;</p>
                  <span style={{ fontSize: "10px", fontFamily: "monospace", color: "var(--text-3)", marginTop: "4px", display: "block" }}>
                    {q.person ? `${q.person} — ` : ""}{q.source}
                  </span>
                </div>
              ))}
            </div>

            {/* Success signal */}
            <div style={{ padding: "10px 14px", background: "rgba(52,199,89,0.04)", border: "1px solid rgba(52,199,89,0.15)", borderRadius: "8px", marginBottom: project.context.researchFlags ? "16px" : "0" }}>
              <span style={{ fontSize: "9px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--success)", display: "block", marginBottom: "4px" }}>Success Signal</span>
              <p style={{ fontSize: "13px", color: "var(--text-2)", margin: 0, lineHeight: 1.5 }}>{project.context.successSignal}</p>
            </div>

            {/* Research flags */}
            {project.context.researchFlags && project.context.researchFlags.length > 0 && (
              <div>
                <span style={{ fontSize: "9px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--amber)", display: "block", marginBottom: "6px" }}>Research Flags</span>
                {project.context.researchFlags.map((flag, i) => (
                  <div key={i} style={{ padding: "8px 12px", background: "rgba(255,149,0,0.04)", border: "1px solid rgba(255,149,0,0.12)", borderRadius: "6px", marginBottom: "4px" }}>
                    <p style={{ fontSize: "12px", color: "var(--text-2)", margin: 0, lineHeight: 1.5 }}>{flag}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sub-issues */}
          <div style={{ padding: "8px 12px 12px" }}>
          {project.issues.length === 0 ? (
            <div style={{ padding: "20px", textAlign: "center" }}>
              <span style={{ fontSize: "13px", color: "var(--text-3)" }}>No tickets yet</span>
            </div>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={thStyle}>Issue</th>
                  <th style={thStyle}>Title</th>
                  <th style={thStyle}>Platform</th>
                  <th style={thStyle}>Status</th>
                  <th style={{ ...thStyle, width: "40px" }}></th>
                </tr>
              </thead>
              <tbody>
                {project.issues.map((issue) => (
                  <IssueRow key={issue.id} issue={issue} />
                ))}
              </tbody>
            </table>
          )}
          </div>
        </div>
      )}
    </div>
  );
}

function IssueRow({ issue }: { issue: SubIssue }) {
  const [expanded, setExpanded] = useState(false);
  const hasDetail = issue.prd || (issue.children && issue.children.length > 0);

  return (
    <>
      <tr
        onClick={() => hasDetail && setExpanded(!expanded)}
        style={{ cursor: hasDetail ? "pointer" : "default" }}
      >
        <td style={tdStyle}>
          <a
            href={issue.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{ fontSize: "11px", fontFamily: "monospace", color: "var(--teal)", textDecoration: "none" }}
          >
            {issue.id}
          </a>
        </td>
        <td style={tdStyle}>
          <span style={{ fontSize: "13px", color: "var(--text-1)" }}>{issue.title}</span>
        </td>
        <td style={tdStyle}>
          <span style={{ fontSize: "11px", fontFamily: "monospace", color: "var(--text-3)" }}>{issue.platform}</span>
        </td>
        <td style={tdStyle}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: STATUS_DOT[issue.status] || "var(--text-3)" }} />
            <span style={{ fontSize: "11px", fontFamily: "monospace", color: "var(--text-3)" }}>{issue.status}</span>
          </span>
        </td>
        <td style={tdStyle}>
          {hasDetail && (
            <span style={{
              fontSize: "10px", fontFamily: "monospace", color: "var(--text-3)",
              transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
              display: "inline-block", transition: "transform 0.12s ease",
            }}>
              ▸
            </span>
          )}
        </td>
      </tr>

      {/* Expanded: PRD + Success Criteria + Children */}
      {expanded && (
        <tr>
          <td colSpan={5} style={{ padding: "0 10px 12px 40px", borderBottom: "1px solid var(--border)" }}>
            {/* PRD */}
            {issue.prd && (
              <div style={{ marginTop: "8px", marginBottom: "12px" }}>
                <span style={{ fontSize: "9px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-3)", display: "block", marginBottom: "6px" }}>PRD</span>
                <p style={{ fontSize: "13px", color: "var(--text-2)", lineHeight: 1.6, margin: 0 }}>{issue.prd}</p>
              </div>
            )}

            {/* Success Criteria */}
            {issue.successCriteria && issue.successCriteria.length > 0 && (
              <div style={{ marginBottom: "12px" }}>
                <span style={{ fontSize: "9px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--success)", display: "block", marginBottom: "6px" }}>Success Criteria</span>
                {issue.successCriteria.map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: "8px", padding: "3px 0" }}>
                    <span style={{ width: "14px", height: "14px", borderRadius: "3px", border: "1.5px solid var(--border)", flexShrink: 0, marginTop: "1px" }} />
                    <span style={{ fontSize: "12px", color: "var(--text-2)", lineHeight: 1.5 }}>{c}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Children (page states) */}
            {issue.children && issue.children.length > 0 && (
              <div>
                <span style={{ fontSize: "9px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-3)", display: "block", marginBottom: "6px" }}>States</span>
                <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                  {issue.children.map((child) => (
                    <span key={child.id} style={{
                      padding: "3px 8px", fontSize: "10px", fontFamily: "monospace",
                      background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                      borderRadius: "4px", color: "var(--text-3)",
                    }}>
                      {child.title}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </td>
        </tr>
      )}
    </>
  );
}

const thStyle: React.CSSProperties = {
  textAlign: "left", padding: "8px 10px", fontSize: "9px", fontFamily: "monospace",
  textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-3)",
  borderBottom: "1px solid var(--border)", fontWeight: 400,
};

const tdStyle: React.CSSProperties = {
  padding: "7px 10px", borderBottom: "1px solid var(--border)", verticalAlign: "middle",
};
