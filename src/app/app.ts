import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Interfaces für Typisierung
interface Material {
  id: number;
  name: string;
  category: string;
}

interface MaterialRequest {
  id: number;
  requesterName: string;
  email: string;
  department: string;
  priority: string;
  materials: Material[];
  status: string;
  date: Date;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'THW Materialanforderung';

  // Vordefinierte Materialien für das THW
  availableMaterials: Material[] = [
    { id: 1, name: 'Stromerzeuger 5kVA', category: 'Elektro' },
    { id: 2, name: 'Scheinwerfer LED', category: 'Beleuchtung' },
    { id: 3, name: 'Motorsäge', category: 'Werkzeug' },
    { id: 4, name: 'Hydraulikspreizer', category: 'Rettung' },
    { id: 5, name: 'Tauchpumpe', category: 'Wasserschaden' },
    { id: 6, name: 'Hebekissen', category: 'Bergung' },
    { id: 7, name: 'Bagger (klein)', category: 'Räumen' },
    { id: 8, name: 'Absperrband', category: 'Sicherheit' },
    { id: 9, name: 'Funkgerät', category: 'Kommunikation' },
    { id: 10, name: 'Erste-Hilfe-Koffer', category: 'Sanitär' }
  ];

  // Arrays für die Formulardaten
  selectedMaterials: Material[] = [];
  submittedRequests: MaterialRequest[] = [
    // Beispiel-Anfragen für die Anzeige
    {
      id: 1,
      requesterName: 'Max Mustermann',
      email: 'max@thw-musterstadt.de',
      department: 'Bergung',
      priority: 'Hoch',
      materials: [this.availableMaterials[0], this.availableMaterials[2]],
      status: 'Offen',
      date: new Date()
    }
  ];

  // Formular-Variablen - Hier sollen die Schüler später Daten binden
  requesterName: string = '';
  email: string = '';
  department: string = '';
  priority: string = '';

  // Schüler-Aufgabe 4: Diese Methode implementieren - FERTIG IMPLEMENTIERT
  toggleMaterial(material: Material): void {
    if (this.selectedMaterials.includes(material)) {
      // Material entfernen
      this.selectedMaterials = this.selectedMaterials.filter(m => m.id !== material.id);
    } else {
      // Material hinzufügen
      this.selectedMaterials.push(material);
    }
    console.log('Material ausgewählt:', material.name);
    console.log('Aktuell ausgewählte Materialien:', this.selectedMaterials.length);
  }

  // Schüler-Aufgabe 5: Diese Methode implementieren - FERTIG IMPLEMENTIERT
  submitRequest(): void {
    // Validierung
    if (!this.requesterName || !this.email || !this.department || this.selectedMaterials.length === 0) {
      alert('Bitte alle Felder ausfüllen und mindestens ein Material auswählen!');
      return;
    }

    // Neue Anfrage erstellen
    const newRequest: MaterialRequest = {
      id: this.submittedRequests.length + 1,
      requesterName: this.requesterName,
      email: this.email,
      department: this.department,
      priority: this.priority || 'Normal',
      materials: [...this.selectedMaterials], // Kopie erstellen
      status: 'Offen',
      date: new Date()
    };

    // Zur Liste hinzufügen
    this.submittedRequests.push(newRequest);

    // Formular zurücksetzen
    this.resetForm();

    alert(`Anfrage erfolgreich gesendet!\nAnfrage-ID: ${newRequest.id}\nMaterialien: ${newRequest.materials.length} Artikel`);

    console.log('Neue Anfrage erstellt:', newRequest);
  }

  // Hilfsmethode für die Schüler
  resetForm(): void {
    this.requesterName = '';
    this.email = '';
    this.department = '';
    this.priority = '';
    this.selectedMaterials = [];
  }
}
