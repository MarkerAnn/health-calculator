# Namngivning

`HealthCalculatorFactory`
Regler: **Intention-revealing names** och **Class names**
Analys: Namnet avslöjar tydligt att det är en fabrik för att skapa health-calculator. Användaren kan förhoppningsvis förstå snabbt vad som händer. `Factory` är även ett substantiv vilket följer regeln om att klassnamn bör vara substantiv eller substantiv-fraser.
Vad jag däremot skulle kunna gör annorlunda nu vid närmare analys är att eventuellt döpa det till `Creator` snarare än `Factory`, `Creator` skulle också förklara vad sker men det skulle inte vara lika knutet till ett designmönster, som `Factory` blir. Det hade också passat bättre till metoden nedan, jag hade varit mer konsekvent i min namngivning, vilket också är bokens rekommendation.

`createHealthCalculator`
Regler: **Intention-revealing names**, **Method names** och **One word per concept**
Analys: Precis som ovan så hoppas jag att användaren förstår vad min metod gör, `create` -den skapar något. Vilket också leder in på metodnamn, i boken står det att metodnamn helst ska innehålla verb eller verbfraser. Namnet börjar med `create` - ett verb, vilket följer rekommendationen att använda detta, eftersom metoder utför handlingar. Detta gör syftet lätt att förstå. Jag använder också enbart _ett_ verb i metodnamnet, vilket även följer rekommendationen om "One word per concept"

`user`
Regel: **Use problem domain names**  
Analys: Variabeln `user` följer regeln att använda namn från problemområdet. "User" är ett etablerat begrepp inom domänlogiken för hälsokalkylatorer, där användarens data är _central_ för alla beräkningar. Det är lätt för andra utvecklare att förstå att `user` refererar till en person vars hälsodata behandlas. Genom att enbart döpa det till `user` och inte `userData` så följer jag också regeln at inte använda "noise words", eftersom "data" inte skulle bidra med någon extra information.

`getBmi`
Regler: **intention-revealing names**, **use solution domain names**
Analys: Precis som med `createHealthCalculator` så börjar även denna med ett verb, -get. Den hämtar Bmi till användaren. Det som jag har varit kluven över här är att jag inte använder namn som `calculateBmi`, den metoden anropas av `getBmi`. Jag valde att göra så för att göra det så enkelt för användaren som möjligt. Att dölja sådant som den inte behöver veta. Boken tar upp att man inte ska använda sig av förkortningar. jag gjorde dock en avvägning för att hålla namnet kortare. Bmi är ett väletablerat begrepp inom medicin och hälsa, så för utvecklare och personer som är bekanta med konceptet är detta namn begripligt. Det följer principen att använda termer från problem- eller lösningsdomänen där det är relevant. Så även om det tekniskt sett bryter mot riktlinjen att inte använda förkortningar (avoid mental mapping) eller att ha helt uttalbara namn (use pronounceable names), vägde jag in fördelen med att hålla metoden kort och koncis för ett välkänt begrepp.

`getTdeeHarrisBenedict`
Regler: **Intention-revealing names**, **Method names**, **Use solution domain names**, **Use searchable names**, och **Avoid disinformation**
Analys: Namnet följer regeln om intention-avslöjande namn, likt `createHealthCalculator` och `getBmi`, genom att tydligt visa att metoden hämtar Total Daily Energy Expenditure (TDEE) enligt Harris-Benedict-ekvationen. Precis som `getBmi` börjar det med ett verb, "get", vilket signalerar vad metoden gör. TDEE, i jämförelse med BMI, är dock mindre känd. Medan "Bmi" är allmänt accepterat, kräver "TDEE" mer förkunskap, vilket kan göra det svårare för utvecklare att förstå. Att byta ut "Tdee" till "TotalDailyEnergyExpenditure", skulle göra metoden mer sökbar och öka understandability _Men_ det skulle också minska Readability, avsevärt.
Eftersom "Harris-Benedict" refererar till en specifik formel, finns ingen risk för vilseledande namn här, vilket följer regeln om att undvika disinformation. Namnet är tydligt kopplat till den specifika beräkningen och undviker förvirring med generiska namn.

### Reflektion:

Jag har aldrig tänkt så mycket på hur viktig namngivningen faktiskt är. Jag förstod att den skulle vara läsbar och ge kontext, men inte i den grad som boken lyfter fram. Jag trodde att jag var bra på att namnge metoder, men nu inser jag att jag brutit flera regler, särskilt när det gäller "noise words" som data och manager, vilka jag använt ofta utan att tänka.

Jag har inte heller varit konsekvent i min namngivning. Regeln "One word per concept" blev tydlig för mig först efter att ha läst om den. Det verkar självklart, men det var något jag tidigare missade.

Namngivning är svårt, men att tänka på det som att skriva en kommentar har hjälpt mig. Beskrivande namn har minskat behovet av inline-kommentarer. Men utmaningen är att hitta balansen mellan informativa och korta namn.

En annan regel, "Don't be cute", hade jag inte reflekterat över. Humor i koden kan verka lockande, men det riskerar att skapa förvirring, både för andra utvecklare och för mig själv när jag återvänder till koden senare. Jag kommer att tänka mer på att hålla namnen professionella och raka framöver.

Precis som jag övervägde att byta `getBmi` till `calculateBmi`, kan man här överväga att använda `calculateTdeeHarrisBenedict` istället för `get`. Det skulle följa regeln om **One word per concept**, som föreslår att använda samma term för samma typ av handling i hela kodbasen. Detta är också något jag gör med alla mina metoder i det publika interfacet. Då jag enbart har `getters`som användaren interagerar med.
