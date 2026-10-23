import { ImageResponse } from "next/og";

export const alt = "Milana Kollmann · Zahnärztliche Abrechnung";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          background:
            "linear-gradient(135deg, #214267 0%, #17324F 60%, #0f2238 100%)",
          color: "#FFFFFF",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontFamily: "sans-serif",
            fontSize: 20,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          <div style={{ width: 56, height: 1, background: "rgba(255,255,255,0.6)" }} />
          MB Zahnabrechnung
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 118,
              fontStyle: "italic",
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
              color: "rgba(255,255,255,0.95)",
            }}
          >
            Zahnärztliche
          </div>
          <div
            style={{
              fontSize: 118,
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
            }}
          >
            Abrechnung.
          </div>
          <div
            style={{
              marginTop: 36,
              fontSize: 36,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.72)",
              letterSpacing: "-0.01em",
            }}
          >
            Persönlich. Präzise. Zuverlässig.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            fontFamily: "sans-serif",
            fontSize: 20,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <div>Milana Kollmann · Saarland</div>
          <div>mb-zahnabrechnung.de</div>
        </div>
      </div>
    ),
    size,
  );
}
