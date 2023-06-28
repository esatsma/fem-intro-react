const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];
  console.log(animal);
  if (!animal) return [];

  const apiRes = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw new Error(`details/${animal} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchBreedList;