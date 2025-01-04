export default function YaMap() {
  return (
    <div className="rounded-xl overflow-hidden">
      <iframe
        src="https://yandex.by/map-widget/v1/?ll=37.722480%2C55.722706&z=9"
        width="100%"
        height="450"
        allowFullScreen
        style={{ position: "relative" }}
      ></iframe>
    </div>
  );
}
