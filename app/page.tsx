"use client";

import { useState } from "react";
import { PROJECTS, type Project, type SubIssue } from "./data";

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const totalIssues = PROJECTS.reduce((sum, p) => sum + p.issues.length, 0);
  const withPrototype = PROJECTS.reduce((sum, p) => sum + p.issues.filter((i) => i.prototypeUrl).length, 0);

  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 100px" }}>
      {/* Header */}
      <div style={{ marginBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--amber)", fontFamily: "monospace" }}>CASSI</span>
          <span style={{ fontSize: "11px", color: "var(--text-3)" }}>/</span>
          <span style={{ fontSize: "11px", letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--text-3)", fontFamily: "monospace" }}>v1 Engineering Handoff</span>
        </div>
        <h1 style={{ fontSize: "36px", fontWeight: 300, color: "var(--text-1)", margin: "0 0 10px", letterSpacing: "-0.02em" }}>
          Build Specs
        </h1>
        <p style={{ fontSize: "14px", color: "var(--text-3)", lineHeight: 1.6, maxWidth: "600px" }}>
          {PROJECTS.length} projects, {totalIssues} issues, {withPrototype} with prototypes. Click any issue to see the PRD and success criteria.
        </p>
        <p style={{ fontSize: "11px", color: "var(--text-3)", lineHeight: 1.5, marginTop: "8px", fontFamily: "monospace" }}>
          Prototypes live at ux-homeos.vercel.app/proto/[slug]. To link a new prototype, add its URL to the issue in app/data.ts.
        </p>
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
  const total = project.issues.filter((i) => i.status !== "Cancelled").length;
  const protoCount = project.issues.filter((i) => i.prototypeUrl).length;

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
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: project.color, flexShrink: 0 }} />

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "15px", fontWeight: 500, color: "var(--text-1)" }}>{project.name}</span>
            <span style={{ fontSize: "11px", fontFamily: "monospace", color: "var(--text-3)" }}>
              {total} issue{total !== 1 ? "s" : ""}
            </span>
            {protoCount > 0 && (
              <span style={{ fontSize: "10px", fontFamily: "monospace", color: "var(--lilac)", background: "rgba(181,170,238,0.08)", padding: "1px 7px", borderRadius: "3px" }}>
                {protoCount} prototype{protoCount !== 1 ? "s" : ""}
              </span>
            )}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <a href={project.linearUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
            style={{ fontSize: "10px", fontFamily: "monospace", color: "var(--text-3)", textDecoration: "none", padding: "3px 10px", borderRadius: "4px", border: "1px solid var(--border)" }}>
            linear
          </a>
          <span style={{ fontSize: "11px", fontFamily: "monospace", color: "var(--text-3)", minWidth: "50px", textAlign: "right" }}>
            {project.targetDate || "—"}
          </span>
          <span style={{ fontSize: "13px", color: "var(--text-3)", transform: expanded ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.15s ease" }}>▸</span>
        </div>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {/* Context: the WHY */}
          <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid var(--border)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div>
                <span style={sectionLabel("var(--urgent)")}>Problem</span>
                <p style={bodyText}>{project.context.problem}</p>
              </div>
              <div>
                <span style={sectionLabel("var(--success)")}>Hypothesis</span>
                <p style={bodyText}>{project.context.hypothesis}</p>
              </div>
            </div>

            <span style={sectionLabel("var(--amber)")}>Customer Evidence</span>
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

            <div style={{ padding: "10px 14px", background: "rgba(52,199,89,0.04)", border: "1px solid rgba(52,199,89,0.15)", borderRadius: "8px", marginBottom: project.context.researchFlags ? "16px" : "0" }}>
              <span style={sectionLabel("var(--success)")}>Success Signal</span>
              <p style={{ ...bodyText, marginTop: "4px" }}>{project.context.successSignal}</p>
            </div>

            {project.context.researchFlags && project.context.researchFlags.length > 0 && (
              <div>
                <span style={sectionLabel("var(--amber)")}>Research Flags</span>
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
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                {project.issues.map((issue) => (
                  <IssueRow key={issue.id} issue={issue} />
                ))}
              </div>
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

  const statusColors: Record<string, string> = {
    Backlog: "var(--text-3)", Todo: "var(--text-3)", "In Progress": "var(--amber)",
    "In Review": "var(--lilac)", Done: "var(--success)", Cancelled: "var(--text-3)",
  };

  return (
    <div style={{ borderRadius: "8px", border: expanded ? "1px solid var(--border)" : "1px solid transparent", background: expanded ? "rgba(255,255,255,0.02)" : "transparent" }}>
      {/* Issue header row */}
      <div
        onClick={() => hasDetail && setExpanded(!expanded)}
        style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 10px", cursor: hasDetail ? "pointer" : "default", borderRadius: "8px" }}
      >
        {/* Status dot */}
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: statusColors[issue.status] || "var(--text-3)", flexShrink: 0 }} />

        {/* ID */}
        <a href={issue.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
          style={{ fontSize: "11px", fontFamily: "monospace", color: "var(--teal)", textDecoration: "none", minWidth: "55px" }}>
          {issue.id}
        </a>

        {/* Title */}
        <span style={{ fontSize: "13px", color: "var(--text-1)", flex: 1 }}>{issue.title}</span>

        {/* Platform */}
        <span style={{ fontSize: "10px", fontFamily: "monospace", color: "var(--text-3)", flexShrink: 0 }}>{issue.platform}</span>

        {/* Prototype link — prominent */}
        {issue.prototypeUrl ? (
          <a href={issue.prototypeUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
            style={{
              fontSize: "10px", fontFamily: "monospace", color: "var(--lilac)", textDecoration: "none",
              padding: "2px 8px", borderRadius: "4px", border: "1px solid rgba(181,170,238,0.3)",
              background: "rgba(181,170,238,0.06)", flexShrink: 0,
            }}>
            prototype
          </a>
        ) : (
          <span style={{ fontSize: "10px", fontFamily: "monospace", color: "var(--text-3)", opacity: 0.3, minWidth: "65px", textAlign: "center", flexShrink: 0 }}>—</span>
        )}

        {/* Expand arrow */}
        {hasDetail && (
          <span style={{ fontSize: "10px", fontFamily: "monospace", color: "var(--text-3)", transform: expanded ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.12s ease", flexShrink: 0 }}>▸</span>
        )}
      </div>

      {/* Expanded: PRD + Success Criteria + States */}
      {expanded && (
        <div style={{ padding: "4px 10px 14px 30px", borderTop: "1px solid var(--border)" }}>
          {issue.prd && (
            <div style={{ marginTop: "8px", marginBottom: "12px" }}>
              <span style={sectionLabel("var(--text-3)")}>PRD</span>
              <p style={{ ...bodyText, marginTop: "6px" }}>{issue.prd}</p>
            </div>
          )}

          {issue.successCriteria && issue.successCriteria.length > 0 && (
            <div style={{ marginBottom: "12px" }}>
              <span style={sectionLabel("var(--success)")}>Success Criteria</span>
              <div style={{ marginTop: "6px" }}>
                {issue.successCriteria.map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: "8px", padding: "3px 0" }}>
                    <span style={{ width: "14px", height: "14px", borderRadius: "3px", border: "1.5px solid var(--border)", flexShrink: 0, marginTop: "1px" }} />
                    <span style={{ fontSize: "12px", color: "var(--text-2)", lineHeight: 1.5 }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {issue.children && issue.children.length > 0 && (
            <div>
              <span style={sectionLabel("var(--text-3)")}>States</span>
              <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginTop: "6px" }}>
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
        </div>
      )}
    </div>
  );
}

// ── Styles ──────────────────────────────────────────────────────────────────

function sectionLabel(color: string): React.CSSProperties {
  return { fontSize: "9px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", color, display: "block", marginBottom: "2px" };
}

const bodyText: React.CSSProperties = { fontSize: "13px", color: "var(--text-2)", lineHeight: 1.6, margin: 0 };
