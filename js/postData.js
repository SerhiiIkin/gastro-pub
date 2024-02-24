export async function postData({ dataForm, urlPlace }) {
    try {
        const response = await fetch(
            `https://gastropub.webexam-mcdm.dk/api/${urlPlace}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataForm),
            }
        );
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}
