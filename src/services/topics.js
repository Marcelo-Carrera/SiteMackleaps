export const getNews = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const getProjetos = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const getTeamMembers = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/teamMembers`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const getCollaborators = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/collaborators`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const getFormerCollaborators = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/formerCollaborators`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const getRelatedTexts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/related`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const getResearch = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/research`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const getSystemsPage = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/research`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
