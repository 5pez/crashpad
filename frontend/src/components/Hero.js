const Hero = () => {
  return (
    <section class="hero">
      <img
        src="https://images.unsplash.com/photo-1615003162333-d3ff3ce1f0f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2160&q=80"
        alt="houses on the water"
        class="object-cover w-full h-96"
      />
      <div class="heading-container absolute flex justify-center items-center w-full">
        <h1 class="text-5xl text-white">Your dream vacation starts here</h1>
      </div>
    </section>
  );
};

export default Hero;
