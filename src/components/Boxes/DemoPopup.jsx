export default function DemoPopup() {
  console.log("Popup show");
  return (
    <div className="fixed bottom-0 z-50 flex w-[100vw] justify-center py-8">
      <span className=" rounded-xl border border-[#2A4746] bg-[#2A4746] px-2 py-1 text-[16px] text-white">
        Niedostępne w wersji pokazowej
      </span>
    </div>
  );
}
