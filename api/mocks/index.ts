// Our dev API

export const fetchData = async (n) => {
    const data = {
        title: 'A title from our mock end point',
    };

    return Promise.resolve(data);
};
