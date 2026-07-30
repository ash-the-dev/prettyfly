import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 512,
  height: 512,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F45BCF",
          color: "#070707",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "24px solid #070707",
          fontFamily: "system-ui, sans-serif",
          fontSize: 132,
          fontWeight: 900,
        }}
      >
        PF
      </div>
    ),
    size,
  );
}
