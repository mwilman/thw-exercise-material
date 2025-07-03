# THW Materialanforderung - Programmier-Workshop

## Projektübersicht
Ihr entwickelt eine Webseite für das THW (Technisches Hilfswerk), mit der Helfer Materialien für Einsätze anfordern können.

## Aufgaben für die Schüler

### 📋 Aufgabe 1: Eingabefelder hinzufügen (10 Minuten)
**Datei:** `src/app/app.html`
**Wo:** Nach dem TODO-Kommentar "Schüler-Aufgabe 1"

Fügt folgende Eingabefelder hinzu:

```html
<div class="form-group">
  <label for="requesterName">Name des Anfragers:</label>
  <input type="text" id="requesterName" [(ngModel)]="requesterName" placeholder="Max Mustermann">
</div>

<div class="form-group">
  <label for="email">E-Mail:</label>
  <input type="email" id="email" [(ngModel)]="email" placeholder="max@thw-musterstadt.de">
</div>

<div class="form-group">
  <label for="department">Abteilung:</label>
  <select id="department" [(ngModel)]="department">
    <option value="">Bitte wählen...</option>
    <option value="Bergung">Bergung</option>
    <option value="Fachgruppe Räumen">Fachgruppe Räumen</option>
    <option value="Fachgruppe Wasserschaden">Fachgruppe Wasserschaden</option>
  </select>
</div>

<div class="form-group">
  <label for="priority">Dringlichkeit:</label>
  <select id="priority" [(ngModel)]="priority">
    <option value="">Bitte wählen...</option>
    <option value="Normal">Normal</option>
    <option value="Hoch">Hoch</option>
    <option value="Sehr hoch">Sehr hoch</option>
  </select>
</div>
```

### 🔘 Aufgabe 2: Submit-Button hinzufügen (5 Minuten)
**Datei:** `src/app/app.html`
**Wo:** Nach dem TODO-Kommentar "Schüler-Aufgabe 2"

```html
<button class="submit-btn" (click)="submitRequest()">
  Anfrage senden
</button>
```

### 📊 Aufgabe 3: Anfragen-Liste anzeigen (10 Minuten)
**Datei:** `src/app/app.html`
**Wo:** Nach dem TODO-Kommentar "Schüler-Aufgabe 3"

```html
<div class="request-item" *ngFor="let request of submittedRequests">
  <h3>{{request.requesterName}}</h3>
  <p><strong>Abteilung:</strong> {{request.department}}</p>
  <p><strong>Materialien:</strong> {{request.materials.length}} Artikel</p>
  <p><strong>Status:</strong> {{request.status}}</p>
  <p><strong>Dringlichkeit:</strong> {{request.priority}}</p>
</div>
```

### ⚡ Aufgabe 4: Material auswählen/abwählen (15 Minuten)
**Datei:** `src/app/app.ts`
**Wo:** In der Methode `toggleMaterial()`

```typescript
toggleMaterial(material: Material): void {
  if (this.selectedMaterials.includes(material)) {
    // Material entfernen
    this.selectedMaterials = this.selectedMaterials.filter(m => m.id !== material.id);
  } else {
    // Material hinzufügen
    this.selectedMaterials.push(material);
  }
}
```

### 📤 Aufgabe 5: Anfrage senden (20 Minuten)
**Datei:** `src/app/app.ts`
**Wo:** In der Methode `submitRequest()`

```typescript
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
    priority: this.priority,
    materials: [...this.selectedMaterials],
    status: 'Offen',
    date: new Date()
  };

  // Zur Liste hinzufügen
  this.submittedRequests.push(newRequest);
  
  // Formular zurücksetzen
  this.resetForm();
  
  alert('Anfrage erfolgreich gesendet!');
}
```

## 🎯 Bonus-Aufgaben (für schnelle Schüler)

### Bonus 1: Anfrage-Zähler
Zeigt die Anzahl der offenen Anfragen im Header an.

### Bonus 2: Materialien nach Kategorie filtern
Fügt Buttons hinzu, um nur bestimmte Material-Kategorien anzuzeigen.

### Bonus 3: Anfrage löschen
Fügt einen "Löschen"-Button zu jeder Anfrage hinzu.

## 🚀 Projekt starten
```bash
npm start
```
Die Webseite ist dann unter http://localhost:4200 erreichbar.

## 💡 Tipps
- Nutzt die Browser-Entwicklertools (F12) um Fehler zu finden
- Die Console zeigt hilfreiche Nachrichten an
- Fragt bei Problemen euren Workshop-Leiter!

## 📱 Erwartetes Ergebnis
Nach Abschluss aller Aufgaben habt ihr eine funktionsfähige THW-Materialanforderungs-Webseite, bei der:
- Helfer ihre Daten eingeben können
- Material aus einer Liste auswählen können
- Anfragen gesendet werden können
- Alle Anfragen in einer Übersicht angezeigt werden
