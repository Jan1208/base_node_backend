# Basis für ein NodeJs Backend
Dieses Projekt enthält eine Basis für ein Bakend mit Node JS.

## Enthaltene Features
- **Express**
- Routing
- Anbindung einer Postgres Datenbank mit Hilfe von **Sequelize**
- Schedule Jobs mit **node-cron**
- **Testing** mit supertest (routen) und jest
- logging mit **bunyan**

## Starten der Anwendung

### Für die Entwicklung
1. `npm install`. Dieser Befehl installiert alle Abhängigkeiten die benötigt werden.
2. in der .env Datei lassen sich die Verbindungsdaten der Datenbank einstellen. Ist noch keine Datenbank vorhanden, so ist unten weiter unten eine [Anleitung](#datenbank) hierfür zu finden.
3. `npm run dev` startet das Backend.
4. wird eine Codeanpassung vorgenommen, so startet das Backend dank **nodemon** von alleine neu

### Für die Produktion
*Comming Soon*

### Tests ausführen
1. `npm run test`

<a name="datenbank"></a>
### Starten der Datenbank (falls nötig)
Eine Datenbank kann mi Hilfe von docker gestartet werden. Docker muss installiert sein und lauffähig. Zum Starten der Datenbankmuss der Befehl `docker-compose up -d` ausgeführt werden.

