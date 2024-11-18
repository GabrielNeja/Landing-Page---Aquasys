export async function sendEmail(toEmail: string, content: string): Promise<void> {
    try {
        const response = await fetch('/api/function-2', { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                to_email: toEmail,
                content: content,
            })
        });

        if (!response.ok) {
            const result = await response.json();
            throw new Error(`Erro ao enviar o e-mail: ${result.error || response.statusText}`);
        }

        console.log("E-mail enviado com sucesso!");
    } catch (error) {
        console.error("Erro ao enviar a requisição:", error);
        throw error;
    }
}
