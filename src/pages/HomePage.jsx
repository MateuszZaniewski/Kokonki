import { Link } from "react-router-dom";
import "../index.css";

export default function HomePage() {
  // Witajcie! Mam przyjemność przedstawić Wam case study dotyczący niezwykłego projektu, nad którym miałam okazję pracować – odświeżenia sklepu internetowego z włóczkami i innymi akcesoriami dziewiarskimi, który prowadzę.

  // Czasami najpiękniejsze projekty kryją się w najmniejszych detalach. Zaczynając od zmiany szaty graficznej strony, a kończąc na precyzyjnych przesunięciach elementów oraz dodaniu nowych funkcjonalności, moje wysiłki miały na celu stworzenie jeszcze bardziej przyjaznego i inspirującego środowiska dla miłośników rękodzieła.

  // Jako pasjonatka dziergania, zawsze miałam wizję sklepu, który nie tylko oferuje doskonałe produkty, ale również inspiruje do kreatywności i pozwala na odkrywanie nowych możliwości. Dlatego mój projekt skupiał się nie tylko na estetyce strony, lecz także na zoptymalizowaniu jej funkcjonalności, aby każdy klient mógł bez przeszkód znaleźć to, czego potrzebuje.

  // Przez pryzmat mojej pracy, każda zmiana na stronie produktowej czy w koszyku produktowym to krok w kierunku lepszego doświadczenia zakupowego. Optymalizacja nawigacji, uproszczenie procesu zamawiania, czy też wyeksponowanie najważniejszych informacji – to tylko niektóre z elementów, które złożyły się na sukces mojego projektu.

  // W trakcie pracy nad tym case study doświadczyłam nie tylko wyzwań, ale przede wszystkim radości tworzenia czegoś wyjątkowego. Każdy detal był starannie przemyślany, każda zmiana miała swoje uzasadnienie, a każdy sukces był powodem do dumy.

  // Zapraszam Was serdecznie do zgłębienia mojego case study i odkrycia, jak małe, przemyślane zmiany mogą odmienić całe doświadczenie użytkownika i przynieść wielką radość zarówno klientom, jak i mnie jako właścicielowi sklepu.

  // Dziękuję za zainteresowanie moim projektem i zachęcam do dalszego odkrywania!

  return (
    <div className="mx-auto text-[#222220] md:w-[450px] lg:w-[600px]">
      <h1 className="pt-10 text-center text-[25px] font-semibold text-[#821232]">
        Kokonki case study
      </h1>

      <div className="px-4 pt-5 text-center">
        <Link to="/product/Drops Nepal">
          <button className="bg rounded-2xl border border-[#2A4746] bg-[#2A4746] px-2 py-1 text-white">
            Przejdż do strony produktowej
          </button>
        </Link>
      </div>

      <div className="flex flex-col items-center gap-4 px-4 py-5 pt-5 text-[18px]">
        <p>
          Witajcie! Mam przyjemność przedstawić Wam case study dotyczący
          niezwykłego projektu, nad którym miałam okazję pracować – odświeżenia
          sklepu internetowego z włóczkami i innymi akcesoriami dziewiarskimi,
          który prowadzę.
        </p>
        <p>
          Czasami najpiękniejsze projekty kryją się w najmniejszych detalach.
          Zaczynając od zmiany szaty graficznej strony, a kończąc na
          precyzyjnych przesunięciach elementów oraz dodaniu nowych
          funkcjonalności, moje wysiłki miały na celu stworzenie jeszcze
          bardziej przyjaznego i inspirującego środowiska dla miłośników
          rękodzieła.
        </p>
        <p>
          Jako pasjonatka dziergania, zawsze miałam wizję sklepu, który nie
          tylko oferuje doskonałe produkty, ale również inspiruje do
          kreatywności i pozwala na odkrywanie nowych możliwości. Dlatego mój
          projekt skupiał się nie tylko na estetyce strony, lecz także na
          zoptymalizowaniu jej funkcjonalności, aby każdy klient mógł bez
          przeszkód znaleźć to, czego potrzebuje.
        </p>
        <p>
          Przez pryzmat mojej pracy, każda zmiana na stronie produktowej czy w
          koszyku produktowym to krok w kierunku lepszego doświadczenia
          zakupowego. Optymalizacja nawigacji, uproszczenie procesu zamawiania,
          czy też wyeksponowanie najważniejszych informacji – to tylko niektóre
          z elementów, które złożyły się na sukces mojego projektu.
        </p>
        <p>
          W trakcie pracy nad tym case study doświadczyłam nie tylko wyzwań, ale
          przede wszystkim radości tworzenia czegoś wyjątkowego. Każdy detal był
          starannie przemyślany, każda zmiana miała swoje uzasadnienie, a każdy
          sukces był powodem do dumy.
        </p>
        <p>
          Zapraszam Was serdecznie do zgłębienia mojego case study i odkrycia,
          jak małe, przemyślane zmiany mogą odmienić całe doświadczenie
          użytkownika i przynieść wielką radość zarówno klientom, jak i mnie
          jako właścicielowi sklepu.
        </p>
        <p>
          Dziękuję za zainteresowanie moim projektem i zachęcam do dalszego
          odkrywania!
        </p>
        <div className="px-4 py-5 text-center">
          <Link to="/product/Drops Nepal">
            <button className="bg rounded-2xl border border-[#2A4746] bg-[#2A4746] px-2 py-1 text-white">
              Przejdż do strony produktowej
            </button>
          </Link>
        </div>

        <p className=" self-start text-[22px]">
          Paulina Zaniewska - UI/UX Designer
        </p>
        <p className=" self-start text-[14px]">
          Wykonanie Mateusz Zaniewski - Web Developer
        </p>
      </div>
    </div>
  );
}
