# Come Mettere Online pvpro.ch

---

## STEP 1: Crea Account GitHub

1. Vai su **https://github.com**
2. Clicca **"Sign up"**
3. Inserisci la tua email
4. Crea una password
5. Scegli un username (tipo: mariorossi)
6. Completa la verifica
7. Conferma la email che ti arriva

---

## STEP 2: Accetta il Repository

Dopo che hai creato l'account, ti arrivera' una email da GitHub per accettare il trasferimento del progetto.

1. Apri la email da GitHub
2. Clicca il link per accettare
3. Ora hai il progetto nel tuo account GitHub

---

## STEP 3: Importa in v0

1. Vai su **https://v0.dev**
2. Clicca **"Sign In"** in alto a destra
3. Clicca **"Continue with GitHub"**
4. Autorizza v0 ad accedere a GitHub
5. Clicca **"New Project"**
6. Clicca **"Import from GitHub"**
7. Seleziona **pvpro.ch** dalla lista
8. Aspetta 2-3 minuti

Il sito e' online su un indirizzo tipo: `pvpro-xyz.vercel.app`

---

## STEP 4: Collega il Dominio pvpro.ch

Dopo che ti confermo che il dominio e' stato trasferito:

1. Nel tuo progetto su v0, clicca **"Settings"** (icona ingranaggio)
2. Clicca **"Domains"**
3. Scrivi **pvpro.ch** e clicca **"Add"**
4. Segui le istruzioni per i DNS
5. Aspetta 10-30 minuti

Adesso pvpro.ch mostra il tuo sito.

---

## STEP 5: Configura il Form (per ricevere i contatti)

Senza questo step, quando qualcuno compila il form tu non ricevi niente.

### 5A: Prendi la chiave gratis

1. Vai su **https://web3forms.com**
2. Scrivi la tua email (dove vuoi ricevere i contatti)
3. Clicca **"Create Access Key"**
4. Apri la tua email
5. Copia la chiave che ti hanno mandato

### 5B: Metti la chiave nel sito

1. Torna sul tuo progetto in v0
2. Nella lista file a sinistra, clicca: **app** > **api** > **contact** > **route.ts**
3. Trova questa riga:
   ```
   const WEB3FORMS_KEY = 'LA_TUA_ACCESS_KEY_QUI'
   ```
4. Sostituisci `LA_TUA_ACCESS_KEY_QUI` con la tua chiave
5. Clicca **Save**

6. Poi clicca: **app** > **api** > **form** > **route.ts**
7. Stessa cosa: sostituisci `LA_TUA_ACCESS_KEY_QUI` con la tua chiave
8. Clicca **Save**

v0 ripubblica automaticamente.

---

## STEP 6: Testa che Funziona

1. Vai su **https://pvpro.ch**
2. Compila il form con i tuoi dati
3. Clicca invia
4. Controlla la tua email

Se arriva il messaggio, hai finito!

---

## Modificare il Sito con AI

Puoi cambiare qualsiasi cosa del sito usando l'AI di v0:

1. Apri il progetto su v0
2. Clicca su un componente o scrivi nella chat cosa vuoi cambiare
3. L'AI modifica il codice per te
4. Clicca **Save** e viene pubblicato

Esempi di cose che puoi chiedere:
- "Cambia il colore del bottone in rosso"
- "Aggiungi una nuova sezione con le recensioni"
- "Cambia il testo del titolo"
- "Metti una foto diversa"

---

## Costi

| Cosa | Quanto Costa |
|------|--------------|
| v0 (hosting) | GRATIS |
| GitHub | GRATIS |
| Web3Forms (email) | GRATIS |
| Dominio pvpro.ch | ~15 CHF/anno |

**Totale: 15 CHF all'anno per il dominio**

---

## Problemi?

- **Il sito non carica:** aspetta 30 minuti, i DNS sono lenti
- **Il form non funziona:** controlla che la chiave sia giusta nei 2 file
- **Non trovo il file:** clicca le freccette a sinistra per aprire le cartelle
- **v0 non vede il repo:** assicurati di aver accettato il trasferimento GitHub
