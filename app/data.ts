// ── Cassi v1 Engineering Handoff — Data ─────────────────────────────────────
// 9 UX projects in target-date order. Each contains sub-issues from Linear.
// This is the single source of truth for the handoff package.

export interface SubIssue {
  id: string;           // e.g. "UX-208"
  title: string;
  platform: string;     // "Desktop/iPad" | "Mobile Admin" | "Mobile PM" | "Mobile" | etc
  status: "Backlog" | "Todo" | "In Progress" | "Done" | "Cancelled";
  url: string;          // Linear link
  children?: { id: string; title: string; label: string }[]; // page states / features
}

export interface CustomerQuote {
  text: string;
  source: string;      // "Neversweat Apr 15" etc.
  person?: string;     // "Michael", "Karli", etc.
}

export interface ProjectContext {
  problem: string;              // What's broken today
  hypothesis: string;           // What we believe will fix it
  evidence: CustomerQuote[];    // Direct quotes from pilot research
  successSignal: string;        // How we know it worked
  researchFlags?: string[];     // Tensions or open questions from research
}

export interface Project {
  id: number;
  name: string;
  linearProjectId: string;
  linearUrl: string;
  status: "Planned" | "In Progress" | "Backlog";
  targetDate: string | null;  // "Apr 22" etc.
  color: string;
  prototypeUrl?: string;      // link to interactive prototype on Vercel
  context: ProjectContext;     // the WHY
  issues: SubIssue[];
}

const PROTO_BASE = "https://ux-homeos.vercel.app";

