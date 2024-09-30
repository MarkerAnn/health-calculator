# Funktioner

`validateHeight` (och `validateWeight` = likadan) (src/utils/validateUserInput.ts)
antal rader: 27.

```javascript
function validateHeight(
  height: number,
  unitSystem: 'metric' | 'imperial',
  user: User
) {
  if (height === undefined) {
    throw new Error(
      `Height is required. Check the height value in ${JSON.stringify(user)}`
    )
  }
  if (unitSystem === 'metric') {
    if (height <= 0 || height >= 2.5) {
      throw new RangeError(
        `Height using the metric system must be between 0-2.5 meters. Check the height value in ${JSON.stringify(
          user
        )}`
      )
    }
  } else {
    if (height < 0 || height > 8.2) {
      throw new RangeError(
        `Height using the imperial system must be between 0-8.2 feet. Check the height value in ${JSON.stringify(
          user
        )}`
      )
    }
  }
}
```

Detta är min absolut sämsta funktion, den bryter mot fler regler än den följer. - Den är alldeles för lång. Den bryter mot gör en sak-principen (Do One Thing) genom att göra flera saker, den validerar att höjden finns, kontrollerar om höjden ligger inom rätt intervall beroende på mätsystem, och kastar felmeddelanden. Funktionen har för många ansvar. Den bryter också mot _En abstraktionsnivå per funktion_ genom att blanda detaljerad logik med felhantering i samma funktion. Den borde bara hantera de olika `unitSystem` i olika funktioner. Den bryter då även mot _Undvik flaggargument_ eftersom `unitSystem` fungerar som en flagga som styr vilken logik som ska köras beroende på om det är "metric" eller "imperial". Detta leder till att funktionen blir onödigt komplex. Om jag har förstått boken rätt.
Det den faktiskt gör rätt är att den använder _undantag_ för felhantering, vilket är rätt sätt att hantera fel enligt Clean Code-principer. Den gör att fel kan fångas upp i programmet, och utvecklaren tvingas ta hand om fel på ett tydligt sätt. Namnen på parametrarna och funktionen är _beskrivande_, vilket förhoppningsvis gör det enkelt att förstå vad funktionen gör och vad parametrarna representerar.

`validateActivityLevel` (src/utils/validateUserInput.ts)
Antal rader: 20

```javascript
function validateActivityLevel(
  activityLevel?: 'sedentary' | 'lightly' | 'moderately' | 'very' | 'extremely',
  user?: User
) {
  if (activityLevel === undefined) {
    return
  }
  if (
    activityLevel != 'sedentary' &&
    activityLevel != 'lightly' &&
    activityLevel != 'moderately' &&
    activityLevel != 'very' &&
    activityLevel != 'extremely'
  ) {
    throw new TypeError(
      `Activity level must be sedentary, lightly, moderately, very or extremely. Check the activityLevel value in ${JSON.stringify(
        user
      )}`
    )
  }
```

Även denna funktionen följer regeln om att använda beskrivande namn ("Use Descriptive Names"). Namnet `validateActivityLevel` förklarar tydligt vad funktionen gör, och parameternamnet `activityLevel` är också meningsfullt.
Däremot bryter funktionen mot regeln om att undvika upprepning ("Don’t Repeat Yourself"). De flera jämförelserna av `activityLevel` mot strängarna `'sedentary'`, `'lightly'`, `'moderately'`, `'very'` och `'extremely'` innebär onödig repetition. Nu vid analys så ser jag att det kan förbättras relativt enkelt genom att använda en array för giltiga aktivitetsnivåer och sedan kontrollera om värdet finns i den, vilket skulle minska upprepningen och göra koden mer underhållbar. Funktionen följer regeln om enkelhet och att hålla den liten ("Small!"), vilket gör den lätt att läsa och förstå. Den utför endast validering och gör inget mer, vilket ligger i linje med principen "Do One Thing".

`private getActivityFactor` (src/calculators/TdeeCalculator)
Antal rader: 19

```javascript
  private getActivityFactor(activityLevel: string): number {
    if (activityLevel === 'sedentary') {
      return 1.2
    }
    if (activityLevel === 'lightly') {
      return 1.375
    }
    if (activityLevel === 'moderately') {
      return 1.55
    }
    if (activityLevel === 'very') {
      return 1.725
    }
    if (activityLevel === 'extremely') {
      return 1.9
    }
    throw new Error(
      'Activity level must be sedentary, lightly moderately, very or extremely'
    )
  }
```

Funktionen följer _några_ Clean Code-regler, som att ha ett bra beskrivande namn och göra en sak. Felhanteringen genomförs också korrekt. Dock bryter den mot andra principer. Den använder if-satser istället för polymorfism, tar en mindre säker sträng som input istället för en enum, och upprepar liknande kod vilket bryter mot DRY-principen. För att förbättra koden borde jag använda en enum även för aktivitetsnivåer och ett objekt för att mappa dessa till faktorer, det skulle eliminera if-satserna och göra koden mer skalbar.

