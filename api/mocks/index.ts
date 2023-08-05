// a mock API to be used when we are developing our application
export const fetchData = async (n) => {
    const data = {
        title: 'A title from our mock end point',
    };

    return Promise.resolve(data);
};
