# Funktioner

_Jag vet att detta skulle vara i en tabell men tänkte att det blir lättare att skriva med funktionerna_

---

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
Det den faktiskt gör rätt är att den använder _undantag_ för felhantering, vilket är rätt sätt att hantera fel enligt Clean Code-principer. Den gör att fel kan fångas upp i programmet, och utvecklaren tvingas ta hand om fel på ett tydligt sätt. Namnen på parametrarna och funktionen är _beskrivande_, vilket förhoppningsvis gör det enkelt att förstå vad funktionen gör och vad parametrarna representerar. Jag har lagt in denna på min issue-board och kommer förbättra den.

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

Funktionen följer _några_ Clean Code-regler, som att ha ett bra beskrivande namn och göra en sak. Felhanteringen genomförs också korrekt. Dock bryter den mot andra principer. Den använder fler if-satser i rad vilket boken förespråkar att man ska undvika för att öka läsbarheten, funktionen använder också "magic strings" istället för en enum, och upprepar liknande kod vilket bryter mot DRY-principen. För att förbättra koden borde jag använda en enum även för aktivitetsnivåer och en switch-sats istället för if-satserna.

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

För det första, följer även denna funktionen principen att göra “en sak”. Funktionen har ett tydligt och avgränsat syfte – att konvertera användarens mått till det metriska systemet om användaren använder imperial system. Funktionen har också ett intention-revealing namn. Namnet `convertUserToMetric` beskriver exakt vad funktionen gör, vilket överensstämmer med regeln. Användningen av magic string 'metric' skulle kunna ersättas med en konstant eller enum för att följa principen "Avoid Mental Mapping"
En annan lösning som kanske skulle förbättra det är att abstrahera olika måttsystem i separata funktioner istället för att direkt kontrollera om användaren redan använder det metriska systemet.
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

Denna funktionen sparar magic numbers i variabler, precis som boken förespråkar. Den har också ett beskrivande namn och håller sig under 20 rader. Funktionen gör dock flera saker och har även sidoeffekter.
Det som jag skulle kunna förbättra är att flytta valideringsfunktionerna som anropas i metoden till en och samma, för att hålla själva beräkningen mer fokuserad. Jag skulle också kunna flytta konstanterna (de numeriska värdena) till klasskonstanter så att de är lättare att hitta och underhålla, och för att undvika upprepningar.

### Reflektion:

Det har varit en utmaning att hitta balansen mellan att skriva funktioner enligt best practice samtidigt som man vill hålla det funktionellt. Det mina funktioner har gemensamt att göra bra, är att namnen i regel är beskrivande, de allra flesta håller sig till maximalt två argument, alla utom en ligger under 20 rader och samtliga är förhoppningsvis lätta att förstå. Även felhantering följer bokens rekommendation, att använda sig av att kasta undantag. De gemensamma bristerna är att de ibland gör flera saker samtidigt trots att jag refaktoriserat funktionerna flera gånger. De upprepar sig fortfarande på vissa ställen och vissa innehåller små sidoeffekter.
Den största förändingen i mitt sätt att skriva funktioner efter att ha läst boken är att jag tänker mer på vad som faktiskt finns i den, inte bara start och mål. Jag analyserar innehållet på ett annat sätt nu.
Även om boken är ganska extrem så håller jag med om mycket, jag uppskattar ju det "rena" i välskriva och snygga funktioner, vilket blir den positiva konsekvensen om man följer bokens regler. Det som däremot kan göra det något mer rörigt är om man ska dela upp en funktion såpass mycket så att man ständigt måste navigera till andra funktioner för att se vad som händer, men om man då följer strikta regler med namngivning så behövs ju inte det. Då förstår man vad en funktion gör ändå, om man undviker sidoeffekter. Så summa summarum, för att uppnå riktigt bra resultat bör man följa alla regler, inte bara enstaka. Det är helheten som ger den önskade effekten av ren och lättförståelig kod
