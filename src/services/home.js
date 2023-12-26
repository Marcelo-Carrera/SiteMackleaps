export const getLatestNews = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/latest_news`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const getProjects = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/latest_projects`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const getResearch = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/latest_research`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
