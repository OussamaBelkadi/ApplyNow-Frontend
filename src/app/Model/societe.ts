export class Societe {
    titre: string | undefined;
    phone: string | undefined;
    imageFile: File | null | undefined;
    adress: string | undefined;
    email: string | undefined;
    password: string | undefined;
  
    constructor(data: any = {}) {
      this.titre = data.titre || '';
      this.phone = data.phone || '';
      this.imageFile = data.imageFile || null;
      this.adress = data.adress || '';
      this.email = data.email || '';
      this.password = data.password || '';
    }
  }
  