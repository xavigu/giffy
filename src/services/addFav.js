const ENDPOINT = 'http://localhost:8000'

export default function addFav ({ id, jwt }) {
  return fetch(`${ENDPOINT}/favs/${id}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({jwt})
  })
    .then(res => {
      if (!res.ok) throw new Error('Response is not OK');
      return res.json();
    }).then(res => {
      const { favs } = res;
      return favs;
    })
}