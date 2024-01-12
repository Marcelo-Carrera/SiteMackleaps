"use client";

export default function Error() {
  return (
    <main
      style={{
        backgroundImage: "url('/erro_bg.png')",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img src="/404.png" alt="404" />
      <p style={{ fontSize: "24px" }}>
        Página buscada indisponível,
        <span style={{ color: "#e66070" }}> tente novamente mais tarde</span>.
      </p>
    </main>
  );
}
