/*
  PEARSON HEELS — Datos de catálogo
  ----------------------------------
  Este archivo es el único que necesitas tocar para actualizar tu
  catálogo. No requiere saber programar: solo sigue el mismo patrón
  de las líneas ya existentes. Se usa tanto en la página principal
  (catálogo) como en la ficha de cada producto (producto.html).

  Campos de cada producto:
    id          -> identificador único, no lo repitas (usa minúsculas y guiones).
                   Este id es el que va en el link: producto.html?id=kitten-cherry
    nombre      -> nombre del modelo tal como aparece en tu catálogo
    linea       -> "Kitten", "Dolce", "Flat" o "Mary Jane" (sirve para los filtros)
    precio      -> precio en soles, solo el número
    tacon       -> número de taco (para mostrarlo en la ficha del producto)
    imagenes    -> arreglo con los nombres de archivo de las fotos de este
                   modelo. La primera es la que se ve en el catálogo; todas
                   se muestran en la galería de la ficha del producto.
                   Para agregar una foto nueva: sube la imagen (sin carpeta,
                   junto a las demás) y agrégala a este arreglo.
    disponible  -> true = se puede comprar / false = aparece "Agotado"
    detalles    -> material, forro, plantilla y suela (texto libre)
    tallas      -> arreglo de tallas con su disponibilidad individual.
                   Cambia "disponible" de cada talla a false cuando se agote
                   esa talla específica (no todo el modelo). Este es el punto
                   exacto donde más adelante puedes conectar tu sistema de
                   inventario, reemplazando estos valores fijos por datos que
                   vengan automáticamente desde allá.

  Cuando conectes tu sistema de inventario, este es el archivo que vas a
  reemplazar por datos generados automáticamente (por ejemplo, desde una
  hoja de cálculo o una base de datos). Por ahora, edítalo a mano.
*/

function tallasEstandar() {
  return [
    { talla: 35, disponible: true },
    { talla: 36, disponible: true },
    { talla: 37, disponible: true },
    { talla: 38, disponible: true },
    { talla: 39, disponible: true }
  ];
}

