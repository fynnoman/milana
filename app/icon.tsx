import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#214267",
          color: "#FFFFFF",
          fontFamily: "serif",
          fontSize: 22,
          fontWeight: 500,
          letterSpacing: "-0.03em",
          fontStyle: "italic",
        }}
      >
        M
      </div>
    ),
    size,
  );
}
