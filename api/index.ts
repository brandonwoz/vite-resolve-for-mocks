// Our prod API

export const fetchData = async (n) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${n}`);
    const data = await res.json();
    return data;
};
