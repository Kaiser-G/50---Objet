class livre {
  #code = "NC";
  #titre = "NC";
  #auteur = "NC";
  #nbPages = "NC";
  #theme = "NC";

  // Getter et Setter : Les ACCESSEURS

  get Code() {
    return this.#code;
  }

  set Code(value) {
    this.#code = value;
  }

  get Titre() {
    return this.#titre;
  }

  set Titre(value) {
    if (value.length <= 5) {
      alert("Le titre doit contenir au moins 5 caractères");
      throw new Error("Erreur le titre est trop court");
    }
    this.#titre = value;
  }

  get Auteur() {
    return this.#auteur;
  }
  set Auteur(value) {
    this.#auteur = value;
  }

  get Page() {
    return this.#nbPages;
  }
  set Page(value) {
    if (value > 0) {
      this.#nbPages = value;
    }
    alert("Le nombres de pages doit être supérieur à 0");
    throw new Error("Erreur le nombre de page est trop court");
  }

  get Theme() {
    return this.#theme;
  }
  set Theme(value) {
    if (
      (value = "Policier") ||
      (value = "Bd") ||
      (value = "SF") ||
      (value = "Autre")
    ) {
      this.#theme = value;
    }
    alert("Le thème est inconnu");
    throw new Error("Erreur le thème n'est pas reconnu");
  }

  constructor(
    code = "NC",
    titre = "NC",
    auteur = "NC",
    page = "NC",
    theme = "NC"
  ) {
    this.Code = code;
    this.Titre = titre;
    this.Auteur = auteur;
    this.Page = page;
    this.Theme = theme;
  }

  Afficher = function () {
    return (
      "Code ISBN : " +
      this.Code +
      "Titre : " +
      this.Titre +
      "Auteur : " +
      this.Auteur +
      "Nombre de pages : " +
      this.Page +
      "Le thème : " +
      this.Theme
    );
  };
}

//fonction qui récupère la saisi
function recup_saisi() {
  let resultat = new livre(
    document.getElementById("code").value,
    document.getElementById("titre").value,
    document.getElementById("auteur").value,
    document.getElementById("Nbp").value,
    document.getElementById("theme").value
  );
  alert("Récap de saisi : " + resultat.Afficher());
  return resultat;
}

//création du tableau
function afficherListeLivre(tabLivre) {
  let zoneAffiche = document.getElementById("liste");
  if (tabLivre.length === 0) {
    alert("la ligne est vide");
  } else {
    let tableau =
      "<table border = '2px'><tr><th>Code ISBN</th><th>Titre</th><th>Auteur</th><th>Nb de pages</th><th>Thème</th></tr>";
  }
}
