const API_URL = "https://sneakers-api-9ysh.onrender.com/sneakers";

export const getSneakers = () => {
  return fetch(API_URL).then((res) => res.json());
};

export const updateLiked = (id, liked) => {
  return fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ liked: !liked }),
  }).then((res) => res.json());
};

export const updateInCart = async (id, inCart) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inCart: !inCart }),
  });
  return await res.json();
};

export const clearCartItems = (item) => {
  return fetch(`${API_URL}/${item.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ inCart: false }),
  });
};
