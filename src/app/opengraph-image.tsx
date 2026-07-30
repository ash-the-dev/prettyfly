import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pretty Fly for a Website";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#070707",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 320,
            height: 320,
            background: "#F45BCF",
            color: "#000000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "12px solid #000000",
            borderRadius: 40,
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
            fontSize: 148,
            fontWeight: 700,
            letterSpacing: "0.02em",
          }}
        >
          PF
        </div>
      </div>
    ),
    size,
  );
}