export const PROJECTS: Project[] = [
  // ── 1. Navigation & Site Structure ────────────────────────
  {
    id: 1,
    name: "Navigation & Site Structure",
    linearProjectId: "1bacdcb5-91e4-4a11-ad4a-9e18746cec13",
    linearUrl: "https://linear.app/cassi/project/navigation-and-site-structure-926546ed3894",
    status: "Planned",
    targetDate: "Apr 22",
    color: "#bec2c8",
    context: {
      problem: "Too many clicks to get anywhere. The beta had deep nesting; the prototype improved this but customers still report friction reaching key views. Calendar buried, tasks require multiple navigations.",
      hypothesis: "A flat navigation with calendar as home and everything else one tap away will match how PMs actually think — schedule first, then drill into specifics.",
      evidence: [
        { text: "Too many clicks to reach the calendar view.", source: "Wellen + Neversweat", person: "Karli / Michael" },
        { text: "I love how simple this is… I could learn this in a couple hours.", source: "Old World", person: "Patrick" },
        { text: "Fewer clicks = better.", source: "Neversweat", person: "Michael" },
      ],
      successSignal: "PM can reach any core view (calendar, tasks, routines, properties, vendors) in 1 tap from any screen.",
    },
    issues: [
      { id: "UX-321", title: "Navigation", platform: "Desktop / iPad", status: "Backlog", url: "https://linear.app/cassi/issue/UX-321" },
      { id: "UX-322", title: "Navigation", platform: "Mobile", status: "Backlog", url: "https://linear.app/cassi/issue/UX-322" },
      { id: "UX-323", title: "Site Structure", platform: "Desktop / iPad", status: "Backlog", url: "https://linear.app/cassi/issue/UX-323" },
    ],
  },

  // ── 2. Calendar & Dashboard ───────────────────────────────
  {
    id: 2,
    name: "Calendar & Dashboard",
    linearProjectId: "bdbd751c-783b-4da8-a36e-9e190782f283",
    linearUrl: "https://linear.app/cassi/project/calendar-and-dashboard-e8b5b8d61eaf",
    status: "Planned",
    targetDate: "Apr 22",
    color: "#eb5757",
    prototypeUrl: `${PROTO_BASE}`,
    context: {
      problem: "PMs juggle schedules across properties, team, and vendors using memory, texts, and disconnected calendars. No single view shows what's happening across the portfolio. Events (contractor meetings) and reminders (flexible to-dos) have no home.",
      hypothesis: "Calendar as the primary interface — not a feature inside the app, but THE app — gives PMs the at-a-glance control they need. Events and reminders fill the gap between hard-scheduled tasks and things that need tracking but aren't work items.",
      evidence: [
        { text: "I loved that calendar. I thought it was great.", source: "Neversweat Apr 13", person: "Michael" },
        { text: "If someone calls for something crazy that has to be done in the next three days, where can we put it in? Right now I either say yes and I don't know if we can, or I say I'll get back to you, go to the computer, look at the big calendar.", source: "Neversweat Apr 15", person: "Michael" },
        { text: "I could just fly through these easily.", source: "Old World", person: "Patrick" },
        { text: "We just run in circles all day long basically.", source: "Wellen Apr 14", person: "Karli" },
      ],
      successSignal: "PM opens the app and immediately knows what's happening today across all properties, team, and vendors — without clicking into anything.",
      researchFlags: [
        "Divergent default view preferences — Old World/Wellen want calendar; Neversweat wants punch list first. Default should be configurable per company.",
        "Offline calendar access — Old World has properties with no connectivity. Architecture decision required before mobile scope is finalized.",
      ],
    },
    issues: [
      { id: "UX-208", title: "Schedule", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-208" },
      { id: "UX-218", title: "Schedule", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-218" },
      { id: "UX-236", title: "Dashboard Notifications", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-236" },
      { id: "UX-237", title: "Dashboard Notifications", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-237" },
      { id: "UX-238", title: "Cassi Insights", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-238" },
      { id: "UX-239", title: "Cassi Insights", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-239" },
      { id: "UX-230", title: "Team Dispatch", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-230" },
      { id: "UX-233", title: "Team Dispatch", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-233" },
      { id: "UX-186", title: "Team Member Schedule", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-186" },
      { id: "UX-193", title: "Team Member Schedule", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-193" },
      { id: "UX-200", title: "Team Utilization Status", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-200" },
      { id: "UX-203", title: "Team Utilization Status", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-203" },
      { id: "UX-206", title: "Time Off Designation", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-206" },
      { id: "UX-164", title: "Create an Event", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-164" },
      { id: "UX-169", title: "Create an Event", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-169" },
      { id: "UX-174", title: "Create a Reminder", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-174" },
      { id: "UX-180", title: "Create a Reminder", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-180" },
    ],
  },

  // ── 3. Properties ─────────────────────────────────────────
  {
    id: 3,
    name: "Properties",
    linearProjectId: "acdb6e04-c82f-4b64-b974-7657c8fd0fac",
    linearUrl: "https://linear.app/cassi/project/properties-6e9326590831",
    status: "Planned",
    targetDate: "Apr 27",
    color: "#5e6ad2",
    context: {
      problem: "Service history per property is critical and currently missing. PMs rely on memory and texts. Different techs visit the same property and don't share notes. Access codes, vendor contacts, and asset info live in disconnected systems (Ignite, notebooks, text threads).",
      hypothesis: "A property profile with structured knowledge base (assets, documents, photos, notes, access info) eliminates the tribal knowledge problem. AI-powered onboarding from uploaded documents means PMs don't re-enter what they already have.",
      evidence: [
        { text: "If we could be like: Jack was on site and fixed this, this, and this, and these were his notes — we can compare.", source: "Wellen Apr 14", person: "Karli" },
        { text: "I would want to get as much information up front so I can set up services because if I'm going to set up their HVAC service, they're going to ask, 'Well, what equipment do they have?'", source: "Wellen Apr 14", person: "Karli" },
        { text: "My guys should not be calling me and saying, 'Who's the vendor at this property?' You should just see it and you should just call them.", source: "Wellen Apr 14", person: "Karli" },
      ],
      successSignal: "A tech arrives at a property and has everything they need (access codes, asset history, vendor contacts, prior notes) without calling the PM.",
      researchFlags: [
        "Assets tab deferred from v1 — but Wellen's HVAC story and Neversweat's asset tracking needs are real. A lightweight asset reference within the task model may need to ship even if full asset management is post-v1.",
        "Bulk property creation deferred — TMS (80 properties) and Neversweat (50–60) cannot onboard at scale without it.",
        "20-property hard cap bug — Neversweat: adding a 21st causes the last to disappear. Blocking adoption.",
      ],
    },
    issues: [
      { id: "UX-34", title: "Property Onboarding — Documentation", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-34",
        children: [
          { id: "UX-41", title: "Success", label: "page state" },
          { id: "UX-42", title: "Missing Fields", label: "page state" },
          { id: "UX-43", title: "Failure to upload", label: "page state" },
        ],
      },
      { id: "UX-35", title: "Property Onboarding — Scratch", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-35",
        children: [
          { id: "UX-36", title: "Success", label: "page state" },
          { id: "UX-37", title: "Missing Fields", label: "page state" },
        ],
      },
      { id: "UX-38", title: "Property Onboarding — Scratch", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-38",
        children: [
          { id: "UX-39", title: "Success", label: "page state" },
          { id: "UX-40", title: "Missing Fields", label: "page state" },
        ],
      },
      { id: "UX-44", title: "Property Onboarding — Review & Activate", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-44",
        children: [
          { id: "UX-45", title: "Success", label: "page state" },
          { id: "UX-46", title: "Error/In-Progress", label: "page state" },
        ],
      },
      { id: "UX-61", title: "Property Onboarding — Review & Activate", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-61",
        children: [
          { id: "UX-62", title: "Success", label: "page state" },
          { id: "UX-63", title: "Error/In-Progress", label: "page state" },
        ],
      },
      { id: "UX-47", title: "Property List", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-47" },
      { id: "UX-51", title: "Property List", platform: "Mobile Admin", status: "Todo", url: "https://linear.app/cassi/issue/UX-51" },
      { id: "UX-55", title: "Property List", platform: "Mobile PM", status: "Todo", url: "https://linear.app/cassi/issue/UX-55" },
      { id: "UX-64", title: "Property Profile — Knowledge Base", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-64" },
      { id: "UX-58", title: "Property Profile — Knowledge Base", platform: "Mobile Admin", status: "Todo", url: "https://linear.app/cassi/issue/UX-58" },
      { id: "UX-69", title: "Property Profile — Knowledge Base", platform: "Mobile PM", status: "Todo", url: "https://linear.app/cassi/issue/UX-69" },
      { id: "UX-72", title: "Property Profile — Manage Assets", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-72" },
      { id: "UX-77", title: "Property Profile — Manage Assets", platform: "Mobile Admin", status: "Todo", url: "https://linear.app/cassi/issue/UX-77" },
      { id: "UX-82", title: "Property Profile — Assets", platform: "Mobile PM", status: "Todo", url: "https://linear.app/cassi/issue/UX-82" },
    ],
  },

  // ── 4. Cassi Chat & Insights ──────────────────────────────
  {
    id: 4,
    name: "Cassi Chat & Insights",
    linearProjectId: "5c88027b-626e-4236-98a7-45654f4906b4",
    linearUrl: "https://linear.app/cassi/project/cassi-chat-and-insights-3a86602f4925",
    status: "Planned",
    targetDate: "Apr 30",
    color: "#26B5CE",
    context: {
      problem: "AI features feel like 'smoke and mirrors' when they show noise instead of actionable signal. PMs want AI that saves them time on real decisions — not a chatbot that summarizes what they already know.",
      hypothesis: "Cassi earns trust by being useful in context: suggesting tasks when you're at a property with downtime, flagging maintenance revenue you're missing, pre-filling work orders from conversation. Intelligence embedded in workflows, not a separate chat screen.",
      evidence: [
        { text: "If you have extra time here are some things that can be done there that aren't scheduled that have to be done now between now and the next three months… kind of a suggestion almost.", source: "Neversweat Apr 15", person: "Michael" },
        { text: "We are losing out for one maintenance of the house revenue and just overall organization.", source: "Wellen Apr 14", person: "Karli" },
        { text: "AI insights panel showing noise rather than actionable signal — 'smoke and mirrors' undermines trust in AI layer.", source: "Old World Apr 15", person: "Patrick" },
      ],
      successSignal: "PM acts on a Cassi suggestion at least once per day without being prompted to open a chat.",
      researchFlags: [
        "AI opportunistic task suggestions confirmed x2 (Neversweat + Wellen independently) — location-aware task suggestions on property arrival is a natural early AI feature.",
        "JC Contracting asked for form-fill alongside AI chat, not to replace it.",
      ],
    },
    issues: [
      { id: "UX-299", title: "Task/Routine Creation Insights", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-299" },
      { id: "UX-301", title: "Task/Routine Creation Insights", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-301" },
      { id: "UX-300", title: "Utilization and Calendar Insights", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-300" },
      { id: "UX-302", title: "Utilization and Calendar Insights", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-302" },
      { id: "UX-303", title: "Cassi Chat", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-303",
        children: [
          { id: "UX-304", title: "Go Deeper Prompts", label: "feature" },
        ],
      },
      { id: "UX-305", title: "Cassi Chat", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-305",
        children: [
          { id: "UX-306", title: "Go Deeper Prompts", label: "feature" },
        ],
      },
    ],
  },

  // ── 5. Tasks & Routines ───────────────────────────────────
  {
    id: 5,
    name: "Tasks & Routines",
    linearProjectId: "ffa0f43a-efe2-498f-960e-154f39fa93fa",
    linearUrl: "https://linear.app/cassi/project/tasks-and-routines-b16bf0e2c6dc",
    status: "Planned",
    targetDate: "May 5",
    color: "#f7c8c1",
    prototypeUrl: `${PROTO_BASE}/proto/task-lifecycle`,
    context: {
      problem: "PMs lack structured task lists — they receive verbal or text instructions. No reliable way to schedule and track recurring maintenance. Tasks require a hard date but field work often has no fixed date. No QA/approval step — work gets marked 'done' with no PM review.",
      hypothesis: "Tasks with a full lifecycle (Open → In Progress → Ready for QA → Completed), configurable rules (photos/notes/invoice required), and flexible scheduling (dated, flexible, recurring) give PMs control without micromanagement. Routines as structured checklists with pass/fail turn tribal knowledge into repeatable processes.",
      evidence: [
        { text: "I write down everything in a notebook which is part of the issue that I have.", source: "Neversweat Apr 15", person: "Michael" },
        { text: "The more stuff you get done, the more you get paid and the more you can take on.", source: "Neversweat Apr 15", person: "Michael" },
        { text: "Any communication is going to go through it and any task — you're not going to text me one thing — anything is going to go through here.", source: "Wellen Apr 14", person: "Karli" },
        { text: "Task status can't be reverted — once a status is changed, can't go back to 'Scheduled.'", source: "Neversweat (bug report)" },
      ],
      successSignal: "PM can create, assign, and track a task end-to-end without leaving a single flow. Field tech can complete a task and log notes on mobile in under 60 seconds.",
      researchFlags: [
        "No subtasks constraint — Neversweat, JC Contracting, and TMS all requested nested task structures. Brief specifies 'only relationship-based task connections.' Must be communicated clearly.",
        "Tasks require a hard date today — no soft/floating capture mode. This is fixed in the prototype (flexible tasks).",
        "Inspection module is a competitive differentiator — JC Contracting reviewer holds a NY State Home Inspector license. If built correctly, covers a workflow Procore does poorly and Monday doesn't support.",
      ],
    },
    issues: [
      { id: "UX-95", title: "Task Creation", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-95" },
      { id: "UX-106", title: "Task Creation", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-106" },
      { id: "UX-117", title: "Task Card", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-117" },
      { id: "UX-124", title: "Task Card", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-124" },
      { id: "UX-85", title: "Task/Routine List — All", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-85" },
      { id: "UX-88", title: "Task/Routine List — All", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-88" },
      { id: "UX-91", title: "Task/Routine List — Assigned", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-91" },
      { id: "UX-92", title: "Task/Routine List — Assigned", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-92" },
      { id: "UX-93", title: "Task/Routine List — Historical", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-93" },
      { id: "UX-131", title: "Routine Creation — Template", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-131" },
      { id: "UX-144", title: "Routine Creation — Scratch", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-144" },
      { id: "UX-155", title: "Routine Card", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-155" },
      { id: "UX-160", title: "Routine Card", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-160" },
    ],
  },

  // ── 6. Reports ────────────────────────────────────────────
  {
    id: 6,
    name: "Reports",
    linearProjectId: "4e357db1-beab-4610-a6a1-0ae2a34cd563",
    linearUrl: "https://linear.app/cassi/project/reports-338e4d4327b1",
    status: "Planned",
    targetDate: "May 5",
    color: "#4cb782",
    context: {
      problem: "PMs need an easy way to create service reports for homeowners but it takes too long manually. Inspection checklists export broken in customer-facing view. No structured report generation from routine results.",
      hypothesis: "AI-generated reports from routine/inspection results — PM reviews, edits, sends — turns a 30-minute writing task into a 3-minute review. Homeowners get professional reports that build trust and justify service fees.",
      evidence: [
        { text: "Inspection checklist — within 2 taps, company-defined checklist, check items off, export PDF to homeowner.", source: "Neversweat Apr 15", person: "Michael" },
        { text: "Checklist export broken — looked correct internally, broken in customer-facing view.", source: "Neversweat (bug report)" },
      ],
      successSignal: "Admin can review, edit, and send a homeowner report in under 3 minutes. AI narrative is usable without editing in 80%+ of cases.",
    },
    issues: [
      { id: "UX-292", title: "Routine Report", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-292",
        children: [
          { id: "UX-293", title: "Success", label: "page state" },
          { id: "UX-294", title: "Error", label: "page state" },
        ],
      },
      { id: "UX-295", title: "Task/Routine List Report", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-295",
        children: [
          { id: "UX-296", title: "Success", label: "page state" },
          { id: "UX-297", title: "Error", label: "page state" },
        ],
      },
    ],
  },

  // ── 7. Team & Vendors ─────────────────────────────────────
  {
    id: 7,
    name: "Team & Vendors",
    linearProjectId: "8a4c4ff9-298d-493a-baf8-b76587803b18",
    linearUrl: "https://linear.app/cassi/project/team-and-vendors-f605474cbeb0",
    status: "Planned",
    targetDate: "May 8",
    color: "#4cb782",
    prototypeUrl: `${PROTO_BASE}/proto/vendor-module`,
    context: {
      problem: "Vendor coordination is entirely ad hoc — contacts and tasks are not connected. Subcontractors won't use a portal; all communication must go outbound from Cassi. Team dispatch exists in the PM's head. No way to see who's available, overbooked, or off.",
      hypothesis: "Vendors as first-class entities with task-driven notifications (Cassi sends, PM approves) eliminates manual email/text coordination. Team dispatch with availability constraints prevents overbooking and makes scheduling decisions visible.",
      evidence: [
        { text: "It'd be interesting to see where this certain vendor is in terms of all the projects.", source: "Neversweat Apr 15", person: "Michael" },
        { text: "Some guys who we use a lot, I would make them get onto it.", source: "Neversweat Apr 15", person: "Michael" },
        { text: "I don't think they have to be associated with the app. I think that could just be like a job where we have to go let them in.", source: "Neversweat Apr 15", person: "Michael" },
        { text: "Big burly guys who don't like phones won't use a PM app.", source: "Neversweat Apr 15", person: "Michael" },
        { text: "The software is 'almost useless' without Gmail integration for his use case.", source: "JC Contracting Apr 8", person: "Bayron" },
      ],
      successSignal: "Admin never has to manually compose an email or text to a vendor. Vendor outbound status gives at-a-glance visibility into who's been notified and who's confirmed.",
      researchFlags: [
        "Vendor access tiers: heavy/recurring = lightweight app user; one-off = job ticket only. V1 covers outbound notification; vendor app access is post-v1.",
        "Subcontractor communication is a distinct workflow — JC Contracting's entire business runs through subs. The request → work order → confirmation loop happens outside Cassi today. This is a hard adoption blocker.",
        "Vendor search unreliable in beta — added vendors take a long time to appear, if at all.",
      ],
    },
    issues: [
      { id: "UX-240", title: "Team List", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-240" },
      { id: "UX-244", title: "Team List", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-244" },
      { id: "UX-248", title: "Add a Team Member", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-248" },
      { id: "UX-251", title: "Team Member Profile", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-251" },
      { id: "UX-255", title: "Team Member Profile", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-255" },
      { id: "UX-261", title: "Vendor List", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-261" },
      { id: "UX-265", title: "Vendor List", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-265" },
      { id: "UX-269", title: "Vendor Profile", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-269" },
      { id: "UX-274", title: "Vendor Profile", platform: "Mobile Admin", status: "Todo", url: "https://linear.app/cassi/issue/UX-274" },
      { id: "UX-279", title: "Vendor Profile", platform: "Mobile PM", status: "Todo", url: "https://linear.app/cassi/issue/UX-279" },
      { id: "UX-283", title: "Add a Vendor", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-283" },
      { id: "UX-288", title: "Add a Vendor", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-288" },
    ],
  },

  // ── 8. Company Onboarding ─────────────────────────────────
  {
    id: 8,
    name: "Company Onboarding",
    linearProjectId: "b5c389c2-edcb-4b3e-a48a-db5c6f1673aa",
    linearUrl: "https://linear.app/cassi/project/company-onboarding-9d58c9d86f76",
    status: "Backlog",
    targetDate: "May 13",
    color: "#bec2c8",
    prototypeUrl: `${PROTO_BASE}/proto/welcome-flow`,
    context: {
      problem: "New companies signing up need to see value immediately. Current onboarding asks too much too soon. PMs are busy — they won't fill forms if they don't see the payoff.",
      hypothesis: "A Cassi-led conversational onboarding (not forms) captures what's needed, builds the first property automatically, and lands the PM on a dashboard that already has structure — not an empty shell.",
      evidence: [
        { text: "I could learn this in a couple hours.", source: "Old World", person: "Patrick" },
      ],
      successSignal: "New company goes from signup to first property onboarded in under 10 minutes.",
      researchFlags: [
        "Company with 1 person (solo PM) — skip team setup step.",
        "No tickets created yet — needs full breakdown before May 13.",
      ],
    },
    issues: [],
  },

  // ── 9. Profile & Settings ─────────────────────────────────
  {
    id: 9,
    name: "Profile & Settings",
    linearProjectId: "ac3654fd-670e-4b97-8c7d-ca0510c645bf",
    linearUrl: "https://linear.app/cassi/project/profile-and-settings-58f5a0a16c23",
    status: "Backlog",
    targetDate: null,
    color: "#bec2c8",
    context: {
      problem: "No permission enforcement — Admin/PM/Field roles defined but not gated. Notification preferences don't exist. Google/Outlook calendar sync is the #1 integration request.",
      hypothesis: "Settings that work means the PM configures once and forgets. Roles that enforce mean field techs only see what they need. Calendar sync eliminates the 'two calendars' problem.",
      evidence: [
        { text: "Google Calendar sync.", source: "Research Synthesis — feature request across multiple customers" },
      ],
      successSignal: "Team management works end-to-end — invite, set role, assign to properties. Settings are persistent across sessions.",
      researchFlags: [
        "Roles & permissions enforcement deferred to post-v1. V1 has the UI but doesn't enforce at API level.",
      ],
    },
    issues: [
      { id: "UX-307", title: "Roles & Permissions", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-307" },
      { id: "UX-314", title: "Roles & Permissions", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-314" },
      { id: "UX-315", title: "Profile", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-315" },
      { id: "UX-316", title: "Profile", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-316" },
      { id: "UX-319", title: "Preferences", platform: "Desktop / iPad", status: "Todo", url: "https://linear.app/cassi/issue/UX-319" },
      { id: "UX-317", title: "Preferences", platform: "Mobile", status: "Todo", url: "https://linear.app/cassi/issue/UX-317" },
    ],
  },
];
