import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      // Simple gradient OG image with title
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(100% 100% at 0% 0%, #22d3ee 0%, #0b0b0b 45%), radial-gradient(100% 100% at 100% 0%, #a78bfa 0%, #0b0b0b 45%), radial-gradient(100% 120% at 50% 100%, #ef4444 0%, #0b0b0b 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            padding: 40,
            borderRadius: 24,
            backgroundColor: "rgba(0,0,0,0.45)",
            color: "white",
            width: 1080,
          }}
        >
          <div style={{ fontSize: 48, opacity: 0.9 }}>Wedding LUTs Master</div>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -1 }}>
            500+ Cinematic LUTs
          </div>
          <div style={{ fontSize: 32, opacity: 0.85 }}>
            Premiere Pro • Lightroom
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
