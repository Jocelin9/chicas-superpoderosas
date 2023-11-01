self.addEventListener('install', e=>{

    const imagenes = caches.open('CacheImagenes').then(cache=>{
      cache.add('/'),
        cache.add('/img/Actual.jpg'),
        cache.add('/img/Ahora.jpg'),
        cache.add('/img/Al inicio.jpg'),
        cache.add('/img/Al principio.jpg'),
        cache.add('/img/alcalde.jpg'),
        cache.add('/img/bellota.jpg'),
        cache.add('/img/belo.jpg'),
        cache.add('/img/bombon.jpg'),
        cache.add('/img/Boomer.jpg'),
        cache.add('/img/Brick.jpg'),
        cache.add('/img/burbuja.jpg'),
        cache.add('/img/Butch.jpg'),
        cache.add('/img/Control mental.jpg'),
        cache.add('/img/el.jpg'),
        cache.add('/img/En combate.jpg'),
        cache.add('/img/Enamorado.jpg'),
        cache.add('/img/Enojado.jpg'),
        cache.add('/img/Feliz.jpg'),
        cache.add('/img/Femenina.jpg'),
        cache.add('/img/icono.png'),
        cache.add('/img/Impostor bellota.jpg'),
        cache.add('/img/Impostor bombon.jpg'),
        cache.add('/img/Impostor burbuja.jpg'),
        cache.add('/img/keane.png'),
        cache.add('/img/Manipulacion.jpg'),
        cache.add('/img/mojo.jpg'),
        cache.add('/img/Morbucks.jpg'),
        cache.add('/img/Mujer.jpg'),
        cache.add('/img/Niña.jpg'),
        cache.add('/img/Niño.jpg'),
        cache.add('/img/peludito.jpg'),
        cache.add('/img/Pepinillos.jpg'),
        cache.add('/img/princesa.jpg'),
        cache.add('/img/principal.jpg'),
        cache.add('/img/principal2.jpg'),
        cache.add('/img/profesor.jpg'),
        cache.add('/img/Rostro.jpg'),
        cache.add('/img/SuperMalo.jpg'),
        cache.add('/img/Supermono.jpg'),
        cache.add('/img/Supertonto.jpg'),
        cache.add('/img/Telefono.jpg'),
        cache.add('/img/Transformado.jpg'),
        cache.add('/img/Triste.jpg'),
        cache.add('/img/Villana.jpg')
    })
  
    const estilo = caches.open('CacheEstilo').then(cache=>{
      cache.add('/'),
        cache.add('style.css')
    })
  
    const recursos =  caches.open('CacheRecursos').then(cache=>{
      cache.add('/'),
          cache.add('index.html'),
          cache.add('personajes.html'),
          cache.add('personaje_alcalde.html'),
          cache.add('personaje_bellota.html'),
          cache.add('personaje_belo.html'),
          cache.add('personaje_bombon.html'),
          cache.add('personaje_burbuja.html'),
          cache.add('personaje_el.html'),
          cache.add('personaje_keane.html'),
          cache.add('personaje_mojo.html'),
          cache.add('personaje_peludito.html'),
          cache.add('personaje_princesa.html'),
          cache.add('personaje_profesor.html'),
          cache.add('app.js'),
          cache.add('sw.js'),
          cache.add('manifest.json')
       
  })
  e.waitUntil(recursos, imagenes, estilo);
})
 
self.addEventListener('fetch', e=>{
    
//Estrategia 3
   const  respuesta = fetch(e.request).then ((newResp) =>{
    caches.open("CacheImagenes, CacheEstilo, CacheRecursos").then((cache) =>{
      cache.put(e.request, newResp);
    });

    return newResp.clone();
   }).catch(err=>{
    return caches.match(e.request);
   })
   e.respondWith(respuesta);

});
        
          

       