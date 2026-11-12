const API_BASE = "https://dummyjson.com";

function urlApi(chemin, base) {
    return new URL(chemin, `${base.replace(/\/+$/, "")}/`);
}

export async function chargerUtilisateurs(
    limite = 5,
    base = API_BASE,
) {
    try {
        const url = urlApi("/users", base);
        url.searchParams.set("limit", limite);

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`réponse HTTP ${response.status}`);
        }

        const { users } = await response.json();
        return users.map(({ id, firstName, lastName, email }) => ({
            id,
            prenom: firstName,
            nom: lastName,
            email,
        }));
    } catch (error) {
        console.error(
            "Impossible de charger les utilisateurs :",
            error.message,
        );
        return [];
    }
}

export async function chargerUtilisateur(
    id,
    base = API_BASE,
) {
    try {
        const response = await fetch(urlApi(`/users/${id}`, base));

        if (response.status === 404) {
            console.error(`Utilisateur ${id} introuvable (404).`);
            return null;
        }

        if (!response.ok) {
            throw new Error(`réponse HTTP ${response.status}`);
        }

        const { id: identifiant, firstName, lastName, email } =
            await response.json();
        return {
            id: identifiant,
            prenom: firstName,
            nom: lastName,
            email,
        };
    } catch (error) {
        console.error(
            `Impossible de charger l'utilisateur ${id} :`,
            error.message,
        );
        return null;
    }
}