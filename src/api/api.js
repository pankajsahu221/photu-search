const baseURL = "https://api.unsplash.com/";
const API_KEY = process.env.API_KEY;
console.log("apikey", API_KEY);

export const getTrendingImages = async () => {
  try {
    const res = await fetch(`${baseURL}/photos?per_page=30`, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });

    const json = await res.json();
    console.log(json);
  } catch (e) {
    console.error("Error in making request!", e);
  }
};
