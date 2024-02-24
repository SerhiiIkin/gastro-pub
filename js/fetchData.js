export async function fetchData(element) {
    try {
        const response = await fetch(
            `https://gastropub.webexam-mcdm.dk/api/${element}`
        );
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function fetchDataById(id, element) {
    try {
        const response = await fetch(
            `https://gastropub.webexam-mcdm.dk/api/${element}/${id}`
        );
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error(error);
    }
}