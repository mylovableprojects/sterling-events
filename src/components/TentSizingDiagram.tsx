/**
 * TentSizingDiagram — SVG plan-view (top-down) of 4 tent footprints at true relative scale.
 * Server component — pure SVG, no client JS needed.
 */

const SCALE = 3; // 1 ft = 3 px

const tents = [
  {
    label: "20×20",
    w: 20 * SCALE,   // 60px
    h: 20 * SCALE,   // 60px
    guests: "25–50",
    sqft: "400 sq ft",
    color: "rgba(201,168,76,0.55)",
    // table grid [cols, rows]
    tables: { cols: 2, rows: 2 },
  },
  {
    label: "20×40",
    w: 40 * SCALE,   // 120px
    h: 20 * SCALE,   // 60px
    guests: "50–100",
    sqft: "800 sq ft",
    color: "rgba(201,168,76,0.65)",
    tables: { cols: 3, rows: 2 },
  },
  {
    label: "30×60",
    w: 60 * SCALE,   // 180px
    h: 30 * SCALE,   // 90px
    guests: "100–150",
    sqft: "1,800 sq ft",
    color: "rgba(201,168,76,0.75)",
    tables: { cols: 4, rows: 3 },
  },
  {
    label: "40×80",
    w: 80 * SCALE,   // 240px
    h: 40 * SCALE,   // 120px
    guests: "150–300+",
    sqft: "3,200 sq ft",
    color: "rgba(201,168,76,0.9)",
    tables: { cols: 5, rows: 4 },
  },
];

// Layout: bottom-align all tents, evenly spaced
const GAP = 36;
const LABEL_HEIGHT = 58;
const PADDING_TOP = 32;
const PADDING_SIDE = 32;

// Compute max tent height for baseline alignment
const maxTentH = Math.max(...tents.map((t) => t.h));

// Compute x positions
function computePositions() {
  const positions: number[] = [];
  let x = PADDING_SIDE;
  for (const t of tents) {
    positions.push(x);
    x += t.w + GAP;
  }
  return positions;
}

const xPositions = computePositions();
const totalW = xPositions[xPositions.length - 1] + tents[tents.length - 1].w + PADDING_SIDE;
const totalH = PADDING_TOP + maxTentH + LABEL_HEIGHT;

// Bottom baseline y
const BASELINE = PADDING_TOP + maxTentH;

function TableDots({
  tentX,
  tentY,
  tentW,
  tentH,
  cols,
  rows,
}: {
  tentX: number;
  tentY: number;
  tentW: number;
  tentH: number;
  cols: number;
  rows: number;
}) {
  const dots = [];
  const r = 4; // table radius px
  const colSpacing = tentW / (cols + 1);
  const rowSpacing = tentH / (rows + 1);
  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= cols; col++) {
      const cx = tentX + col * colSpacing;
      const cy = tentY + row * rowSpacing;
      dots.push(
        <circle
          key={`${row}-${col}`}
          cx={cx}
          cy={cy}
          r={r}
          fill="rgba(201,168,76,0.18)"
          stroke="rgba(201,168,76,0.45)"
          strokeWidth={0.75}
        />
      );
    }
  }
  return <>{dots}</>;
}

