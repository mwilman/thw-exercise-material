# THW Materialanforderung - Lösungen für Workshop-Leiter

## Vollständige Lösungen der Aufgaben

### Aufgabe 1: Eingabefelder (app.html)
```html
<!-- Nach dem TODO-Kommentar "Schüler-Aufgabe 1" einfügen: -->
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

### Aufgabe 2: Submit-Button (app.html)
```html
<!-- Nach dem TODO-Kommentar "Schüler-Aufgabe 2" einfügen: -->
<button class="submit-btn" (click)="submitRequest()">
  Anfrage senden
</button>
```

### Aufgabe 3: Anfragen-Liste (app.html)
```html
<!-- Nach dem TODO-Kommentar "Schüler-Aufgabe 3" einfügen: -->
<div class="request-item" *ngFor="let request of submittedRequests">
  <h3>{{request.requesterName}}</h3>
  <p><strong>Abteilung:</strong> {{request.department}}</p>
  <p><strong>Materialien:</strong> {{request.materials.length}} Artikel</p>
  <p><strong>Status:</strong> {{request.status}}</p>
  <p><strong>Dringlichkeit:</strong> {{request.priority}}</p>
</div>
```

### Aufgabe 4: Material Toggle (app.ts)
```typescript
toggleMaterial(material: Material): void {
  if (this.selectedMaterials.includes(material)) {
    this.selectedMaterials = this.selectedMaterials.filter(m => m.id !== material.id);
  } else {
    this.selectedMaterials.push(material);
  }
}
```

### Aufgabe 5: Anfrage senden (app.ts)
```typescript
submitRequest(): void {
  if (!this.requesterName || !this.email || !this.department || this.selectedMaterials.length === 0) {
    alert('Bitte alle Felder ausfüllen und mindestens ein Material auswählen!');
    return;
  }

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

  this.submittedRequests.push(newRequest);
  this.resetForm();
  alert('Anfrage erfolgreich gesendet!');
}
```

## Workshop-Tipps

### Zeitplanung (90 Minuten gesamt)
- **5 min:** Begrüßung und Projektvorstellung
- **10 min:** Angular Grundlagen erklären
- **10 min:** Aufgabe 1 (Eingabefelder)
- **5 min:** Aufgabe 2 (Button)
- **10 min:** Aufgabe 3 (Liste anzeigen)
- **15 min:** Aufgabe 4 (Material Toggle)
- **20 min:** Aufgabe 5 (Anfrage senden)
- **10 min:** Testen und Bonus-Aufgaben
- **5 min:** Abschluss und Fragen

### Häufige Probleme und Lösungen

1. **Fehler: "ngModel is not recognized"**
   - Lösung: FormsModule ist bereits importiert

2. **Änderungen werden nicht angezeigt**
   - Lösung: Browser-Refresh (F5)

3. **Checkbox funktioniert nicht**
   - Lösung: `includes()` richtig verwenden

4. **Formular wird nicht zurückgesetzt**
   - Lösung: `resetForm()` am Ende von `submitRequest()` aufrufen

### Bonus-Aufgaben (Lösungen)

#### Bonus 1: Anfrage-Zähler im Header
```html
<!-- In app.html im Header hinzufügen: -->
<p>Offene Anfragen: {{submittedRequests.length}}</p>
```

#### Bonus 2: Material-Filter
```typescript
// In app.ts hinzufügen:
selectedCategory: string = '';

get filteredMaterials(): Material[] {
  if (!this.selectedCategory) return this.availableMaterials;
  return this.availableMaterials.filter(m => m.category === this.selectedCategory);
}
```

#### Bonus 3: Anfrage löschen
```typescript
// In app.ts hinzufügen:
deleteRequest(requestId: number): void {
  this.submittedRequests = this.submittedRequests.filter(r => r.id !== requestId);
}
```

```html
<!-- In der Anfragen-Liste hinzufügen: -->
<button (click)="deleteRequest(request.id)" class="delete-btn">Löschen</button>
```

## Pädagogische Ziele

### Was lernen die Schüler?
- **HTML:** Formulare, Listen, Buttons
- **TypeScript:** Arrays, Objekte, Methoden, if/else
- **Angular:** Data Binding, Event Handling, *ngFor
- **Logisches Denken:** Validierung, Zustandsmanagement

### THW-Bezug
- Realitätsnahe Anwendung
- Vertraute Materialien und Abläufe
- Praktischer Nutzen erkennbar
