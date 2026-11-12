import { readFile } from "node:fs/promises";
import {
    admis,
    classementParNote,
    effectifParFiliere,
    majNote,
    moyenneGenerale,
    moyenneParFiliere,
    nomsFormates,
} from "./etudiants.js";

const contenu = await readFile(
    new URL("../data/etudiants.json", import.meta.url),
    "utf8",
);
const etudiants = JSON.parse(contenu);

console.log("Moyenne générale :", moyenneGenerale(etudiants));
console.log("Étudiants admis :", admis(etudiants));
console.log("Noms formatés :", nomsFormates(etudiants));
console.log("Effectifs par filière :", effectifParFiliere(etudiants));
console.log("Moyennes par filière :", moyenneParFiliere(etudiants));

const { id: premierId, note: noteOriginale } = etudiants[0];
const classement = classementParNote(etudiants);
console.log("Classement par note :", classement);
console.log(
    `Preuve classement — note avant : ${noteOriginale}, note après : ${etudiants[0].note}, étudiant inchangé : ${etudiants[0].note === noteOriginale}.`,
);

const nouvelleNote = noteOriginale + 1;
const etudiantsModifies = majNote(etudiants, premierId, nouvelleNote);
const etudiantOriginal = etudiants.find(({ id }) => id === premierId);
const etudiantModifie = etudiantsModifies.find(({ id }) => id === premierId);

console.log("Liste après mise à jour :", etudiantsModifies);
console.log(
    `Preuve mise à jour — objet différent : ${etudiantOriginal !== etudiantModifie}, ancienne note conservée : ${etudiantOriginal.note === noteOriginale}, nouvelle note : ${etudiantModifie.note}.`,
);