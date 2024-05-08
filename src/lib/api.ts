import { writable } from "svelte/store";

const request = (content: string) => {
    const { subscribe, set, update } = writable("How can I help?");
    const doRequest = async () => {
        try {
            const re = await fetch(
                "https://api.openai.com/v1/chat/completions",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer "env"`,
                    },
                    method: "POST",
                    body: JSON.stringify({
                        model: "gpt-3.5-turbo",
                        messages: [{ role: "assistant", content: content }],
                    }),
                },
            );
            const data = await re.json();
            set(data.choices[0].message.content);
        } catch (err) {
            console.log(err);
        }
    };

    return {
        subscribe,
        doRequest,
    };
};

export default request;
