# pfaride

npm install --legacy-peer-deps

npm run dev


Pt output server: 

in next.config.mjs: 
   // face build-ul să producă automat folderul static „out/”
  output: 'export',

  // opțional: URL-urile vor avea „/” la final ( /pagina/  în loc de  /pagina )
  trailingSlash: true,



  in package.json: 
  "preview": "npx serve out -l 3000",%  


## npm run build este pt a face fisierul out pentru ca in text.config.mjs este output" export;

  LA UPDATE: 

1 — pornești din main curat
bash
Copy
Edit
git switch main      # sau: git checkout main
git pull             # aduce ultimele commit-uri de pe remote
2 — faci un branch nou unde vei importa fișierele
bash
Copy
Edit
git switch -c feature/import-folder
(în VS Code, branch-ul apare jos, în stânga)

3 — copiază folderul extern
Trage-l în Explorer din VS Code sau

cp -R /cale/spre/folderul_nou ./ în terminal

4 — verifică ce s-a schimbat
bash
Copy
Edit
git status
Deschide fișierele modificate în Source Control (iconița ramurii) → vezi diff-ul.

in visual studio deschizi si te duci in sidebar stanga pe ala de git graph si iti apare fiecare fisier ce si cum

git commit -m "import: fișiere din folderul extern" 
asta pe branch se intampla dupa facem merge in main


 git switch main
 1232  git status
 
 1234  git pull
 1235  git git merge --no-ff feature/import-folder\n
 1236  git merge --no-ff feature/import-folder\n

 apoi ca sa cureti
 # 1. Asigură-te că ești pe main (sau altă ramură)
git switch main          # sau: git checkout main

# 2. Șterge branch-ul local
git branch -d feature/import-folder
# dacă NU era complet fuzionat și tot vrei să-l rupi:
# git branch -D feature/import-folder

# 3. Șterge branch-ul de pe remote (GitHub/GitLab) asta daca cumva il aveai si pe remote
git push origin --delete feature/import-folder