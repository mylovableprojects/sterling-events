/**
 * TentPermitPathDiagram — SVG showing the two permit paths:
 * Private Property → Chicago Dept of Buildings
 * Public Park / Park District → Chicago Park District
 * Server component — pure SVG, no client JS needed.
 */
export function TentPermitPathDiagram() {
  return (
    <div
      className="w-full overflow-x-auto rounded-2xl"
      style={{ backgroundColor: "#0b1f3a", border: "1px solid rgba(201,168,76,0.2)" }}
    >
      {/* Header */}
      <div className="px-6 pt-5 pb-2 flex items-center justify-between">
        <p className="text-[0.6rem] uppercase tracking-[0.3em]" style={{ color: "rgba(201,168,76,0.7)" }}>
          Chicago Tent Permit Path
        </p>
        <p className="text-[0.55rem] uppercase tracking-[0.2em]" style={{ color: "rgba(245,230,200,0.3)" }}>
          Which agency you apply to depends on your venue
        </p>
      </div>

      <svg
        viewBox="0 0 800 260"
        width="100%"
        style={{ display: "block", minWidth: "460px" }}
        aria-label="Chicago tent permit path diagram showing two routes: private property goes to Chicago Department of Buildings, and public parks go to Chicago Park District"
      >
        <defs>
          <pattern id="permitdots" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.7" fill="rgba(255,255,255,0.035)" />
          </pattern>
          <marker id="arrowgold" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="rgba(201,168,76,0.55)" />
          </marker>
          <marker id="arrowleft" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="rgba(201,168,76,0.45)" />
          </marker>
          <marker id="arrowright" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="rgba(201,168,76,0.45)" />
          </marker>
        </defs>

        <rect width="800" height="260" fill="url(#permitdots)" />

        {/* ── START NODE: Your Event ── */}
        <rect x="300" y="18" width="200" height="52" rx="26"
          fill="rgba(201,168,76,0.12)" stroke="#c9a84c" strokeWidth="1.5" />
        <text x="400" y="40" textAnchor="middle" fontSize="11" fontWeight="700"
          fontFamily="system-ui,sans-serif" fill="#c9a84c" letterSpacing="0.08em">
          YOUR EVENT
        </text>
        <text x="400" y="58" textAnchor="middle" fontSize="9"
          fontFamily="system-ui,sans-serif" fill="rgba(245,230,200,0.55)" letterSpacing="0.04em">
          Chicago or Chicagoland
        </text>

        {/* ── VENUE TYPE QUESTION ── */}
        <text x="400" y="96" textAnchor="middle" fontSize="9"
          fontFamily="system-ui,sans-serif" fill="rgba(245,230,200,0.45)" letterSpacing="0.05em">
          WHERE IS YOUR VENUE?
        </text>

        {/* Down arrow from start */}
        <line x1="400" y1="70" x2="400" y2="88"
          stroke="rgba(201,168,76,0.4)" strokeWidth="1"
          markerEnd="url(#arrowgold)" />

        {/* ── SPLIT LINE ── */}
        {/* Horizontal line splitting left/right */}
        <line x1="160" y1="105" x2="640" y2="105"
          stroke="rgba(201,168,76,0.25)" strokeWidth="1" strokeDasharray="3 3" />

        {/* Left branch label */}
        <text x="230" y="101" textAnchor="middle" fontSize="8"
          fontFamily="system-ui,sans-serif" fill="rgba(201,168,76,0.6)" letterSpacing="0.06em">
          PRIVATE PROPERTY
        </text>
        {/* Right branch label */}
        <text x="570" y="101" textAnchor="middle" fontSize="8"
          fontFamily="system-ui,sans-serif" fill="rgba(201,168,76,0.6)" letterSpacing="0.06em">
          PARK / PUBLIC VENUE
        </text>

        {/* Down-left arrow */}
        <path d="M 400,105 L 220,105 L 220,130"
          fill="none" stroke="rgba(201,168,76,0.4)" strokeWidth="1"
          markerEnd="url(#arrowleft)" />
        {/* Down-right arrow */}
        <path d="M 400,105 L 580,105 L 580,130"
          fill="none" stroke="rgba(201,168,76,0.4)" strokeWidth="1"
          markerEnd="url(#arrowright)" />

        {/* ── LEFT BOX: Backyard / Business / Private Venue ── */}
        <rect x="80" y="130" width="280" height="44" rx="10"
          fill="rgba(255,255,255,0.04)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
        <text x="220" y="148" textAnchor="middle" fontSize="9.5"
          fontFamily="system-ui,sans-serif" fill="rgba(245,230,200,0.8)" letterSpacing="0.03em">
          Backyard · Business lot
        </text>
        <text x="220" y="164" textAnchor="middle" fontSize="9.5"
          fontFamily="system-ui,sans-serif" fill="rgba(245,230,200,0.8)" letterSpacing="0.03em">
          Private venue · Hotel courtyard
        </text>

        {/* ── RIGHT BOX: Park / Forest Preserve ── */}
        <rect x="440" y="130" width="280" height="44" rx="10"
          fill="rgba(255,255,255,0.04)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
        <text x="580" y="148" textAnchor="middle" fontSize="9.5"
          fontFamily="system-ui,sans-serif" fill="rgba(245,230,200,0.8)" letterSpacing="0.03em">
          Chicago Park District site
        </text>
        <text x="580" y="164" textAnchor="middle" fontSize="9.5"
          fontFamily="system-ui,sans-serif" fill="rgba(245,230,200,0.8)" letterSpacing="0.03em">
          Forest Preserve · Public grounds
        </text>

        {/* Down arrows to authority boxes */}
        <line x1="220" y1="174" x2="220" y2="195"
          stroke="rgba(201,168,76,0.4)" strokeWidth="1"
          markerEnd="url(#arrowgold)" />
        <line x1="580" y1="174" x2="580" y2="195"
          stroke="rgba(201,168,76,0.4)" strokeWidth="1"
          markerEnd="url(#arrowgold)" />

        {/* ── LEFT AUTHORITY: Dept of Buildings ── */}
        <rect x="80" y="195" width="280" height="50" rx="10"
          fill="rgba(201,168,76,0.1)" stroke="#c9a84c" strokeWidth="1.5" />
        <text x="220" y="216" textAnchor="middle" fontSize="10" fontWeight="700"
          fontFamily="system-ui,sans-serif" fill="#c9a84c" letterSpacing="0.05em">
          CHICAGO DEPT OF BUILDINGS
        </text>
        <text x="220" y="233" textAnchor="middle" fontSize="8.5"
          fontFamily="system-ui,sans-serif" fill="rgba(245,230,200,0.55)" letterSpacing="0.03em">
          chicago.gov/city/en/depts/bldgs
        </text>

        {/* ── RIGHT AUTHORITY: Park District ── */}
        <rect x="440" y="195" width="280" height="50" rx="10"
          fill="rgba(201,168,76,0.1)" stroke="#c9a84c" strokeWidth="1.5" />
        <text x="580" y="216" textAnchor="middle" fontSize="10" fontWeight="700"
          fontFamily="system-ui,sans-serif" fill="#c9a84c" letterSpacing="0.05em">
          CHICAGO PARK DISTRICT
        </text>
        <text x="580" y="233" textAnchor="middle" fontSize="8.5"
          fontFamily="system-ui,sans-serif" fill="rgba(245,230,200,0.55)" letterSpacing="0.03em">
          chicagoparkdistrict.com/permits
        </text>
      </svg>

      {/* Footer note */}
      <div
        className="px-6 py-3 border-t flex items-center gap-2"
        style={{ borderColor: "rgba(201,168,76,0.1)" }}
      >
        <span style={{ color: "#c9a84c", fontSize: "0.6rem" }}>⚠</span>
        <p className="text-[0.55rem] uppercase tracking-[0.2em]" style={{ color: "rgba(245,230,200,0.35)" }}>
          Permits are the customer's responsibility — Sterling does not pull permits on behalf of clients
        </p>
      </div>
    </div>
  );
}
