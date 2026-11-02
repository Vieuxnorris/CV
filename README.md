# CV — Julien Wins

CV en ligne de Julien Wins, Data Engineer (batch et streaming sur l'écosystème Cloudera, CI/CD modulaire,
reverse engineering). Publié avec GitHub Pages : <https://vieuxnorris.github.io/CV/>

## Structure

| Fichier | Rôle |
| --- | --- |
| `index.html` | Le CV : une seule page, une colonne, HTML sémantique et données structurées schema.org `Person`. |
| `work.html` | Ancienne page « Projets », redirige vers `index.html#projets` pour ne pas casser les liens existants. |
| `css/styles.css` | Charte : couleurs clair/sombre, typographie, mise en page écran et impression A4. |
| `js/main.js` | Bascule clair/sombre et bouton « Version PDF ». Sans JavaScript, la page reste complète. |
| `fonts/` | IBM Plex Sans et IBM Plex Mono (sous-ensemble latin, woff2), licence SIL OFL 1.1 (`fonts/OFL.txt`). |
| `icones/user.ico` | Favicon. |

Aucune dépendance ni étape de build : les fichiers sont servis tels quels.

## Aperçu local

```sh
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Export PDF

Bouton « Version PDF » (ou `Ctrl+P`) puis « Enregistrer au format PDF ». La feuille d'impression force le
thème clair, le format A4, masque les éléments d'interface et condense les projets en une ligne par groupe.
Nom de fichier conseillé : `CV_Wins_Julien_DataEngineer.pdf`.

## Choix techniques

- **Polices auto-hébergées** : aucune requête vers un service tiers au chargement de la page.
- **Thème** : clair par défaut, sombre selon la préférence système (`prefers-color-scheme`), avec un choix
  manuel mémorisé localement.
- **Accessibilité** : contrastes texte d'au moins 4,5:1 dans les deux thèmes, focus visible, lien d'évitement,
  cibles tactiles de 44 px.
- **Lisibilité par les logiciels de tri** : pas d'icônes, de photos, de barres de niveau ni de tableaux dans le CV.

## Mise à jour

Le contenu se modifie directement dans `index.html`. Les couleurs, espacements et tailles de texte sont des
variables CSS en tête de `css/styles.css`.

GitHub Pages sert tous les fichiers avec un cache navigateur de 10 minutes (`Cache-Control: max-age=600`),
non modifiable. Après une modification de `css/styles.css` ou de `js/main.js`, incrémenter le paramètre
`?v=` de leur lien dans `index.html` (`styles.css?v=2` → `styles.css?v=3`) : l'URL change, le navigateur
télécharge la nouvelle version au lieu de réutiliser l'ancienne avec la nouvelle page.
