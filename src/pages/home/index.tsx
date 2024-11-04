import Header from "../../components/header";
import Container from "../../components/header/container";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <section className="bg-white max-w-3xl p-4 rounded-lg mx-auto drop-shadow flex justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Digite o nome do carro..."
            className="w-full p-1 border-b outline-none transition duration-300  focus:border-b-red-500"
          />
          <button className="px-4 h-9 rounded-lg bg-red-500 text-white font-medium text-lg duration-300 hover:bg-red-400">
            Buscar
          </button>
        </section>

        <h1 className="font-bold text-center mt-6 mb-4 text-2xl">Carros novos e usados em todo o Brasil</h1>

        <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <section className="w-full bg-white rounded-lg cursor-pointer transition-all shadow-personalized hover:scale-personalized">
            <img
              src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202409/20240927/byd-king-1.5-dmi-phev-gs-automatico-wmimagem15160080678.jpg?s=fill&w=552&h=414&q=60"
              alt="Carro"
              className="w-full max-h-72 rounded-t-lg transition-all"
            />
            <p className="font-bold mt-1 mb-2 px-2">BMW 320i</p>
            <div className="flex flex-col px-2">
              <span className="text-zinc-700 mb-6">Ano 2020 | 23.000 KM</span>
              <strong className="font-medium text-xl text-black">R$199.000,00</strong>
            </div>
            <div className="w-full h-px bg-slate-200 my-2"></div>
            <div className="px-2 pb-2">
              <span>São Paulo - SP</span>
            </div>
          </section>
        </main>
      </Container>
    </>
  );
}
