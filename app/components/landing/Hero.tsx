export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/hospital-bg.webp')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-transparent" />


      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20">

        <div className="max-w-3xl text-white">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-5 py-2 backdrop-blur">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-400" />
            AI Powered Healthcare Platform
          </div>


          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Smart Hospital Management
            <span className="block text-blue-300">
              Powered By Artificial Intelligence
            </span>
          </h1>


          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            Manage patients, doctors, appointments and medical records
            with an intelligent healthcare platform built for modern hospitals.
          </p>


          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700">
              Get Started
            </button>

            <button className="rounded-xl border border-white/50 px-8 py-3 font-semibold transition hover:bg-white hover:text-blue-900">
              Explore Features
            </button>

          </div>


          {/* Stats */}
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-6">

            <div>
              <h3 className="text-3xl font-bold">
                10K+
              </h3>
              <p className="text-sm text-gray-300">
                Patients
              </p>
            </div>


            <div>
              <h3 className="text-3xl font-bold">
                500+
              </h3>
              <p className="text-sm text-gray-300">
                Doctors
              </p>
            </div>


            <div>
              <h3 className="text-3xl font-bold">
                24/7
              </h3>
              <p className="text-sm text-gray-300">
                Support
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}