import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}, ${site.displayTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const portrait = await readFile(
    join(process.cwd(), "public/thomas-hercule.png"),
  );
  const portraitSrc = `data:image/png;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#F4F1EA",
          color: "#0B2548",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 72,
          gap: 48,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            flex: 1,
          }}
        >
          <div style={{ fontSize: 28, letterSpacing: 6 }}>TH</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 72, lineHeight: 0.9 }}>{site.name}</div>
            <div style={{ fontSize: 26, marginTop: 24 }}>
              {site.displayTitle}
            </div>
          </div>
          <div style={{ width: 96, height: 10, background: "#C1121F" }} />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={portraitSrc}
          width={360}
          height={360}
          alt=""
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    { ...size },
  );
}
