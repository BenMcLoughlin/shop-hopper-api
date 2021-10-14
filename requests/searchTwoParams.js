/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const searchTwoParams = async (body) => {
    const url = `/api/searchTwoParams`;
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    const data = await res.json();
    console.log(`SUCCESSFUL SEARCH:`, data.result?.length);

    return data.result;
};

export default searchTwoParams;