export function TentSizingDiagram() {
  return (
    <div className="w-full overflow-x-auto rounded-2xl" style={{ backgroundColor: "#0b1f3a", border: "1px solid rgba(201,168,76,0.2)" }}>
      {/* Title row */}
      <div className="px-6 pt-5 pb-3 flex items-center justify-between">
        <p className="text-[0.6rem] uppercase tracking-[0.3em]" style={{ color: "rgba(201,168,76,0.7)" }}>
          Tent Footprint Guide — Top View
        </p>
        <p className="text-[0.55rem] uppercase tracking-[0.2em]" style={{ color: "rgba(245,230,200,0.35)" }}>
          Scale: 1ft = 3px · All sizes shown to true relative scale
        </p>
      </div>

      {/* SVG diagram */}
      <svg
        viewBox={`0 0 ${totalW} ${totalH}`}
        width="100%"
        style={{ display: "block", minWidth: "480px" }}
        aria-label="Tent sizing diagram showing 20x20, 20x40, 30x60, and 40x80 tent footprints to scale"
      >
        {/* Subtle dot grid background */}
        <defs>
          <pattern id="dotgrid" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="rgba(255,255,255,0.04)" />
          </pattern>
          {/* Gold glow filter */}
          <filter id="goldglow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
            <feFlood floodColor="#c9a84c" floodOpacity="0.15" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="shadow" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width={totalW} height={totalH} fill="url(#dotgrid)" />

        {/* Baseline rule */}
        <line
          x1={PADDING_SIDE - 8}
          y1={BASELINE}
          x2={totalW - PADDING_SIDE + 8}
          y2={BASELINE}
          stroke="rgba(201,168,76,0.2)"
          strokeWidth={1}
          strokeDasharray="4 4"
        />

        {tents.map((tent, i) => {
          const x = xPositions[i];
          const y = BASELINE - tent.h;
          const midX = x + tent.w / 2;

          return (
            <g key={tent.label}>
              {/* Tent footprint fill */}
              <rect
                x={x}
                y={y}
                width={tent.w}
                height={tent.h}
                rx={3}
                fill="rgba(201,168,76,0.05)"
                stroke={tent.color}
                strokeWidth={1.5}
                filter="url(#goldglow)"
              />

              {/* Corner tick marks */}
              {[
                [x, y], [x + tent.w, y],
                [x, y + tent.h], [x + tent.w, y + tent.h],
              ].map(([cx, cy], ci) => (
                <g key={ci}>
                  <line
                    x1={cx + (ci % 2 === 0 ? 0 : -5)}
                    y1={cy + (ci < 2 ? 0 : -5)}
                    x2={cx + (ci % 2 === 0 ? 5 : 0)}
                    y2={cy + (ci < 2 ? 5 : 0)}
                    stroke="rgba(201,168,76,0.6)"
                    strokeWidth={1.5}
                  />
                </g>
              ))}

              {/* Table dots */}
              <TableDots
                tentX={x}
                tentY={y}
                tentW={tent.w}
                tentH={tent.h}
                cols={tent.tables.cols}
                rows={tent.tables.rows}
              />

              {/* Width dimension arrow above */}
              <g>
                <line
                  x1={x + 2}
                  y1={y - 10}
                  x2={x + tent.w - 2}
                  y2={y - 10}
                  stroke="rgba(201,168,76,0.45)"
                  strokeWidth={0.75}
                />
                {/* Arrow heads */}
                <polygon
                  points={`${x + 2},${y - 13} ${x + 2},${y - 7} ${x - 2},${y - 10}`}
                  fill="rgba(201,168,76,0.45)"
                />
                <polygon
                  points={`${x + tent.w - 2},${y - 13} ${x + tent.w - 2},${y - 7} ${x + tent.w + 2},${y - 10}`}
                  fill="rgba(201,168,76,0.45)"
                />
              </g>

              {/* Labels below tent */}
              {/* Tent size */}
              <text
                x={midX}
                y={BASELINE + 16}
                textAnchor="middle"
                fontSize={i >= 2 ? 13 : 11}
                fontWeight="600"
                fontFamily="system-ui, sans-serif"
                fill="#c9a84c"
                letterSpacing="0.05em"
              >
                {tent.label}
              </text>
              {/* Sq ft */}
              <text
                x={midX}
                y={BASELINE + 30}
                textAnchor="middle"
                fontSize={9}
                fontFamily="system-ui, sans-serif"
                fill="rgba(245,230,200,0.45)"
                letterSpacing="0.03em"
              >
                {tent.sqft}
              </text>
              {/* Guest count pill */}
              <rect
                x={midX - 26}
                y={BASELINE + 36}
                width={52}
                height={16}
                rx={8}
                fill="rgba(201,168,76,0.12)"
                stroke="rgba(201,168,76,0.3)"
                strokeWidth={0.75}
              />
              <text
                x={midX}
                y={BASELINE + 47}
                textAnchor="middle"
                fontSize={8}
                fontFamily="system-ui, sans-serif"
                fill="rgba(245,230,200,0.75)"
                letterSpacing="0.04em"
              >
                {tent.guests} guests
              </text>
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="flex items-center gap-6 px-6 py-3 border-t" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "rgba(201,168,76,0.18)", border: "0.75px solid rgba(201,168,76,0.45)" }} />
          <span className="text-[0.55rem] uppercase tracking-[0.2em]" style={{ color: "rgba(245,230,200,0.4)" }}>= Round table (approx)</span>
        </div>
        <p className="text-[0.55rem] uppercase tracking-[0.2em]" style={{ color: "rgba(245,230,200,0.3)" }}>
          Footprints shown top-down · Seated dinner layout · Add sq ft for dance floor / stage
        </p>
      </div>
    </div>
  );
}
