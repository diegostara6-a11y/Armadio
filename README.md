# Atelier — Armadio digitale

Progetto starter realizzato con **Blazor Web App + C# + Razor + CSS** (.NET 8), in linea con il codice Razor che hai condiviso.

## Avvio
1. Installa il .NET 8 SDK.
2. Apri un terminale nella cartella del progetto.
3. Esegui:
   ```bash
   dotnet restore
   dotnet run
   ```
4. Apri nel browser l'indirizzo locale mostrato dal terminale.

## Funzionalità incluse
- Inserimento capi con foto da dispositivo o fotocamera.
- Tipologie: abbigliamento, scarpe, accessori, sciarpe, calze, cappotti e altro.
- Metadati: stile, vestibilità, genere, colori multipli, stagioni e note.
- Ricerca, filtro per categoria, eliminazione.
- Suggerimenti outfit automatici basati sui capi disponibili, stagione, stile, genere, palette colori e vestibilità.
- Salvataggio nel browser tramite localStorage.

## Nota sull'AI e sui dati
Il generatore incluso è una prima logica euristica locale: non usa un modello AI esterno. Per una vera analisi delle fotografie (riconoscimento automatico del capo, colori, pattern e suggerimenti semantici) serve collegare un backend C# a un servizio di visione/AI e proteggere la relativa API key lato server. I capi e le immagini di questa demo sono salvati nel localStorage del browser: non sono sincronizzati tra dispositivi e possono essere cancellati eliminando i dati del sito.

## Integrazione nel tuo progetto esistente
Puoi copiare `Components/Pages/Home.razor`, `wwwroot/css/app.css` e `wwwroot/js/wardrobe.js` nel tuo progetto Blazor. Se usi già un layout e `Program.cs`, conserva quelli esistenti e verifica che la pagina sia configurata per l'interattività (`InteractiveServer`).
