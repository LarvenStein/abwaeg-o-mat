# Abwäg-o-mat

**Eine Website, mit der man Pro- und Contra-Situationen einfach abwägen kann.**

Dieses Projekt hilft dir, strukturierte Entscheidungen zu treffen, indem du Argumente sammelst, gewichtest und das Ergebnis übersichtlich angezeigt bekommst.

## Features

- **Express.js & Pug:** Die App wurde komplett mit Express.js und Pug neu geschrieben.
- **Datenübergabe:** Argumente und Einstellungen werden per POST zwischen den Schritten übergeben.
- **Option zum Teilen:** Ergebnisse können (optional) in einer Datenbank gespeichert werden.
  - Speicherung ist mit Passwort verschlüsselbar und Ablaufdatum möglich.
- **Design:** Das Layout lehnt sich an [fraenk](https://fraenk.de/) an.

## Verwenden

### Die offizielle Website

Du kannst dieses Projekt gerne unter [abwaeg-o-mat.eike.in](https://abwaeg-o-mat.eike.in) verwenden!

## Lokal via docker

- Docker run

  ```bash
  docker run \
   -p 3000:3000 \
   -v db:/app/db \
   ghcr.io/larvenstein/abwaeg-o-mat:latest
  ```

- Docker compose

  ```yaml
  version: "3.8"

  services:
    abwaeg-o-mat:
      image: ghcr.io/larvenstein/abwaeg-o-mat:latest
      ports:
        - "3000:3000"
      volumes:
        - db:/app/db

  volumes:
    db:
  ```

### Lokal via Node

1. **Repository klonen:**

```bash
git clone https://github.com/LarvenStein/abwaeg-o-mat.git
cd abwaeg-o-mat
```

2. **Abhängigkeiten installieren:**

   ```bash
   npm install
   ```

3. **Starten: (dev)**

   ```bash
   npm run dev
   ```

   Die App läuft dann lokal auf `localhost:3000`.

4. **Produktiv bauen:**
   ```bash
   npm run build
   ```
   Die App wurde nun in `./dist` gebaut!

## Screenshots & Workflow

### 1. These eingeben

<img width="1920" height="947" alt="image" src="https://github.com/user-attachments/assets/97501a44-8195-4312-9e9c-9513dc9d2890" />

### 2. Pro- und Contra-Argumente eintragen

<img width="1920" height="947" alt="image" src="https://github.com/user-attachments/assets/7a582661-2deb-42ff-9172-633dee5a1637" />

_Tipp:_ Mit `[TAB]` ein neues Argument in der Spalte erstellen, mit `[ENTER]` zur nächsten Spalte wechseln.

### 3. Gewichtung der Argumente festlegen

<img width="1920" height="947" alt="image" src="https://github.com/user-attachments/assets/267cda93-6955-49d8-8f18-494c714fd4f0" />

### 4. Ergebnis ansehen

<img width="1920" height="947" alt="image" src="https://github.com/user-attachments/assets/926b0788-5f64-43f3-86bb-ef71d3815b20" />

#### Optional: Ergebnis speichern und teilen

<img width="1920" height="947" alt="image" src="https://github.com/user-attachments/assets/ac8bb0e0-90d4-4e8a-b709-8f1407ca1f57" />
<img width="1920" height="947" alt="image" src="https://github.com/user-attachments/assets/427002ad-185a-44a7-996e-9147fe2b3b68" />

## Alte version

Sollten dir die neuerungen, welche ich vorgenommen habe, nicht gefallen kannst du gerne noch den alten zustand des Projekts im [legacy-Branch](https://github.com/LarvenStein/abwaeg-o-mat/tree/legacy) und auf [pro-con.steinlarve.de](https://pro-con.steinlarve.de/) verwenden.

## Lizenz

Dieses Projekt steht unter der GPL-3.0-Lizenz.
