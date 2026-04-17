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

export interface Project {
  id: number;
  name: string;
  linearProjectId: string;
  linearUrl: string;
  status: "Planned" | "In Progress" | "Backlog";
  targetDate: string | null;  // "Apr 22" etc.
  color: string;
  prototypeUrl?: string;      // link to interactive prototype on Vercel
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
