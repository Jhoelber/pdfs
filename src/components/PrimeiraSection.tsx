export const PrimeiraSection = () => {
  return (
    <div className="text-zinc-700 font-poppins">
    
      <header className="w-full bg-red-600 text-white font-bold text-sm sm:text-base p-2 text-center">
        🔥 OFERTA LIMITADA | SOMENTE HOJE
      </header>

     
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Aprenda arte brincando com{" "}
          <span className="text-orange-500">60 OBRAS EM 3D </span>
          prontas para <span className="text-orange-500">montar e colorir!</span>
        </h1>

        <img
          className="mx-auto mt-6 w-full max-w-sm sm:max-w-md md:max-w-lg h-auto animate-pulse-scale"
          src="./imgteste.png"
          alt="Arte em 3D"
        />

        <h2 className="mt-6 text-lg sm:text-xl md:text-2xl font-semibold">
          Uma coleção com <span className="text-orange-500">60 MOLDES EM 3D</span> que une
          aprendizado artístico, desenvolvimento motor e diversão em um só lugar.
        </h2>

        <div className="mt-6 bg-zinc-200 w-full max-w-3xl mx-auto rounded-md p-4 sm:p-5 md:p-6 text-base sm:text-lg md:text-xl font-semibold">
          <p>
            Perfeito para <span className="text-orange-500">CRIANÇAS DE 03 A 12 ANOS</span> de idade
            (Material digital em PDF).
          </p>
        </div>
      </section>

     
      <section className="bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Mais que um simples molde 3D, é um convite à arte que{" "}
            <span className="text-orange-500">aproxima, educa e encanta</span>!
          </h1>

          <img
            className="mx-auto mt-10 w-full max-w-md sm:max-w-lg md:max-w-2xl h-auto rounded-md"
            src="./imgteste.png"
            alt="Arte em 3D"
          />

          <h2 className="mt-8 text-zinc-500 text-lg sm:text-xl md:text-2xl leading-relaxed">
            Vivemos em um tempo em que crianças são
            <span className="text-zinc-900 font-bold"> bombardeadas por telas, sons e estímulos rápidos.</span>
            {" "}Mas existe algo que ainda consegue pausar o tempo, gerar presença e criar conexão verdadeira:
            <span className="text-orange-500"> aprender junto com quem se ama — ou ensinar com intenção</span>.
          </h2>

          <div className=" animate-pulse-scale mt-8 bg-orange-500 p-6 sm:p-8 md:p-10 rounded-xl text-white text-base sm:text-lg md:text-xl max-w-4xl mx-auto">
            <h3 className="font-semibold">
              Foi com esse propósito que criamos o Arte em 3D: um material digital interativo com 60 moldes 3D
              inspirados em grandes obras da arte mundial e brasileira, prontos para colorir, recortar e montar —
              ideal para explorar, conversar e aprender brincando, seja em casa ou na escola.
            </h3>
          </div>

          <h2 className="mt-8 text-zinc-500 text-lg sm:text-xl md:text-2xl leading-relaxed">
            Cada página é um convite para mergulhar em{" "}
            <span className="text-orange-500">histórias visuais, descobrir artistas incríveis</span> e despertar a
            sensibilidade criativa de forma leve, educativa e profunda.
          </h2>

          <img
            className="mx-auto mt-6 w-40 sm:w-48 md:w-56 h-auto"
            src="./imgteste.png"
            alt="Arte em 3D"
          />

          <a  href="https://www.youtube.com/watch?v=co-4gkvjNvw" className=" animate-pulse-scale-button  text-white mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg sm:text-xl font-semibold bg-green-600 hover:bg-green-700 w-full sm:w-auto">
            Veja Mais
          </a>
        </div>
      </section>

    
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-500 text-center leading-snug">
          O material que transforma papel, tesoura e lápis de cor em uma{" "}
          <span className="text-zinc-900">jornada pelas maiores obras da história da arte!</span>
        </h1>
      </section>
    </div>
  );
};
