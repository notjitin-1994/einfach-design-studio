import { ImageResponse } from "next/og";

const LOGO_URL =
  "https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media/brand/eds-logo-white.png";

export const alt = "Einfach Design Studio — Architecture & Interior Design";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const res = await fetch(LOGO_URL, { next: { revalidate: 604800 } });
  if (!res.ok) {
    throw new Error(`Failed to load OG logo: ${res.status}`);
  }
  const logoBase64 = Buffer.from(await res.arrayBuffer()).toString("base64");
  const logoSrc = `data:image/png;base64,${logoBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle accent glow */}
        <div
          style={{
            position: "absolute",
            top: "-40%",
            right: "-20%",
            width: "700px",
            height: "700px",
            borderRadius: "9999px",
            background: "radial-gradient(circle, rgba(153,0,0,0.18) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <img src={logoSrc} alt="" width={48} height={48} />
          <span
            style={{
              fontSize: "24px",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "#e9e0c9",
            }}
          >
            Einfach
          </span>
        </div>

        {/* Main copy */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "900px" }}>
          <h1
            style={{
              fontSize: "72px",
              lineHeight: 1.05,
              fontWeight: 300,
              letterSpacing: "-0.03em",
              color: "#e9e0c9",
              margin: 0,
            }}
          >
            Design with{" "}
            <span style={{ fontStyle: "italic", color: "#990000" }}>clarity.</span>
          </h1>
          <p
            style={{
              fontSize: "28px",
              lineHeight: 1.45,
              fontWeight: 400,
              color: "rgba(233,224,201,0.78)",
              margin: 0,
              maxWidth: "780px",
            }}
          >
            Architecture and interiors designed around people — confident decisions before construction begins.
          </p>
        </div>

        {/* Footer strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(233,224,201,0.14)",
            paddingTop: "32px",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(233,224,201,0.55)",
            }}
          >
            Architecture & Interiors
          </span>
          <span
            style={{
              fontSize: "16px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(233,224,201,0.55)",
            }}
          >
            UAE & India
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
