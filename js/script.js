//async function cambiarTextura(modeloId, rutaTextura) {
//    const visor = document.getElementById(modeloId);

//    // Verifica si el modelo y sus materiales ya están completamente cargados
//    if (!visor.model || !visor.model.materials[0]) {
//        console.warn("El modelo aún no está listo.");
//        return;
//    }

//    // Selecciona el primer material de tu archivo .glb
//    const material = visor.model.materials[0];

//    try {
//        // Genera la textura en el motor desde tu archivo JPG/PNG
//        const nuevaTextura = await visor.createTexture(rutaTextura);

//        // Aplica la nueva textura al canal de color base
//        material.pbrMetallicRoughness.baseColorTexture.setTexture(nuevaTextura);
//    } catch (error) {
//        console.error("Error al cargar la textura:", error);
//    }
//}