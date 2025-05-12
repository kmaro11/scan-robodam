"use client";

import { useI18n } from "@/contexts/I18nContext";

export default function PrivacyPolicy() {
  const { t } = useI18n();
  return (
    <section className="pt-20 pb-[60px] lg:pb-[130px] lg:pt-[87px] max-w-[1256px] mx-auto px-5">
      <h1 className="text-[30px] lg:text-[40px] font-bold leading-[130%] mb-5 lg:mb-12">
        {t("privacy.title")}
      </h1>
      <ul>
        <ol className="text-[15px] lg:text-[20px] leading-[150%]">
          1. Įvadas <br /> „Robodam Scan“, pasiekiama adresu{" "}
          <a href="https://www.robodam.lt/scan" className="underline">
            https://robodam.lt/scan
          </a>
          , gerbia jūsų privatumą ir įsipareigoja saugoti jūsų asmens duomenis.
          Ši privatumo politika paaiškina, kokią informaciją renkame, kaip ją
          naudojame ir kokias teises turite.​
        </ol>
        <ol className="text-[15px] lg:text-[20px] leading-[150%]">
          2. Sutikimas <br /> Naudodamiesi mūsų svetaine, jūs sutinkate su šia
          privatumo politika ir jos sąlygomis.{" "}
          <a
            href="https://rekvizitai.vz.lt/imone/dykodas/?utm_source=chatgpt.com"
            className="underline"
          >
            {" "}
            ​Rekvizitai{" "}
          </a>
        </ol>
        <ol className="text-[15px] lg:text-[20px] leading-[150%]">
          3. Renkama informacija <br />
          Galime rinkti šią informaciją:​
          <br />
          <ul className="pl-5 list-disc">
            <li className="text-[15px] lg:text-[20px] leading-[150%]">
              Vardas, pavardė, įmonės pavadinimas
            </li>
            <li className="text-[15px] lg:text-[20px] leading-[150%]">
              El. pašto adresas, telefono numeris
            </li>
            <li className="text-[15px] lg:text-[20px] leading-[150%]">
              IP adresas, naršyklės tipas, prisijungimo data ir laikas
            </li>
            <li className="text-[15px] lg:text-[20px] leading-[150%]">
              Informacija, kurią pateikiate registruodamiesi ar susisiekdami su
              mumis​{" "}
              <a
                href="https://rekvizitai.vz.lt/imone/dykodas/?utm_source=chatgpt.com"
                className="underline"
              >
                {" "}
                ​Rekvizitai
              </a>
            </li>
          </ul>
        </ol>
        <ol className="text-[15px] lg:text-[20px] leading-[150%]">
          4. Informacijos naudojimas <br />
          Surinktą informaciją naudojame:​
          <ul className="pl-5 list-disc">
            <li className="text-[15px] lg:text-[20px] leading-[150%]">
              Paslaugų teikimui ir svetainės palaikymui
            </li>
            <li className="text-[15px] lg:text-[20px] leading-[150%]">
              Svetainės tobulinimui ir personalizavimui
            </li>
            <li className="text-[15px] lg:text-[20px] leading-[150%]">
              Bendravimui su jumis dėl paslaugų, atnaujinimų ar rinkodaros
              tikslų
            </li>
            <li className="text-[15px] lg:text-[20px] leading-[150%]">
              Sukčiavimo prevencijai​
            </li>
          </ul>
        </ol>
        <ol className="text-[15px] lg:text-[20px] leading-[150%]">
          5. Žurnalo failai <br />
          Kaip ir daugelis svetainių, naudojame žurnalo failus, kurie fiksuoja
          lankytojų veiklą svetainėje. Ši informacija apima IP adresus,
          naršyklės tipą, interneto paslaugų teikėją, datą ir laiką,
          nukreipimo/išėjimo puslapius ir paspaudimų skaičių. Ši informacija
          nėra susijusi su asmeniškai identifikuojama informacija.​
        </ol>
        <ol className="text-[15px] lg:text-[20px] leading-[150%]">
          6. Trečiųjų šalių privatumo politikos <br />
          Mūsų privatumo politika netaikoma kitų reklamuotojų ar svetainių
          veiklai. Rekomenduojame susipažinti su atitinkamų trečiųjų šalių
          privatumo politikomis dėl išsamesnės informacijos.​
        </ol>
        <ol className="text-[15px] lg:text-[20px] leading-[150%]">
          7. Slapukai (Cookies) <br />
          Naudojame slapukus, kad pagerintume jūsų patirtį mūsų svetainėje.
          Galite pasirinkti išjungti slapukus per savo naršyklės nustatymus.​
        </ol>
        <ol className="text-[15px] lg:text-[20px] leading-[150%]">
          8. Duomenų apsaugos teisės pagal BDAR <br />
          Pagal Bendrąjį duomenų apsaugos reglamentą (BDAR), turite šias teises:{" "}
          <a
            href="https://rekvizitai.vz.lt/imone/dykodas/?utm_source=chatgpt.com"
            className="underline"
          >
            {" "}
            ​Rekvizitai
          </a>
          <ul className="pl-5 list-disc">
            <li className="text-[15px] lg:text-[20px] leading-[150%]">
              Prieigos teisė – teisė gauti savo asmens duomenų kopijas
            </li>
            <li className="text-[15px] lg:text-[20px] leading-[150%]">
              Taisymo teisė – teisė reikalauti ištaisyti netikslius ar
              neišsamius duomenis
            </li>
            <li className="text-[15px] lg:text-[20px] leading-[150%]">
              Ištrynimo teisė – teisė reikalauti ištrinti jūsų asmens duomenis
              tam tikromis sąlygomis
            </li>
            <li className="text-[15px] lg:text-[20px] leading-[150%]">
              Apdorojimo apribojimo teisė – teisė reikalauti apriboti jūsų
              duomenų apdorojimą tam tikromis sąlygomis
            </li>
            <li className="text-[15px] lg:text-[20px] leading-[150%]">
              Prieštaravimo teisė – teisė prieštarauti jūsų duomenų apdorojimui
              tam tikromis sąlygomis
            </li>
            <li className="text-[15px] lg:text-[20px] leading-[150%]">
              Duomenų perkeliamumo teisė – teisė reikalauti perduoti jūsų
              duomenis kitai organizacijai arba jums tam tikromis sąlygomis​
            </li>
          </ul>
          Jei norite pasinaudoti šiomis teisėmis, susisiekite su mumis.
          Atsakysime per vieną mėnesį.​
        </ol>
        <ol className="text-[15px] lg:text-[20px] leading-[150%]">
          9. Vaikų informacija <br />
          Mūsų paslaugos nėra skirtos jaunesniems nei 13 metų vaikams.
          Sąmoningai nerenkame tokios informacijos. Jei pastebėsite, kad jūsų
          vaikas pateikė mums asmens duomenis, susisiekite su mumis, ir mes
          imsimės veiksmų šiai informacijai pašalinti.​
        </ol>
        <ol className="text-[15px] lg:text-[20px] leading-[150%]">
          10. Kontaktai <br />
          Jei turite klausimų ar norite pasinaudoti savo teisėmis, susisiekite
          su mumis:​
          <ul className="pl-5 list-disc">
            <li className="text-[15px] lg:text-[20px] leading-[150%]">
              El. paštas: admin@robodam.com
            </li>
            <li className="text-[15px] lg:text-[20px] leading-[150%]">
              Telefonas: +370 657 49 748
            </li>
            <li className="text-[15px] lg:text-[20px] leading-[150%]">
              Adresas: Vytauto pr. 27, LT-44352 Kaunas
            </li>
          </ul>
        </ol>
      </ul>
    </section>
  );
}
