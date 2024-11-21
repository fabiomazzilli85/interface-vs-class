// Interfaccia per rappresentare un libro
interface Libro {
    id: number;
    titolo: string;
    autore: string;
    annoPubblicazione: number;
    genere: string;
  }
  
  // Interfaccia per rappresentare un utente della biblioteca
  interface Utente {
    id: number;
    nome: string;
    cognome: string;
    email: string;
    dataIscrizione: Date;
  }
  
  // Interfaccia per rappresentare un prestito di un libro
  interface Prestito {
    id: number;
    libroId: number; // Riferimento all'ID del libro
    utenteId: number; // Riferimento all'ID dell'utente
    dataPrestito: Date;
    dataRestituzione: Date | null; // Null se il libro non è ancora stato restituito
  }

  // Queste interfacce sono collegate tra loro: un Prestito fa riferimento a un Libro e a un Utente tramite i rispettivi ID. Questo approccio aiuta a mantenere il codice organizzato e a ridurre gli errori.

  // Classe per gestire i libri
class GestioneLibri {
    private libri: Libro[] = [];
  
    aggiungiLibro(libro: Libro): void {
      this.libri.push(libro);
    }
  
    rimuoviLibro(id: number): void {
      this.libri = this.libri.filter(libro => libro.id !== id);
    }
  
    trovaLibro(id: number): Libro | undefined {
      return this.libri.find(libro => libro.id === id);
    }
  }
  
  // Classe per gestire gli utenti
  class GestioneUtenti {
    private utenti: Utente[] = [];
  
    aggiungiUtente(utente: Utente): void {
      this.utenti.push(utente);
    }
  
    rimuoviUtente(id: number): void {
      this.utenti = this.utenti.filter(utente => utente.id !== id);
    }
  
    trovaUtente(id: number): Utente | undefined {
      return this.utenti.find(utente => utente.id === id);
    }
  }
  
  // Classe per gestire i prestiti
  class GestionePrestiti {
    private prestiti: Prestito[] = [];
  
    aggiungiPrestito(prestito: Prestito): void {
      this.prestiti.push(prestito);
    }
  
    restituisciLibro(id: number): void {
      const prestito = this.prestiti.find(prestito => prestito.id === id);
      if (prestito) {
        prestito.dataRestituzione = new Date();
      }
    }
  
    trovaPrestito(id: number): Prestito | undefined {
      return this.prestiti.find(prestito => prestito.id === id);
    }
  }

  // Queste classi sono progettate per gestire specificamente i libri, gli utenti e i prestiti, mantenendo il codice modulare e facile da mantenere.