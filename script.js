// ===== Année automatique dans le footer =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Menu mobile =====
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Ferme le menu quand on clique un lien
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// ===== Formulaire de commande -> WhatsApp =====
// Remplacez ce numéro par le vôtre, au format international sans "+" ni espaces
// Exemple pour le Cameroun : "2376XXXXXXXX"
const WHATSAPP_NUMBER = "2290191102578";

const orderForm = document.getElementById('orderForm');
const formNote = document.getElementById('formNote');

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nom = document.getElementById('nom').value.trim();
  const tel = document.getElementById('tel').value.trim();
  const produit = document.getElementById('produit').value;
  const adresse = document.getElementById('adresse').value.trim();

  if (!nom || !tel) {
    formNote.textContent = "Merci de renseigner au moins votre nom et votre téléphone.";
    return;
  }

  const message =
    `Bonjour F Tech Design,%0A` +
    `Je m'appelle ${encodeURIComponent(nom)}.%0A` +
    `Je souhaite commander : ${encodeURIComponent(produit)}.%0A` +
    `Adresse de livraison : ${encodeURIComponent(adresse || "à préciser")}.%0A` +
    `Mon numéro : ${encodeURIComponent(tel)}`;

  const whatsappUrl = `https://wa.me/${WhatsApp_NUMBER}?text=${message}`;

  formNote.textContent = "Ouverture de WhatsApp...";
  window.open(whatsappUrl, '_blank');
});
