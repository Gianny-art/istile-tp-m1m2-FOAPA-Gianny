# Partie C — Lecture des requêtes HTTP

1. `/users/1` utilise la méthode **GET**. Le code d’état est **200 (OK)** et le type de contenu est **application/json**. Deux champs du JSON reçu : `id` et `firstName`.

2. `/users/99999` renvoie **404 (Not Found)** : l’utilisateur demandé n’existe pas. L’interface doit afficher un message clair indiquant que l’utilisateur est introuvable.

3.
   a. **Côté client** — afficher un message d’erreur sous un champ.
   b. **Côté serveur** — enregistrer une note dans la base de données.
   c. **Côté serveur** — vérifier un mot de passe ; le client ne peut pas assurer cette vérification de manière sécurisée.
   d. **Côté client** — changer la couleur d’un bouton au survol.
   e. **Côté serveur** — vérifier les droits de l’utilisateur avant d’autoriser la modification d’une note.

4.
   - **201 Created** — ressource créée : afficher une confirmation.
   - **401 Unauthorized** — authentification requise ou invalide : inviter l’utilisateur à se connecter.
   - **404 Not Found** — ressource introuvable : afficher un message adapté.
   - **500 Internal Server Error** — erreur du serveur : afficher un message générique et proposer de réessayer plus tard.