`convertUserToMetric` (src/utils/unitConverter)
Antal rader: 16

```javascript
export function convertUserToMetric(user: User) {
  if (user.unitSystem === 'metric') {
    return user
  } else {
    return {
      ...user,
      height: feetToMeters(user.height),
      weight: lbsToKg(user.weight),
      waist:
        user.waist !== undefined ? inchesToCentimeters(user.waist) : undefined,
      hip: user.hip !== undefined ? inchesToCentimeters(user.hip) : undefined,
      neck:
        user.neck !== undefined ? inchesToCentimeters(user.neck) : undefined,
      unitSystem: 'metric',
    }
  }
}
```

För det första, följer även denna funktionen principen att göra “en sak”. Funktionen har ett tydligt och avgränsat syfte – att konvertera användarens mått till det metriska systemet om användaren använder imperial system. Funktionen har också ett intention-revealing namn. Namnet `convertUserToMetric` beskriver exakt vad funktionen gör, vilket överensstämmer med regeln.
Däremot bryter funktionen mot regeln att undvika flaggor. Genom att använda `user.unitSystem === 'metric'` skapar funktionen indirekt ett flaggargument. Flaggargument anses dåliga eftersom de kan introducera komplexitet och dolda beroenden, om jag förstått det rätt. En lösning som kanske skulle förbättra det är att abstrahera olika måttsystem i separata funktioner istället för att direkt kontrollera om användaren redan använder det metriska systemet.
Funktionen bryter också mot _DRY_-principen (Don’t Repeat Yourself) genom att ha upprepade logiska uttryck för att konvertera olika mått (t.ex. waist, hip, neck). Detta skulle jag kunna förbättra genom att skapa en hjälpfunktion som hanterar de upprepade konverteringarna på ett mer effektivt sätt. Exempelvis kan man använda en funktion som `convertMeasurement`.

`private calculateFemaleBodyFat` (src/calculators/BodyCompositionCalculator.ts)
Antal rader: 18

```javascript
  private calculateFemaleBodyFat(
    user: User,
    heightInCentimeter: number
  ): number {
    this.validateWaistHipAndNeck(user)
    const waistHipNeckDifference = user.waist + user.hip - user.neck
    this.validateDifference(
      waistHipNeckDifference,
      'Invalid values: the sum of waist + hip - neck must be greater than zero for females.'
    )
    const heightLogFactor = 97.684
    const waistHipNeckLogFactor = 163.205
    const heightFactor = heightLogFactor * Math.log10(heightInCentimeter)
    const waistHipNeckFactor =
      waistHipNeckLogFactor * Math.log10(waistHipNeckDifference)
    const constantFactor = 78.387

    return waistHipNeckFactor - heightFactor - constantFactor
  }
```

Denna funktionen sparar magic numbers i variabler, precis som boken förespråkar. Den har också ett beskrivande namn och håller sig under 20 rader. Funktionen har också en relativt sekventiell struktur som -jag hoppas, gör den enkel att följa och förstå. Det som jag skulle kunna förbättra är att flytta valideringsfunktionerna som anropas i metoden till en och samma, för att hålla själva beräkningen mer fokuserad. Jag skulle också kunna flytta konstanterna (de numeriska värdena) till klasskonstanter så att de är lättare att hitta och underhålla, och för att undvika upprepningar.

### Reflektion:

Jag känner trots allt att jag har utvecklats! Jag är mer noggrann med att kasta undantag snarare än felkoder, något jag inte gjorde i samma utsträckning tidigare.Vilket gör koden tydligare och enklare att felsöka. Jag har också börjat skriva kortare funktioner, det hjälper mig att hålla koden mer lättläst, välstrukturerad och lättare att underhålla.

När jag analyserade min kod insåg jag dock att jag fortfarande hade ett problem med att mina funktioner ibland gör mer än en sak, ibland två eller fler. Den bristen blev jag väldigt medveten om, även om jag refaktoriserat koden och la till en hel del privata metoder i klasserna, så finns det en bit kvar Att separera ansvaret i funktionerna har jag förstått, är en av de viktigaste principerna från _Clean Code_.

Något jag däremot är nöjd med är att mina funktioner har meningsfulla namn och att jag begränsar antalet argument till högst två. Det är en regel jag verkligen hållit mig till. Jag har också insett hur mycket enklare det blev att använda ett objekt för parametrarna istället för att skicka in flera separata argument som längd, vikt och ålder. Tidigare hade jag nog skickat in många argument och gjort koden mer komplicerad, men tack vare den här förändringen blev det mycket smidigare att hantera just min uppgift.

Jag är nöjd med mina framsteg, men jag vet att jag har mer att lära, särskilt när det gäller att hålla mina funktioner fokuserade på en enda uppgift. Det är något jag kommer fortsätta jobba på.
