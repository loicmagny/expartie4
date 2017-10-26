/**
* Exercice sur les chaines de caractères.
* Trouvez la façon de faire la plus optimale.
* Il peut y avoir plusieurs façons de faire.
*/
var tailleString = function (texte) {
  tailleString = texte.length;
  return tailleString;
}
var remplaceECar = function (texte) {
  remplaceECar = texte.replace('e', ' ');
  return remplaceECar;
}
var concatString = function (texte1, texte2) {
  concatString = texte1 + texte2;
  return concatString;
}
var afficherCar5 = function (texte) {
  afficherCar5 = texte.charAt(6);
  return afficherCar5;
}
var afficher9Car = function (texte) {
  afficher9Car = texte.substring(0,9);
  return afficher9Car;
}
var majusculeString = function (texte) {
  majusculeString = texte.toUpperCase();
  return majusculeString;
}
var minusculeString = function (texte) {
  minusculeString  = texte.toLowerCase();
  return minusculeString;
}
var SupprEspaceString = function (texte) {
  SupprEspaceString = texte.trim();
  return SupprEspaceString;
}
var IsString = function (texte) {
  if (typeof texte == 'string') {
 return true;
  }
  return IsString;
}
var AfficherExtensionString = function (texte) {
  var regex = /[^.]*$/i;
   var resultats = texte.match(regex);
   return resultats[0];
  return AfficherExtensionString;
}
var NombreEspaceString = function (texte) {
  NombreEspaceString = texte.split(' ').length - 1;
  return NombreEspaceString;
}
var InverseString = function (texte) {
  var result = texte.split('').reverse().join('');
return result;
}

/**
* Exercices sur les nombres et les caluls mathématiques
*/
var calculPuissance = function (x, y) {
  var calculPuissance = Math.pow(x, y);
  return calculPuissance;
}
var valeurAbsolue = function (nombre) {
  valeurAbsolue = Math.abs(nombre);
  return valeurAbsolue;
}
var valeurAbsolueArray = function (array) {
  valeurAbsolueArray = array.map(Math.abs);
  return valeurAbsolueArray;
}
var sufaceCercle = function (rayon) {
  var result = Math.PI * (rayon * rayon);
var result = Math.round(result);
  return result
}
var hypothenuse = function (ab, ac) {
  hypothenuse = Math.sqrt(ab*ab + ac*ac);
  return hypothenuse;
}
var calculIMC = function (poids, taille) {
  imc1 = taille*taille;
  imc2 = poids/imc1;
  imc3 = imc2.toFixed(2);
  return parseFloat(imc3);
}
