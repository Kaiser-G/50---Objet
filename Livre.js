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
}
