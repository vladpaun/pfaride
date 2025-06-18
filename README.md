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