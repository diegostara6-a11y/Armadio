# Atelier — Armadio digitale

Versione **Blazor WebAssembly** (.NET 8) pronta per GitHub Pages. Questa variante viene eseguita nel browser e non richiede un server ASP.NET Core sempre attivo.

## Pubblicazione su GitHub Pages

1. Carica nella repository tutti i file e le cartelle di questo progetto, mantenendo `.github/workflows/deploy.yml`.
2. Assicurati che il branch principale si chiami `main` (se ha un nome diverso, modifica il branch nel file `deploy.yml`).
3. Apri la repository su GitHub → **Settings** → **Pages**.
4. In **Build and deployment**, scegli **GitHub Actions** come Source.
5. Apri la scheda **Actions** e attendi il completamento del workflow **Deploy Blazor WebAssembly to GitHub Pages**.
6. Al termine, l'indirizzo del sito apparirà in **Settings → Pages** e nel riepilogo del workflow.

A ogni successivo `git push` sul branch `main`, GitHub ricostruirà e ripubblicherà automaticamente il sito.

## Avvio in locale

Installa il .NET 8 SDK e lancia:

```bash
dotnet restore
dotnet run
```

Per una verifica simile alla pubblicazione:

```bash
dotnet publish -c Release
```

## Funzionalità

- Inserimento capi con foto da dispositivo o fotocamera.
- Categorie di abbigliamento, scarpe e accessori.
- Metadati: stile, vestibilità, genere, colori multipli, stagioni e note.
- Ricerca, filtro per categoria ed eliminazione.
- Suggerimenti outfit automatici basati sui capi, sulla stagione, sullo stile, sul genere, sui colori e sulla vestibilità.
- Salvataggio nel browser tramite `localStorage`.

## Limiti da conoscere

- I dati restano nel browser e nel dispositivo in cui vengono inseriti: non sono sincronizzati tra utenti o dispositivi.
- Le foto sono memorizzate nel `localStorage`; evita collezioni molto grandi.
- Il generatore outfit usa regole automatiche locali: non è un servizio di intelligenza artificiale.
- GitHub Pages ospita la versione statica del sito; non esegue codice C# lato server né API backend.