const PRODUCTS = [
  {
    id: "kitten-cherry", nombre: "Kitten Cherry", linea: "Kitten", precio: 119, tacon: 5,
    imagenes: ["kitten-cherry.png", "kitten-cherry-2.png", "kitten-cherry-3.jpg"],
    disponible: true,
    detalles: "Biocuero charol AC · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "kitten-negro", nombre: "Kitten Negro", linea: "Kitten", precio: 119, tacon: 5,
    imagenes: ["kitten-negro.png", "kitten-negro-2.png", "kitten-negro-3.jpg"],
    disponible: true,
    detalles: "Biocuero charol AC · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "dolce-negro-taco-5", nombre: "Dolce Negro Taco 5", linea: "Dolce", precio: 119, tacon: 5,
    imagenes: ["dolce-negro-taco-5.png", "dolce-negro-taco-5-2.png", "dolce-negro-taco-5-3.jpg"],
    disponible: true,
    detalles: "Biocuero de alta calidad · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "dolce-negro", nombre: "Dolce Negro", linea: "Dolce", precio: 119, tacon: 7,
    imagenes: ["dolce-negro.png", "dolce-negro-3.jpg"],
    disponible: true,
    detalles: "Biocuero de alta calidad · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "dolce-nude", nombre: "Dolce Nude", linea: "Dolce", precio: 119, tacon: 7,
    imagenes: ["dolce-nude.png", "dolce-nude-2.png", "dolce-nude-3.jpg"],
    disponible: true,
    detalles: "Biocuero de alta calidad · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "dolce-print", nombre: "Dolce Print", linea: "Dolce", precio: 119, tacon: 7,
    imagenes: ["dolce-print.png", "dolce-print-2.png", "dolce-print-3.jpg"],
    disponible: true,
    detalles: "Biocuero de alta calidad · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "dolce-chocolate", nombre: "Dolce Chocolate", linea: "Dolce", precio: 119, tacon: 7,
    imagenes: ["dolce-chocolate.png", "dolce-chocolate-2.png", "dolce-chocolate-3.jpg"],
    disponible: true,
    detalles: "Biocuero de alta calidad · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "dolce-chocolate-taco-5", nombre: "Dolce Chocolate Taco 5", linea: "Dolce", precio: 119, tacon: 5,
    imagenes: ["dolce-chocolate-taco-5.png", "dolce-chocolate-taco-5-2.png", "dolce-chocolate-taco-5-3.jpg"],
    disponible: true,
    detalles: "Biocuero de alta calidad · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "dolce-hueso", nombre: "Dolce Hueso", linea: "Dolce", precio: 119, tacon: 7,
    imagenes: ["dolce-hueso.png", "dolce-hueso-2.png", "dolce-hueso-3.jpg"],
    disponible: true,
    detalles: "Biocuero de alta calidad · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "dolce-hueso-taco-5", nombre: "Dolce Hueso Taco 5", linea: "Dolce", precio: 119, tacon: 5,
    imagenes: ["dolce-hueso-taco-5.png", "dolce-hueso-taco-5-2.png", "dolce-hueso-taco-5-3.jpg"],
    disponible: true,
    detalles: "Biocuero de alta calidad · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "dolce-rojo-vino", nombre: "Dolce Rojo Vino", linea: "Dolce", precio: 119, tacon: 7,
    imagenes: ["dolce-rojo-vino.png", "dolce-rojo-vino-2.png", "dolce-rojo-vino-3.jpg"],
    disponible: true,
    detalles: "Biocuero de alta calidad · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "dolce-rosa-pastel", nombre: "Dolce Rosa Pastel", linea: "Dolce", precio: 119, tacon: 7,
    imagenes: ["dolce-rosa-pastel.png", "dolce-rosa-pastel-3.jpg"],
    disponible: true,
    detalles: "Biocuero de alta calidad · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "dolce-lazo", nombre: "Dolce Lazo", linea: "Dolce", precio: 119, tacon: 7,
    imagenes: ["dolce-lazo.png", "dolce-lazo-3.jpg"],
    disponible: true,
    detalles: "Biocuero charol AC · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "dolce-cherry", nombre: "Dolce Cherry", linea: "Dolce", precio: 119, tacon: 7,
    imagenes: ["dolce-cherry.png", "dolce-cherry-2.png", "dolce-cherry-3.jpg"],
    disponible: true,
    detalles: "Biocuero charol AC · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "dolce-castano", nombre: "Dolce Castaño", linea: "Dolce", precio: 119, tacon: 7,
    imagenes: ["dolce-castano.png", "dolce-castano-2.png", "dolce-castano-3.jpg"],
    disponible: true,
    detalles: "Biocuero de alta calidad · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "flat-hueso", nombre: "Flat Hueso", linea: "Flat", precio: 109, tacon: 3,
    imagenes: ["flat-hueso.png", "flat-hueso-2.png", "flat-hueso-3.jpg"],
    disponible: true,
    detalles: "Biocuero de alta calidad · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "flat-nude", nombre: "Flat Nude", linea: "Flat", precio: 109, tacon: 3,
    imagenes: ["flat-nude.png", "flat-nude-2.png", "flat-nude-3.jpg"],
    disponible: true,
    detalles: "Biocuero de alta calidad · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "mary-vino", nombre: "Mary Vino", linea: "Mary Jane", precio: 119, tacon: 5,
    imagenes: ["mary-vino.png", "mary-vino-3.jpg"],
    disponible: true,
    detalles: "Biocuero charol AC · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "mary-hueso", nombre: "Mary Hueso", linea: "Mary Jane", precio: 119, tacon: 5,
    imagenes: ["mary-hueso.png", "mary-hueso-3.jpg"],
    disponible: true,
    detalles: "Biocuero de alta calidad · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "mary-beige", nombre: "Mary Beige", linea: "Mary Jane", precio: 119, tacon: 5,
    imagenes: ["mary-beige.png", "mary-beige-2.png", "mary-beige-3.jpg"],
    disponible: true,
    detalles: "Biocuero de alta calidad · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  },
  {
    id: "mary-negro", nombre: "Mary Negro", linea: "Mary Jane", precio: 119, tacon: 5,
    imagenes: ["mary-negro.png", "mary-negro-2.png", "mary-negro-3.jpg"],
    disponible: true,
    detalles: "Biocuero de alta calidad · Forro polibana antitranspirante · Plantilla extra-confort · Suela caucho antideslizante",
    tallas: tallasEstandar()
  }
];

// Número de WhatsApp donde llegan las capturas de pago (formato internacional, sin +)
const WHATSAPP_NUMBER = "51930425659";
