const arrondirDeuxDecimales = (valeur) => Number(valeur.toFixed(2));

export function moyenneGenerale(liste) {
    const somme = liste.reduce((total, { note }) => total + note, 0);
    return arrondirDeuxDecimales(somme / liste.length);
}

export function admis(liste) {
    return liste.filter(({ note }) => note >= 10);
}

export function nomsFormates(liste) {
    return liste.map(({ nom, prenom }) => `${nom.toLocaleUpperCase("fr-FR")} ${prenom}`);
}

export function effectifParFiliere(liste) {
    return liste.reduce((effectifs, { filiere }) => {
        effectifs[filiere] = (effectifs[filiere] ?? 0) + 1;
        return effectifs;
    }, {});
}

export function moyenneParFiliere(liste) {
    const totaux = liste.reduce((groupes, { filiere, note }) => {
        const groupe = groupes[filiere] ?? { somme: 0, effectif: 0 };
        groupes[filiere] = {
            somme: groupe.somme + note,
            effectif: groupe.effectif + 1,
        };
        return groupes;
    }, {});

    return Object.fromEntries(
        Object.entries(totaux).map(([filiere, { somme, effectif }]) => [
            filiere,
            arrondirDeuxDecimales(somme / effectif),
        ]),
    );
}

export function classementParNote(liste) {
    return [...liste].sort((a, b) => b.note - a.note);
}

export function majNote(liste, id, note) {
    return liste.map((etudiant) =>
        etudiant.id === id ? { ...etudiant, note } : etudiant,
    );
}