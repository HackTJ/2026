import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirecting to Hanami",
};

export default function JudgingRedirectPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <meta httpEquiv="refresh" content="0; url=http://10.180.8.148" />
      <p className="text-[#fff]">Redirecting to Hanami…</p>
      <p className="text-[#fff]">
        If you are not redirected automatically, go to{" "}
        <a className="text-[#fcb2c3]" href="http://10.180.8.148:80">
          http://10.180.8.148
        </a>
        .
      </p>
    </main>
  );
}
